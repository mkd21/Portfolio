
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

import { motion } from "framer-motion";

export default function SkillsRenderer({ Skills_Name, Skills_Icon }) {

    return (
        <>
            <motion.div whileHover={{ scale: 1.2 }} className='xl:w-[4rem] m-auto' >
                <Tooltip title={Skills_Name} arrow>
                    <Button className='xl:w-[100%]' sx={{ "&:hover": { backgroundColor : "transparent" , boxShadow : "none" } }} > <img src={Skills_Icon} /> </Button>
                </Tooltip>
            </motion.div>
        </>
    );
}