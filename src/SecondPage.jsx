import { useEffect, useState } from "react";
import apiData from "./Api";
import DataGridShow from "./DataGridShow";

function Test(){
    const [results,setResults] = useState([]);
    const [fetched,setFetched] = useState(false);

    const getData = async () => {
        const result = await apiData();
        setResults(result.data);
        setFetched(true);
    };

    useEffect(() => {
        getData();
    },[]);

    return (
        <div className="wrapper">
            {fetched && <DataGridShow data={results}/>}
        </div>
    );
}
export default Test;