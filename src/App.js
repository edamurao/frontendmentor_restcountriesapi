import { Container, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import HeaderComponent from './components/header';
import darkTheme from './darktheme';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingLeft: 0,
    paddingRight: 0,
  }
}))

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container className={classes.container}>
        <HeaderComponent />
      </Container>
    </ThemeProvider>    
  );
}

export default App;
