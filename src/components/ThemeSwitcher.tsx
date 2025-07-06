import React from 'react';
import { Switch, FormControlLabel } from '@mui/material';

type Props = {
  darkMode: boolean;
  onToggle: () => void;
};

const ThemeSwitcher: React.FC<Props> = ({ darkMode, onToggle }) => (
  <FormControlLabel
    control={<Switch checked={darkMode} onChange={onToggle} />}
    label="Dark Mode"
  />
);

export default ThemeSwitcher;