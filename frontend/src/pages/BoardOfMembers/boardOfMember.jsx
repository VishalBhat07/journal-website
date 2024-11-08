import React, { useState } from 'react';
import IndianData from './Indian.json';
import InternationalData from './International.json';
import "./boardOfMember.css";

const BoardOfMember = () => {
  const [visibleItems, setVisibleItems] = useState(5);

  const renderTable = (data, title) => (
    <div className="container mt-5">
      <h2 className="text-center font-weight-bold">{title}</h2>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col"><strong>#</strong></th>
            <th scope="col"><strong>Name</strong></th>
            <th scope="col"><strong>Institution</strong></th>
            <th scope="col"><strong>Location</strong></th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, visibleItems).map((entry, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{entry.name}</td>
              <td>{entry.institution}</td>
              <td>{entry.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {visibleItems < data.length && (
        <div className="text-center">
          <button
            className="see-more"
            onClick={() => setVisibleItems(visibleItems + 5)}
          >
            See More
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div id="advisory-board">
      {renderTable(IndianData, 'Indian Board Members')}
      {renderTable(InternationalData, 'International Board Members')}
    </div>
  );
};

export default BoardOfMember;
