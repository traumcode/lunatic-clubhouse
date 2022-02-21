import React, {useState, useEffect } from "react";

const Video = (props) => {
	const [src] = useState(props.videos[0])

	useEffect(() => {
		let element = document.getElementById('landingVideo')
		element.addEventListener("loadedmetadata", function () {
			if (element.buffered.length === 0) return
			const buffered = element.buffered.end(0) - element.buffered.start(0)
			console.log(` ${buffered}`)
		})
	}, [])

	return (
		<div
			dangerouslySetInnerHTML={{
			__html: `
					<video id="landingVideo" preload="metadata" class="app__backgroundVideo landing-video" playsinline autoplay loop muted>
      					<source src=${src} type="video/mp4" id='landingVideoSource'/>
      						Your browser does not support the video tag.
					</video>`,
		}}
		/>
	);
};

export default Video;

