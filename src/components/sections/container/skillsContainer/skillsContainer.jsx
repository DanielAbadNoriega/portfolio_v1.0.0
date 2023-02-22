import React from "react";
import html from "../../../../assets/imgs/iconos_languages/html.png";
import css from "../../../../assets/imgs/iconos_languages/css.png";
import js from "../../../../assets/imgs/iconos_languages/js.png";
import react from "../../../../assets/imgs/iconos_languages/react.png";
import git from "../../../../assets/imgs/iconos_languages/git.png";
import SkillButton from "../../pure/skillsButton/skillButton";
import SkillModal from "../../pure/skillsModal/skillModal";

const SkillsContainer = () => {
  const skills = [
    {
      name: "html",
      img: html,
      content: {
        Basic: "links, tables, Iframes, Responsive...",
        Forms:
          "Attributes, elements, input types and attibutes and input form Attributes.",
        Media: "Media, Video and Audio.",
        APIs: "Geolacation, Drag/Drop, Web Storage...",
      },
    },
    {
      name: "css",
      img: css,
      content: {
        Selectores:
          "tipos, clases, ID, atributos, pseudo-clases y pseudo-elementos.",
        "Box model": "margin, padding, border, height, width.",
        Display: "block, inline, inline-block, flex, grid.",
        Posicionamiento: "static, relative, absolute, fixed.",
        "Unidades de medida": "px, em, rem, %, vh, vw.",
        Tipografía:
          "font-family, font-size, font-weight, ,line-height, text-align, text-decoration.",
        Colores: "color, background-color, opacity.",
        Animaciones: "transition, transform, keyframes.",
      },
    },
    {
      name: "js",
      img: js,
      content: {
        APIs: "APIs del navegador (fetch, websockets, geolocalización, etc.), integración con APIs externas, Programación asíncrona avanzada, gestión de paquetes y módulos.",
        Frameworks: "Frameworks de frontend como ReactJS.",
      },
    },
    {
      name: "react",
      img: react,
      content: {
        Componentes:
          "Props, State, Ciclo de vida de los componentes, Manejo de eventos, comunicación entre componentes, enrutamiento con React Router, Contexto.",
        Formularios: "Validaciones con Formik y YUP.",
        Hooks:
          "Hook de efecto (useEffect), Hook de estado (useState), Hook de referencia (useRef), Hook de contexto (useContext).",
        Redux: "React Redux (gestión del estado), Redux SAGA.",
      },
    },
    {
      name: "git",
      img: git,
      content: {
        Basic:
          "Configuración inicial de Git, clonar un repositorio, comandos de control de versiones (add, commit, push, pull, fetch).",
          "Trabajar con ramas": "branch, checkout, merge, rebase.",
          "Trabajo a través de la línea de comando y con herramientas gráficas": " GitKraken o GitHub Desktop."
      },
    },
  ];

  return (
    <section id="skills-section" className="skills-container">
      <article>
        <span>&lt;h2&gt;</span>
        <h2>Skills</h2>
        <span>&lt;/h2&gt;</span>
        <p>
          <br />
          Here my skills until now.
          <br />
        </p>
      </article>
      <div className="skills">
        {skills.map((skill, index) => {
          return (
            <div key={index} className={`container-${skill.name}-skill`}>
              <SkillButton name={skill.name} img={skill.img}></SkillButton>
              <SkillModal
                key={index}
                name={skill.name}
                content={skill.content}
              ></SkillModal>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsContainer;
