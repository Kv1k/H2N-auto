"use client"
import dynamic from 'next/dynamic';
import { useMemo, useState } from 'react';
import './footer.css';
import bg from '@/public/images/devanture.jpg';
import { Separator } from './Separator';
import Image from 'next/image'
import Logo from "@/public/images/logo.png";

const Footer = ({ id }: { id?: string }) => {
  const Map = useMemo(
    () =>
      dynamic(() => import('./MapComponent'), {
        loading: () => <p>Carte en chargement...</p>,
        ssr: false,
      }),
    []
  );

  const [formData, setFormData] = useState({ name: '',surname: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');

    try {
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccess(data.success);
        setFormData({ name: '',surname: '', email: '', message: '' });
      } else {
        setError(data.error || "Quelque chose s'est mal passé");
      }
    } catch (err) {
      setError("Quelque chose s'est mal passé");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id={id}>
      <div>
      <div
        className="clipPathContact h-auto py-10 lg:h-[92vh] flex flex-col justify-start items-center"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
       
        <div className="form w-[62vw]  flex flex-col items-center justify-center h-full"> 
          <h1 className="heading text-[25px] md:text-[30px] pt-[12rem] md:pt-[11rem] text-gray-800">CONTACT</h1>
          <div className="clipPathSep mt-[-9px] md:mt-[-12px]"></div>
          <p className='text-[20px] font-bold mb-2 mt-5 text-gray-800'><a href="tel:+33467702808" className="hover:underline">04 67 70 28 08</a></p>
          <div className="flex justify-center items-center mb-7">
            <Separator className="bg-gray-900 w-28 lg:w-36"/>
            <div className="mx-3 lg:mx-7"><span className="text-gray-800 text-[17px]">ou</span></div>
            <Separator className="bg-gray-900 w-28 lg:w-36"/>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full mx-auto">
            <div className='flex flex-col md:flex-row w-full md:space-x-4 md:space-y-0 space-x-0 space-y-4'>
              <input  

                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nom"
                className="p-2 border w-full md:w-[50%] "
                required
              />
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                placeholder="Prénom"
                className="p-2 border w-full md:w-[50%]"
              />
            </div>
            
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="p-2 border "
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="5"
              className="p-2 border "
              required
            />
            <button
              type="submit"
              className="p-2 bg-[#061D56] text-white  hover:bg-[#111b35]"
              disabled={loading}
            >
              {loading ? "En cours d'envoie..." : 'Envoyer'}
            </button>
          </form>
          {success && <p className="text-green-500 mt-4">{success}</p>}
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </div>
      <div className="bg-[#061D56] ">
        <div className="clipPathMap relative z-20 ">
          <Map posix={[43.661720004707, 3.932134008003]} />
        </div> 
        
         <div className='w-full absolute flex items-center justify-center z-[1000]  h-[9%] md:h-[9%] lg:h-[8%]'>
         <Image className="absolute w-[4.2rem] " src={Logo} alt="" />
        </div>
        <div className="clipPathFooter relative z-20 bg-gray-800 text-white mt-[-56px] flex flex-col justify-end ">
        <div className="container pt-[11%] lg:pt-0 mx-16 md:mx-auto  md:mt-0 flex flex-col md:flex-row justify-between items-start md:items-end">
          {/* Section gauche */}
          <div className="mb-6 sm:mb-0 sm:flex-1 mt-[20vh]">
            <p>Adresse : 5 Rue du Genévrier, 34920 Le Crès</p>
            <p>Ouvert du lundi au mardi</p>
            <p>Horaire : 9:00-12:00, 14:00-18:00</p>
            <p>Numéro : <a href="tel:+33467702808" className="hover:underline">+33 4 67 70 28 08</a></p>
            <p>
              <a 
                href="https://www.google.com/maps/place/H2N+Automobile/@43.6615104,3.9294953,16z/data=!3m1!4b1!4m6!3m5!1s0x12b6a669512ef2db:0xae3ba34e3cd8763!8m2!3d43.6615104!4d3.9320702!16s%2Fg%2F1ygbb7rxv?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline text-blue-300"
              >
                Voir sur Google Maps
              </a>
            </p>
          </div>

          {/* Section droite */}
          <div className="sm:flex-1 mt-4 md:mt-[20vh]">
            <ul className="space-y-2">
              <li><a href="#feature" className="hover:underline">Boîte de vitesse</a></li>
              <li><a href="#autre-presta" className="hover:underline">Prestations</a></li>
              <li><a href="#garage" className="hover:underline">Horaires</a></li>
              <li><a href="#tarifs" className="hover:underline">Tarifs</a></li>
            </ul>
          </div>
        </div>

  {/* Bas du footer */}
  <div className="text-center mt-6 pt-4">
    <p className="text-sm">
      <a href="/mention" className="hover:underline">Mentions légales</a> - Développé par Kamil NACHAT
    </p>
  </div>
</div>

       
      </div>

    </div>
    </section>
    
  );
}

export default Footer;
