import React from 'react';

const cardStyle = {
  width: '18rem',
  margin: '1rem',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  cursor: 'pointer',
  borderRadius: '15px', // I bordi della card sono arrotondati
  overflow: 'hidden', // Impedisce alle immagini di sporgere dai bordi arrotondati
};

const imageStyle = {
  width: '100%', // larghezza al 100% del contenitore
  height: '12rem', // altezza fissa per tutte le immagini
  objectFit: 'cover', // mantiene le proporzioni e copre l'area del contenitore
  borderRadius: '15px 15px 0 0', // arrotonda solo i bordi superiori dell'immagine
};

const ProjectCard = ({ title, image, description, url }) => {
  // Gestore per il click che reindirizza l'utente al URL
  const handleClick = () => {
    window.location.href = url; // Reindirizza a un nuovo URL
  };

  return (
    <div style={cardStyle} onClick={handleClick}>
      <img src={image} alt={title} style={imageStyle} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;