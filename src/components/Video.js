import React, {useState, useEffect } from "react";

const Video = (props) => {
	const [src] = useState(props.videos[3])

	useEffect(() => {
		let element = document.getElementById('landingVideo')
		element.addEventListener("canplay", function () {
			setTimeout(function () {
				element.play()
				element.currentTime = 10;
			}, 9900)
		})
		element.play()
	}, [])

	return (
		<div
			dangerouslySetInnerHTML={{
			__html: `
					<video id="landingVideo" class="app__backgroundVideo landing-video" playsinline autoplay loop muted>
      					<source src=${src} type="video/webm" id='landingVideoSource'/>
      						Your browser does not support the video tag.
					</video>`,
		}}
		/>
	);
};

export default Video;

