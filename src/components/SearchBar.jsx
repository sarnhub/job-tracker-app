import "./SearchBar.css";

export function Searchbar({search,
                           setSearch,
                           statusFilter,
                           setStatusFilter,
                           locationFilter,
                           setLocationFilter}) {


  return (
    <>
      <div className="filter-bar">
        <input
          type="text"
          placeholder='Search...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="applied">Applied</option>
          <option value="interview">Interview</option>
          <option value="rejected">Rejected</option>
        </select>

        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        >
          <option value="">All Locations</option>
          <option value="remote">Remote</option>
          <option value="hybrid">Hybrid</option>
          <option value="onSite">On-Site</option>
        </select>
      </div>
    </>
  )
}