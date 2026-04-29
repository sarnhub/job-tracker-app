import { Link } from 'react-router';
import { useState } from 'react';
import { PiPlusFill } from 'react-icons/pi';
import { JobCards } from '../components/JobCards'
import { StatusBadge } from '../components/StatusBadge'
import { Navbar } from '../components/Navbar';
import { Searchbar } from '../components/SearchBar';
import './Homepage.css';




export function Homepage({jobs,deleteJob,setEditJob}){

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.role.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === "" || job.status === statusFilter;
    const matchesLocation =
      locationFilter === "" || job.location === locationFilter;

    return matchesSearch && matchesStatus && matchesLocation;
  });

  return (
    <>
      <Navbar />
      
      <div className='homepage-container'>

        <Searchbar 
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        locationFilter={locationFilter}
        setLocationFilter={setLocationFilter}
      />
        
        <div className='jobCards-container'>
          <JobCards jobs={filteredJobs} deleteJob={deleteJob} setEditJob={setEditJob} />
        </div>
        
        <div className='status-container'><StatusBadge jobs={jobs} /></div>
        
        <div className='add-container'>
          <Link to='/addjob' onClick={()=>setEditJob(null)} className='add-link' aria-label='Add a Job'>
            <PiPlusFill className='add-link-icon' />
          </Link>
        </div>
      </div>
    </>
  );
}