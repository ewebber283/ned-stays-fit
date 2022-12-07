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
                    <ul>
                        <li>
                        Why Not!?!? You probably wouldn't be reading this if it wasn't something you were interested in.
                        </li>
                        <li>
                        Multiple Studies have shown that staying fit improves brain health and cognition, helps manage weight, reduces the risk of disease and strengthens bones.  These are just a few of the issues that aging adults should be concerned with.
                        </li>
                        <li>
                        Enhances a person's abilities to perform leisure time and athletic activities, but more importantly, improves one's abilities to perform everyday activities.
                        </li>
                        <li>
                        Individuals who exercise regularly live longer and age better
                        </li>
                    </ul>
                </div> 
            </div>
        </div>
    );
}

export default Home;