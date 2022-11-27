import React from 'react';
import "../styles/Home.css";

function Home() {
    return (
        <div className='home'>
            <div className='about'>
                <h2>About Me</h2>
                <div className='description'>
                    <p> Aspiring software developer with a passion for learning and creating</p>
                </div> 
            </div>
            <div className='why'>
                <h3>Why Stay Fit</h3>
                <div className='description'>
                    <p> Aspiring software developer with a passion for learning and creating</p>
                </div> 
            </div>
        </div>
    );
}

export default Home;