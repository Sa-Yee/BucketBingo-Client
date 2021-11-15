import React from 'react';
import Introduce from '../components/aboutus/Introduce';
import Map from '../components/aboutus/Map';

const AboutUs = (): JSX.Element => {
	return (
		<div className='aboutus'>
			<h2>Team | Sa-Yee</h2>
			<div>
				<Introduce />
				<Map />
			</div>
		</div>
	);
};

export default AboutUs;