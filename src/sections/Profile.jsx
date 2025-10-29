import React from 'react'
import TitleHeader from "../components/TitleHeader.jsx";
import Button from "../components/Button.jsx";

const Profile = () => {
    return (
        <section id="profile" className="app-showcase mb-0">
           <div className="w-full">
               <TitleHeader
                   title="Profile" sub="🧑‍🏫 About Me"
               />
               <div className="showcaselayout">
                   {/*LEFT*/}
                   <div className="first-project-wrapper border  border-black p-4">
                       <div>
                           <TitleHeader
                               title="Technical Skills" sub="💻 Tecnical Details" className="mb-4"
                           />
                           <div className="spacing">
                               <p>• Full-Stack Web Development</p>
                               <p>• App Development(IOS/Android)</p>
                               <p>• Database Management System </p>
                               <p>• Software Development</p>
                               <p>• Data Structures and Algorithms</p>
                               <p>• Cloud Computing</p>
                               <p>• AI Integrated Development</p>
                           </div>

                           <div className="mb-4">
                               <TitleHeader
                                   title="" sub="💻 Programming Languages"
                               />
                               <p>
                                   <span className="pr-2">• C and C++ ,</span>
                                   <span className="pr-2">• Python ,</span>
                                   <span className="pr-2">• JavaScript ,</span>
                                   <span className="pr-2">• SQL </span>
                               </p>


                           </div>
                           <TitleHeader
                               title="" sub="💻 Technologies / Frameworks"
                           />
                           <div className="mb-4">
                               <p>ReactJs, NextJs, NodeJs, ExpressJs, MongoDB,</p>
                               <p>React Native, Git, HTML, CSS, GitHub</p>
                               <p>Three.Js, TailwindCss, SCSS, Matplotlib, Pandas, AWS </p>

                           </div>

                           <TitleHeader
                               title="" sub="💻 Projects"
                           />
                           <div >
                               <a href="https://github.com/abdulrahman2202/FULL-STACK-REAL-ESTATE-APP">
                                   <p>• Full Stack Real Estate App 🔗</p>
                               </a>
                               <a href="https://github.com/abdulrahman2202/dall-e">
                                   <p>• DALL-E Clone 🔗</p>
                               </a>
                               <a href="https://github.com/abdulrahman2202/QuizApp">
                                   <p>• Quiz App 🔗</p>
                               </a>
                               <a href="https://github.com/abdulrahman2202/YC_Directory">
                                   <p>• YC-Directory 🔗</p>
                               </a>

                           </div>

                           <div className="mt-4"/>

                           <span className="group">
                           <a href="/images/Abdul_Resume.pdf" download className="inline-block px-5 py-2 rounded-lg bg-white text-black group-hover:bg-black-50 transition-colors duration-300">
                               <span className="flex group-hover:text-white transition-colors duration-300">Download Resume</span>
                           </a>
                           </span>



                       </div>

                   </div>
                   {/*RIGHT*/}
                   <div className="project-list-wrapper overflow-hidden">
                       <div className="max-w-full max-h-full object-cover rounded-xl bg-blue-300">
                           <img src="/images/profilephoto.JPG" alt="profileImage" className=" xl:h-[70vh] md:h-[50vh] h-96 relative"/>

                       </div>
                       <div className="border border-black p-4">
                       {/*<h2 className="mb-2">Details</h2>*/}
                           <TitleHeader
                               title="" sub="👤 Details"
                           />
                       <ul>
                           <li className="group">
                               <li>• Name : Abdul Rahman</li>
                               <li>• DOB : 22/07/2002</li>
                               <li>• Email : techabdul49@gamil.com</li>
                               <li>• Role : Software Engineer</li>
                               <li>• Education : Bachelor and Masters in Computer Application</li>
                           </li>

                       </ul>
                       </div>

                   </div>
               </div>
           </div>
        </section>
    )
}
export default Profile
