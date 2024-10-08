import React from 'react';
import './RecentProjects.css';

const RecentProjects = () => {
  const projects = [
    { id: 1, name: 'Nike Shoes', img: 'https://assets.codepen.io/4164355/shoes.png' },
    { id: 2, name: 'Nike Shoes', img: 'https://assets.codepen.io/4164355/shoes.png' },
    { id: 3, name: 'Nike Shoes', img: 'https://assets.codepen.io/4164355/shoes.png' },
    { id: 4, name: 'Nike Shoes', img: 'https://assets.codepen.io/4164355/shoes.png' },
  ];

  return (
    <div className="projects-container">
      {projects.map((project) => (
        <div className="card" key={project.id}>
          <div className="imgBx">
            <img src={project.img} alt={project.name} />
          </div>
          <div className="contentBx">
            <h2>{project.name}</h2>
            <div className="size">
              <h3>Size :</h3>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
            </div>
            <div className="color">
              <h3>Color :</h3>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <a href="#">Buy Now</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentProjects;
