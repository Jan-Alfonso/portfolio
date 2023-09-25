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
import logo from "../../assets/janAlfonsoLogo.svg";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FaArrowRight } from "react-icons/fa6";
import Spinner from "../Spinner/Spinner";
import { useState, useEffect } from "react";


const pages = ["About Me", "Portfolio", "Contact"];

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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
 
  return (

    <>{loading ? ( <Spinner/> ) : (
    <AppBar id="AppBar" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <div className="logo">
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <img src={logo} width={300} alt="logo" />
              </Typography>
            </div>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <MenuIcon />
              {pages.map((anchor) => (
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
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              textAlign: "center",
              marginRight:"50px",
              fontFamily: "Poppins",
              fontWeight: 300,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={logo} width={250} alt="logo"></img>
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
    )}
    </>
  );
}
export default TemporaryDrawer;
