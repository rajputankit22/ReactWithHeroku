import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontSize: 14,
  },
  marginLeftProp: {
    marginLeft: 5,
  },
  textField: {
    marginTop: theme.spacing(3.5),
    marginBottom: theme.spacing(1),
  },
  margin: {
    margin: theme.spacing(1),
  },
  formControl: {
    minWidth: 240,
    marginTop: theme.spacing(3.5),
    marginBottom: theme.spacing(1),
  },
}));

function PlayerName(props) {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={1}></Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            className={classes.margin}
          >
            {props.player1}
          </Button>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            className={classes.margin}
          >
            {props.player2}
          </Button>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
}

export default PlayerName;
