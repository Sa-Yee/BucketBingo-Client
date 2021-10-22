import React from 'react';
import wave from '../../images/wave/wave001.svg';

const Landing = (): JSX.Element => {
  let img = new Image();

	return (
		<>
      <img src={wave} alt=''/>
		</>
	);
};

export default Landing;