import { useEffect } from "react";
import { useState } from "react";
import useFeach from "../hooks/useFeach";

const PlayerDisplay = (props) => {
    const [currentPlayer, setCurrentPlayer] = useState('');
    const [isPending, setIsPending] =useState(true);
    const [error, setError] = useState(null);
    const searchInput = props.searchInput;
    const defaultURL = 'https://www.balldontlie.io/api/v1/players/237';
    //let Data = useFeach(defaultURL).data//logs the data feach for Lebron James
    

    //assigning data from call
    //const firstname = data.first_name;
    //const [firstname] = useState(data.first_name);
    //let name = data.first_name;

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

    return ( 
        <div className="playerDisplay-wrapper">
        
        </div>
     );
}
 
export default PlayerDisplay;
