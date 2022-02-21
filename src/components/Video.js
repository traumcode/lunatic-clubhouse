import React, {useState, useEffect } from "react";
import * as video from "react-dom/test-utils";

const Video = (props) => {
	const [src] = useState(props.videos[2])

	useEffect(() => {
		let element = document.getElementById('landingVideo')
		element.addEventListener("canplay", function () {
			setTimeout(function () {
				element.play()
				element.currentTime = 10;
			}, 9900)
		})
	}, [])

	return (
		<div
			dangerouslySetInnerHTML={{
			__html: `
					<video id="landingVideo" class=" landing-video" autoplay loop muted>
      					<source src=${src} type="video/mp4" id='landingVideoSource'/>
      						Your browser does not support the video tag.
					</video>`,
		}}
		/>
	);
};

export default Video;

