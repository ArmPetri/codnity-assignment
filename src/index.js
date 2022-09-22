import { ThemeProvider, createTheme, responsiveFontSizes, CssBaseline } from '@mui/material';
import ReactDOM from 'react-dom/client';
import App from './App';
import {store} from './redux/store'
import { Provider } from 'react-redux'

let theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      light: "#BEBBBB"
    },
    secondary: {
      main: "#29335C"
    },
    success: {
      main: "#337357"
    },
    error: {
      main: "#DB2B39"
    }
  },
})

theme = responsiveFontSizes(theme);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <CssBaseline>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
      </CssBaseline>
    </Provider>,
);


