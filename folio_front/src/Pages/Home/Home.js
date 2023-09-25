import React from "react";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";
import fb from "../../assets/facebook.png";
import ig from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import skype from "../../assets/skype.png";
import gmail from "../../assets/gmail.png";
import "./Home.css";
import { Grid } from "@mui/material";

function Home() {

  return (
    <div>
      <Grid container spacing={2}>
      <Grid item xs={12} md={12} sx={{
        display: "flex",
        flexDirection: {xs: "column", md:"row"}
        }}
        >
        <Grid
        sx={{
          display: "flex",
          justifyContent: {xs: "center"},
          marginLeft: {md: "15%"}
        }}
        >
        <Grid id="ImageBox">
        <a href="https://www.facebook.com/potching.a06" target="_blank" rel="noreferrer">
          <div class="bg-image hover-overlay"/>
          <img
          src={profile}
          alt="ProfilePicture"
          className="d-block img-fluid mx-auto"
          id="ProfPic"/>
        </a>

        <a href="https://www.instagram.com/meriss_alfonso/" target="_blank" rel="noreferrer">
          <img
          src={logo}
          alt="Logo"
          className="mx-auto d-block img-fluid"
          id="Logo"/>
        </a>
        </Grid>
        </Grid>


        <Grid item xs={12}
        id="IntroDescription"
        >

          <h2 className="text-light justify-content-center fs-sm-6"><b className="text-warning">Hello!</b> I'm Jan Meriss Alfonso</h2>
          <p className="fs-10 text-light">
            I am a skilled virtual assistant and graphic designer 
            with 4 years of experience in the industry.
          </p>

            <Grid sx={{
              display: "flex",
              justifyContent: "space-between"
            }} id="des-icons">
            <a href="https://www.facebook.com/potching.a06" className="Icons" target="_blank" rel="noreferrer"><img src={fb} class="w-100 h-100" alt="FB"/></a>
            <a href="mailto:janmerissalfonso@gmail.com" className="Icons" target="_blank" rel="noreferrer"><img src={gmail} class="w-100 h-100" alt="Gmail"/></a>
            <a href="mailto:janmerissalfonso@gmail.com" className="Icons" target="_blank" rel="noreferrer"><img src={skype} class="w-100 h-100" alt="Skype"/></a>
            <a href="https://www.instagram.com/meriss_alfonso/" className="Icons" target="_blank" rel="noreferrer"><img src={ig} class="w-100 h-100" alt="instagram"/></a>
            <a href="https://www.linkedin.com/in/jan-meriss-alfonso-a882b51b6" className="Icons" target="_blank" rel="noreferrer"><img src={linkedin} class="w-100 h-100" alt="linkedin"/></a>
            </Grid>

        </Grid>
      

      </Grid>
    </Grid>
    </div>
  );
}

export default Home;
