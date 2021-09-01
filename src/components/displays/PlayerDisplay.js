import { useState } from "react";
import useFeach from "../hooks/useFeach";

const PlayerDisplay = (props) => {
    const searchInput = props.searchInput;
    const defaultURL = 'https://www.balldontlie.io/api/v1/players/237';
    let data = useFeach(defaultURL).data//logs the data feach for Lebron James

    //assigning data from call
    //const firstname = data.first_name;
    //const [firstname] = useState(data.first_name);


    return ( 
        <div className="playerDisplay-wrapper">
        {console.log(data)}
        </div>
     );
}
 
export default PlayerDisplay;
