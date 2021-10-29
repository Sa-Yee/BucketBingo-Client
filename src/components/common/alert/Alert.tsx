import React, { useRef } from 'react';

const Alert = ({...props}): JSX.Element => {
  const alertBackgroundEl = useRef(null);
  const {
    content,
    rightbutton,
    leftbutton,
    onClickHandleRight,
    onClickHandleLeft,
    togglePopUp,
  } = props;

  const alertBackgroundClick = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === alertBackgroundEl.current) {
      togglePopUp();
    }
  };

  return (
    <div className='alert-modal'>
      <div
        className='alert-modal-overlay'
        onClick={(e) => alertBackgroundClick(e)}
        ref={alertBackgroundEl}
      />
      <div className='alert-container'>
        <div className='alert-box'>
          <article>
            <div>{content}</div>
          </article>
          <div className='alert-button-container'>
            <button onClick={onClickHandleLeft}>{leftbutton}</button>
            <button onClick={onClickHandleRight}>{rightbutton}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;