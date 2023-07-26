import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Tem1 from "../../../../Assets/images/Template1.png";
import Tem2 from "../../../../Assets/images/Template2.png";
import Tem3 from "../../../../Assets/images/Template3.png";
import Grid from "@mui/material/Grid";
import "./resumebuilder.css";

function Resumebuilder() {
  return (
    <section className="section section-gallery ">
      <div className="container">
        <h4 className=" resume-title title-text">
          <span className="green-text darken-1 title-text">Resume </span>{" "}
          Builder
        </h4>
        <Grid direction="rows" container spacing={3}>
          <Grid item xs={12} sm={2}>
            <Grid item xs={12} sm={2}>
              <img className="image-resume" src={Tem1} alt="" />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={2}>
            <img className="image-resume" src={Tem2} alt="" />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Grid item xs={12} sm={2}>
              <img className="image-resume" src={Tem3} alt="" />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>
              <h6 className="title-resume">
                With a resume builder, you don't have to worry about the nitty
                gritty of resume creation, like font selection, layout,
                formatting, etc. All you have to do is pick a resume template,
                fill it in, and then you're ready to start applying for jobs!
                <br />
                <br />
                We provide three different templates. Standard, Elegent, Simple
              </h6>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default Resumebuilder;
