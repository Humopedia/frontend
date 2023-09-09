import React from "react";

import handshake from '../../assets/images/handshake-5.png';
import video1 from "../../assets/videos/video2.mp4";
import '../pages/About.css';
import image4 from '../../assets/images/flower.jpg'

const About = () =>{
    return(
        <>
          <div className="  mt-20 ">
              <div className="relative flex items-end justify-center">
                  <video className="w-full h-auto" autoPlay muted loop>
                      <source src={video1} type="video/mp4" />
                       
                  </video>
                  <div className="flex flex-col gap-5 absolute  px-10 py-10 mx-10  items-center   ">
                     <div>
                        <h1 className="text-5xl font-mono text-stroke-2 text-gray-800 font-bold ">Welcome to Humopedia</h1>
                     </div>
                     <div>
                         <h1 className="text-2xl text-stroke-3 text-white drop-shadow-2xl ">A groundbreaking platform that redefines the art of sharing personal narratives through the prism of human experiences presented as books.</h1>
                     </div>
                </div>
              </div>
              <diV className="flex flex-row p-10 pb-12 border border-8 border-b-0 border-indigo-300 ">
    
                 
                    <div className="  basis-1/3">
                          <img className="h-full transform scale-90 w-full" src={image4}/>
                    </div>
                    
                      <div className=" basis-2/3 flex flex-col items-start gap-1 justify-center ">
                        <div>
                            <h1 className="text-7xl text-stroke-2 font-mono font-bold ">Our Mission</h1>
                        </div>
                        <div >
                            <h1 className="text-2xl ">At Humopedia, our mission is to create an innovative digital space where the intricate tapestries of individual lives are woven together, creating a mosaic of shared wisdom and insight. We are dedicated to fostering understanding, promoting cross-cultural interactions, and enriching the lives of both storytellers and readers.</h1>
                        </div>
                      </div>
                      
              </diV>
              <diV className="flex flex-row p-10 border border-8 border-b-0  border-indigo-300 bg-slate-300 ">
                  <div className="flex justify-center items-center  basis-1/2">
                     <h1 className="text-4xl font-bold ">Vision and Values</h1>
                  </div>
                  <div className="p-10">
                      <div>
                        <h1 className="text-xl font-semibold">Our vision is centered around the belief that every individual possesses a story worth telling and a perspective worth exploring. We are committed to the values that drive our community:</h1>
                      </div>
                      <div className="p-5">
                         <ul className="list-disc text-lg">
                            <li>Empathy: We champion the empathetic exchange of stories to bridge gaps and nurture deeper connections.</li>
                            <li>Diversity: Our platform is a testament to the beauty of diversity, as we bring together a myriad of voices, experiences, and backgrounds.</li>
                            <li>Respect: Respect forms the cornerstone of our interactions, as we honor the uniqueness of each story and the courage of those who share them.</li>
                            <li>Learning: Humopedia serves as an invaluable resource for lifelong learning, offering insights that extend beyond conventional boundaries.</li>
                            <li>Connection: Our platform cultivates genuine connections, transcending geographical and cultural constraints to foster a global community.</li>
                         </ul>
                      </div>
                  </div>
                  
              </diV>
              <diV className=" flex flex-row ">
                  <div className="flex flex-col basis-1/6 bg-slate-300">
                    <div className="basis-1/2  border-b-4 border-l-8 border-indigo-300 "></div>
                    <div className="basis-1/2  border-t-4 border-l-8  border-indigo-300 "></div>
                  </div>
                  <div className="flex flex-col  bg-slate-400 border border-8 border-indigo-300 drop-shadow-2xl p-8 gap-4">
                      <diV className=" flex justify-center">
                        <h1 className="text-4xl font-bold">Exploring Humopedia</h1>
                      </diV>
                      <div className="flex justify-center">
                        <h1 className="text-2xl font-semibold">Our platform invites you to embark on an enriching journey of discovery and connection:</h1>
                      </div>
                      <div className="flex justify-center ">
                        <ul className=" flex flex-col gap-2 list-disc text-xl">
                          <li>Becoming a Human Book: Share your personal narrative, allowing readers to immerse themselves in your experiences and learn from your journey.</li>
                          <li>Engaging as a Reader: Immerse yourself in the stories of others, expand your horizons, and engage in meaningful conversations.</li>
                          <li>Cultivating Understanding: Humopedia is a catalyst for dialogue and understanding, sparking conversations that drive positive change.</li>
                        </ul>
                      </div>
                  </div> 
                  <div className="flex flex-col bg-slate-300   basis-1/6 ">
                     <div className="basis-1/2   border-b-4 border-r-8 border-indigo-300"></div>
                     <div className="basis-1/2    border-t-4 border-r-8 border-indigo-300"></div>
                  </div>  
              </diV>
              <div className="flex flex-row border-x-8 border-b-8 border-indigo-300 bg-slate-300">
              
                  <div className=" basis-2/3  py-20 p-10 flex flex-row">
                    <div className=" flex flex-col gap-4">
                        <div className="">
                          <h1 className="text-4xl font-bold">Join us</h1>
                        </div>
                        <div>
                            <h1 className="text-2xl">Whether you're seeking to contribute your own narrative or eager to explore the intricate narratives of others, we extend a warm invitation to become a part of the Humopedia community. Elevate your engagement with diverse perspectives, foster a deeper appreciation for the human experience, and be a catalyst for global connection.</h1>
                        </div>
                    </div>
                  </div>         
                
                <div className="drop-shawdow-lg basis-1/3  ">
                      <img  className=" pt-10 pr-10 " src={handshake}/>
                    
                </div> 
              </div>
          </div>

        </>
    );
}

export default About;