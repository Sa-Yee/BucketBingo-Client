import React, { useEffect }  from 'react';

import stone1 from '../../images/stone/stone01.svg';
import stone2 from '../../images/stone/stone02.svg';
import stone3 from '../../images/stone/stone03.svg';
import stone4 from '../../images/stone/stone04.svg';

import listpaper from '../../images/etc/listpaper.png';
import bingo from '../../images/etc/bingo.png';
import ranking from '../../images/etc/ranking.png';

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FirstHome = (): JSX.Element => {

	function initSlider(){
    //변수 지정
    const sliderContainer = document.getElementById('slider');
    const paginationContainer = document.createElement('div');
    //페이지네이션 생성
    paginationContainer.className = 'pagination';
    sliderContainer?.prepend(paginationContainer);

    //슬라이드 개수 파악
    const slideCount = document.querySelectorAll('.slide').length;

    for(let i = slideCount; i> 0; i--){
        let radioBtn = document.createElement('input');
        radioBtn.type = 'radio';
        radioBtn.name = 'slide-radio';
        radioBtn.className = 'slide-radio';
        radioBtn.id = `slide-radio-${i}`;

        if(i === 1) radioBtn.checked = true;

        sliderContainer?.prepend(radioBtn);

        //label  생성하기
        let label = document.createElement('label');
        label.setAttribute('htmlFor',`slide-radio-${i}`);
        //label.innerHTML = `${i}`;

        paginationContainer.prepend(label);
    }

    //자동 슬라이드
    let autoRun = setInterval(changeSlide, 5000);
    paginationContainer.addEventListener('mouseenter', () => clearTimeout(autoRun));
    paginationContainer.addEventListener('mouseleave', () => autoRun = setInterval(changeSlide, 5000));
	}

	function changeSlide(){
			// radio 버튼 지정  
			const radioButtons = document.querySelectorAll('.slide-radio');
			const radioButtonsCopy = [];
	
			for(let i = 0; i < radioButtons.length; i++) {
				radioButtonsCopy.push(radioButtons[i] as HTMLInputElement)
			}
	
			const currentIndex : number = radioButtonsCopy.findIndex((rb:HTMLInputElement) => rb.checked);
			//라디오 버튼 체크하기
			// console.log(radioButtonsCopy[(currentIndex + 1) % radioButtonsCopy.length].checked)
			radioButtonsCopy[(currentIndex + 1) % radioButtonsCopy.length].checked = true;
	}


useEffect(()=>{
	initSlider();
},[])

	return (
		<div className='firsthome'>
			<div className='firsthome-slider' id='slider'>

				{/* <FontAwesomeIcon icon={faChevronLeft} className='home-button'/> */}
				<div className='slide' id='slide-1'>
					<div className='slide-content'>
						<img src={listpaper} alt='listpaper' className='listpaper' />
						<h1>매해 다짐하는 목표들을<br />
							이루어 낸 적이 있으신가요?</h1>
						<a href=''></a>
					</div>
					{/* <div className='slide-image'>
						<img src={stone1} alt='background' />
					</div> */}
				</div>

				<div className='slide' id='slide-2'>
					<div className='slide-content'>
						<img src={bingo} alt='listpaper' className='slide-bingo' />
						<h1>이제부터 버킷 빙고와 함께<br />
							소소한 목표들로<br />
							빙고를 완성해보세요.</h1>
					</div>
					{/* <div className='slide-image'>
						<img src={stone2} alt='background' />
					</div> */}
				</div>

				<div className='slide' id='slide-3'>
					<div className='slide-content'>
						<img src={ranking} alt='listpaper' className='slide-ranking' />
						<h1>전체 랭킹을 체크하며<br />
							나의 의지도 확인해보세요.<br />
						</h1>
					</div>
					{/* <div className='slide-image'>
						<img src={stone3} alt='background' />
					</div> */}
				</div>

				<div className='slide' id='slide-4'>
					<div className='slide-content'>
						<h1>그럼
							빙고를 만들어볼까요?</h1>
					</div>
					{/* <div className='slide-image'>
						<img src={stone4} alt='background' />
					</div> */}
				</div>
				{/* <FontAwesomeIcon icon={faChevronRight} className='home-button' /> */}
			</div>
	 </div>
	);
};

export default FirstHome;;