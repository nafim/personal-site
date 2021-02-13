import React from "react";
import { Link } from "gatsby";
import { Card, makeStyles } from "@material-ui/core";

import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import HomeBackgroundSection from '../components/HomeBackground';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  backgroundOverlay: {
    opacity: 0.8,
    background: 'white',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 0,
    content: '""',
  },
  title: {
    margin: theme.spacing(20, 0, 3),
    textAlign: 'center'
  },
  mainTextContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 1
  },
  detailsTextContainer: {
    width: '70%',
    maxWidth: '40rem',
    textAlign: 'center'
  }
}));

const IndexPage = () => {
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="Home" />
      <HomeBackgroundSection className={classes.root}>
        <div className={classes.backgroundOverlay} />
        <div className={classes.mainTextContainer}>
          <h1 className={classes.title}>
            Nafim Rahman
          </h1>
          <p className={classes.detailsTextContainer}>
            Hi! I am a Computer Science major at MIT. I am also a programmer, designer, and engineer.
            When I'm not working, I enjoy playing soccer, reading short stories, traveling to
            new places, and tinkering on personal projects.
          </p>
        </div>
      </HomeBackgroundSection>
    </Layout>
  );
}

export default IndexPage
