import { supabase } from "./supabaseClient";
import { useState,useEffect } from "react";
 const Download=()=>{
    const logout=(e)=>{
        e.preventDefault();
        localStorage.removeItem("name");
        window.location.href="/";

    }
    useEffect(()=>{
    if(!localStorage.getItem("name"))
    {
alert("you have to login first");
window.location.href="/";
    }
})
    const [files,getFiles]=useState([]);
    useEffect(()=>{
        colfile();
    },[]);

    const colfile=async ()=>{
        const {data,error}=await supabase
        .from("file_data")
        .select("*")
        .order("id", { ascending: false });
        if(data.length==0)
        {
            alert("No Data Found!!");
            window.location.href="/upload";
            
        }
        console.log(data.url);
        if (error)
        {
            alert(error);
        }
        else{
            getFiles(data);
        }

    }
    return(
        <div>
            <div className="logout">
            <button onClick={logout}>log out</button>
            </div>
            <center>
            <div>
                {files.map((e)=>{
                    return(
                    <div className="files">
                        <br/>
                        <div className="infile">
                        <img src={e.preview} height={150} width={100} alt="error"/>
                        </div>
                        <br/>
                        <p>{e.file_name}</p>
                        <p>{e.uname}</p>
                        <a href={e.url}><button>view</button></a>
                        </div>
                    );
                })}
            </div>
            </center>
        </div>
    )
 }
 export default Download