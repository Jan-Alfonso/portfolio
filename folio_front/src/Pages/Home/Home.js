import React from "react";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";
import fb from "../../assets/facebook.png";
import ig from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import skype from "../../assets/skype.png";
import gmail from "../../assets/gmail.png";
import "./Home.css";


function Home() {
  return (
    <div>
      <div className="container-fluid d-flex">
      <div className="d-flex flex-row justify-content-center">
        <div className="d-flex flex-row">
        <div className="col-sm-12 my-5" id="ImageBox">
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
        </div>
        </div>


        <div
        id="IntroDescription"  
        className="d-flex flex-column col-md-4 col-sm-12 mt-md-auto mt-sm-1 my-auto pt-5 pb-5"
        >

        <h2 className="text-light justify-content-center fs-sm-6"><b className="text-warning">Hello!</b> I'm Jan Meriss Alfonso</h2>
          <p className="fs-10 text-light">
            I am a skilled virtual assistant and graphic designer 
            with 4 years of experience in the industry.
          </p>
            <div class="d-flex flex-row justify-content-between">
            <a href="https://www.facebook.com/potching.a06" className="Icons" target="_blank" rel="noreferrer"><img src={fb} class="w-100 h-100" alt="FB"/></a>
            <a href="mailto:janmerissalfonso@gmail.com" className="Icons" target="_blank" rel="noreferrer"><img src={gmail} class="w-100 h-100" alt="Gmail"/></a>
            <a href="mailto:janmerissalfonso@gmail.com" className="Icons" target="_blank" rel="noreferrer"><img src={skype} class="w-100 h-100" alt="Skype"/></a>
            <a href="https://www.instagram.com/meriss_alfonso/" className="Icons" target="_blank" rel="noreferrer"><img src={ig} class="w-100 h-100" alt="instagram"/></a>
            <a href="https://www.linkedin.com/in/jan-meriss-alfonso-a882b51b6" className="Icons" target="_blank" rel="noreferrer"><img src={linkedin} class="w-100 h-100" alt="linkedin"/></a>
        </div>
        </div>
      

      </div>
    </div>
    </div>
  );
}

export default Home;
