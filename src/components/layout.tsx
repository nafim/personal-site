import React, {ReactNode} from "react";
import { useStaticQuery, graphql } from "gatsby";

// import fonts
import "fontsource-dosis/700.css";
import "fontsource-raleway/700.css";

import NavBar from "./NavBar/NavBar"
import "./layout.css"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    [theme.breakpoints.up("xs")]: {
      marginLeft: 'min(25%, 350px)'
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0
    },
  },
}));

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const classes = useStyles();
  const data: any = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const siteTitle: string = data.site.siteMetadata?.title || `Title`;

  return (
    <div>
      <NavBar siteTitle={siteTitle} />
      <div className={classes.content}>
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()} Nafim Rahman
        </footer>
      </div>
    </div>
  )
}

export default Layout
