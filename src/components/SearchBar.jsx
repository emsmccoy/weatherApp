import { TextField, Button, Box } from '@mui/material';
import styles from '../styles/SearchBar.module.css';

export default function SearchBar({ city, setCity, onSearch, loading }) {
  return (
    <Box className={styles.searchContainer}>
      <TextField
        label="Enter city name"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        disabled={loading}
        fullWidth
      />
      <Button
        variant="contained"
        onClick={onSearch}
        disabled={!city || loading}
        className={styles.searchButton}
      >
        {loading ? 'Searching...' : 'Get Weather'}
      </Button>
    </Box>
  );
}
