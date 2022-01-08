import React from "react";
import {
  Drawer,
  makeStyles,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Avatar,
} from "@material-ui/core";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@material-ui/icons";

import ViewCompactIcon from "@material-ui/icons/ViewCompact";

import { format } from "date-fns";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

const drawerWidthLarge = 180;
const drawerWidthSmall = 75;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  page: {
    width: "100%",
    padding: theme.spacing(2),
  },
  appbar: {
    background: "#F8FAFD",
    width: `calc(100% - ${drawerWidthSmall}px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidthLarge}px)`,
    },
  },
  drawer: {
    width: drawerWidthSmall,
    background: theme.palette.action,
    [theme.breakpoints.up("sm")]: {
      width: drawerWidthLarge,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    
    background: "#F8FAFD",
    width: drawerWidthSmall,
    [theme.breakpoints.up("sm")]: {
      width: drawerWidthLarge,
    },
  },
  active: {
    background: "#fff",
  },
  appTitle: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      padding: "12px",
      display: "block",
    },
  },
  appIcon: {
    paddingLeft: theme.spacing(2),
    paddingTop: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  date: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  name: {
    marginLeft: "auto",
  },
  avatar: {
    marginLeft: theme.spacing(2),
  },
  listText: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    {
      id: 1,
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      id: 2,
      text: "Create Note",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create",
    },
  ];
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar>
          <Typography className={classes.date} color='primary' >
            Today is the {format(new Date(), "do MMM Y")}
          </Typography>
          <Typography className={classes.name} color='textSecondary' >Kamal-H</Typography>
          <Avatar src="./avatar.jpg" className={classes.avatar} />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" component="h2" className={classes.appTitle}>
            Note Plus
          </Typography>
          <ViewCompactIcon className={classes.appIcon} />
        </div>
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.id}
              button
              onClick={() => history.push(item.path)}
              className={
                item.path === location.pathname ? classes.active : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} className={classes.listText} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
