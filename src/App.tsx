import {ThemeProvider} from 'styled-components';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { AppRoutes } from './routes';
import {GlobalStyles} from './styles/globals';
import {theme} from './styles/theme';


function App(){
  return(
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <AppRoutes/>
    </ThemeProvider>
  )
}

export default App;