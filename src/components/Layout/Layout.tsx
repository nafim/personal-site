import React, {ReactNode} from "react";

// import fonts
import "fontsource-dosis/700.css";
import "fontsource-dosis/500.css";
import "fontsource-raleway/700.css";
import "fontsource-raleway/500.css";
import "fontsource-poppins";
import "fontsource-poppins/600.css";

//import icons
import "../../icons/style.css";

import NavBar from "../NavBar/NavBar"
import "./layout.css"
import { makeStyles } from "@material-ui/core/styles";

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
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <main className={classes.content}>
        {children}
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()} by Nafim Rahman
        </footer>
      </main>
    </div>
  )
}

export default Layout
