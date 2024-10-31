import React from 'react';
import './BankDetails.css'; // Make sure to create a CSS file for styles

const BankDetails = () => {
  return (
    <div className="bank-details">
      <h2>Bank Details</h2>
      <ul>
        <li>
          <strong>Bank Name:</strong> Example Bank
        </li>
        <li>
          <strong>Account Number:</strong> 1234567890
        </li>
        <li>
          <strong>IFSC Code:</strong> EXMP0001234
        </li>
        <li>
          <strong>Branch:</strong> Example Branch
        </li>
        <li>
          <strong>Contact Number:</strong> (123) 456-7890
        </li>
      </ul>
    </div>
  );
};

export default BankDetails;
