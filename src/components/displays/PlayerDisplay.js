import { useEffect } from "react";
import { useState } from "react";
import useFeach from "../hooks/useFeach";

const PlayerDisplay = (props) => {
    const [currentPlayer, setCurrentPlayer] = useState('');
    const[playerTeam, setPlayerTeam] = useState('');
    const [isPending, setIsPending] =useState(true);
    const [error, setError] = useState(null);
    const searchInput = props.searchInput;
    const defaultURL = 'https://www.balldontlie.io/api/v1/players/237';

    //grabbing data when searchbox is used
    useEffect(()=>{
        fetch(defaultURL)
        .then(res => {
            if (!res.ok){
                throw Error("Could now get the data");
            }
            return res.json();
        })
        .then(data => {
            //setData(data);
            setCurrentPlayer(data)
            setIsPending(false);
        })
        .catch(err=>{
            console.log(err.message);
        })

        console.log(currentPlayer.first_name);

    },[searchInput])

    async function getTeam(){
        console.log(currentPlayer)
        return currentPlayer.team.name;
    }

    return ( 
        <div className="playerDisplay-wrapper">
        <h1 className="name">{currentPlayer.first_name +" "+ currentPlayer.last_name}</h1>
        {currentPlayer.team && <h2 className="team-name">{currentPlayer.team.full_name}</h2>}{/*have to load this way or error will show on first render */}
        <p>Position: {currentPlayer.position}</p>
        <p>Height: {currentPlayer.height_feet+" ft, "+currentPlayer.height_inches+" in"}</p>
        <p>Weight: {currentPlayer.weight_pounds} lbs</p>
        
        </div>
     );
}
 
export default PlayerDisplay;
