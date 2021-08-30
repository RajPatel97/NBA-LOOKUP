import React from 'react';
import {withStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
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

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);




export default function Buttons(props) {
  let currentButton = props.currentButton;
  let setCurrentButton = props.setCurrentButton;
  const classes = useStyles();

const playerClick =()=>{
    setCurrentButton('player');
    //console.log(currentButton);

}

const teamClick =()=>{
    setCurrentButton('team');
    //console.log(currentButton);

}

const gameClick =()=>{
    setCurrentButton('game');
    //console.log(currentButton);

}

  return (
    <Card className={classes.root}>
    {console.log(currentButton)}
    <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Look Up a Current or Retired Player</Typography>
            <em>{"Click this Box and Enter the Name of the Player in the Search Box. "}</em>
            <em>{"Displays Stats From All Seasons"}</em>
          </React.Fragment>
        }
      >
      <Button className={classes.btn} variant="contained" onClick={playerClick} >Player</Button>
      </HtmlTooltip>

      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Look Up a Current Team or Any Previous Team in NBA History </Typography>
            <em>{"Click this Box and Enter the Name of the team in the Search Box. Enter Name and Year If Searching for a Historical Team"}</em>
            <em>{"Displays Rosters and Season Statistics as well as Outcomes of the Season"}</em>
          </React.Fragment>
        }
      >
        <Button className={classes.btn} variant="contained" color="primary" onClick={teamClick} >Team</Button>
      </HtmlTooltip>

      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Look Up Any Specific Game in NBA History </Typography>
            <em>{"Click this Box and Enter the date of the Game"}</em>
            <em>{"Displays the Scores and Statistics of the Game"}</em>
          </React.Fragment>
        }
      >
        <Button className={classes.btn} variant="contained" color="secondary" onClick={gameClick} >Game</Button>
      </HtmlTooltip>
    
    
      
    </Card>
  );
}
