import { Link } from "gatsby";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ProfileImage from "./ProfileImage";

const useStyles = makeStyles((theme) => ({
  headerBar: {
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
      width: '100%',
      backgroundColor: theme.palette.primary.light,
      position: 'relative'
    },
  },
  profileImage: {
    [theme.breakpoints.up("xs")]: {
      width: '150px',
      margin: theme.spacing(5, 2, 5)
    },
    [theme.breakpoints.down("sm")]: {
      width: '50px',
      borderRadius: '50%'
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
    margin: theme.spacing(10, 2, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  navLink: {
    fontFamily: 'Raleway',
    color: '#00000091',
    fontSize: '20px',
    fontWeight: 700,
    textDecoration: 'none',
    margin: theme.spacing(2, 2, 1),
    transition: 'all 0.2s ease',
    '&:hover': {
      color: theme.palette.secondary.main
    },
  },
}));

interface HeaderProps {
  siteTitle: string
}

const Header = ({ siteTitle }: HeaderProps) => {
  const classes = useStyles();
  return (
    <aside className={classes.headerBar}>
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

        >
          Home
        </Link>
        <Link
          to="/"
          className={classes.navLink}

        >
          Projects
        </Link>
        <Link
          to="/"
          className={classes.navLink}

        >
          Resume
        </Link>
      </nav>
    </aside>
  );
}

export default Header
