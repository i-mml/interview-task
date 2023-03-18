import React, { useState } from "react";
import generateRandomData from "./dummy-data";

export type OptionType = {
  value?: string;
  label?: string;
};

const initialData = generateRandomData(5);

const useDropdown = () => {
  const [options, setOptions] = useState(initialData);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  const loadMoreOptions = () => {
    setOptions((state) => [...state, ...generateRandomData(5)]);
  };

  const toggleMenu = () => {
    setIsMenuOpened((state) => !state);
  };

  return {
    options,
    setOptions,
    toggleMenu,
    isMenuOpened,
    selectedOption,
    setIsMenuOpened,
    loadMoreOptions,
    setSelectedOption,
  };
};

export default useDropdown;
