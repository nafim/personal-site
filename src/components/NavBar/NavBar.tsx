import { Link } from "gatsby";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ProfileImage from "./ProfileImage";

const useStyles = makeStyles((theme) => ({
  headerBar: {
    [theme.breakpoints.up("xs")]: {
      height: '100%',
      width: '20%',
      backgroundColor: theme.palette.primary.main,
      position: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    [theme.breakpoints.down("sm")]: {
      width: '100%',
      backgroundColor: theme.palette.primary.main,
      position: 'relative'
    },
  },
  profileImage: {
    [theme.breakpoints.up("xs")]: {
      width: '150px',
      margin: theme.spacing(3, 2, 3)
    },
    [theme.breakpoints.down("sm")]: {
      width: '50px',
      borderRadius: '50%'
    },
  },
  navLinks: {
    margin: theme.spacing(10, 2, 2)
  }
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
        style={{
          color: `black`,
          textDecoration: `none`,
        }}
      >
        Nafim
      </Link>
      <nav className={classes.navLinks}>
      <ul>
        <li>
          Home
        </li>
        <li>
          Portfolio
        </li>
        <li>
          Projects
        </li>
      </ul>
      </nav>
    </aside>
  );
}

export default Header
