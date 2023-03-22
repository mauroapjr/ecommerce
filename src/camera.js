import React from "react";

function Camera(props) {
  return (
    <div className="app">
      <div className="app__container">
        <video
          height={props.HEIGHT}
          width={props.WIDTH}
          muted
          autoPlay
          className="app__videoFeed"
        ></video>
      </div>
      <div className="app__input">
        {props.playing ? (
          <button onClick={props.stopVideo}>Stop</button>
        ) : (
          <button onClick={props.startVideo}>Start</button>
        )}
      </div>
    </div>
  );
}

export default Camera;