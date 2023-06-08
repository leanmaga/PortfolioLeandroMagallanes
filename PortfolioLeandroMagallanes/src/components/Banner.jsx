//images
import Image from '../assets/me2.png';
//type animation
import { TypeAnimation } from 'react-type-animation';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

import Buttons from './Buttons';
import Subtitle from './Subtitle';

const Banner = () => {

  const data = 'Front-End Developer specializing in React, JavaScript, CSS, and HTML. Crafting immersive web experiences with a keen eye for detail.'
  
  return ( 
    <section className='flex py-8 items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-12'>
          {/*text*/}
          <div className='flex-1 text-center font-secondary lg:text-left pb-8'>


            <motion.h1 
            variants={fadeIn('up', 0.3)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              Leandro <span>Magallanes</span>
            </motion.h1>


            <motion.div 
            variants={fadeIn('up', 0.4)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='mb-6 text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation sequence={[
                'Developer',
                2000,
                'Designer',
                2000,
                'Product Manager',
                2000,
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
              />
            </motion.div>

            <Subtitle propData={data}/>


            


            <motion.div 
            variants={fadeIn('up', 0.6)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='flex max-w-max gap-x-6 items-center'>
              <Buttons/>
            </motion.div>

            
            {/*socials*/}
            
            

          </div>

          {/*image*/}
          <motion.div 
          variants={fadeIn('down', 0.5)} 
          initial='hidden' 
          whileInView={'show'} 
          className=' flex-1 max-w-[320px] lg:max-w-[482px]'>
            <div className='figure bg-contain bg-no-repeat'><img src={Image} alt='me' /></div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;