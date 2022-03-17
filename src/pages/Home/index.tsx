import { Icon, makeStyles } from "@material-ui/core";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Apps from "@mui/icons-material/Apps";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVert from "@mui/icons-material/MoreVert";
import VideoCall from "@mui/icons-material/VideoCall";
import { AppBar, Toolbar, Button, IconButton } from "@mui/material";
import {
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

import preto from "../../assets/images/preto.png";
import { Container } from "./styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  AppBar: {
    backgroundColor: "#FFF!important",
    boxShadow: "none",
  },
  root: {
    height: "100vh",
  },
  grow: {
    flexGrow: 1,
  },
  icons: {
    color: "red",
    paddingRight: theme.spacing(5),
  },
  menuIcon: {
    paddingRigth: theme.spacing(5),
    paddingLeft: theme.spacing(6),
  },
  logo: {
    height: "25px",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    borderRight: "none !important",
  },
  listItemText: {
    fontSize: "14px !important",
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>
        <AppBar
          position="fixed"
          className={classes.AppBar}
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              className={classes.menuIcon}
            >
              <MenuIcon />
            </IconButton>
            <img src={preto} alt="logo" className={classes.logo} />
            <div className={classes.grow} />
            <IconButton className={classes.icons}>
              <VideoCall />
            </IconButton>
            <IconButton className={classes.icons}>
              <Apps />
            </IconButton>
            <IconButton>
              <MoreVert />
            </IconButton>
            <Button variant="outlined" startIcon={<AccountCircleIcon />}>
              INICIAR SESSÃO
            </Button>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={"Inicio"}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={"Em Alta"}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={"Inscrições"}
                />
              </ListItem>
            </List>
            <Divider />
          </Box>
        </Drawer>
      </div>
    </Container>
  );
};

export default Home;
