import React from "react";
import { faqList } from "../helpers/Faqs";

//import '../styles/faqs.css'

function Faqs() {
    return (
        <div className='faqs'>
            <h2>Frequently Asked Questions</h2>
            <div className='faqList'>
                {faqList.map((question, index) => {
                    return <div id={index}> 
                            <h4>{question.question}</h4>
                            <h4>{question.answer}</h4>
                        </div>
                })}
            </div>
        </div>
    );
}

export default Faqs;