import React, { Component, useEffect, useState} from "react";
import "./Search.css";

import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { TextField } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from "axios";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { Container } from "react-bootstrap";



function Search() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
    .get("http://localhost:3000/api/flights")
    .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let history = useHistory();
  return (
    <section id="search" className=" green  white-text  ">
      <div className="container">
        <div className="row">
        <CardContent>
      <Typography variant="h5" component="div">
        Flights
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        
      </Typography>
      <Grid direction="rows" container spacing={0}>
      {data.map((jobs) => {
        return (
          // <Grid item xs={12} sm={4}>
          <Container style={{display: 'flex',
          flexDirection: 'row'
          }} >

            <Card className="card-jobs">
                <Typography
                  maxLength={20}
                  gutterBottom
                  component="div"
                  style={{width: "20%"}}
                  >
                  <a className="title-jobs" href={jobs.url}>
                    Flying From
                    <br/>
                    {jobs.flyingFrom}{" "}
                  </a>
                </Typography>
                <Typography
                  gutterBottom
                  className="title-jobss"
                  component="div"
                  style={{width: "20%"}}

                  >
                  Flying To
                  <br/>
                  {jobs.flyingTo}
                </Typography>
                <Typography
                  maxLength={20}
                  gutterBottom
                  component="div"
                  style={{width: "20%"}}

                  >
                  <a className="title-jobs" href={jobs.url}>
                    Departure
                    <br/>
                    {Date(jobs.departureDate)}{" "}
                  </a>
                </Typography>
                <Typography
                  gutterBottom
                  className="title-jobss"
                  component="div"
                  style={{width: "20%"}}

                  >
                  Return
                  <br/>
                  {Date(jobs.returnDate)}
                </Typography>
            </Card>
            </Container>
          // </Grid>
        );
      })}
    </Grid>
    <Button style={{marginTop: "40px", marginLeft: "500px" , backgroundColor: 'green', color: 'white'}} >Book Now</Button>
    </CardContent>

          {/* <Button
            className="btn-search"
            color="inherit"
            onClick={() => {
              history.push("/search");
              window.location.reload(false);
            }}
          >
            <span className="search-text">Search</span>
          </Button> */}
        </div>
      </div>
    </section>
  );
}

export default Search;
