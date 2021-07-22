import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import { setThemeInLocalStorage } from '../constants/localStorage';
import useTheme from '../hooks/themeContext';
import { sun, moon } from '../svgs';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;

const ThemeToggleButton = ({ updateTheme }) => {
  const isLightTheme = useTheme();

  const themeToggle = () => {
    if (isLightTheme) {
      updateTheme('dark');
      setThemeInLocalStorage('dark');
    } else {
      updateTheme('light');
      setThemeInLocalStorage('light');
    }
  };

  const themeIcon = (
    <img
      id='theme-icon'
      alt='light-dark-mode-icon'
      src={isLightTheme ? moon : sun}
    />
  );

  const themeName = isLightTheme ? 'Dark Mode' : 'Light Mode';

  return (
    <Button className='element' onClick={themeToggle} id='theme-toggle-button'>
      {themeIcon}
      {themeName}
    </Button>
  );
};

export default ThemeToggleButton;
