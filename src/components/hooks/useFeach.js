import { useState, useEffect } from "react";
const useFeach = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] =useState(true);
    const [error, setError] = useState(null);


    useEffect(()=>{//pass an argument as a function// this is a new type of hook// runs every time there is a re-render of this component 
        fetch(url)
        .then(res => {
            if (!res.ok){
                throw Error("Could now get the data");
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setIsPending(false);
        })
        .catch(err=>{
            console.log(err.message);
        })
    },[url])//takes in an array of dependencies to watch, if in the array the function will fire when the state is changes, in this case when name state is changes

    return {data, isPending,error}
}
 
export default useFeach;