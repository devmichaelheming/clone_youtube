import { ThemeProvider, createTheme, makeStyles } from "@material-ui/core";
import React from "react";

import Home from "./pages/Home";

const useStyles = makeStyles({
  root: {},
});

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#F44336",
      },
      secondary: {
        main: "#3F51B5",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
