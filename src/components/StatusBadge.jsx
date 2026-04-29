import "./StatusBadge.css";

export function StatusBadge({jobs}){

  const counts={
    applied:0,
    interview:0,
    rejected:0
  }

  jobs.forEach((job) => {
    if(counts[job.status]!==undefined){
      counts[job.status]++
    }
  });

  return (
    <>
      <p className="badge applied">
        <span>Applied</span> <strong>{counts.applied}</strong>
      </p>
      <p className="badge interview">
        <span>Interview</span> <strong>{counts.interview}</strong>
      </p>
      <p className="badge rejected">
        <span>Rejected</span> <strong>{counts.rejected}</strong>
      </p>
    </>
  )
}