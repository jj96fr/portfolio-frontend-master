// Projects.jsx
import React from 'react';
import ProjectCard from './Project/ProjectCard';

const projects = [
  {
    title: 'Meteo api',
    image: '/api meteo.png',
    description: 'Questo progetto che ho  fatto durante il mio percorso con epicode era volto a testare il mio utilizo di api.',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7122683554253160448/'
  },
  {
    title: 'Clone Spotify',
    image: '/spotify clone.png',
    description: 'Progetto effetuato per migliorare le mie skill con react.'
    ,
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7120745310594736128/'
  },
  {
    title: 'Medium',
    image: '/Medium.png',
    description: 'Copia del noto sito web di informazioni Medium'
    ,
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7133402854874042370/'
  },
  {
    title: 'Hotel con spa',
    image: '/hotel.png',
    description: 'Progetto di un sito web di un hotel completo con gestione prenotazioni e gestione pagamenti'
    ,
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7115289491057037312/'
  },
];

const Projects = () => (
  <div id="Projects" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
    {projects.map((project, index) => (
      <ProjectCard
        key={index}
        title={project.title}
        image={project.image}
        description={project.description}
        url={project.url}
      />
    ))}
  </div>
);

export default Projects;
