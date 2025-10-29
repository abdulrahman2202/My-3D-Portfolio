import {useRef} from 'react'
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);



    useGSAP(()=>{
        const projects = [project1Ref.current,project2Ref.current,project3Ref.current];

            projects.forEach((card,index) =>{
            gsap.fromTo(
                card,
                {
                    y:50,
                    opacity:0
                },
                {
                    y:0,
                    opacity:1,
                    duration:1,
                    delay:0.3*(index +1),
                    scrollTrigger:{
                        trigger:card,
                        start:'top bottom-=100,'
                        }
                    }
                )
            })


        gsap.fromTo(
            sectionRef.current,
            {opacity:0},
            {opacity:1, duration:1.5}
        )
    },[]);


    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                {/* LEFT*/}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="max-w-full max-h-full object-cover ">
                            <a href="https://github.com/abdulrahman2202/FULL-STACK-REAL-ESTATE-APP">
                            <img src="/images/project4.png" alt="Rental Apartments" className="rounded-xl xl:h-[65vh] md:h-[50vh] h-96 relative"/>
                            </a>
                        </div>
                        <div className="text-content">
                            <h2>On-Demand Apartments for rent and buy. and sell properties</h2>
                            <p>Full stack React, Node.js Real Estate App with MongoDB and real-time chat functionality with Socket.io. Mern Stack project using Prisma, JWT, Cookies, Context API, React Router Dom.</p>
                        </div>
                    </div>
                {/* RIGHT*/}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <a href="https://github.com/abdulrahman2202/QuizApp">
                                <img src="/images/project5.png" alt="Quiz Application"/>
                            </a>
                            </div>
                            <h2>Quiz Application(ios and android)</h2>
                        </div>

                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <a href="https://github.com/abdulrahman2202/YC_Directory">
                                <img src="/images/project3.png" alt="YC Directory"/>
                                </a>
                            </div>
                            <h2>YC Directory - A Startup Showcase App</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ShowcaseSection
