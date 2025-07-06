import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from './styles/themes';
import ThemeSwitcher from './components/ThemeSwitcher';
import Dashboard from './pages/Dashboard';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <ThemeSwitcher darkMode={darkMode} onToggle={() => setDarkMode((m) => !m)} />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;