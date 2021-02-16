import React, { useEffect, useState } from "react";
import { Collapse, makeStyles } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ToggleButton from "./ToggleButton";
import { JokeAccordion, JokeAccordionDetails, JokeAccordionSummary } from './JokeAccordion';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  jokeSetup: {
    fontSize: '1.1rem',
    margin: theme.spacing(0, 0, 0)
  },
  jokePunchline: {
    fontSize: '0.9rem',
    textAlign: 'center',
    color: theme.palette.secondary.dark,
    margin: theme.spacing(0, 0, 0)
  }
}));

export const getJoke = () => {
  return (
      fetch('https://official-joke-api.appspot.com/random_joke')
      .then(res => res.json())
  );
}

const Joke = () => {
  const classes = useStyles();
  const [showJoke, setshowJoke] = useState(false);
  const [showPunchline, setShowPunchline] = useState(false);
  const [showJokeToggle, setShowJokeToggle] = useState(false);
  const [jokeSetup, setJokeSetup] = useState('');
  const [jokePunchline, setJokePunchline] = useState('');

  const handleJokeToggleClick = () => {
    setShowJokeToggle(false);
    setshowJoke(true);
  }

  const handleAccordionChange = () => (_event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setShowPunchline(isExpanded);
  }

  useEffect(() => {
    getJoke()
    .then(data => {
      if (data.setup) {
        setJokeSetup(data.setup);
        setJokePunchline(data.punchline);
        setShowJokeToggle(true);
      }
    })
    .catch(() => {})
  }, [])

  return (
    <div className={classes.root}>
      <Collapse in={showJokeToggle} timeout={500} unmountOnExit>
        <ToggleButton
          // className={classes.cardButton}
          color="secondary"
          onClick={() => { handleJokeToggleClick() }}
        >
          Here's a free joke for you!
        </ToggleButton>
      </Collapse>
      <Collapse in={showJoke} timeout={500} unmountOnExit>
      <JokeAccordion expanded={showPunchline} onChange={handleAccordionChange()}>
        <JokeAccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <h3 className={classes.jokeSetup}>
            {jokeSetup}
          </h3>
        </JokeAccordionSummary>
        <JokeAccordionDetails>
          <p className={classes.jokePunchline}>
            {jokePunchline}
          </p>
        </JokeAccordionDetails>
      </JokeAccordion>
      </Collapse>
    </div>
  );
}

export default Joke;