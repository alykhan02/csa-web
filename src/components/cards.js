import React, { useState } from 'react'
import CardItem from './carditem'
import './cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Click to Read Our Executive Team's Testimonials</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src='hans.png'
                    text='Hans Chan'
                    label='Sciences Co-op'
                    path='/about'
                    descrip='Meet Hans! Hans is a fourth year student pursuing a double major in Physical & Human Geography and City Studies, and a minor in Environmental Science. He is currently on a work-term as a Sustainability Co-op Student at Manulife.' />

                    <CardItem
                    src='anna.png'
                    text='Anna Li'
                    label='Management Co-op'
                    path='/about'
                    descrip='Meet Anna! Anna is a third year student pursuing a specialization in Management and Accounting (Co-op). She completed her work-term as an Administrative Assistant at EES Financial Services.' />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src='stephanie.png'
                    text='Stephanie Peslherbe'
                    label='Sciences Co-op'
                    path='/about'
                    descrip='Meet Stephanie! Stephanie is a fourth year student pursuing a major in Chemistry Co-op. She completed her work-term as an Environmental Protection Co-op Student at Environment and Climate Change Canada (ECCC).' />

                    <CardItem
                    src='dixa.png'
                    text='Dixa Patel'
                    label='Management Co-op'
                    path='/about'
                    descrip='Meet Dixa! Dixa is a third year student pursuing a double degree in Management Finance and Statistics at UTSC. She is currently on an 8 months long co-op work term as a Finance Student at De Lage Laden Financial Services (DLL) group.' />

                    <CardItem
                    src='hereinm.png'
                    text='Hereinm Sharma'
                    label='Management Co-op'
                    path='/about'
                    descrip='Meet Hereinm! Hereinm is a third year student in the Management Co-op program specializing in Accounting. She recently completed a co-op work-term at the Toronto Transit Commission in the Accounts Receivable department.' />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;