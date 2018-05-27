import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { grey } from '@material-ui/core/colors';

import { Link } from 'react-router-dom';

const styles = theme => ({
  // eslint-disable-line no-unused-vars
  root: {
    marginTop: 0,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  brand: {
    textDecoration: 'none',
    color: grey[50],
  }
});

const LoginWithGoogle = () => (
  <Button href="/auth/google" color="inherit">
    Login with Google
  </Button>
);

const LogOut = () => (
  <Button href="/api/logout" color="inherit">
    Log Out
  </Button>
);

const LoginButton = ({ loginState }) => {
  switch (loginState) {
    case null:
      return null;
    case false:
      return <LoginWithGoogle />;
    default:
      return <LogOut />;
  }
};

class Header extends Component {
  render() {
    const { classes, auth } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              <Link className={classes.brand} to={auth ? '/surveys' : '/'}>
                Plexhex
              </Link>
            </Typography>
            <LoginButton loginState={auth} />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(withStyles(styles)(Header));
