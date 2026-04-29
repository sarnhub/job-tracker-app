import { useNavigate } from "react-router"
import { MdDelete, MdEdit } from "react-icons/md";
import './JobCards.css';


export function JobCards({jobs,deleteJob,setEditJob}){

  const navigate=useNavigate();
  
  return (
    <>
      {
        jobs.map((job)=>(
        <div key={job.id} className="jobCard">
          <h3>{job.company}</h3>
          <p>{job.role}</p>
          <p>{job.date}</p>
          <p>{job.status}</p>
          <p>{job.location}</p>
          <div className="buttons-container">
            <button onClick={()=>{
              setEditJob(job);
              navigate('/addjob');
            }}>
              <MdEdit className="edit-icon" />
            </button>
            <button onClick={()=>deleteJob(job.id)}>
              <MdDelete className="delete-icon" />
            </button>
          </div>
        </div>
        ))
      }
    </>
  )
}