import React from "react";
import "./BankDetails.css"; // Ensure this CSS file is in the same directory

const BankDetails = () => {
  return (
    <div className="bank-details">
      <h2 className="animated-header">
        <strong>Bank Details</strong>
      </h2>
      <ul>
        <li>
          <strong>Account Name:</strong> 
          ASM India National Council Trust
        </li>
        <li>
          <strong>Bank Name:</strong> 
          HDFC Bank
        </li>
        <li>
          <strong>Account Number:</strong> 50200087378860
        </li>
        <li>
          <strong>IFSC Code:</strong> HDFC0001232
        </li>
        <li>
          <strong>PAN Card no.:</strong> AADAA9068L
        </li>
      </ul>
    </div>
  );
};

export default BankDetails;
