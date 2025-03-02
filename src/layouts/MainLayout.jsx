import { Link, Outlet } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/system";

const StyledLink = styled(Link)({
  color: "#4b6cb7",
  textDecoration: "none",
  marginLeft: "20px",
  "&:hover": { color: "#FFFFFF" },
});

export default function MainLayout() {
  return (
    <>
      <AppBar position="static" sx={{ 
        background: "linear-gradient(to right, #4b6cb7, #182848)",
        boxShadow: "0 3px 5px 2px rgba(24, 40, 72, 0.3)"
      }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: "#F0F4F8" }}>
            Weather App
          </Typography>
          <Button component={StyledLink} to="/">Home</Button>
          <Button component={StyledLink} to="/weather">Weather</Button>
          <Button component={StyledLink} to="/map">Map</Button>         
          <Button component={StyledLink} to="/about">About</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ py: 4 }}>
        <Outlet />
      </Container>
    </>
  );
}
