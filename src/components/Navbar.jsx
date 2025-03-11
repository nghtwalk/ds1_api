import React, { useEffect, useState, useRef } from 'react';
import { styles } from '../styles';
import { high, mute } from '../constants'; 
import audioFile from '../assets/ds1.mp3';

const Navbar = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleInteraction = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.muted = true;
      } else {
        audioRef.current.muted = false;
      }
    }
  }, [isMuted]);

  useEffect(() => {
   
    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);

    return () => {
     
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <div className='absolute right-4 top-2' onClick={toggleMute}>
          <img
            src={isMuted ? mute : high}
            alt="speaker"
            className="w-9 h-9 object-contain cursor-pointer"
          />
        </div>
      </div>

      <audio ref={audioRef} loop>
        <source src={audioFile} type="audio/mp3" />
      </audio>
    </nav>
  );
};

export default Navbar;