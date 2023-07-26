import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import { useHistory } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import "./Navbar.css";
import Logo from "../../../../Assets/images/logo.png";

const SmoothScroll = () => {
  let history = useHistory();
  return (
    <section>
      <div className="navbar-fixed">
        <nav className="green">
          <div className="container">
            <div className="nav-wrapper">
              <Link href="/" className="brand-logo" underline="none">
                <div class="logo-image">
                  <img className="logo" src={Logo} alt="logo" />
                </div>
              </Link>

              <AnchorLink
                href="!#"
                data-target="mobile-demo"
                className="sidenav-trigger"
              >
                <i className="material-icons">menu</i>
              </AnchorLink>

              <ul className="right hide-on-med-and-down">
                <li>
                  <Button
                    color="inherit"
                    onClick={() => {
                      history.push("/search");
                      window.location.reload(false);
                    }}
                  >
                    <ul>
                      <li>
                        <SearchIcon className="si" />
                      </li>
                      <br />
                      <li className="ft">Search</li>
                    </ul>
                  </Button>
                </li>
                <li>
                  <Button
                    color="inherit"
                    onClick={() => {
                      history.push("/login");
                      window.location.reload(false);
                    }}
                  >
                    <ul>
                      <li>
                        <PersonIcon className="pi" />
                      </li>
                      <br />
                      <li className="ft">Job Seeker</li>
                    </ul>
                  </Button>
                </li>
                <li>
                  <Button
                    color="inherit"
                    onClick={() => {
                      history.push("/companylogin");
                      window.location.reload(false);
                    }}
                  >
                    <ul>
                      <li>
                        <WorkIcon className="pi" />
                      </li>
                      <br />
                      <li className="ft">Employer</li>
                    </ul>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <ul className="sidenav" id="mobile-demo">
        <li>
          <Button
            color="inherit"
            onClick={() => {
              history.push("/login");
              window.location.reload(false);
            }}
          >
            Job Seeker
          </Button>
        </li>
        <li>
          <Button
            color="inherit"
            onClick={() => {
              history.push("/login");
              window.location.reload(false);
            }}
          >
            Employer
          </Button>
        </li>
      </ul>
    </section>
  );
};

function Navbar() {
  return (
    <section>
      <SmoothScroll />
    </section>
  );
}

export default Navbar;
