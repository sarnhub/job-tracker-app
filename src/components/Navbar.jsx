import { Link } from "react-router";
import { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";
import { GoHomeFill } from "react-icons/go";
import './Navbar.css';


export function Navbar(){

  const[dark,setDark]=useState(()=>{
    return localStorage.getItem("theme")==="dark";
  });

  useEffect(()=>{
    if(dark){
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme","dark");
    }else{
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme","light");
    }
  },[dark]);


  return (
    <div className="navbar">
      <Link to="/" className="home-link" aria-label="Go to Home">
        <GoHomeFill className="home-icon" />
      </Link>
      <h2>Job Tracker</h2>
      <button className="dark-toggle" onClick={()=>setDark(!dark)}>
        {dark?<CiDark/>:<CiLight/>}
      </button>
    </div>
  );
}