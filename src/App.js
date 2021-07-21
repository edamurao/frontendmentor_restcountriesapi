import { Container, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import ContentComponent from './components/content';
import HeaderComponent from './components/header';
import darkTheme from './darktheme';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingLeft: 0,
    paddingRight: 0,
    maxWidth: 1440,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 10)
    }
  }
}))

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <HeaderComponent />
      <Container className={classes.container}>        
        <ContentComponent />
      </Container>
    </ThemeProvider>    
  );
}

export default App;
