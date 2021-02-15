import React, {ReactNode} from "react";
import { makeStyles } from "@material-ui/core/styles";

// import fonts
import "fontsource-dosis/700.css";
import "fontsource-dosis/500.css";
import "fontsource-raleway/700.css";
import "fontsource-raleway/500.css";
import "fontsource-poppins";
import "fontsource-poppins/600.css";

//import icons
import "../icons/style.css";

import NavBar from "../components/NavBar";
import "./layout.css";
import PageTransition from '../components/PageTransition';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  content: {
    [theme.breakpoints.up("xs")]: {
      marginLeft: 'min(25%, 350px)',
      height: '100%'
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      height: '100%'
    },
  },
}));

interface LayoutProps {
  children: ReactNode;
  location: any;
}

const Layout = ({ children, location }: LayoutProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <main className={classes.content}>
        <PageTransition location = {location}>
          {children}
        </PageTransition>
      </main>
    </div>
  )
}

export default Layout