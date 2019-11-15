import React from "react";

function DatabaseData(props) {
  return (
    <ul className="list-group search-results card">
      {props.results.map(result => (
        <li key={result} className="list-group-item card-body">
          <p>{result.id} </p>
          <p>{result.company}</p>
          <p>{result.snippet} </p>
          <p>{result.role} </p>

            {/* edit button */}
            <button className="card-button">
                <Link to={"/api/pesa/"+ result.id} className={window.location.pathname === "api/pesa"}>
                  Edit
                </Link>
            </button>

             {/* delete button */}
            <button className="card-button" onClick={()=> props.deleteJob(result.id)}>
              Delete
            </button>
        </li>
      ))}
    </ul>
  );
}

export default DatabaseData;