import React from 'react'
import Img1 from "@/public/images/f1.jpg";
import Img2 from "@/public/images/f2.jpg";
import Img3 from "@/public/images/f3.jpg";
import Image from 'next/image';

const Feature = ({ id }: { id?: string }) => {
  return (
    <section id={id}>
        <div className='pt-[5rem] pb-[3rem]'>
        <h1 className='heading'>
        Votre spécialiste 
        <br/> de la  <span className='text-[#0C318C]'>boite de Vitesses</span>
        </h1>

        <div className='w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] '>
            <div>
                <div className='p-6 hover:bg-white rounded-lg transition-all duration-200 '>
                    <Image src={Img1} alt='burger' className='imgClipPath'/>
                    <h1 className='mt-[1.5rem] mb-3 text-center text-[24px] text-black font-semibold'>Boite de vitesse manuelle</h1>
                    <p className='mt-[0.2rem] text-black text-opacity-60 text-center text-[16px]'>
                    Nous commençons par un diagnostic approfondi de votre boîte de vitesses manuelle, 
                    en identifiant les problèmes éventuels. 
                    Après un devis gratuit et votre accord, nous procédons à la réparation, en remplaçant 
                    les pièces défectueuses pour assurer le bon fonctionnement de votre véhicule.
                    </p>
                </div>
            </div>

            <div >
                <div className='p-6 hover:bg-white lg:translate-y-[3rem] rounded-lg transition-all duration-200 '>
                    <Image src={Img2} alt='burger' className='imgClipPath'/>
                    <h1 className='mt-[1.5rem]  mb-3 text-center text-[24px] text-black font-semibold'>Boite de vitesse automatique</h1>
                    <p className='mt-[0.2rem] text-black text-opacity-60 text-center text-[16px]'>
                    Pour les boîtes automatiques, nous utilisons des outils de diagnostic 
                    informatique pour détecter les pannes. Après avoir expliqué les 
                    réparations nécessaires, nous effectuons les interventions avec précision, 
                    afin de restaurer la performance et la fiabilité de votre boîte.


                    </p>
                </div>
            </div>

            <div>
                <div className='p-6 hover:bg-white   rounded-lg transition-all duration-200 '>
                    <Image src={Img3} alt='burger' className='imgClipPath'/>
                    <h1 className='mt-[1.5rem] mb-3 text-center text-[24px] text-black font-semibold'>Boîte de vitesses à double embrayage
                    </h1>
                    <p className='mt-[0.2rem] text-black text-opacity-60 text-center text-[16px]'>
                    Les boîtes à double embrayage demandent une attention particulière. 
                    Après un diagnostic complet, nous vous proposons des solutions adaptées
                     pour réparer les composants internes, avec un suivi rigoureux pour assurer 
                     un retour optimal à la performance.


                    </p>
                </div>
            </div>



        </div>
      
    </div>
    </section>
    
  )
}

export default Feature
