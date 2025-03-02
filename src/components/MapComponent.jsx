import { Paper, Typography, styled } from "@mui/material";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Importa las imágenes directamente
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Configuración de estilos con MUI v5
const MapContainerStyled = styled(MapContainer)(({ theme }) => ({
  height: "400px",
  width: "100%",
  marginTop: theme.spacing(2),
}));

// Configuración de iconos
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MapComponent = () => {
  const position = [41.3851, 2.1734];

  return (
    <Paper sx={{ p: 2, textAlign: 'center' }}>
      <Typography variant="h6" gutterBottom>
        Barcelona Central HQ
      </Typography>
      <MapContainerStyled
        center={position}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Oficinas centrales <br /> Barcelona
          </Popup>
        </Marker>
      </MapContainerStyled>
    </Paper>
  );
};

export default MapComponent;
