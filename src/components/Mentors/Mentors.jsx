import React from 'react';
import sections from '../../constants/data';
import { MdStar } from "react-icons/md";
import "./Mentors.css";

const gradient = "url(#blue-gradient)";

const Testimonials = () => {

    let startList;
    const showRating = (starCount) => {
        startList = new Array(starCount);
        for (let i = 0; i < startList.length; i++) {
            startList[i] = <MdStar size={25} style={{ fill: gradient }} />;
        }
        return startList;
    }

    return (
        <section className='mentors section-p bg-black' id="mentors">
            <div className='container'>
                <div className='mentors-content'>
                    <div className='section '>
                        <h3>Mentors:</h3>
                    </div>

                    <div className='item-list grid text-white text-center'>
                        {
                            sections.mentors.map(mentor => {
                                showRating(mentor.rating);
                                return (
                                    <div className='item translate-effect bg-dark' key={mentor.id}>
                                        <div className='item-img'>
                                            <img src={mentor.image} alt="" />
                                        </div>
                                        <h4 className='item-name'>{mentor.name}</h4>
                                        <p className='item-text text'>{mentor.text}</p>
                                        <ul className='flex item-rating flex-center'>
                                            {
                                                startList.map((star, index) => {
                                                    return (
                                                        <li key={index}>{star}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
