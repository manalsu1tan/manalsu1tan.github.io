import React from "react";

const links = [
  { label: "Personal Site", href: "#", meta: "Project" },
  { label: "Design System Components", href: "#", meta: "Project" },
  { label: "Writing Notes", href: "#", meta: "Notes" }
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
          (isn't it funny they give you a B.S. in Philosophy?)
        </p>
        <h2 id="interests">Interests</h2>
        <p>
          Interested in behavioral econ, HCI, neurosymbolic ai, postmodern philosophy,
          and systems (social, economic, etc.)
        </p>
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
        <a href="mailto:hello@example.com">hello@example.com</a>
        <nav aria-label="Social links">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">X</a>
        </nav>
      </footer>
    </main>
  );
}
