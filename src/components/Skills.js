import React, { useState, useEffect } from 'react';
// import useInView hook
import { useInView } from 'react-intersection-observer';
// import react circular
import { CircularProgressbar } from 'react-circular-progressbar';
// import circular styles
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
  // destructure useInView hook
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  // full body tatoo state
  const [fullBodyTatoo, setFullBodyTatoo] = useState(0);
  // safely piercing state
  const [piercing, setPiercing] = useState(0);
  // full color tatto state
  const [fullColor, setFullColor] = useState(0);
  // temporary tattoo state
  const [temporary, setTemporary] = useState(0);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        if (fullBodyTatoo < 90) {
          setFullBodyTatoo(fullBodyTatoo + 1);
        }
        if (piercing < 80) {
          setPiercing(piercing + 1);
        }
        if (fullColor < 75) {
          setFullColor(fullColor + 1);
        }
        if (temporary < 95) {
          setTemporary(temporary + 1);
        }
      }, 50);
    } else {
      setFullBodyTatoo(0);
      setPiercing(0);
      setFullColor(0);
      setTemporary(0);
    }
  }, [inView, fullBodyTatoo, piercing, fullColor, temporary]);
  // circular progressbar styles
  const styles = {
    path: {
      stroke: '#111111',
    },
    trail: {
      stroke: '#eeeeee',
    },
    text: {
      fill: '#111111',
      fontSize: '24px',
    },
  };

  return (
    <section ref={ref} className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row justify-between items-center gap-y-12'>
          {/* circular item */}
          <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
            <CircularProgressbar
              strokeWidth={1}
              value={fullBodyTatoo}
              styles={styles}
              text={`${fullBodyTatoo}%`}
            />
            {/* text */}
            <div className='uppercase font-light tracking-[1.2px] text-center'>
              Full Body Tattoo
            </div>
          </div>
          {/* circular item */}
          <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
            <CircularProgressbar
              strokeWidth={1}
              value={piercing}
              styles={styles}
              text={`${piercing}%`}
            />
            {/* text */}
            <div className='uppercase font-light tracking-[1.2px] text-center'>
              Safely Piercing
            </div>
          </div>
          {/* circular item */}
          <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
            <CircularProgressbar
              strokeWidth={1}
              value={fullColor}
              styles={styles}
              text={`${fullColor}%`}
            />
            {/* text */}
            <div className='uppercase font-light tracking-[1.2px] text-center'>
              Full Color Tatto
            </div>
          </div>
          {/* circular item */}
          <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
            <CircularProgressbar
              strokeWidth={1}
              value={temporary}
              styles={styles}
              text={`${temporary}%`}
            />
            {/* text */}
            <div className='uppercase font-light tracking-[1.2px] text-center'>
              Temporary Tattoo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
