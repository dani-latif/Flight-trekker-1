import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./Footer.css";
import { Container } from "@mui/material";

function Footer() {
  return (
    <MDBFooter color="green" className="font-small pt-4 mt-4">
      <Container maxWidth="md">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title-footer">AcquireJob</h5>
            <p className="footer">Jobs are ready you just need to search.</p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title-foot footer">Links</h5>
            <ul className="title-foote">
              <li className="list-unstyled footer">
                <a className="footer" href="https://github.com/Monam-Ahmed">
                  Github
                </a>
              </li>
              <li className="list-unstyled footer">
                <a className="footer" href="#!">
                  LinkedIn
                </a>
              </li>
              <li className="list-unstyled footer">
                <a className="footer" href="#!">
                  Stack Overflow
                </a>
              </li>
              <li className="list-unstyled footer">
                <a className="footer" href="#!">
                  Gmail
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </Container>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a className="footer" href="https://github.com/Monam-Ahmed">
            {" "}
            AcquireJob{" "}
          </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
