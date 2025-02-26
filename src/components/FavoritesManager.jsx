import { List, ListItem, ListItemText, IconButton, Paper, Typography, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '../styles/FavoritesManager.module.css';

export default function FavoritesManager({ favorites, onRemove, onSelect }) {
  return (
    <Paper className={styles.favoritesPanel}>
      <Typography variant="h6" gutterBottom>Favorite Cities</Typography>
      <List dense className={styles.favoritesList}>
        {favorites.map((city) => (
          <ListItem 
            key={city.id}
            className={styles.favoriteItem}
            secondaryAction={
              <IconButton 
                edge="end" 
                onClick={() => onRemove(city.id)}
                title="Remove favorite"
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            }
          >
            <Box onClick={() => onSelect(city.name)} className={styles.weatherSummary}>
              <div className={styles.cityHeader}>
                <Typography variant="subtitle1">
                  {city.name}, {city.sys.country}
                </Typography>
                <img
                  src={`https://openweathermap.org/img/wn/${city.weather[0].icon}.png`}
                  alt={city.weather[0].description}
                />
              </div>
              
              <div className={styles.weatherDetails}>
                <Typography variant="body2">
                  {Math.round(city.main.temp)}°C
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {city.weather[0].main}
                </Typography>
              </div>
            </Box>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
