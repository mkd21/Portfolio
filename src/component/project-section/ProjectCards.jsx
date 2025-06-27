
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


export default function ProjectsCard({projectImage , projectName , techsUsed , description , projectLinks}) {

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
                        image={projectImage}
                        alt="communion project image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {projectName}
                        </Typography>


                        <Box sx={{ display: { lg: "flex" }, justifyContent: { lg: "space-around" }, margin: { lg: "2rem 0" } }} >
                            {
                                techsUsed.map( (iter) => <Chip label={iter} /> )
                            }
                        </Box> 


                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {description}
                        </Typography>


                        <Box sx={{ display: { lg: "flex" }, justifyContent: { lg: "space-around" }, marginTop: { lg: "1rem" } }} >

                            <Button variant="contained" href={projectLinks.LiveLink} target='_blank' sx={{ width: { lg: "11rem" }, display: "flex", justifyContent: "space-around", backgroundColor: "#2c5656" }} >
                                <HiMiniArrowTopRightOnSquare className="lg:text-[1.4rem]" /> View Project
                            </Button>

                            <Button variant="contained" href={projectLinks.GithubLink} target='_blank' sx={{ width: { lg: "11rem" }, display: "flex", justifyContent: "space-around" }} >
                                <FaGithubAlt className=" text-black lg:text-[1.5rem] " /> View Code
                            </Button>

                        </Box>

                    </CardContent>
                </CardActionArea>

            </Card>
        </>
    );
}