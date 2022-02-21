import React, {useState, useEffect } from "react";

const Video = (props) => {
	const [src] = useState(props.videos[2])

	useEffect(() => {
		let element = document.getElementById('landingVideo')
		let count = 0
			element.addEventListener("canplay", function () {
				if(count === 0) {
					setTimeout(function () {
						element.setAttribute('src', props.videos[1])
						count = 1
					}, 1900 )
				}
				// if(count === 0)
				// 	setTimeout(function () {
				// 		element.currentTime = 10;
				// 		count = 1
				// 	}, 1900 )

			})




	}, [])

	return (
		<div
			dangerouslySetInnerHTML={{
			__html: `
					<video id="landingVideo" class="app__backgroundVideo landing-video" playsinline autoplay loop muted>
      					<source src=${src} type="video/mp4" id='landingVideoSource'/>
      						Your browser does not support the video tag.
					</video>`,
		}}
		/>
	);
};

export default Video;

