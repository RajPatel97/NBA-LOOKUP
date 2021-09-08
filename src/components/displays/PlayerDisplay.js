import { useEffect } from "react";
import { useState } from "react";
import useFeach from "../hooks/useFeach";

const PlayerDisplay = (props) => {
    const [currentPlayer, setCurrentPlayer] = useState({id:237,first_name:"LeBron",height_feet:6,height_inches:8,last_name:"James",position:"F",team:{id:14,abbreviation:"LAL",city:"Los Angeles",conference:"West",division:"Pacific",full_name:"Los Angeles Lakers",name:"Lakers"},weight_pounds:250});
    const[playerTeam, setPlayerTeam] = useState('');
    const [isPending, setIsPending] =useState(true);
    const [error, setError] = useState(null);
    const searchInput = props.searchInput;
    //const defaultURL = 'https://www.balldontlie.io/api/v1/players/237';
    const defaultURL =   `https://www.balldontlie.io/api/v1/players?search=${searchInput}`

    //grabbing data when searchbox is used
    useEffect(()=>{
        console.log(currentPlayer)
        fetch(defaultURL)
        .then(res => {
            if (!res.ok){
                throw Error("Could now get the data");
            }
            return res.json();
        })
        .then(data => {
            //setData(data);
            setCurrentPlayer(data.data[0])
            console.log(data.data[0])
            setIsPending(false);
        })
        .catch(err=>{
            console.log(err.message);
        })

        //console.log(currentPlayer.first_name);

    },[searchInput])

    return ( 
        <div className="playerDisplay-wrapper">
        {currentPlayer && <h1 className="name">{currentPlayer.first_name +" "+ currentPlayer.last_name}</h1>}
        {currentPlayer.team && <h2 className="team-name">{currentPlayer.team.full_name}</h2>}{/*have to load this way or error will show on first render */}
        <p>Position: {currentPlayer.position}</p>
        <p>Height: {currentPlayer.height_feet+" ft, "+currentPlayer.height_inches+" in"}</p>
        <p>Weight: {currentPlayer.weight_pounds} lbs</p>
        
        </div>
     );
}
 
export default PlayerDisplay;
