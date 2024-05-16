import axios from "axios";
import { useState , useEffect} from "react";

const instanse = axios.create({
    baseURL:'https://react-mini-projects-api.classbon.com'
});
const useAxios = (axiosParams) =>{
    const [response,setResponse] = useState(null)
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(true)

    const fetchData = async ()=>{
        try {
            const result = await instanse.request(axiosParams);
            setResponse(result.data)
            console.log(response)
        }
        catch (err){
            setError(err);
        }
        finally {
            setLoading(false)
        }
    };

    useEffect(() => {
    fetchData()
    }, [axiosParams.url]);
    return [response , error , loading];
};
export default useAxios;
