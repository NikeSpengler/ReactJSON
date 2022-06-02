import { useState, useEffect } from 'react';

/**
 * 
 * @returns This file is helping with fetching data more smoothly and 
 * are also error handling the website. 
 */

//Custum react hook
const useFetch = (url) => {
    //States
    const [data, setData] = useState(null); 
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

     //Fetching the json data
     useEffect(() => {
        const abortCont = new AbortController();

        // SetTimeOut makes the "loading..." show a bit longer, 1 sec.
        setTimeout(() => {
            fetch(url, { signal: abortCont.singal })
            .then(res => {
                //If the response object not is ok, error coming back from the server
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
            //Catch error, and shows errormessage, also takes care of fetch error
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            })
        }, 1000);
        //Makes switching between diffrent "sites" more efficient
        return () => abortCont.abort();
    }, [url]);
    return { data, isPending, error }
}

export default useFetch;