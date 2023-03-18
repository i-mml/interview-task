import React, { useEffect } from "react";
import useDropdown from "./hooks/useDropdown";
import useDropdownStyles from "./hooks/useDropdownStyles";

type Props = {
  placeholder?: string;
};

const Dropdown = ({ placeholder = "select..." }: Props) => {
  // hooks
  const {
    options,
    toggleMenu,
    isMenuOpened,
    selectedOption,
    setIsMenuOpened,
    loadMoreOptions,
    setSelectedOption,
  } = useDropdown();

  const classes = useDropdownStyles();

  // functions

  const handleInputClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    toggleMenu();
  };

  // effects

  // effect to load data on enter
  useEffect(() => {
    const handler = function (e: any) {
      if (e.key === "Enter") {
        loadMoreOptions();
      }
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  // effect to close menu on click away
  useEffect(() => {
    const handler = function (e: any) {
      setIsMenuOpened(false);
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  return (
    <div className={classes.wrapper}>
      <div className={classes.inputContainer} onClick={handleInputClick}>
        {selectedOption ? selectedOption.label : placeholder}
      </div>

      {isMenuOpened && options?.length ? (
        <div className={classes.menuContainer}>
          {options.map((option) => (
            <div
              role={"button"}
              key={option.value}
              className={`${classes.menuItem} ${
                selectedOption?.value === option.value && classes.activeMenuItem
              }`}
              onClick={() => setSelectedOption(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
