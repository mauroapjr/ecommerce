import Camera from './camera';

import React, { useState } from 'react';


function SharedCameraLayout() {
  const [playing, setPlaying] = useState(false);

	const HEIGHT = 500;
	const WIDTH = 500;

	const startVideo = () => {
		setPlaying(true);
		navigator.getUserMedia(
			{
				video: true,
			},
			(stream) => {
				let video = document.getElementsByClassName('app__videoFeed')[0];
				if (video) {
          video.srcObject = stream;
      	}
			},
			(err) => console.error(err)
		);
	};

	const stopVideo = () => {
		setPlaying(false);
		let video = document.getElementsByClassName('app__videoFeed')[0];
		video.srcObject.getTracks()[0].stop();
	};
  

  return (
    <>
    <div>
      <Camera HEIGHT={HEIGHT} WIDTH={WIDTH} startVideo={startVideo} stopVideo={stopVideo} playing={playing} />
    </div>
     
    </>
  );
};
export default SharedCameraLayout;