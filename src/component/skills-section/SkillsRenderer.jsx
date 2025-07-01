
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

import { useRef } from 'react';
import { motion } from "framer-motion";

const skillVariants = {
  hidden: { x: -50, opacity: 0, scale: 0.9 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      delay: i * 0.1, // stagger based on index
      ease: 'easeOut',
    },
  }),
};

export default function SkillsRenderer({ Skills_Name, Skills_Icon, index }) {

    const ref = useRef(null);
    return (
        <>
            <motion.div
                variants={skillVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                custom={index} 
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 1.2 }}
                className='xl:w-[4rem] m-auto'
            >
                <Tooltip title={Skills_Name} arrow>
                    <Button
                        className='xl:w-[100%]'
                        sx={{
                            '&:hover': {
                                backgroundColor: 'transparent',
                                boxShadow: 'none',
                            },
                        }}
                    >
                        <img src={Skills_Icon} />
                    </Button>
                </Tooltip>
            </motion.div>


        </>
    );
}