import { motion } from 'framer-motion';

import { styles } from '../styles'
import { WarriorCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen'>
        <div className='absolute inset-x-0 top-[64px] flex justify-center'> 
          <h1 className='text-[58px] text-white text-center'>WELCOME TO <br /> DARK SOULS BOSSES API</h1>
        </div>

          <WarriorCanvas />

          <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
            <a href="#cards">
              <div className='w-[35px] h-[64px] rounded-3xl border-4 border-tertiary flex justify-center items-start p-2'>
                  <motion.dev
                    animate={{
                      y: [0, 24, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: 'loop'
                    }}
                    className="w-3 h-3 rounded-full bg-tertiary mb-1"
                  />
              </div>
            </a>
        </div>
    </section>
  )
}

export default Hero