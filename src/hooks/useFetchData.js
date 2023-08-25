import { useEffect, useState } from "react";

const useFetchData = (url, cb) =>{
    const[data, setdata] = useState(null);
    const[loading, setLoading] = useState(false);
    const[error, setError] =useState('');

    useEffect(()=>{
        fetchData()
    }, [])

    const fetchData = async function () {
        setLoading(true)
        try{
            const res =await fetch(url)

            const fetchedData = await res.json()

            if(cb){
                setdata(cb(fetchedData))
            }else{
                setdata(fetchedData)
            }
            setError('')
            setLoading(false)

        }catch(err){
            console.dir(err.message);
            setError('Server Error')
            setLoading(false)
        }
    }
    

    return{
        data,
        error,
        loading
    }

}

export default useFetchData;