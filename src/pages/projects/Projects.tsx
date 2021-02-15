import React from "react";
import { Card, makeStyles } from "@material-ui/core";

import SEO from "../../components/seo";
import StreetSkipperImage from './components/StreetSkipperImage';
import CardButton from "./components/CardButton";
import UmbraImage from "./components/UmbraImage";

const useStyles = makeStyles((theme) => ({
  centered: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    width: '75%',
    maxWidth: '650px',
    margin: theme.spacing(3, 0, 1)
  },
  projectTitle: {
    textAlign: 'center',
    margin: theme.spacing(3, 0, 1)
  },
  projectDescription: {
    textAlign: 'left',
    margin: theme.spacing(2, 2, 1)
  },
  cardButton: {
    margin: theme.spacing(0, 0, 1)
  }
}));

const Resume = () => {
  const classes = useStyles();

  return (
    <div>
      <SEO title="Projects" />
      <div className={classes.centered}>
        <Card className={classes.card}>
          <a href="https://streetskipper.com" target="_blank" rel="noopener noreferrer">
            <StreetSkipperImage />
          </a>
          <h3 className={classes.projectTitle}>
            Street Skipper
          </h3>
          <p className={classes.projectDescription}>
            A fun multiplayer navigational game where players are separated into random
            locations in a city of their choice. They must communicate with each other and
            use their knowledge of the streets in order to meet up.
          </p>
          <div className={classes.centered}>
            <a href="https://streetskipper.com" target="_blank" rel="noopener noreferrer">
              <CardButton
                className={classes.cardButton}
                color="secondary"
                onClick={() => { }}
              >
                Take a look
            </CardButton>
            </a>
          </div>
        </Card>
        <Card className={classes.card}>
          <a href="https://umbra.chat" target="_blank" rel="noopener noreferrer">
            <UmbraImage />
          </a>
          <h3 className={classes.projectTitle}>
            Umbra
          </h3>
          <p className={classes.projectDescription}>
            A Zoom-based chat application that facilitates communication between participants
            in a meeting. Messages are sent anonymously, which encourages students in Zoom
            classes and lectures to engage with their classmates and teachers.
          </p>
          <div className={classes.centered}>
            <a href="https://umbra.chat" target="_blank" rel="noopener noreferrer">
              <CardButton
                className={classes.cardButton}
                color="secondary"
                onClick={() => { }}
              >
                Take a look
            </CardButton>
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Resume;