import { useRouteError } from "react-router";



const Error = () => {
    const err = {useRouteError};
    console.log(err);
    return(
        <div className="error">
            <h1>OPPS!!!</h1>
            <h2> something went wrong</h2>
            <h3>{err.status} : {err.statusText}</h3>
        </div>
    ) 
};

export default Error;