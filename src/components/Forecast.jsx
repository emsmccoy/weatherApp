import { Card, CardContent, Typography, Grid } from '@mui/material';
import styles from '../styles/Forecast.module.css';

export default function Forecast({ data }) {
  return (
    <div className={styles.forecastContainer}>
      <Typography variant="h5" gutterBottom>5-Day Forecast</Typography>
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
            <Card className={styles.forecastCard}>
              <CardContent>
                <Typography variant="subtitle1">
                  {new Date(item.dt_txt).toLocaleDateString('en-US', {
                    weekday: 'short'
                  })}
                </Typography>
                <img
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                  alt={item.weather[0].description}
                />
                <Typography variant="body2">
                  {Math.round(item.main.temp)}°C
                </Typography>
                <Typography variant="caption">
                  {item.weather[0].main}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
