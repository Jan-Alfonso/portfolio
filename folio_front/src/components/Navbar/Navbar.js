import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoSm from "../../assets/janAlfonsoLogo_sm.svg";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FaArrowRight } from "react-icons/fa6";


const pages = ["Home", "Portfolio", "Contact"];

function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {pages.map((page) => (
          <ListItem
          key={page}
          onClick={toggleDrawer(anchor, false)}>
          <Link
          to={`/${page.replace(" ", "-").toLowerCase()}`}
          style={{textDecoration: 'none', color: '#202020'}}
          disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <FaArrowRight/>
              </ListItemIcon>
              <ListItemText primary={page} />
            </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
 
  return (
    <AppBar id="AppBar" position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <MenuIcon />
              {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                <IconButton onClick={toggleDrawer(anchor, true)}></IconButton>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
              ))}
            
          </Box>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "flex" },
              flexGrow: 1,
              textAlign: "center",
              justifyContent: {xs: "flex-end", md:"flex-start"},
              marginRight: "",
              fontFamily: "Poppins",
              fontWeight: 300,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={logoSm} width={200} alt="logo"></img>
          </Typography>
          <Box sx={{ flexGrow: 1, justifyContent:"flex-end", display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={`/${page.replace(" ", "-").toLowerCase()}`}
                onClick={toggleDrawer}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default TemporaryDrawer;
