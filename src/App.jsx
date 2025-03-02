import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import WeatherPage from './pages/WeatherPage';
import About from './pages/About';
import MapPage from './pages/MapPage';
import './styles/App.css';

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="weather" element={<WeatherPage />} />
            <Route path="map" element={<MapPage />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
