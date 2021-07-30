import { Container, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import ContentComponent from './components/content';
import HeaderComponent from './components/header';
import { darkTheme, lightTheme } from './customtheme';
import { useSelector } from 'react-redux';

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
  const isThemeDark = useSelector((state) => state.isThemeDark);

  return (
    <ThemeProvider theme={isThemeDark ? darkTheme : lightTheme}>
      <CssBaseline />
      <HeaderComponent />
      <Container className={classes.container}>
        <ContentComponent />
      </Container>
    </ThemeProvider>
  );
}

export default App;
