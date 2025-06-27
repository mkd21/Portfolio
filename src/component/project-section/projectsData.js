
const projectDetails = [

    {
        id: 1,
        projectImage: "../../../assets/projects-banner/communionProject.png",
        projectName: "CommunionHub.org Assignment",
        techsUsed: ["React", "React Router", "Tailwind", "Framer"],
        description: `A web app for event creation, built with React, React Router, and Tailwind CSS. Implemented Framer Motion for 
                    animations and used Chrome's local data storage for data persistence. A dynamic image selection feature that 
                    assigns a random event-specific image from a custom dataset if no image is provided by the user`,

        projectLinks: { 
            LiveLink :"https://communion-replica.netlify.app/",
            
            GithubLink : "https://github.com/mkd21/Perist-Venture-Assignment"
        }
    },
    {
        id: 2,
        projectImage: "../../../assets/projects-banner/wardrobe-wiz.png",
        projectName: "Wardrobe Wiz",
        techsUsed: ["React", "Tailwind"],
        description: ` Built an interactive fashion pairing web app where users can add their own shirts, jeans, and shoes.Added a smart 
                suggestion feature that generates random outfit combinations using a simple randomizer logic in 
                React.Implemented smooth page transitions and loading states`,

        projectLinks: { 
            LiveLink :"https://wardrobe-management.netlify.app/",
            
            GithubLink : "https://github.com/mkd21/Code-Rift/tree/master/wardrobe-wiz"
        }
    },
];

export {projectDetails};