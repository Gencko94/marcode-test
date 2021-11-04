import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";

import { useEffect, useMemo } from "react";
import { getDesignTokens } from "../../styles/globalTheme";

const Layout: React.FC = ({ children }) => {
  const theme = useMemo(() => createTheme(getDesignTokens("light")), []);

  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      {children}
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
