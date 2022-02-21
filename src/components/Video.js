import React, {useState, useEffect } from "react";

const Video = (props) => {
	const [src, setSrc] = useState(props.videos[1])


	return (
		<div
			dangerouslySetInnerHTML={{
			__html: `
					<video class="app__backgroundVideo landing-video" autoplay loop muted playsinline>
      					<source src=${src} type="video/mp4" id='landingVideoSource'/>
      						Your browser does not support the video tag.
					</video>`,
		}}
		/>
	);
};

export default Video;

