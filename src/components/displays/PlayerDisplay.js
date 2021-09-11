import { useEffect } from "react";
import { useState } from "react";
import {useFeach} from "../hooks/useFeach";

const PlayerDisplay = (props) => {
    const [currentPlayer, setCurrentPlayer] = useState(null);
    const [seasonData, setSeasonData] = useState(null);
    const  searchInput = props.searchInput;


    const getStats = (num)=>{
        let statsCall = `https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=${num}`
        fetch(statsCall)
        .then(res => {
            if (!res.ok){
                throw Error("Could not get the stats");
            }
            return res.json();
        })
        .then(data => {
            //console.log(data)
            setSeasonData(data.data[0])
        })
        .catch(err=>{
            console.log(err.message);
        })

    }

    //grabbing data when searchbox is used
    useEffect(()=>{
        const defaultURL =   `https://www.balldontlie.io/api/v1/players?search=${searchInput}`
        fetch(defaultURL)
        .then(res => {
            if (!res.ok){
                throw Error("Could not get the data");
            }
            return res.json();
        })
        .then(data => {
            setCurrentPlayer(data.data[0])
            getStats(data.data[0].id);
        })
        .catch(err=>{
            console.log(err.message);
        })
        
        

    },[searchInput])//rerendering when there is a new search here 

    return ( 
        <div className="playerDisplay-wrapper">
        {currentPlayer && <h1 className="name">{currentPlayer.first_name +" "+ currentPlayer.last_name}</h1>}
        {currentPlayer && <h2 className="team-name">{currentPlayer.team.full_name}</h2>}{/*have to load this way or error will show on first render and while loading the data */}
        {currentPlayer && <p>Position: {currentPlayer.position}</p>}
        {currentPlayer && <p>Height: {currentPlayer.height_feet+" ft, "+currentPlayer.height_inches+" in"}</p>}
        {currentPlayer && <p>Weight: {currentPlayer.weight_pounds} lbs</p>}
        {seasonData && <h3>Stats for the {seasonData.season} season:</h3>}
        {seasonData && <p>PPG: {seasonData.pts}</p>}
        {seasonData &&  <p>AST: {seasonData.ast}</p>}
        {seasonData &&  <p>REB: {seasonData.reb}</p>}
        {seasonData &&  <p>Games Played: {seasonData.games_played}</p>}
        {seasonData &&  <p>Minutes per game: {seasonData.min}</p>}
        
        </div>
     );
}
 
export default PlayerDisplay;
