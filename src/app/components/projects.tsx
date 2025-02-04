
import Image from 'next/image';
import React from 'react';
import "../../styles/projects.css"; 

const projects = [
  {
    type: 'Art Projects',
    items: [
      { title: "Tiger's Gaze", img: '/assests/lion.jpg' },
      { title: 'The Honourable Governor', img: '/assests/m.jpg' },
      { title: 'Feline friend', img: '/assests/d.jpg' },
      { title: 'Spirit of Freedom', img: '/assests/j.jpg' }, 
      { title: 'Wings of Courage', img: '/assests/n.jpg' },
    ],
  },
  {
    type: 'Coding Projects',
    items: [
      { title: 'Landing page using Tailwind.css', img: '/assests/Phone.PNG' },
      { title: 'Facebook clone page using Tailwind.css', img: '/assests/Capturex.PNG' },
      { title: 'Food Website using HTML,CSS and JS', img: '/assests/web.png' },
      { title: 'Resume Builder using HTML,CSS and TS', img: '/assests/resume.png' },
      { title: 'Calculator using HTML,CSS and JS', img: '/assests/Capture.PNG' },
      { title: 'CLi-based Typescript ATM machine', img: '/assests/atm.jpg' },
      { title: 'CLi-based Typescript Word Counter', img: '/assests/word-counter.jpg' },
      { title: 'CLi-based Typescript Adventure game', img: '/assests/game.jpg' },
    ],
  },
  {
    type: 'Graphic Design',
    items: [
      { title: 'Social Media Post', img: "/assests/women's clothes.png" },
      { title: 'Social Media Post', img: '/assests/post.png' },
      { title: 'Social Media Post', img: '/assests/post1.png' },
      { title: 'Logo', img: '/assests/C.png' },
      { title: 'Logo', img: '/assests/caffeine.png' },
      { title: 'Logo', img: '/assests/design.png' },
    ],
  },
];

const Projects = () => {
  return (
    <div id="Projects" className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-flex">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-type">{project.type}</h3>
            <div className="projects-grid">
              {project.items.map((item, i) => (
                <div key={i} className="project-item">
                  <Image
                    src={item.img}
                    alt={item.title}
                    className="project-image"
                    layout="responsive"
                    width={500}
                    height={500}
                    objectFit="cover" // Cover the area of the container
                  />
                  <p className="project-caption">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

