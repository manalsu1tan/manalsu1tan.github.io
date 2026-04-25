import React from "react";

const links = [
  { label: "Kernel Programming", href: "#", meta: "Git" },
  { label: "Hierarchical Memory for Generative Agents", href: "https://github.com/manalsu1tan/idg_proj", meta: "Git" },
  { label: "Rust Compiler", href: "https://github.com/manalsu1tan/rust_compiler", meta: "Git" }
];

export default function App() {
  return (
    <main className="page">
      <header className="intro">
        <h1>
          Manal Sultan
        </h1>
      </header>

      <section aria-labelledby="about-title" className="block">
        <h2 id="about-title">About</h2>
        <p>
          Soon to be graduate from Caltech with a B.S. in Computer Science and Philosophy 
          (isn't it funny they give you a B.S. in Philosophy?). Looking for work I can be obsessed with in a passionate and fun environment,
          and product ownership in development (think zero-to-one). Looking for MLE, applied research and/or FDE roles. 
        </p>

      </section>
      <section aria-labelledby="interests" className="block">
        <h2 id="interests">Interests </h2>
        <h3>Career Interests</h3>
        <p>
          I like to think about behavior at both the individual and systemic level. My professional interests include behavioral economics, human-computer interaction, 
          human-AI interaction, neurosymbolic AI, ML systems, untangling messy data, AI alignment, and low level development.
        </p>

        <h3>Leisure Interests</h3>
        <p>
          Outside of work, I enjoy photography, scientifically-backed recipe development, archive fashion, 
          interior design, failing upwards in snowboarding, keeping up with policy and governance, and reading about postmodern philosophy, social, and economic systems.
        </p>
      </section>

      <section aria-labelledby="work-title" className="block">
      <h2 id="work">Resume</h2>

      <h3>OneChronos</h3>
      <p className="role">Data Intern (Fall 2025)</p>
      <p>
      Built a high-performance Rust pipeline for ingesting, parsing, and normalizing high-volume FIX data. Used Python and Polars for transformation, aggregation, and downstream analysis of trading activity.
      </p>
      <h3>Apple</h3>
      <p className="role">Machine Learning Intern (Summer 2025)</p>
      <p>
      Designed and trained an ensemble computer vision model for automated detection and classification of screen corruption issues. Built a synthetic dataset pipeline to generate and label training and evaluation data for all devices.
      </p>
      <h3>NY Fed</h3>
      <p className="role">Data Scientist Intern (Early Summer 2024)</p>
      <p>
      Developed data architecture, preprocessing pipelines, and cloud automation workflows using AWS and Terraform to analyze bank and subsidiary activity. Built predictive models, including graph neural networks, to model subsidiary behavior and related features.
      </p>
      <h3>GWU x Caltech </h3>
      <p className="role">Summer Undergradulate Research Fellow (Summer 2023 and 2024)</p>
      <p>Developed a CLIP-based computer vision retrieval system to match text descriptions of hotel rooms to likely image results, trained on a TraffickCam subset spanning 200 hotels. Published first-author research on real-world text-based image retrieval, presented at IEEE AIPR and Caltech Seminar Day, and continued the work through Caltech SURF fellowships in 2023 and 2024.</p>
      </section>
      <section aria-labelledby="work-title" className="block">
      <h2 id="work-title">Selected work</h2>
        <ul className="list">
          {links.map((item) => (
            <li key={item.label}>
              <span>{item.label}</span>
              <a href={item.href}>{item.meta}</a>
            </li>
          ))}
        </ul>
      </section>

      <footer className="footer">
        <a href="mailto:manal@caltech.edu">manal@caltech.edu</a>
        <nav aria-label="Social links">
          <a href="https://github.com/manalsu1tan">GitHub</a>
          <a href="https://www.linkedin.com/in/manal-sultan-27ab11120/">LinkedIn</a>
          <a href="https://www.youtube.com/watch?v=sMzRnCaNe0c&pp=ygUObWFyZ2llbGEgc2hvdyA%3D">no X srry, i'm anon</a>
        </nav>
      </footer>
    </main>
  );
}
