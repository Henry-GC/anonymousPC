import React, { useContext } from 'react';
import { Switch, Flex} from '@chakra-ui/react';
import { ThemeContext } from './Context/ThemeContext';

const ThemeToggleSwitch = () => {
  const { toggleTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <Flex align="center">
      <span style={{ marginRight: '8px' }}>MODO</span>
      <Switch
        colorScheme="teal"
        onChange={handleToggle}
      />
    </Flex>
  );
};

export default ThemeToggleSwitch;
