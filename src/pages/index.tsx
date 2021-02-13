import React from "react";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/core";

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
    fontFamily: 'Dosis',
    fontSize: '3rem',
    fontWeight: 500,
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
    maxWidth: '30rem',
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
          <div className={classes.title}>
            Nafim Rahman
          </div>
          <div className={classes.detailsTextContainer}>
            <p>
              Hi! I am a Computer Science major at MIT. I am also a programmer, designer, and engineer.
              When I'm not working, I enjoy playing soccer, reading short stories, traveling to
              new places, and tinkering on personal projects.
            </p>
          </div>
        </div>
      </HomeBackgroundSection>
    </Layout>
  );
}

export default IndexPage
