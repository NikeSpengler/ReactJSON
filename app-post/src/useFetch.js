import { useState, useEffect } from 'react';

//custum react hook
const useFetch = (url) => {
    //states
    const [data, setData] = useState(null); 
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

     //fetching the json data
     useEffect(() => {
        // setTimeOut makes the "loading..." show a bit longer, 1 sec.
        setTimeout(() => {
            fetch(url)
            .then(res => {
                //if the response object not is ok, error coming back from the server
                if(!res.ok) {
                    throw Error('Could not fetch the data for that resource...');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            //catch error, and shows errormessage
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })
        }, 1000)   
    }, [url]);
    return { data, isPending, error }
}

export default useFetch;