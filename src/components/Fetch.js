import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Display from './Display'

function Fetch() {
    const[state,setstate]=useState([])
    useEffect(()=>{
        const fetchdata=async()=>{
         try {
            const res=await axios.get("https://jsonplaceholder.typicode.com/users")
            const result=res.data
            console.log("gsghdf",result);
            setstate(result)
            
         } catch (error) {
            console.log(error);
            
         }
        }
        fetchdata()
    },[])
  return (
    <div>
      <Display props={state}/>
    </div>
  )
}

export default Fetch
