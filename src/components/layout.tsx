import React, {ReactNode} from "react";
import { useStaticQuery, graphql } from "gatsby";

// import fonts
import "fontsource-dosis";
import "fontsource-raleway";

import NavBar from "./NavBar/NavBar"
import "./layout.css"

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
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
    <>
      <NavBar siteTitle={siteTitle} />
      <div>
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()} Nafim Rahman
        </footer>
      </div>
    </>
  )
}

export default Layout
