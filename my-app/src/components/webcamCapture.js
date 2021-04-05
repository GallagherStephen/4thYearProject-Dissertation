import React from "react";
import Webcam from "react-webcam";

class WebcamCapture extends React.Component {

    render() {
      const videoConstraints = {
        facingMode: "user"
      };
  
      return <Webcam videoConstraints={videoConstraints} />;
    }
  }

  export default WebcamCapture;