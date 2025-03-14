import React from 'react';
import "./Education.css";

const Education = () => {
  return (
    <section className='resume_section'>
        <h4 className='resume_text'>Resume</h4>
        <h2>More of my Credentials</h2>
        <h2 className='education_text'>Education</h2>

        <div className="col-twelve">
          <div className="timeline-wrap">

            {/* Schooling */}
            <article className="timeline-block">
              <div className="timeline-header">
                <h3>Schooling</h3>
                <p>2016 - 2020</p>
              </div>
              <div className="timeline-content">
                <h4>
                  <a href="https://karur.nic.in/public-utility/lalapet-s-o/" target="_blank" rel="noopener noreferrer">
                    Government Higher Secondary School, Lalapet
                  </a>
                </h4>
                <p>Completed my schooling through the State Board at Government Higher Secondary School, Lalapet - Karur.</p>
              </div>
            </article> 

            {/* Bachelor's Degree */}
            <article className="timeline-block">
              <div className="timeline-header">
                <h3>Bachelor's Degree</h3>
                <p>2020 - 2024</p>
              </div>
              <div className="timeline-content">
                <h4>
                  <a href="https://chettinadtech.ac.in/" target="_blank" rel="noopener noreferrer">
                    Chettinad College of Engineering and Technology
                  </a>
                </h4>
                <p>B.E. in Computer Science and Engineering (CSE) at Chettinad.</p>
              </div>
            </article>

          </div> 
        </div> 

    </section>
  );
}

export default Education;
