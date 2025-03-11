import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const BossesCard = ({ index, name, img, onClick }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] cursor-pointer'
        onClick={onClick} 
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-quartenary rounded-[20px] py-8 px-6 min-h-[320px] flex flex-col justify-between items-center hover:transition-all duration-300"
        >
          <div className="w-full h-48 overflow-hidden rounded-[20px] mb-4">
            <img
              src={img}
              alt={name}
              className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
            />
          </div>
          <h3 className='text-quint text-[24px] text-center'>{name}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default BossesCard;