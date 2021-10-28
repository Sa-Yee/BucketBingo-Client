import React, { useEffect } from 'react';

import stone1 from '../../images/stone/stone05.svg';
import stone2 from '../../images/stone/stone06.svg';
import stone3 from '../../images/stone/stone07.svg';

import listpaper from '../../images/etc/listpaper.png';
import bingo from '../../images/etc/bingo.png';
import ranking from '../../images/etc/ranking.png';

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FirstHome = (): JSX.Element => {

	function initSlider() {
		const sliderContainer = document.getElementById('slider');
		const paginationContainer = document.createElement('div');

		paginationContainer.className = 'pagination';
		sliderContainer?.prepend(paginationContainer);

		const slideCount = document.querySelectorAll('.slide').length;

		for (let i = slideCount; i > 0; i--) {
			let radioBtn = document.createElement('input');
			radioBtn.type = 'radio';
			radioBtn.name = 'slide-radio';
			radioBtn.className = 'slide-radio';
			radioBtn.id = `slide-radio-${i}`;

			if (i === 1) radioBtn.checked = true;

			sliderContainer?.prepend(radioBtn);

			let label = document.createElement('label');
			label.setAttribute('htmlFor', `slide-radio-${i}`);
			//label.innerHTML = `${i}`;

			paginationContainer.prepend(label);
		}

		let autoRun = setInterval(changeSlide, 6000);
		paginationContainer.addEventListener('mouseenter', () => clearTimeout(autoRun));
		paginationContainer.addEventListener('mouseleave', () => autoRun = setInterval(changeSlide, 6000));
	}

	function changeSlide() {
		const radioButtons = document.querySelectorAll('.slide-radio');
		const radioButtonsCopy = [];

		for (let i = 0; i < radioButtons.length; i++) {
			radioButtonsCopy.push(radioButtons[i] as HTMLInputElement);
		}

		const currentIndex: number = radioButtonsCopy.findIndex((rb: HTMLInputElement) => rb.checked);
		radioButtonsCopy[(currentIndex + 1) % radioButtonsCopy.length].checked = true;
	}


	useEffect(() => {
		initSlider();
	}, []);


	const handleBtnPrePage = () => {
		const radioButtons = document.querySelectorAll('.slide-radio');
		const radioButtonsCopy = [];

		for (let i = 0; i < radioButtons.length; i++) {
			radioButtonsCopy.push(radioButtons[i] as HTMLInputElement);
		}

		const currentIndex: number = radioButtonsCopy.findIndex((rb: HTMLInputElement) => rb.checked);
		radioButtonsCopy[(currentIndex - 1) % radioButtonsCopy.length].checked = true;
	}

	return (
		<div className='firsthome'>
			<div className='firsthome-slider' id='slider'>

				<FontAwesomeIcon icon={faChevronLeft} className='home-button' onClick={handleBtnPrePage}/>
				<div className='slide' id='slide-1'>
					<div className='slide-content'>
						<img src={listpaper} alt='listpaper' className='listpaper' />
						<div>
							<h1>매해 다짐하는 목표들을<br />
								이루어 낸 적이 있으신가요?</h1>
							<h5>'올해는 꼭 해야지!'라며 매해 다짐했던 목표들을</h5>
							<h5>버킷 빙고와 함께 달성해보세요.</h5>
						</div>
					</div>
					<div className='slide-image'>
						<img src={stone1} alt='background' className='listpaper-bg' />
					</div>
				</div>

				<div className='slide' id='slide-2'>
					<div className='slide-content'>
						<img src={bingo} alt='listpaper' className='slide-bingo' />
						<div>
							<h1>목표로 채운 각 빙고칸에<br />
								달성도를 체크할 수 있어요.</h1>
							<h5>목표 달성까지 얼마나 남았는지 확인하며</h5>
							<h5>쉽게 포기하지 않을 수 있는 자극이 될 수 있어요.</h5>
						</div>
					</div>
					<div className='slide-image'>
						<img src={stone2} alt='background' />
					</div>
				</div>

				<div className='slide' id='slide-3'>
					<div className='slide-content'>
						<img src={ranking} alt='listpaper' className='slide-ranking' />
						<div>
							<h1>전체 랭킹을 체크하며<br />
								나의 의지도 확인해보세요.<br />
							</h1>
							<h5>다른 사람은 얼마나 빠르게 목표를 달성했는지 체크하며</h5>
							<h5>의지를 재다짐할 수 있어요.</h5>
						</div>
					</div>
					<div className='slide-image'>
						<img src={stone3} alt='background' />
					</div>
				</div>
				<FontAwesomeIcon icon={faChevronRight} className='home-button' onClick={changeSlide}/>
			</div>
		</div>
	);
};

export default FirstHome;;