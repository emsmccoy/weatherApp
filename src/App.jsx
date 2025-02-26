import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import { ThemeProvider, createTheme} from '@mui/material/styles';
import Layout from './layout/Layout';
import Home from './pages/Home.jsx';
import Weather from './pages/Weather.jsx';
import Map from './pages/Map.jsx';
import About from './pages/About.jsx';

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="weather" element={<Weather />} />
            <Route path="map" element={<Map />} />
            <Route path="about" element={<About />} />    
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

