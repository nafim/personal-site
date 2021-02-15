import { makeStyles } from "@material-ui/core/styles"
import React from "react"

import SEO from "../components/seo"

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  messageContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

const NotFoundPage = () => {
  const classes = useStyles();

  return (
    <div>
      <SEO title="404: Not found" />
      <div className={classes.root}>
        <div className={classes.messageContainer}>
          <h1>404: Not Found</h1>
          <p>Sorry, this page does not exist.</p>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage
