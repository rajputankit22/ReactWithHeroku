import React, { useState, useEffect } from "react";
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

function Player(props) {
  const classes = useStyles();
  const [player1, setPlayer1] = useState("Player1");
  const [player2, setPlayer2] = useState("Player2");
  const [playerValue1, setPlayerValue1] = useState("X");
  const [playerValue2, setPlayerValue2] = useState("O");

  async function setStartingPlayer(e) {
    props.player({
      Player1: player1,
      Player2: player2,
      Player1value: playerValue1,
      Player2value: playerValue2,
    });
  }

  useEffect(() => {}, [playerValue1, playerValue2]);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={1}></Grid>
        <Grid item xs={5}>
          <TextField
            id="player1"
            label="Enter Player1 (X)"
            defaultValue="Player1"
            variant="outlined"
            onChange={(e) => setPlayer1(e.target.value)}
          />
          <FormControl component="fieldset">
            <FormLabel className={classes.root} component="legend">
              Choose X or O
            </FormLabel>
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue={playerValue1}
              className={classes.marginLeftProp}
            >
              <FormControlLabel
                value="X"
                control={<Radio color="primary" />}
                label="X"
                onClick={(e) => {
                  let b = "O";
                  b = e.target.value == "X" ? "O" : "X";
                  setPlayerValue1(e.target.value);
                  setPlayerValue2(b);
                }}
              />
              <FormControlLabel
                value="O"
                control={<Radio color="primary" />}
                label="O"
                onClick={(e) => {
                  let b = "X";
                  b = e.target.value == "O" ? "X" : "O";
                  setPlayerValue1(e.target.value);
                  setPlayerValue2(b);
                }}
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={5}>
          <TextField
            id="player2"
            label="Enter Player2 (O)"
            defaultValue="Player2"
            variant="outlined"
            onChange={(e) => setPlayer2(e.target.value)}
          />
          <FormControl component="fieldset">
            <FormLabel className={classes.root} component="legend">
              Choose X or O
            </FormLabel>
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue={playerValue2}
              className={classes.marginLeftProp}
            >
              <FormControlLabel
                value="X"
                control={<Radio color="primary" />}
                label="X"
                onClick={(e) => {
                  let b = "O";
                  b = e.target.value == "X" ? "O" : "X";
                  setPlayerValue2(e.target.value);
                  setPlayerValue1(b);
                }}
              />
              <FormControlLabel
                value="O"
                control={<Radio color="primary" />}
                label="O"
                onClick={(e) => {
                  let b = "X";
                  b = e.target.value == "O" ? "X" : "O";
                  setPlayerValue2(e.target.value);
                  setPlayerValue1(b);
                }}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={5}></Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            className={classes.margin}
            onClick={setStartingPlayer}
          >
            Start
          </Button>
        </Grid>
        <Grid item xs={5}></Grid>
      </Grid>
    </div>
  );
}

export default Player;
