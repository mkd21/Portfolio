
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { FaGithubAlt } from "react-icons/fa";

export default function ProjectsCard() {
    
    return (
        <>
            <Card
                sx={{
                    width: { lg: "30rem" }, padding: { lg: "1rem" },
                    background: "rgba(207, 237, 249, 0.2)",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(8.5px)",
                    WebkitBackdropFilter: "blur(8.5px)",
                    borderRadius: "0 34px",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": { transform: "scale(1.03)" }
                }}>

                <CardActionArea disableRipple sx={{
                    "&:hover": { backgroundColor: "transparent" }, "&:hover": { cursor: "default" },
                    "& .MuiCardActionArea-focusHighlight": { backgroundColor: "transparent" }
                }}>
                    <CardMedia sx={{ height: { lg: "15rem" } }}
                        component="img"
                        image="../../assets/projects-banner/communionProject.png"
                        alt="communion project image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            CommunionHub.org Assignment
                        </Typography>


                        <Box sx={{ display: { lg: "flex" }, justifyContent: { lg: "space-around" }, margin: { lg: "2rem 0" } }} >
                            <Chip label="React" />
                            <Chip label="React Router" />
                            <Chip label="Tailwind" />
                            <Chip label="Framer Motion" />
                        </Box>


                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            A web app for event creation, built with React, React Router, and Tailwind CSS. Implemented Framer Motion for
                            animations and used Chrome's local data storage for data persistence. A dynamic image selection feature that
                            assigns a random event-specific image from a custom dataset if no image is provided by the user.
                        </Typography>


                        <Box sx={{ display: { lg: "flex" }, justifyContent: { lg: "space-around" }, marginTop: { lg: "1rem" } }} >

                            <Button variant="contained" href="https://communion-replica.netlify.app/" target='_blank' sx={{ width: { lg: "11rem" }, display: "flex", justifyContent: "space-around", backgroundColor: "#2c5656" }} >
                                <HiMiniArrowTopRightOnSquare className="lg:text-[1.4rem]" /> View Project
                            </Button>

                            <Button variant="contained" href="https://github.com/mkd21/Perist-Venture-Assignment" target='_blank' sx={{ width: { lg: "11rem" }, display: "flex", justifyContent: "space-around" }} >
                                <FaGithubAlt className=" text-black lg:text-[1.5rem] " /> View Code
                            </Button>

                        </Box>

                    </CardContent>
                </CardActionArea>

            </Card>
        </>
    );
}