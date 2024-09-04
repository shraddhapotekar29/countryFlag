import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./xcountries.module.css"
const Xcountries=()=>{
    const[flagData,setFlagData]=useState([]);
    const getFlagData=async()=>{
        try{
     const response=await axios.get("https://xcountries-backend.azurewebsites.net/all");
     setFlagData(response.data);
     console.log(response.data);
        }
        catch(err){
            console.log("Error fetching data:",err);
        }
    }
useEffect(()=>{
    getFlagData();
},[]);
    return(<div className={style.mainDiv} >
          {flagData.map((flag)=>(<div className={style.box} key={flag}>
            <img src={flag.flag} alt={flag.abbr}  height={80} width={80} style={{paddingTop:"1rem"}}/>
            <p>{flag.name}</p>
        </div>))}
    </div>)
}
export default Xcountries;