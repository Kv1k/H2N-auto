import dynamic from "next/dynamic";
import { useMemo } from "react";
import "./contact.css";
import bg from '@/public/images/garage_devanture.png';
function Contact() {
  const Map = useMemo(() => dynamic(
    () => import('@/app/components/Contact/MapComponent'),
    {
        loading: () => <p>A map is loading</p>,
        ssr: false
    }
), [])
  return (
    <div>
      <div
        className='clipPathContact flex flex-col justify-start items-center'
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <h1 className='heading text-[30px] pt-[11rem] text-gray-600'>CONTACT</h1>
        <div className="clipPathSep mt-[-10px] md:mt-[-22px]"></div>
        
      </div>
      <div className='bg-[#061D56]'>
        <div className='clipPathMap'>
          <Map posix={[43.661720004707, 3.932134008003]} />
        </div>
        <div className='clipPathCopy'></div>
      </div>
    </div>
  );
}

export default Contact;
