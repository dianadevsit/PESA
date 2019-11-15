import React from "react";

function SearchResults(props) {
  return (
    <ul className="list-group search-results card">
      {props.results.map(result => (
        <li key={result} className="list-group-item card-body">
          <p>{result.id} </p>
          <p>{result.company}</p>
          <p>{result.snippet} </p>
          <p>{result.role} </p>
          <button className="card-button" onClick={()=> props.saveJob({result})}></button>
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
