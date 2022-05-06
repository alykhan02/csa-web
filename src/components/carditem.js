import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
    const [modal, setModal] = useState(false)
    const toggleModal = () => {
      setModal(!modal);
    };
    if(modal) {
      document.body.classList.add('active-modal')
      document.body.classList.remove('cards__item__img')
    } else {
      document.body.classList.remove('active-modal')
    }
  return (
      <>
      <li className='cards__item'>
        <Link to='#' className='cards__item__link' onClick={toggleModal}>
            <figure className='cards__item__pic-wrap' data-category={props.label}>
                <img src={props.src} alt='instagram' className='cards__item__img'/>
            </figure>
            <div className='cards__item__info'>
                <h5 className='cards__item__text'>{props.text}</h5>
            </div>
            {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <p>
              {props.descrip}
            </p>
          </div>
        </div>
        )}
        </Link>
        
      </li>
    </>
  )
}

export default CardItem