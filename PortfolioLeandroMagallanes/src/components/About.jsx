//countup
import CountUp from 'react-countup'
//intersection observer hook
import { useInView } from "framer-motion"
//motion
import { motion } from 'framer-motion';
//variant
import {fadeIn} from '../variants'

import { useRef } from 'react';
import Subtitle from './Subtitle';

const About = () => {

  //const [ref, inView] = useInView({
    //threshold: 0.5,
  //})

  const ref = useRef(null)
  const isInView = useInView(ref)

  const data = 'I specialize in HTML, CSS3, Sass and JavaScript. I use the Bootstrap and React Js'

  return (

    <>
      <section id='about' className='section' ref={ref}>

      <div className='container mx-auto'>

        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>

            {/*img*/}

            <motion.div 
              variants={fadeIn('right', 0.3)} 
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}  
              className='flex-1 bg-about bg-contain bg-no-repeat hidden md:block lg:block h-[640px] mix-blend-lighten bg-top md:h-[380px] '>
            </motion.div>

            {/*text*/}

            <motion.div
              variants={fadeIn('left', 0.5)} 
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1">

                <h2 className='h2 text-accent'>About me.</h2>
                <h3 className='h3 mb-4'>I am a Freelance Front-end Developer with over 3 years of experience.</h3>
                
                <Subtitle propData={data}/>
                
                {/*stats*/}

                <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
                  <div className='mb-4'>
                    <div className='text-[40px] font-tertiary text-gradient mt-4 mb-2'>
                      { isInView ?
                          <CountUp start={0} end={3} duration={3}/> : null
                      }+
                    </div>
                    <div className='font-primary text-sm tracking-[2px]'>Years of <br/> experience</div>
                  </div>
                  <div className='mb-4'>
                    <div className='text-[40px] font-tertiary text-gradient mt-4  mb-2'>
                      { isInView ?
                          <CountUp start={0} end={30} duration={3}/> : null
                      }+
                    </div>
                    <div className='font-primary text-sm tracking-[2px]'>Projects <br/> completed</div>
                  </div>
                  <div className='mb-4'>
                    <div className='text-[40px] font-tertiary text-gradient mt-4 mb-2'>
                      { isInView ?
                          <CountUp start={0} end={20} duration={3}/> : null
                      }+
                    </div>
                    <div className='font-primary text-sm tracking-[2px]'>Satisfied <br/> Clients</div>
                  </div>
                </div>


            </motion.div>

        </div>

      </div>

      </section>;
    </>
  )
}

export default About

 