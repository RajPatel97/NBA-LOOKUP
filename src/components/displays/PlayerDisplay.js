import { useEffect } from "react";
import { useState } from "react";
import {useFeach} from "../hooks/useFeach";

const PlayerDisplay = (props) => {
    const [currentPlayer, setCurrentPlayer] = useState({id:237,first_name:"LeBron",height_feet:6,height_inches:8,last_name:"James",position:"F",team:{id:14,abbreviation:"LAL",city:"Los Angeles",conference:"West",division:"Pacific",full_name:"Los Angeles Lakers",name:"Lakers"},weight_pounds:250});
    const [playerTeam, setPlayerTeam] = useState('');
    const [isPending, setIsPending] =useState(true);
    const [error, setError] = useState(null);
    const [seasonData, setSeasonData] = useState(null);
    const  searchInput = props.searchInput;
    //const defaultURL = 'https://www.balldontlie.io/api/v1/players/237';
    const defaultURL =   `https://www.balldontlie.io/api/v1/players?search=${searchInput}`

    //https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=237  link to get the season stats of a player. just replace the season desired and the player id


    const getStats = (num)=>{
        let statsCall = `https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=${num}`
        fetch(defaultURL)
        .then(res => {
            if (!res.ok){
                throw Error("Could not get the stats");
            }
            return res.json();
        })
        .then(data => {
            console.log(data)
            setSeasonData(data)
            setIsPending(false);
        })
        .catch(err=>{
            console.log(err.message);
        })

    }

    //grabbing data when searchbox is used
    useEffect(()=>{
        fetch(defaultURL)
        .then(res => {
            if (!res.ok){
                throw Error("Could not get the data");
            }
            return res.json();
        })
        .then(data => {
            //setData(data);
            setCurrentPlayer(data.data[0])
            setIsPending(false);
        })
        .catch(err=>{
            console.log(err.message);
        })
        if(currentPlayer){
            console.log(currentPlayer.id)
            getStats(currentPlayer.id);
        }
        

    },[searchInput])

    return ( 
        <div className="playerDisplay-wrapper">
        {currentPlayer && <h1 className="name">{currentPlayer.first_name +" "+ currentPlayer.last_name}</h1>}
        {currentPlayer && <h2 className="team-name">{currentPlayer.team.full_name}</h2>}{/*have to load this way or error will show on first render */}
        {currentPlayer && <p>Position: {currentPlayer.position}</p>}
        {currentPlayer && <p>Height: {currentPlayer.height_feet+" ft, "+currentPlayer.height_inches+" in"}</p>}
        {currentPlayer && <p>Weight: {currentPlayer.weight_pounds} lbs</p>}
        {console.log(seasonData)}
        
        </div>
     );
}
 
export default PlayerDisplay;
