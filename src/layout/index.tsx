import { Container, CssBaseline } from '@mui/material';
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';

import { useEffect, useMemo } from 'react';
import { getDesignTokens } from '../../styles/globalTheme';
import Navbar from '../components/Navbar';

const Layout: React.FC = ({ children }) => {
  const theme = useMemo(() => createTheme(getDesignTokens('light')), []);

  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline />
      <Navbar />
      <Container sx={{ maxWidth: { xs: 'xs', sm: 'sm', md: 'md' }, py: 3 }}>
        {children}
      </Container>
      <style global jsx>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
    </ThemeProvider>
  );
};

export default Layout;
