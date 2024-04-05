// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

function VideoPart() {
  return (
    <DIV>
      <section className="py-0 ">
        <div className=" mx-auto">
          <div className="text-center opacity-1 transform translate-y-16 transition duration-1000 ease-in-out  video_outer_div">
            <span
              className="font-medium block  from-sky-blue to-pink bg-gradient-to-r from-blue-600 via-pink-500 to-pink-600 text-transparent bg-clip-text mt-3 "
              style={{
                marginTop: "50px",
                letterSpacing: "1px",
                fontSize: "14px",
              }}
            >
              WHAT IS PRANIC HEALING
            </span>
            <h3
              className="font-semibold"
              style={{
                marginTop: "10px",
                fontSize: "2.22rem",
                lineHeight: "4.2rem",
                marginBottom: "2.5rem",
              }}
            >
              A Way Of Life
            </h3>
            <p className="" style={{ marginBottom: "14px", color: "#908182" }}>
              Prana is the Sanskrit word for life force. It is called ‘chi’ in
              China and ‘ki’ in Japan.
            </p>
            <p className=" w-[70%] m-auto" style={{ color: "#908182" }}>
              Pranic Healing is a revolutionary and comprehensive system of
              natural healing techniques that uses prana to treat illness. It is
              a synthesis of ancient, esoteric healing methods that have been
              rediscovered, researched and tested over decades with proven
              success by the founder of Modern Pranic Healing, Grand Master Choa
              Kok Sui
            </p>
          </div>
          <div
            className="grid place-items-center wow animate__fadeIn mt-14"
            style={{
              visibility: "visible",
              animationName: "fadeIn",
              marginBottom: "54px",
              // maxWidth: "100vw",
            }}
          >
            {/* <video src="https://www.youtube.com/watch?v=7oWnN8F56LE&t=117s" className="h-full w-full rounded-lg" style={{width:'1080px'}} controls autoPlay="true">  */}

            <div className="video_content">
              <iframe
                className="video"
                width="auto"
                height="auto"
                src="https://www.youtube.com/embed/7oWnN8F56LE?si=jNyjrwazb02aAC9A"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>

            {/* </video> */}
          </div>
        </div>
      </section>
    </DIV>
  );
}

export default VideoPart;

const DIV = styled.div`
  @media only screen and (max-width: 399px) {
    Styles for devices up to 768px wide .video_outer_div {
      margin-top: -70px;
      margin-bottom: 100px;
    }

    .video_content {
      width: 100%;
      padding: 5px;
      margin-left: 15px;
    }
  }

  @media only screen and (max-width: 400px) {
    /* Styles for devices up to 768px wide */
    .video_outer_div {
      margin-top: -70px;
      margin-bottom: 100px;
    }
    .video_content {
      width: 100%;
      padding: 5px;
      margin-left: 56px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    Styles for devices between 768px and 1024px wide .grid {
      margin-top: 80px;
    }
    .video_content {
      width: 100vw;
      height: 100vh;
      padding: 5px;
    }
    .video {
      width: 70vw;
      height: 50vh;
    }
  }

  @media only screen and (min-width: 1024px) {
    Styles for devices larger than 1024px wide .video_outer_div {
      margin-top: -70px;
      margin-bottom: 100px;
    }
    .video_content {
      margin-top: 50px;
    }
    .video {
      width: 70vw;
      height: 50vh;
    }
  }
`;
