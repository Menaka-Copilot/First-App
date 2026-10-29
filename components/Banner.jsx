import React from 'react'
import './Maincontent.css';
import bannerimage from './banner-img.jpg';
import styled from 'styled-components';

const Button = styled.button`
background: #edcd1f;
font-weight:700;
padding: 10px 20px;
`;

function Banner () {
  return (
    <section className='banner-img' style={{backgroundImage:`url(${bannerimage})`, backgroundPosition:'center top', backgroundRepeat:'no-repeat', backgroundSize:'cover' }}>
        <div className='container'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <div className='banner-content'>
                        <h1>Building the Future with  Precision and Purpose.</h1>
                        <p>From residential havens and commercial hubs to specialized  radiation shielding for healthcare facilities.</p>
                        <Button>Explore Our Projects</Button>
                    </div>   
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner
