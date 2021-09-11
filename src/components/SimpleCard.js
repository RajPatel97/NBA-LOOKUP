
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
//conponent is from: https://material-ui.com/components/cards/

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width:900,
    position: 'absolute', left: '50%', top: '25%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgb(66, 66, 66)',
    color: 'white',
    borderStyle:'solid',
    borderColor:"#f7aaaa",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
    color: 'white',
  },
  title: {
    fontSize: 14,
    color: 'white',
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        <h1>WELCOME TO NBA LOOKUP</h1>
        </Typography>
        <Typography variant="h5" component="h2">
        Look up stats and scores of any team and player in NBA History!
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        <a className = 'link' href="https://github.com/RajPatel97/NBA-LOOKUP">Check Out the Code Here</a>
        </Typography>
        <Typography variant="body2" component="p">
        Created By Raj Patel
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
