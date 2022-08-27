import axios from 'axios'
import './Location.css'
import React, { useState } from 'react'


//const [code, setCode] = useState()
//This gets the location of the client's country
function LocationCountry() {
    const [location, setLocation] = useState({})

    const address = () => fetch("https://ipapi.co/json")
    .then((response) => response.json())
    .then((data) => {
        //var api_data = data
        console.log("Data", data)
        setLocation(data)
        //setCode(data.country_code)
        console.log("Country", data.country_name);
    });
    //address()

    React.useEffect(() => {
        const interval = setInterval(() => {
            address();
            //console.log("testing")
        }, 100)
        return () => clearInterval(interval)
    }, []);

    console.log("test", location)
    return (
        <p>Ships to {location.country_name}</p>
    )
}

//This gets the flag of the client's country
function LocationCode() {
    const [code, setCode] = useState()

    const address = () => fetch("https://ipapi.co/json")
    .then((response) => response.json())
    .then((data) => {
        //var api_data = data
        console.log("Data", data)
        //setLocation(data)
        setCode(data.country_code)
        console.log("Country", data.country_name);
    });
    //address()

    React.useEffect(() => {
        const interval = setInterval(() => {
            address();
            //console.log("testing")
        }, 100)
        return () => clearInterval(interval)
    }, []);

    // let code_name = code
    console.log("code", code.toLowerCase())
    const flag_url = `https://countryflagsapi.com/png/${code.toLowerCase()}`
    return (
        <>
            <img src={flag_url} alt="region" className="flag"></img>▾
        </>
    )
}


async function locateClient() {
    const res = await fetch("https://api.hostip.info/get_json.php")
    const data_ = await res.json()
    //console.log("fetch_users", data_)
    return data_ 
}




// export default { Geo_api.countryName , Geo_api.countryCode }

//function Location
export { LocationCountry, locateClient, LocationCode }
