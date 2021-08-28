import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
//conponent is from: https://material-ui.com/components/cards/

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width:900,
    position: 'absolute', left: '50%', top: '45%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgb(66, 66, 66)',
    color: 'white',
    borderStyle:'solid',
    borderColor:"palevioletred",
    padding: '20px',
    display:'flex',
    justifyContent: 'center',//centering the buttons 
  },
  title: {
    fontSize: 14,
    color: 'white',
  },
  pos: {
    marginBottom: 12,
  },
  btn: {
    margin: '0 30px',
    width:250,
    minWidth: 100,
  }

});

const playerClick =()=>{
    console.log('player click');

}

const teamClick =()=>{
    console.log('team click');

}

const gameClick =()=>{
    console.log('game click');

}


export default function Buttons() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
    <Button className={classes.btn} variant="contained" onClick={playerClick} >Player</Button>
    <Button className={classes.btn} variant="contained" color="primary" onClick={teamClick} >Team</Button>
      <Button className={classes.btn} variant="contained" color="secondary" onClick={gameClick} >Game</Button>
    </Card>
  );
}
