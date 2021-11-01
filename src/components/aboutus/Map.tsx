import { faBus, faSubway } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = (): JSX.Element => {
  useEffect(() => {
    let container = document.getElementById("map");

    let options = {
      center: new window.kakao.maps.LatLng(37.558415, 126.925939),
      level: 5,
    };

    let map = new window.kakao.maps.Map(container, options);
  }, []);
  
  return (
    <div className='map'>
      <div id="map" style={{ width: '400px', height: '300px' }} ></div>
      <h3>위치 | 서울 마포구 홍대입구역 3번 출구</h3>
      <div className='map-traffic'>
        <h3>교통편</h3>
        <div>
          <FontAwesomeIcon icon={faBus} className='traffic-icon'/>
          홍대입구역 하차
        </div>
        <div>
          <FontAwesomeIcon icon={faSubway} className='traffic-icon'/>
          홍대입구역 3번 출구 도보 1분
        </div>
      </div>
    </div>
  );
};

export default Map;