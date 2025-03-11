import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import bosses from '../data/bosses';
import { fadeIn, textVariant } from '../utils/motion';
import BossesCard from './BossesCards';
import { SectionWrapper } from '../hoc';
import xIcon from '../assets/x.svg';

const Cards = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBoss, setSelectedBoss] = useState(null);

  
  const filteredBosses = bosses.filter((boss) =>
    boss.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  const clearSearch = () => {
    setSearchTerm('');
  };

  
  const openModal = (boss) => {
    setSelectedBoss(boss);
  };

  
  const closeModal = () => {
    setSelectedBoss(null);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionHeadText}>All Boss List</p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="flex justify-center mt-20"
      >
        <div className="relative">
          <input 
            id="search" 
            type="text" 
            className="w-[600px] p-4 pl-12 pr-12 bg-black text-white border border-white rounded-full border-4 outline-none placeholder-gray-400 text-lg"
            placeholder="Search"
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
          
          {searchTerm && ( 
            <button
              onClick={clearSearch}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 focus:outline-none"
            >
              <img src={xIcon} alt="Clear search" className="w-5 h-5" /> 
            </button>
          )}
        </div>
      </motion.p>

      
      <div className='mt-32 flex flex-wrap gap-10'>
        {filteredBosses.length > 0 ? (
          filteredBosses.map((boss, index) => (
            <BossesCard
              key={boss.id}
              index={index}
              {...boss}
              onClick={() => openModal(boss)} 
            />
          ))
        ) : (
          <div className="w-full flex justify-center items-center">
            <p className="text-white text-2xl ">NOT FOUND</p>
          </div>
        )}
      </div>

      
      {selectedBoss && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-quartenary rounded-[20px] p-8 max-w-md w-full mx-4 relative">
      
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
      >
        <img src={xIcon} alt="Fechar" className="w-6 h-6" />
      </button>

      
      <h2 className="text-white text-3xl mb-6 text-center">{selectedBoss.name}</h2>

      
      <div className="w-full h-56 overflow-hidden rounded-[20px] mb-6 flex justify-center">
        <img
          src={selectedBoss.img}
          alt={selectedBoss.name}
          className="h-full w-full object-cover rounded-[20px]"
        />
      </div>

      
      <div className="mb-6">
        <h3 className="text-white text-xl mb-2">LOCATION:</h3>
        <p className="text-white text-lg">{selectedBoss.location}</p>
      </div>

      
      <div>
        <h3 className="text-white text-xl mb-2">DROPS:</h3>
        <ul className="space-y-2">
          {selectedBoss.drops.map((drop, index) => (
            <li key={index} className="text-white text-lg">
              {drop.quantity}x {drop.drop} {drop.unique && "(Único)"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)}
    </>
  );
};

export default SectionWrapper(Cards, "cards");