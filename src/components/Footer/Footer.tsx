import React from "react";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    backgroundColor: theme.palette.primary.dark,
  },
}));

const Resume = () => {
  const classes = useStyles();

  return (
    <footer
    className={classes.footer}
    >
      © {new Date().getFullYear()} by Nafim Rahman
    </footer>
  );
}

export default Resume;