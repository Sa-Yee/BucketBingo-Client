import React from 'react';

import stone1 from '../../images/stone/stone01.svg';
import stone2 from '../../images/stone/stone02.svg';
import stone3 from '../../images/stone/stone03.svg';
import stone4 from '../../images/stone/stone04.svg';

const FirstHome = (): JSX.Element => {

	// function changeSlide(){
	// 	let btn = document.querySelectorAll('.slide-radio')
  //   // radio 버튼 지정  
	// 	let radioButtons = [];

	// 	for(let i=0; i<btn.length; i++) {
	// 		radioButtons.push(btn[i] as HTMLInputElement);
	// 	}

  //   const currentIndex = radioButtons.findIndex((rb:HTMLInputElement) => rb.checked);
  //   //라디오 버튼 체크하기
	// 	// console.log(radioButtons[(currentIndex + 1) % radioButtons.length])
  //   radioButtons[(currentIndex + 1) % radioButtons.length].checked = true;
	// }

	// function initSlider(){
  //   const sliderContainer = document.querySelector('.firsthome-slider');
  //   const paginationContainer = document.createElement('div');

  //   paginationContainer.className = 'pagination';
  //   sliderContainer?.prepend(paginationContainer);

  //   //슬라이드 개수 파악
  //   const slideCount = document.querySelectorAll('.slide').length;

  //   for(let i = slideCount; i> 0; i--){
  //       let radioBtn = document.createElement('input');
  //       radioBtn.type = 'radio';
  //       radioBtn.name = 'slide-radio';
  //       radioBtn.className = 'slide-radio';
  //       radioBtn.id = `slide-radio-${i}`;

  //       if(i === 1) radioBtn.checked = true;
  //       sliderContainer?.prepend(radioBtn);
  //       //label  생성하기
  //       let label = document.createElement('label');
  //       label.setAttribute('for', `slide-radio-${i}`);
  //       //label.innerHTML = i;
  //       paginationContainer.prepend(label);
  //   }

  //   //자동 슬라이드
  //   let autoRun = setInterval(changeSlide, 5000);
  //   paginationContainer.addEventListener('mouseenter', () => clearTimeout(autoRun));
  //   paginationContainer.addEventListener('mouseleave', () => autoRun = setInterval(changeSlide, 5000));
	// }

	// initSlider();
	// let autoSlider = () : void => {

	// 	for(let i=0; i<4; i++) {


	// 		let label = document.createElement('label');
	// 		label.setAttribute('for', `slider-radio-${i}`)
	// 		label.innerHTML = i;
	// 		paginationContainer.prepend(lable);
	// 	}
	// };

	// autoSlider();

	return (
		<div className='firsthome'>
			<div className='firsthome-slider' id='slider'>

				<input type='radio' name='slider-radios' className='slide-radio' defaultChecked id='slider-radio-1'/>
				<input type='radio' name='slider-radios' className='slide-radio' id='slider-radio-2' />
				<input type='radio' name='slider-radios' className='slide-radio' id='slider-radio-3' />
				<input type='radio' name='slider-radios' className='slide-radio' id='slider-radio-4' />

				<div className='pagination'>
					<label htmlFor='slider-radio-1'>1</label>
					<label htmlFor='slider-radio-2'>2</label>
					<label htmlFor='slider-radio-3'>3</label>
					<label htmlFor='slider-radio-4'>4</label>
				</div>

				<div className='slide' id='slide-1'>
					<div className='slide-content'>
						<h1>매해 다짐하는 목표들을</h1>
						<h1>이루어 낸 적이 있으신가요?</h1>
						<a href=''></a>
					</div>
					<div className='slide-image'>
						<img src={stone1} alt='blackgroung' />
					</div>
				</div>

				<div className='slide' id='slide-2'>
					<div className='slide-content'>
						<h1>이제부터 버킷 빙고와 함께</h1>
						<h1>소소한 목표들로</h1>
						<h1>빙고를 완성해보세요.</h1>
						<a href=''></a>
					</div>
					<div className='slide-image'>
						<img src={stone2} alt='blackgroung' />
					</div>
				</div>

				<div className='slide' id='slide-3'>
					<div className='slide-content'>
						<h1>전체 랭킹을 체크하며</h1>
						<h1>나의 의지도 확인해보세요.</h1>
						<h1></h1>
						<a href=''></a>
					</div>
					<div className='slide-image'>
						<img src={stone3} alt='blackgroung' />
					</div>
				</div>

				<div className='slide' id='slide-4'>
					<div className='slide-content'>
						<h1>그럼</h1>
						<h1>빙고를 만들어볼까요?</h1>
						<a href=''></a>
					</div>
					<div className='slide-image'>
						<img src={stone4} alt='blackgroung' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default FirstHome;;