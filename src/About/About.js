import React from "react";
import "./About.css";

const skills = [
  { name: "C", level: 85 },
  { name: "Python", level: 80 },
  { name: "JavaScript", level: 75 },
  { name: "SQL", level: 70 },
  { name: "HTML & CSS", level: 90 },
];

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/resume.pdf"; // Corrected file path
    link.download = "Hemalatha_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="about_container">
      <h4 className="h4_text" id="about">About</h4>
      <h2>Let me introduce myself.</h2>

      <div className="profile_section">
        <div>
          <img className="circle-img" src="profile-pic.jpg" alt="Profile" width="200px" />
        </div>
        <div className="p_ptext">
          <p>"Lass with a <span className="profile_text">million</span> dreams."</p>
        </div>
      </div>

      <div className="profile_details">
        <article className="profile_info">
          <h5 className="about-content">Profile</h5>
          <p>
            A Computer Science and Engineering (CSE) B.E. graduate from Chettinad College Of Engineering
            with an excellent academic background and diverse skillset. Experienced in Web, Flutter, and Android Development.
            Proficient in Python, C, Java, HTML, PHP, MySQL, and basics of JavaScript & CSS.
          </p>

          <h5>Full Name:</h5>
          <p>Hemalatha Gnanavel</p>

          <h5>Birth Date:</h5>
          <p>04-06-2003</p>

          <h5>Website:</h5>
          <p>
            <a href="https://github.com/Hemagnanavel/Portfolio/" target="_blank" rel="noopener noreferrer">
              Portfolio Link
            </a>
          </p>

          <h5>Email:</h5>
          <p>hemalathacse04@gmail.com</p>
        </article>

        <article className="skill_text">
          <h5>Skills</h5>
          {skills.map((skill, index) => (
            <div key={index} className="progress_bar">
              <div className="progress_label">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="progress_line">
                <div className="progress_fill" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </article>
      </div>

      <div className="cv_section" id="resume">
        <button className="cv_button" onClick={handleDownload}>
          Download CV
        </button>
      </div>
    </section>
  );
};

export default About;
