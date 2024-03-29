import React from 'react';
import vg from "../assets/2.webp";
import{
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram
} from "react-icons/ai";

const Home = () => {
  return (
    <>
    <div className='home' id="home">
    <main>
        <h1>Techstart</h1>
        <p>Solution to all your problem</p>
    </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />
   

    <div>
        <p>
        We are your one and only solution to the tech problems you face every day.
        We are leading tech company whose aim is to increase the problem solving ability in children.
        </p>
    </div>
    </div>

    <div className='home3' id="about">
      <div>
        <h1>Who we are?</h1>
        <p>
          A basic Endorsement site model
        </p>
      </div>
    </div>

    {/* home4 start */}

    <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>
              <a href="https://www.youtube.com/channel/UCIJpBtfud-fLcATMxSaaAiw" target={"blank"}>
                Youtube
              </a>
              </p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>
                <a href="https://www.instagram.com/panjiyar_aditya/" target={"blank"}>
                Instagram
              </a>
              </p>
            </div>
          </article>
        </div>
      </div>
    {/* home 4 nds */}
    
    </>

  );
};

export default Home;