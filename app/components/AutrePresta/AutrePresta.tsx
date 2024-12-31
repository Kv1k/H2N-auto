"use client"
import React, { useRef, useEffect, useState } from 'react';
import "@/app/components/AutrePresta/autrePresta.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {ReactLenis} from "lenis/react"
import Image from 'next/image'
import Img1 from "@/public/images/f1.jpg";
import { useLottie } from "lottie-react";
import thumbUpAnimation from "@/public/images/thumb-up.json";

const responsive = {
  
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};
gsap.registerPlugin(ScrollTrigger);

const AutrePresta = ({ id }: { id?: string }) => {

  const [style, setStyle] = useState({
    width: 100,
    marginTop: -25,
  });

  const options = {
    animationData: thumbUpAnimation,
    
    autoplay: true,
  };

  useEffect(() => {
    // Fonction pour ajuster la largeur selon la taille de l'écran
    const updateStyle = () => {
      if (window.innerWidth <= 640) { // 640px correspond à 'sm' dans TailwindCSS
        setStyle({
          width: 60,
          marginTop: -20,
        });
      } else {
        setStyle({
          width: 100,
          marginTop: -25,
        });
      }
    };

    // Détecte les changements de taille de l'écran
    window.addEventListener("resize", updateStyle);

    // Définition initiale au chargement
    updateStyle();

    // Nettoyage
    return () => window.removeEventListener("resize", updateStyle);
  }, []);
  const { View } = useLottie(options,style);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    const leftXValues = [-1000, -900, -700, -400];
    const rightXValue = [1000, 900, 700, 400];
    const leftRotationValues = [-30, -20, -35, -40];
    const rightRotationValues = [30, 20, 35, 40];
    const yValues = [100, -150, -400, -500];
  
    ScrollTrigger.matchMedia({
      // **Desktop animations**
      "(min-width: 1024px)": function () {
        gsap.utils.toArray(".row").forEach((row, index) => {
          const cardLeft = row.querySelector(".card-left");
          const cardRight = row.querySelector(".card-right");
  
          gsap.to(cardLeft, {
            scrollTrigger: {
              trigger: ".main",
              start: "top 10%",
              end: "130% bottom",
              scrub: true,
              onUpdate: (self) => {
                const progress = self.progress;
                cardLeft.style.transform = `
                  translateX(${progress * leftXValues[index]}px) 
                  translateY(${progress * yValues[index]}px) 
                  rotate(${progress * leftRotationValues[index]}deg)
                `;
              },
            },
          });
  
          gsap.to(cardRight, {
            scrollTrigger: {
              trigger: ".main",
              start: "top 10%",
              end: "130% bottom",
              scrub: true,
              onUpdate: (self) => {
                const progress = self.progress;
                cardRight.style.transform = `
                  translateX(${progress * rightXValue[index]}px) 
                  translateY(${progress * yValues[index]}px) 
                  rotate(${progress * rightRotationValues[index]}deg)
                `;
              },
            },
          });
          gsap.to(".logo", {
            scale: 1,
            duration: 0.5,
            ease: "power1.out",
            scrollTrigger: {
              trigger: ".main",
              start: "top -40%",
              end: "bottom -=40%",
              toggleActions: "play reverse play reverse",
            },
          });
        
          gsap.to(".line p", {
            y: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: "power1.out",
            scrollTrigger: {
              trigger: ".main",
              start: "top -45%", // L’animation commence quand le haut de .main atteint 80% de la fenêtre
              end: "bottom -=40%", // Termine quand le bas de .main quitte la fenêtre
              toggleActions: "play reverse play reverse"
            }
      
          })
        
          gsap.to(".btn", {
            y: 0,
            opacity: 1,
            delay: 0.25,
            duration: 0.5,
            ease: "power1.out",
            scrollTrigger: {
              trigger: ".main",
              start: "top -45%", // L’animation commence quand le haut de .main atteint 80% de la fenêtre
              end: "bottom -=40%", // Termine quand le bas de .main quitte la fenêtre
              toggleActions: "play reverse play reverse"
            }
          });
        });
      },
  
      // **Tablet animations**
      "(min-width: 764px) and (max-width: 1023px)": function () {
        gsap.utils.toArray(".row").forEach((row, index) => {
          const cardLeft = row.querySelector(".card-left");
          const cardRight = row.querySelector(".card-right");
  
          gsap.to(cardLeft, {
            scrollTrigger: {
              trigger: ".main",
              start: "top 30%",
              end: "190% bottom",
              scrub: true,
              onUpdate: (self) => {
                const progress = self.progress;
                cardLeft.style.transform = `
                  translateX(${progress * leftXValues[index] * 1.6}px) 
                  translateY(${progress * yValues[index] * 1.6}px) 
                  rotate(${progress * leftRotationValues[index] * 1.8}deg)
                `;
              },
            },
          });
  
          gsap.to(cardRight, {
            scrollTrigger: {
              trigger: ".main",
              start: "top 30%",
              end: "190% bottom",
              scrub: true,
              onUpdate: (self) => {
                const progress = self.progress;
                cardRight.style.transform = `
                  translateX(${progress * rightXValue[index] * 1.6}px) 
                  translateY(${progress * yValues[index] * 1.6}px) 
                  rotate(${progress * rightRotationValues[index] * 1.8}deg)
                `;
              },
            },
          });
          gsap.to(".logo", {
            scale: 1,
            duration: 0.5,
            ease: "power1.out",
            scrollTrigger: {
              trigger: ".main",
              start: "top -140%",
              end: "bottom -=40%",
              toggleActions: "play reverse play reverse",
            },
          });
        
          gsap.to(".line p", {
            y: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: "power1.out",
            scrollTrigger: {
              trigger: ".main",
              start: "top -135%", // L’animation commence quand le haut de .main atteint 80% de la fenêtre
              end: "bottom -=40%", // Termine quand le bas de .main quitte la fenêtre
              toggleActions: "play reverse play reverse"
            }
      
          })
        
          gsap.to(".btn", {
            y: 0,
            opacity: 1,
            delay: 0.25,
            duration: 0.5,
            ease: "power1.out",
            scrollTrigger: {
              trigger: ".main",
              start: "top -130%", // L’animation commence quand le haut de .main atteint 80% de la fenêtre
              end: "bottom -=40%", // Termine quand le bas de .main quitte la fenêtre
              toggleActions: "play reverse play reverse"
            }
          });
        });
      },
  
      // **Mobile animations**
      "(max-width: 763px)": function () {
        gsap.utils.toArray(".row").forEach((row, index) => {
          const cardLeft = row.querySelector(".card-left");
          const cardRight = row.querySelector(".card-right");
  
          gsap.to(cardLeft, {
            scrollTrigger: {
              trigger: ".main",
              start: "top -35%",
              end: "240% bottom",
              scrub: true,
              onUpdate: (self) => {
                const progress = self.progress;
                cardLeft.style.transform = `
                  translateX(${progress * leftXValues[index] * 1.3}px) 
                  translateY(${progress * yValues[index] * 1.2}px) 
                  rotate(${progress * leftRotationValues[index] * 1.7}deg)
                `;
              },
            },
          });
  
          gsap.to(cardRight, {
            scrollTrigger: {
              trigger: ".main",
              start: "top -35%",
              end: "200% bottom",
              scrub: true,
              onUpdate: (self) => {
                const progress = self.progress;
                cardRight.style.transform = `
                  translateX(${progress * rightXValue[index] * 1.3}px) 
                  translateY(${progress * yValues[index] *1.2}px) 
                  rotate(${progress * rightRotationValues[index] * 1.7}deg)
                `;
              },
            },
          });

          gsap.to(".logo", {
            scale: 1,
            duration: 0.5,
            ease: "power1.out",
            scrollTrigger: {
              trigger: ".main",
              start: "top -120%",
              end: "bottom -=40%",
              toggleActions: "play reverse play reverse",
            },
          });
        
          
        
          gsap.to(".btn", {
            y: 0,
            opacity: 1,
            delay: 0.25,
            duration: 0.5,
            ease: "power1.out",
            scrollTrigger: {
              trigger: ".main",
              start: "top -124%", // L’animation commence quand le haut de .main atteint 80% de la fenêtre
              end: "bottom -=130%", // Termine quand le bas de .main quitte la fenêtre
              toggleActions: "play reverse play reverse"
            }
          });
        });
      },
    });
    
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  
  const slider = useRef(null);
  const generateRows = () =>{
    const rows = [];
    for (let i = 1; i<= 4; i++){
      rows.push(<div className='row relative w-[100%] m-0 flex-col lg:flex-row flex justify-center items-center lg:items-start  gap-0 lg:gap-[6em]' key={i}>
        <div className="card card-left imgClipPath h-[150px] lg:h-[240px] w-[60%] lg:w-[35%] mt-6">
          <Image src={Img1} alt="" />
        </div>
        <div className="card card-right imgClipPath2 h-[150px] lg:h-[240px] w-[60%] lg:w-[35%] mt-6">
          <Image src={Img1} alt="" />
        </div>
      </div>)
    }
    return rows;
  }
  return (
    <section id={id} className='scroll-mt-[25vh]'>
       <>
      <ReactLenis root>
       
        <section className='main h-auto py-44'>
          <h1 className='heading  text-white text-[30px] mt-0 lg:mt-12 py-6 lg:py-[60px]'>Nos autres <span className='text-[#3290af]'>prestations</span></h1>
          <div className="row-container">
             {generateRows()}
          </div>
         
          <div className="main-content mt-[10rem] md:mt-0">
            <div className="logo w-[90px] h-[90px] md:w-[150px] md:h-[150px]">
              {View}
            </div>
            <div className="copy hidden md:flex mt-[2rem] ">
              <div className="line">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, reiciendis similique.</p>
              </div>
              <div className="line">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, reiciendis similique.</p>
              </div>
              <div className="line">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, reiciendis similique.</p>
              </div>
            </div>
            <div className="btn px-[1em] py-[0.5em] mt-4  md:px-[2em] md:py-[1em]">
              <button>Voir nos avis Vroomly</button>          
            </div>
            <div className="btn mt-4 px-[1em] py-[0.5em] md:px-[2em] md:py-[1em]">
              <button>Voir nos avis idGarage</button>
            </div>
          </div>

          
        </section>
       
       
      </ReactLenis>
    </>
    </section>
   
   
  );
}

export default AutrePresta;



