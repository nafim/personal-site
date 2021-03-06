import React from "react";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/core";

import SEO from "../components/seo";
import HomeBackgroundSection from '../components/HomeBackground';
import Joke from "../components/Joke";

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
  centeredContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  detailsTextContainer: {
    width: '70%',
    maxWidth: '40rem',
    textAlign: 'center'
  },
  projectLink: {
    margin: theme.spacing(1, 0, 2),
    color: '#00000091',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.2s ease',
    '&:hover': {
      color: theme.palette.secondary.main
    },
  },
  jokeContainer: {
    margin: theme.spacing(6, 0, 0)
  }
}));

const IndexPage = () => {
  const classes = useStyles();

  return (
    <div style={{ height: '100%' }}>
      <SEO title="Home" />
      <HomeBackgroundSection className={classes.root}>
        <div className={classes.backgroundOverlay} />
        <div className={classes.centeredContainer}>
          <h1 className={classes.title}>
            Nafim Rahman
          </h1>
          <p className={classes.detailsTextContainer}>
            Hi! I am a Computer Science major at MIT. I am also a programmer, designer, and engineer.
            In my free time I enjoy playing soccer, reading short stories, traveling to
            new places, and tinkering on personal projects.
          </p>
          <Link
            to="/projects"
            className={classes.projectLink}
          >
            <h5>
              Check out my projects
            </h5>
          </Link>
          <div className={classes.jokeContainer}>
            <Joke />
          </div>
        </div>
      </HomeBackgroundSection>
    </div>
  );
}

export default IndexPage
