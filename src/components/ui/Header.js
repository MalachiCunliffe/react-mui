import React from "react";
import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  makeStyles,
  Tab,
  Tabs,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logo: {
    height: "8em",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "0px"
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover" : {
      opacity: 1
    }
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const tabSelectHandler = (e, value) => {
    setSelectedTab(value);
  };

  const menuOpenHandler = (e) => {
    setAnchorEl(e.currentTarget);
    setMenuOpen(true);
  };

  const menuCloseHandler = (e) => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && selectedTab !== 0) {
      setSelectedTab(0);
    } else if (window.location.pathname === "/services" && selectedTab !== 1) {
      setSelectedTab(1);
    } else if (
      window.location.pathname === "/revolution" &&
      selectedTab !== 2
    ) {
      setSelectedTab(2);
    } else if (window.location.pathname === "/about" && selectedTab !== 3) {
      setSelectedTab(3);
    } else if (window.location.pathname === "/contact" && selectedTab !== 4) {
      setSelectedTab(4);
    } else if (window.location.pathname === "/estimate" && selectedTab !== 5) {
      setSelectedTab(5);
    }
  }, [selectedTab]);

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => selectedTab(0)}
              disableRipple
            >
              <img className={classes.logo} src={logo} alt="company logo" />
            </Button>
            <Tabs
              value={selectedTab}
              onChange={tabSelectHandler}
              className={classes.tabContainer}
              indicatorColor="primary"
            >
              <Tab
                className={classes.tab}
                component={Link}
                to="/"
                label="Home"
              />
              <Tab
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? "true" : undefined}
                onMouseOver={(event) => menuOpenHandler(event)}
                className={classes.tab}
                component={Link}
                to="/services"
                label="Services"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/revolution"
                label="The Revolution"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/about"
                label="About Us"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/contact"
                label="Contact Us"
              />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Free estimate
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={menuOpen}
              onClose={menuCloseHandler}
              MenuListProps={{ onMouseLeave: menuCloseHandler }}
              classes={{paper: classes.menu}}
              elevation={0}
            >
              <MenuItem
                onClick={() => {menuCloseHandler(); setSelectedTab(1);}}
                component={Link}
                to="/services"
                classes={{root: classes.menuItem}}
              >
                Services
              </MenuItem>
              <MenuItem
                onClick={() => {menuCloseHandler(); setSelectedTab(1);}}
                component={Link}
                to="/customsoftware"
                classes={{root: classes.menuItem}}
              >
                Custom Software Development
              </MenuItem>
              <MenuItem
                onClick={() => {menuCloseHandler(); setSelectedTab(1);}}
                component={Link}
                to="/mobileapps"
                classes={{root: classes.menuItem}}
              >
                Mobile App Development
              </MenuItem>
              <MenuItem
                onClick={() => {menuCloseHandler(); setSelectedTab(1);}}
                component={Link}
                to="/wesites"
                classes={{root: classes.menuItem}}
              >
                Website Development
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
