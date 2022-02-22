import React, { useEffect, useState } from "react";


const Video = (props) => {
	const [ videoSrc1 ] = useState(props.videos[0])
	const [ videoSrc2 ] = useState(props.videos[1])

	useEffect(() => {
		let element2 = document.getElementById("landingVideo2")

		setTimeout(() => {
			element2.getAttribute('style')
			element2.setAttribute("style", "display: none")
		}, 10000)
	}, [])

	return (
		<div
			dangerouslySetInnerHTML={{
				__html: `
					<video id="landingVideo" preload="metadata" class="app__backgroundVideo landing-video" playsinline autoplay loop muted>
      					<source src=${videoSrc1} type="video/mp4" id='landingVideoSource'/>
      						Your browser does not support the video tag.
					</video>
					<video id="landingVideo2" preload="metadata" class="app__backgroundVideo landing-video" playsinline autoplay loop muted>
      					<source src=${videoSrc2} type="video/mp4" id='landingVideoSource2'/>
      						Your browser does not support the video tag.
					</video>`,
			}}
		/>
	);
};

export default Video;

