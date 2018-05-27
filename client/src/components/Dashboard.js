// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    color: theme.palette.text.secondary,
  },
});

function Landing(props) {
  const classes = props.classes;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography type="title" gutterBottom>
              Dashboard
            </Typography>
            <Typography type="subheading" gutterBottom>
              Login state
            </Typography>
            <Typography type="body1" gutterBottom>
              Here is the state that only logged in users should see
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);
