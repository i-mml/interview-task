import React, { useEffect } from 'react';

import useDropdown from './hooks/useDropdown';
import useDropdownStyles from './hooks/useDropdownStyles';

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
      <div
        className={`${classes.inputContainer} ${
          isMenuOpened && classes?.activeInput
        }`}
        onClick={handleInputClick}
      >
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
              <span>{option.label}</span>

              {selectedOption?.value === option.value && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="#838fc3"
                  viewBox="0 0 16 16"
                  className={classes.svgIcon}
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              )}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
