import React from 'react';
import "../styles/Home.css";
import proPic from "../assets/propic.png";

function Home() {
    return (
        <div className='home'>
            <div className='about'>
                <img src={proPic}></img>
                <h2>
                    Ned Stays Fit
                </h2>
                <div className='description'>
                    <p> I am in my early 60s and I have been exercising in one form or another since I was 11 or 12 years old. My
dad, a former college athlete and a really smart guy in general, instilled in me the concept that a strong
mind needs a healthy body to support it.
In addition to my dad, I was influenced along the way by Jack LaLanne and many other older athletes. I
was always inspired by men and woman who seemed to age with strength. traing
I was able to translate my passion for fitness into a nearly 40-year career as a physical therapist and
personal trainer. Although I am retired, I am still very dedicated to staying fit and aging gracefully.
I love to stay active and enjoy sailing, paddle-boarding, golfing and traveling in addition to cooking and
being an avid reader and crossword puzzler. But, above all, I love spending time with my family and
friends!</p>
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