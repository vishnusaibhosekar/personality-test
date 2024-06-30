// components/Result.js
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const ResultContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ResultTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const ResultText = styled.p`
  color: #34495e;
  margin-bottom: 1.5rem;
`;

const VideoContainer = styled.div`
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
`;

const Result = ({ answers }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Attempt to play the video automatically
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay was prevented:", error);
      });
    }
  }, []);

  return (
    <ResultContainer>
      <ResultTitle>Your Personality Test Result</ResultTitle>
      <ResultText>
        Based on your answers, here's your personality video:
      </ResultText>
      <VideoContainer>
        <video
          ref={videoRef}
          width="100%"
          controls
          autoPlay
          muted={false}
          playsInline
        >
          <source
            src={process.env.PUBLIC_URL + "/videos/personality_result.mp4"}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </VideoContainer>
    </ResultContainer>
  );
};

export default Result;
