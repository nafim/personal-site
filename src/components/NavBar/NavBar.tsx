import { Link } from "gatsby";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ProfileImage from "./ProfileImage";

const useStyles = makeStyles((theme) => ({
  navBar: {
    [theme.breakpoints.up("xs")]: {
      height: '100%',
      width: '25%',
      maxWidth: '350px',
      backgroundColor: theme.palette.primary.light,
      position: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    [theme.breakpoints.down("sm")]: {
      height: 'auto',
      width: '100%',
      maxWidth: 'none',
      backgroundColor: theme.palette.primary.light,
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  profileImage: {
    [theme.breakpoints.up("xs")]: {
      width: '150px',
      margin: theme.spacing(5, 2, 5)
    },
    [theme.breakpoints.down("sm")]: {
      width: '50px',
      margin: theme.spacing(1, 3, 1)
    },
  },
  nameTitle: {
    fontFamily: 'Dosis',
    color: 'black',
    textDecoration: 'none',
    fontSize: '40px',
    fontWeight: 1000
  },
  navLinks: {
    [theme.breakpoints.up("xs")]: {
      margin: theme.spacing(10, 2, 2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'auto',
      flexGrow: 0
    },
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(1, 3, 1),
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      flexGrow: 1
    },
  },
  navLink: {
    color: '#00000091',
    textDecoration: 'none',
    margin: theme.spacing(1, 2, 0),
    transition: 'all 0.2s ease',
    '&:hover': {
      color: theme.palette.secondary.main
    },
  },
  activeLink: {
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    margin: theme.spacing(1, 2, 0),
  },
  iconContainer: {
    [theme.breakpoints.down("sm")]: {
      display: 'none'
    },
    flexGrow: 1,
    display: 'flex'
  },
  icon: {
    alignSelf: 'flex-end',
    margin: theme.spacing(0, 3, 5),
    textDecoration: 'none',
    color: '#00000091',
    transition: 'all 0.2s ease',
    '&:hover': {
      color: theme.palette.secondary.main
    },
  }
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <aside className={classes.navBar}>
      <div className={classes.profileImage}>
        <ProfileImage />
      </div>
      <Link
        to="/"
        className={classes.nameTitle}
      >
        Nafim
      </Link>
      <nav className={classes.navLinks}>
        <Link
          to="/"
          className={classes.navLink}
          activeClassName={classes.activeLink}

        >
          <h2>Home</h2>
        </Link>
        <Link
          to="/projects"
          className={classes.navLink}
          activeClassName={classes.activeLink}

        >
          <h2>Projects</h2>
        </Link>
        <Link
          to="/resume"
          className={classes.navLink}
          activeClassName={classes.activeLink}

        >
          <h2>Resume</h2>
        </Link>
      </nav>
      <div className={classes.iconContainer}>
        <a 
          href="https://www.facebook.com/nafim.rahman" 
          target="_blank" 
          rel="noopener noreferrer"
          className={classes.icon}
        >
          <i className='icon-facebook' />
        </a>
        <a 
          href="https://www.linkedin.com/in/saadnafimrahman/" 
          target="_blank" 
          rel="noopener noreferrer"
          className={classes.icon}
        >
          <i className='icon-linkedin' />
        </a>
        <a 
          href="https://github.com/nafim" 
          target="_blank" 
          rel="noopener noreferrer"
          className={classes.icon}
        >
          <i className='icon-github' />
        </a>
      </div>
    </aside>
  );
}

export default NavBar;
