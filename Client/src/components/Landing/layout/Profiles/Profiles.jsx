import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Monam from "../../../../Assets/images/Monam.jpg";
import Shahzeb from "../../../../Assets/images/shahzeb.jpg";
import Osama from "../../../../Assets/images/Osama.jpg";
import Abdul from "../../../../Assets/images/Abdul.jpg";
import "./profiles.css";

function Employers() {
  return (
    <section
      id="explore"
      className="section section-icons grey lighten-4 center"
    >
      <div className="container">
        <div className="row">
          <h4 className="employer-title title-text">
            <span className="green-text darken-1 title-text">Featured</span>{" "}
            Profiles
          </h4>

          <Grid container spacing={2}>
            <Grid item xs >
              <Card className="card-employer" >
                <CardMedia
                  component="img"
                  className="image-employer"
                  image={Monam}
                  alt="Monam Ahmed "
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Monam Ahmed
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    Wahand
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Group Leader
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs >
              <Card className="card-employer" >
                <CardMedia
                  component="img"
                  className="image-employer"
                  image={Abdul}
                  alt="Monam Ahmed "
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Abdul Rahman
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    Sajid
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Group Member
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs >
              <Card className="card-employer" >
                <CardMedia
                  component="img"
                  className="image-employer"
                  image={Osama}
                  alt="Osama Malik "
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Muhammad
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    Osama Malik
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Group Member
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs >
              <Card className="card-employer" >
                <CardMedia
                  component="img"
                  className="image-employer"
                  image={Shahzeb}
                  alt="Muhammad Shahzeb "
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Muhammad
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    Shahzeb
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Group Member
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
}

export default Employers;
