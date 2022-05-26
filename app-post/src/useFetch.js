import { useState, useEffect } from 'react';

//custum react hook
const useFetch = (url) => {
    //states
    const [data, setData] = useState(null); 
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

     //fetching the json data
     useEffect(() => {
        const abortCont = new AbortController();

        // setTimeOut makes the "loading..." show a bit longer, 1 sec.
        setTimeout(() => {
            fetch(url, { signal: abortCont.singal })
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
            //catch error, and shows errormessage, also takes care of fetch error
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            })
        }, 1000);
        //makes switching between diffrent "sidor" more efficients
        return () => abortCont.abort();
    }, [url]);
    return { data, isPending, error }
}

export default useFetch;