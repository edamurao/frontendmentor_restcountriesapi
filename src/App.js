import { Container, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import ContentComponent from './components/content';
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
        <ContentComponent />
      </Container>
    </ThemeProvider>    
  );
}

export default App;
