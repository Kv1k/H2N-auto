"use client"
import React, { useRef, useEffect, useState } from 'react';
import "@/app/components/AutrePresta/autrePresta.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {ReactLenis} from "lenis/react"
import Image from 'next/image'
import dynamic from "next/dynamic";
import { useLottie } from "lottie-react";
import thumbUpAnimation from "@/public/images/thumb-up.json";
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import Carrosserie from "@/public/images/carrosserie.jpg";
import Elec from "@/public/images/elec.jpg";
import Frein from "@/public/images/frein.jpg";
import Polish from "@/public/images/polish.jpg";
import RemplVitre from "@/public/images/rempl-vitre.jpg";
import RepCarro from "@/public/images/rep-carrosserie.jpg";
import RepMoteur from "@/public/images/rep-moteur.jpg";
import Revision from "@/public/images/revision.jpeg";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const prestations = [
  "Réparation de la carrosserie",
  "Réparation et remplacement des vitrages",
  "Traitement et protection du véhicule",
  "Remplacement des éléments de carrosserie",
  "Entretien et révision générale",
  "Système de freinage et suspensions",
  "Diagnostic et réparation moteur",
  "Systèmes électriques et électroniques"
];
const imageArr = [
  <Image src={RepCarro} alt="" key={0} />,
  <Image src={RemplVitre} alt=""  key={1}  />,
  <Image src={Polish} alt=""  key={2}  />,
  <Image src={Carrosserie} alt=""  key={3} />,
  <Image src={Revision} alt=""  key={4} />,
  <Image src={Frein} alt=""   key={5}/>,
  <Image src={RepMoteur} alt=""  key={6} />,
  <Image src={Elec} alt=""  key={7} />
];
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

  

  useEffect(() => {
    // Fonction pour ajuster la largeur selon la taille de l'écran
    const updateStyle = () => {
      if (typeof window !== "undefined") {
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
      }
     
    };
    if (typeof window !== "undefined") {
      // Détecte les changements de taille de l'écran
      window.addEventListener("resize", updateStyle);
    
   

      // Définition initiale au chargement
      updateStyle();

      // Nettoyage
      return () => window.removeEventListener("resize", updateStyle);
    } 
  }, []);
  

  useEffect(() => {
    if (typeof window !== "undefined") {
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
            // @ts-ignore
            const cardLeft = row.querySelector(".card-left");
            // @ts-ignore
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
            // @ts-ignore
            const cardLeft = row.querySelector(".card-left");
            // @ts-ignore
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
                start: "top -35%",
                end: "bottom -=20%",
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
                start: "top -40%", // L’animation commence quand le haut de .main atteint 80% de la fenêtre
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
    
        // **Mobile animations**
        "(max-width: 763px)": function () {
          gsap.utils.toArray(".row").forEach((row, index) => {
            // @ts-ignore
            const cardLeft = row.querySelector(".card-left");
            // @ts-ignore
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
          
            
            gsap.to(".line p", {
              y: 0,
              stagger: 0.1,
              duration: 0.5,
              ease: "power1.out",
              scrollTrigger: {
                trigger: ".main",
                start: "top -124%", // L’animation commence quand le haut de .main atteint 80% de la fenêtre
                end: "bottom -=130%", // Termine quand le bas de .main quitte la fenêtre
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
    }
  }, []);
  
  
  
  const slider = useRef(null);
  

  const generateRows = () => {
    const rows = [];
    for (let i = 0; i < 4; i++) {
      rows.push(
        <div className='row relative w-[100%] m-0 flex-col lg:flex-row flex justify-center items-center lg:items-start gap-0 lg:gap-[6em]' key={i}>
          <div className="card card-left imgClipPath h-[150px] lg:h-[240px] w-[60%] lg:w-[35%] mt-6 ">
            {imageArr[i]}
            <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
            <p className="absolute inset-0 flex justify-center items-center text-white font-bold text-[20px] z-20">{prestations[i]}</p>
          </div>
          <div className="card card-right imgClipPath2 h-[150px] lg:h-[240px] w-[60%] lg:w-[35%] mt-6 ">
            {imageArr[i+4]}
            <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
            <p className="absolute inset-0 flex justify-center items-center text-white font-bold text-[20px] z-20">{prestations[i + 4]}</p>
          </div>
        </div>
      );
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
              <Lottie animationData={thumbUpAnimation} style={style} autoPlay />
            </div>
            <div className="copy flex lg:hidden ">
              <div className="line !h-auto ">
                <p className="!font-semibold md:!text-[25px]">H2N Automobile un gage de qualité.</p>
              </div>
            </div>
            <div className="copy hidden lg:flex mt-[2rem] ">
              <div className="line">
                <p>Chez H2N Automobile, la satisfaction client est notre priorité.</p>
              </div>
              <div className="line">
                <p>Nos services sont de qualité, nos prix transparents et nos délais respectés. <br /> Cela nous vaut de nombreux avis positifs.</p>
              </div>
              <div className="line">
                <p>Nos clients nous font confiance pour l&apos;entretien, les réparations ou l&apos;achat de pièces détachées. <br /> Les avis sur Vroomly et idGarage confirment notre expertise.</p>
              </div>
              <div className="line">
                <p>Vous cherchez une entreprise fiable et recommandée ? Découvrez les avis clients qui font notre force. <br /> Rejoignez notre communauté de conducteurs satisfaits.</p>
              </div>
            </div>
            <Link href="https://www.vroomly.com/garages/h2n-automobile-34920-genevrier/">
              <Button className="btn mt-4 !px-[1em] !py-[0.5em] md:!px-[2em] md:!py-[1.7em] hover:bg-transparent">            
                  Voir nos avis Vroomly           
              </Button>
            </Link>
            <Link href="https://www.idgarages.com/fr-fr/garage/le-cres/GA1555_h2n-automobile">
              <Button className="btn mt-4 !px-[1em] !py-[0.5em] md:!px-[2em] md:!py-[1.7em] hover:bg-transparent">            
                Voir nos avis idGarage       
              </Button>
            </Link>
          

          </div>

          
        </section>
       
       
      </ReactLenis>
    </>
    </section>
   
   
  );
}

export default AutrePresta;



