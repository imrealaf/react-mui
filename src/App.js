import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Switch, FormControlLabel, ListSubheader } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";

import { ColorModeContext } from "theme";
import {
  AppBar,
  ResponsiveDrawer,
  ResponsiveLayout,
  Dropdown,
  Button,
  ListItemLink,
} from "components";
import { usePopover, useToggle } from "hooks";
import Routes, { routesList } from "router";

import menu from "data/menu.json";

function App() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const drawer = useToggle();
  const dropdown = usePopover();
  const mode = theme.palette.mode;
  const isDark = mode === "dark";

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { sm: "none" }, mr: 2 }}
            onClick={drawer.toggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component={Link}
            variant="h6"
            to="/"
            sx={{ flexGrow: 1, color: "white", textDecoration: "none" }}
          >
            Material UI Theme
          </Typography>
          <Button component={Link} to="/components" color="inherit">
            Components
          </Button>
          <Dropdown
            button={
              <IconButton onClick={dropdown.show} color="inherit">
                <MoreIcon />
              </IconButton>
            }
            {...dropdown}
          >
            <Box py={2}>
              <FormControlLabel
                sx={{ pl: 2 }}
                control={
                  <Switch
                    checked={isDark}
                    onChange={colorMode.toggleColorMode}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label="Dark mode"
              />
            </Box>
          </Dropdown>
        </AppBar>

        <ResponsiveLayout
          drawer={
            <ResponsiveDrawer open={drawer.open} onClose={drawer.hide}>
              <List
                sx={{ mt: 1 }}
                subheader={
                  <ListSubheader
                    component="div"
                    sx={{ backgroundColor: "inherit", color: "primary.main" }}
                  >
                    COMPONENTS
                  </ListSubheader>
                }
              >
                {menu.components.map((item, i) => (
                  <ListItemLink key={i} to={item.url} primary={item.title} />
                ))}
              </List>
            </ResponsiveDrawer>
          }
        >
          <Routes routes={routesList} />
        </ResponsiveLayout>
      </Box>
    </>
  );
}

export default App;
