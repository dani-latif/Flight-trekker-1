import React, { Fragment } from "react";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import Search from "./Search/Search";
import Profiles from "./Profiles/Profiles";
import Apply from "./apply/apply";
import Resumebuilder from "./ResumeBuilder/resumebuilder";
import Contact from "./Contact/Contact";
import { BrowserRouter as Router } from "react-router-dom";
import Jobs from "./Jobs/Jobs";
import Companies from "./Companies/Companies";

function landing() {
  return (
    <Router>
      <Fragment>
        <Banner />
        <Search />
        {/* <Companies />
        <Jobs />
        <Apply />
        <Profiles />
        <Resumebuilder /> */}
        <Footer />
      </Fragment>
    </Router>
  );
}

export default landing;
