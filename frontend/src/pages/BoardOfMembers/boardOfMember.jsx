import React from "react";
import IndianData from "./Indian.json";
import InternationalData from "./International.json";
import "./boardOfMember.css";

const BoardOfMember = () => {
  const renderTable = (data, title, tableClass) => (
    <div className={`board-container ${tableClass}`}>
      <h2 className="board-title">{title}</h2>
      <table className="board-table">
        <thead className="board-header">
          <tr>
            <th scope="col"><strong>#</strong></th>
            <th scope="col"><strong>Name</strong></th>
            <th scope="col"><strong>Institution</strong></th>
            <th scope="col"><strong>Location</strong></th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index} className="board-row">
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
      {renderTable(InternationalData, "International Board Members", "international-board")}
      {renderTable(IndianData, "Indian Board Members", "indian-board")}
    </div>
  );
};

export default BoardOfMember;
