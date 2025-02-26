import { Card, CardContent, Typography, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styles from '../styles/CurrentWeather.module.css';

export default function CurrentWeather({ data, isFavorite, onToggleFavorite }) {
  return (
    <Card className={styles.card}>
      <CardContent>
        <div className={styles.header}>
          <Typography variant="h4">
            {data.name}, {data.sys.country}
          </Typography>
          <IconButton onClick={onToggleFavorite} color="error">
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </div>

        <div className={styles.weatherMain}>
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt={data.weather[0].description}
          />
          <Typography variant="h2">{Math.round(data.main.temp)}°C</Typography>
        </div>

        <Typography variant="h6" className={styles.description}>
          {data.weather[0].main} ({data.weather[0].description})
        </Typography>

        <div className={styles.details}>
          <div>
            <Typography>Feels like: {Math.round(data.main.feels_like)}°C</Typography>
            <Typography>Humidity: {data.main.humidity}%</Typography>
          </div>
          <div>
            <Typography>Wind: {data.wind.speed} m/s</Typography>
            <Typography>Pressure: {data.main.pressure} hPa</Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
