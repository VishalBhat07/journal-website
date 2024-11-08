import React from 'react';
import './AdvertisementTariff.css';
import AdvertisementImage from "../../assets/AdvertisementImage.png";

function AdvertisementTariff() {
  return (
    <div className="container my-4">
      <h3>Advertisement Tariff</h3>
      <p>
        Materials and Processing, a peer-reviewed journal from ASM India National Council (INC), 
        is available both online and in print as a biannual open-access publication. 
        Advertisements in the journal are published in color. For tariff details, please contact us:
      </p>
      <div className="content-wrapper">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Page</th>
              <th scope="col">Tariff (Rs.)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>F2- Inside Left Spread</td>
              <td>20,000</td>
            </tr>
            <tr>
              <td>B1- Back Cover</td>
              <td>20,000</td>
            </tr>
            <tr>
              <td>B2- Inside Right Spread</td>
              <td>20,000</td>
            </tr>
            <tr>
              <td>PF3- Premium inside Front Cover</td>
              <td>15,000</td>
            </tr>
            <tr>
              <td>PF4- Premium inside Front Cover</td>
              <td>15,000</td>
            </tr>
            <tr>
              <td>PB3- Premium inside Back Cover</td>
              <td>15,000</td>
            </tr>
            <tr>
              <td>PB4- Premium inside Back Cover</td>
              <td>15,000</td>
            </tr>
            <tr>
              <td>Inside Full Page</td>
              <td>6,000</td>
            </tr>
          </tbody>
        </table>
        <img src={AdvertisementImage} alt="Advertisement" className="advertisement-image" />
      </div>
    </div>
  );
}

export default AdvertisementTariff;
