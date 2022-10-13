import React from "react";
import { AppBar, Toolbar, useScrollTrigger } from "@material-ui/core";

export default function Header(props){

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
      

    return(
        <ElevationScroll>
            <AppBar>
                <Toolbar>
                    Malachi Development
                </Toolbar>
            </AppBar>
        </ElevationScroll>

    );

};