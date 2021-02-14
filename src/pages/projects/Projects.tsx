import React from "react";
import { makeStyles } from "@material-ui/core";

import Layout from "../../components/Layout/Layout";
import SEO from "../../components/seo";

const useStyles = makeStyles((theme) => ({
  centered: {
    display: 'flex',
    justifyContent: 'center',
  },
  resumeContainer: {
    width: '100%',
    maxWidth: '63rem',
    boxShadow: 'rgb(218, 218, 218) 1px 1px 10px 1px'
  },
}));

const Resume = () => {
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="Resume" />
      <div className={classes.centered}>
        <div className={classes.resumeContainer}>
        </div>
      </div>
    </Layout>
  );
}

export default Resume;