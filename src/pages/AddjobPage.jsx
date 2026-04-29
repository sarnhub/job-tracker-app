import { useState,useEffect } from "react"
import { Navbar } from "../components/Navbar";
import "./AddjobPage.css";

export function AddjobPage({addJob,editJob,updateJob,setEditJob}) {

  const [company, setCompany]=useState("");
  const [role, setRole]=useState("");
  const [date, setDate]=useState("");
  const [status, setStatus]=useState("");
  const [location, setLocation]=useState("");

  useEffect(()=>{
    if(editJob){
      setCompany(editJob.company);
      setRole(editJob.role);
      setDate(editJob.date);
      setStatus(editJob.status);
      setLocation(editJob.location);
    }
  },[editJob]);

  const handleSubmit=(e)=>{
    e.preventDefault();

    const newJob={
      company,
      role,
      date,
      status,
      location,
      id:editJob ? editJob.id : crypto.randomUUID(),
    }

    if(editJob){
      updateJob(newJob);
      setEditJob(null);
    }else{
      addJob(newJob);  
    }
    

    setCompany("");
    setRole("");
    setDate("");
    setStatus("");
    setLocation("");
  }

  return (
    <>
      <Navbar />
      
      <div className="addjobpage-container">
        <form onSubmit={handleSubmit} className="form-card">
          <label htmlFor='companyname'>Company name:</label>
          <input id='companyname' type="text" name='company-name' value={company} onChange={(e)=>setCompany(e.target.value)} />
          
          <label htmlFor='role'>Role:</label>
          <input id='role' type="text" name='role' value={role} onChange={(e)=>setRole(e.target.value)} />
          
          <label htmlFor='date'>Date:</label>
          <input id='date' type="date" name='date'  value={date} onChange={(e)=>setDate(e.target.value)} />
          
          <label htmlFor="status">Status:</label>
          <select name="status" id="status" value={status} onChange={(e)=>setStatus(e.target.value)}>
            <option value="">Select</option>
            <option value="applied">Applied</option>
            <option value="interview">Interview</option>
            <option value="rejected">Rejected</option>
          </select>
          
          <label htmlFor="location">Location:</label>
          <select name="location" id="location" value={location} onChange={(e)=>setLocation(e.target.value)}>
            <option value="">Select</option>
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
            <option value="onSite">On-Site</option>
          </select>
          
          <div className="button-group">
            <button type='submit'>
              {editJob?"Update":"Add"}
            </button>
            <button type='button' onClick={()=>{
              setCompany("");
              setRole("");
              setDate("");
              setStatus("");
              setLocation("");
            }}>Clear</button>
          </div>
        </form>
      </div>
    </>
  )
}

