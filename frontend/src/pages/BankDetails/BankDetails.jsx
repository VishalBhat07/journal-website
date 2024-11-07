import React from "react";
import "./BankDetails.css"; // Ensure this CSS file is in the same directory

const BankDetails = () => {
  return (
    <div className="bank-details">
      <h2 className="animated-header">
        <strong>Bank Details</strong>
      </h2>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td><strong>Account Name:</strong></td>
            <td>ASM India National Council Trust</td>
          </tr>
          <tr>
            <td><strong>Bank Name:</strong></td>
            <td>HDFC Bank</td>
          </tr>
          <tr>
            <td><strong>Account Number:</strong></td>
            <td>50200087378860</td>
          </tr>
          <tr>
            <td><strong>IFSC Code:</strong></td>
            <td>HDFC0001232</td>
          </tr>
          <tr>
            <td><strong>PAN Card no.:</strong></td>
            <td>AADAA9068L</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BankDetails;
