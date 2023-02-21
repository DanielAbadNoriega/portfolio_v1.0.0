import React from "react";
import inProgress from "../../../../assets/imgs/sections/projects/developing.png";
import git from "../../../../assets/imgs/iconos_rrss/icono_git.png";
import domain from "../../../../assets/imgs/iconos_rrss/icono_www.png";

const WorkContainer = () => {
  return (
    <section id="work-section" className="work-container">
      <article>
        <span>&lt;h2&gt;</span>
        <h2>Work</h2>
        <span>&lt;/h2&gt;</span>
        <p>
          <br />
          Here my all my projects which i practised my skills.
          <br />
        </p>
      </article>

      <div className="work-cards-container">
        <div className="work-card">
          <img src={inProgress} alt="portfolio-html" />
          <hr></hr>
          <p>
            First portfolio what i developed in html, css and javascript. Here
            is my evolution of my skills.
          </p>
          <div className="work-card-rrss">
            <img src={git} alt="git" />
            <img src={domain} alt="domain" />
          </div>
        </div>

        <div className="work-card">
          <img src={inProgress} alt="portfolio-html" />
          <hr></hr>
          <p>lorem ipsum</p>
          <div className="work-card-rrss">
            <img src={git} alt="git" />
            <img src={domain} alt="domain" />
          </div>
        </div>

        <div className="work-card">
          <img src={inProgress} alt="portfolio-html" />
          <hr></hr>
          <p>Lorem impsum</p>
          <div className="work-card-rrss">
            <img src={git} alt="git" />
            <img src={domain} alt="domain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkContainer;
