// src/boardOfMembers.jsx
import React from 'react';
import IndianData from './Indian.json';
import InternationalData from './International.json';
import "./boardOfMember.css"

const BoardOfMember = () => {
  // Function to render a table based on the provided data
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
          {data.map((entry, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{entry.name}</td>
              <td>{entry.institution}</td>
              <td>{entry.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
