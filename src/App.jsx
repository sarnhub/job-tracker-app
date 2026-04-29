import { Route, Routes } from 'react-router'
import { useEffect, useState } from 'react'
import { Homepage } from './pages/HomePage'
import { AddjobPage } from './pages/AddjobPage'

import './App.css'


function App() {

  const [jobs,setJobs]=useState(()=>{
      return JSON.parse(localStorage.getItem("jobs"))||[];
    });
  
  const [editJob,setEditJob]=useState(null);

  
    useEffect(()=>{
      localStorage.setItem("jobs",JSON.stringify(jobs));
    },[jobs]);
  
    const addJob=(newJob)=>{
      setJobs((prevJobs)=>[...prevJobs,newJob]);
    };

    const deleteJob=(id)=>{
      setJobs((prevJobs)=>prevJobs.filter((job)=>job.id!==id));
    };

    const updateJob=(updatedJob)=>{
      setJobs((prevJobs)=>prevJobs.map((job)=>job.id===updatedJob.id?updatedJob:job));
    };


  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage 
          jobs={jobs}
          deleteJob={deleteJob}
          setEditJob={setEditJob}
          />} />
        <Route path='addjob' element={<AddjobPage
          addJob={addJob}
          editJob={editJob}
          updateJob={updateJob}
          setEditJob={setEditJob}
        />} />
      </Routes>
      
    </>
  )
}

export default App
