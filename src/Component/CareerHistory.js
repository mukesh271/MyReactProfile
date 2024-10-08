import React from "react";
import "./CareerHistory.css";
// import careerImage from "../assets/career-image.png"; // Use the actual path of your image
// import logo1 from "../assets/logo1.png"; // Use actual paths of your logos
// import logo2 from "../assets/logo2.png";

const CareerHistory = () => {
  return (
    <div className="career-history">
      <div className="career-image-container">
        {/* <img src={careerImage} alt="Career Graphic" className="career-image" /> */}
      </div>
      <div className="career-history-container">
        <h2>Career History</h2>
        <div className="career-card">
          {/* <img src={logo1} alt="ReactJS Developer Logo" className="career-logo" /> */}
          <div className="career-details">
            <h3>ReactJS Developer</h3>
            <div className="company">FAB Web Studio • Jan 2024 - Present</div>
            <p>
              Building and managing interactive frontend UIs using React and Next.js.
              Integrating with backend APIs and services to fetch and manipulate data.
              Participating in client meetings to gather requirements, provide updates,
              and address feedback.
            </p>
          </div>
        </div>
        <div className="career-card">
          {/* <img src={logo2} alt="Software Engineer Logo" className="career-logo" /> */}
          <div className="career-details">
            <h3>Software Engineer</h3>
            <div className="company">Evolve • Jan 2023 - Jan 2024</div>
            <p>
              Designed and developed 2 web applications from scratch using React and its
              ecosystem. Coordinated directly with the founding team to plan the roadmap
              and prioritize feature development. Participated in sprint planning and agile
              ceremonies to deliver features in iterative cycles.
            </p>
          </div>
        </div>
        <div className="career-card">
          {/* <img src={logo2} alt="Software Engineer Logo" className="career-logo" /> */}
          <div className="career-details">
            <h3>Software Engineer</h3>
            <div className="company">Evolve • Jan 2023 - Jan 2024</div>
            <p>
              Designed and developed 2 web applications from scratch using React and its
              ecosystem. Coordinated directly with the founding team to plan the roadmap
              and prioritize feature development. Participated in sprint planning and agile
              ceremonies to deliver features in iterative cycles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerHistory;
