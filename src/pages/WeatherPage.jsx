import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SearchBar from '../components/SearchBar.jsx';
import CurrentWeather from '../components/CurrentWeather.jsx';
import Forecast from '../components/Forecast.jsx';
import FavoritesManager from '../components/FavoritesManager.jsx';
import styles from '../styles/WeatherPage.module.css';

export default function WeatherPage() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem('weatherFavorites')) || [];
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fetchWeatherData = async (searchCity) => {
    if (!searchCity) return;
    setLoading(true);
    setError('');
    
    try {
      const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
      
      const [currentRes, forecastRes] = await Promise.all([
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}&units=metric`),
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=${apiKey}&units=metric`)
      ]);

      setWeather(currentRes.data);
      setForecast(forecastRes.data.list.filter((_, i) => i % 8 === 0));
      navigate('/weather');
    } catch (err) {
      setError('Failed to fetch weather data. Please check the city name.');
      setWeather(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  };

  const handleAddFavorite = async () => {
    if (!weather) return;
    
    try {
      const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${weather.name}&appid=${apiKey}&units=metric`
      );
  
      const newFavorite = response.data;
      
      if (!favorites.some(f => f.id === newFavorite.id)) {
        const updatedFavorites = [...favorites, newFavorite];
        setFavorites(updatedFavorites);
        localStorage.setItem('weatherFavorites', JSON.stringify(updatedFavorites));
      }
    } catch (err) {
      console.error('Error saving favorite:', err);
    }
  };

  const handleRemoveFavorite = (cityId) => {
    const updatedFavorites = favorites.filter(f => f.id !== cityId);
    setFavorites(updatedFavorites);
    localStorage.setItem('weatherFavorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className={styles.container}>
      <SearchBar 
        city={city}
        setCity={setCity}
        onSearch={() => fetchWeatherData(city)}
        loading={loading}
      />
      
      {error && <p className={styles.error}>{error}</p>}

      {weather && (
        <CurrentWeather 
          data={weather}
          isFavorite={favorites.some(f => f.id === weather.id)}
          onToggleFavorite={handleAddFavorite}
        />
      )}

      {forecast.length > 0 && <Forecast data={forecast} />}

      <FavoritesManager
        favorites={favorites}
        onRemove={handleRemoveFavorite}
        onSelect={fetchWeatherData}
      />
    </div>
  );
}
