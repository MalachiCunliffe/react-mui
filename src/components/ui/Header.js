import React from "react";
import { AppBar, Toolbar, useScrollTrigger, makeStyles } from "@material-ui/core";

import logo from "../../assets/logo.svg"

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em"
  },
  logo: {
    height: "7em"
  }

}))

export default function Header(props){

  const classes = useStyles();

  return(
    <>
    <ElevationScroll>
        <AppBar>
            <Toolbar disableGutters>
              <img className={classes.logo} src={logo} alt="company logo"/>
            </Toolbar>
        </AppBar>
    </ElevationScroll>
    <div className={classes.toolbarMargin} />
    </>

  );

};