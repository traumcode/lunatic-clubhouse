import React, {useState, useEffect} from "react";

const Video = (props) => {
	const [index, setIndex] = useState(1);
	const [src, setSrc] = useState(props.videos[1])
	console.log(src)

	useEffect(() => {
		let video = document.getElementById('landingVideo');
		video.play();
	}, [src])

	return (
		<div>
			<video id='landingVideo' autoPlay loop muted className='landing-video'>
				<source src={src} type='video/mp4' id='landingVideoSource'/>
				<source src={index === 1 ? props.videos[0] : props.videos[1]} type='video/mp4' id='landingVideoSource'/>
			</video>
		</div>
	);
};

export default Video;

