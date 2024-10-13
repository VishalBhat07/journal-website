import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start'>
      {/* Social Links Section */}
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span style={{ color: '#333' }}>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/' aria-label="Facebook" className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='https://twitter.com/' aria-label="Twitter" className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='https://www.google.com/' aria-label="Google" className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='https://www.instagram.com/' aria-label="Instagram" className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='https://www.linkedin.com/' aria-label="LinkedIn" className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='https://github.com/' aria-label="GitHub" className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      {/* Main Content Section */}
      <section className='text-muted'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            {/* Company Info */}
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" style={{ color: 'blue' }} />
                RVCE Journal
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            {/* Useful Links */}
            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>Pricing</a>
              </p>
              <p>
                <a href='#!' className='text-reset'>Settings</a>
              </p>
              <p>
                <a href='#!' className='text-reset'>Journals</a>
              </p>
              <p>
                <a href='#!' className='text-reset'>Help</a>
              </p>
            </MDBCol>

            {/* Contact Information */}
            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                RVCE, Bengaluru.
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                sample@rvce.edu.in
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 <b>RVCE</b> All copyrights reserved.
      </div>
    </MDBFooter>
  );
}

export default Footer;
