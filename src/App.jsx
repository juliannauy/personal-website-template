// This file contains the website's content and component structure
import './App.css'
import profileImage from './assets/profile.png'
// This object stores the words and links shown on the page.
// You can edit the text here without needing to change the layout below.
// Change these details to make this website yours.
const siteInfo = {
  name: 'Julianna Uy',
  role: 'Computer science student',
  intro: 'I\'m a student at the University of Florida, and am looking forward to developing skills in web development and computer science, learning from others, and contributing to projects that make a difference.',
  // Replace profile.png in src/assets to use your own profile picture.
  image: profileImage,
  location: 'Based in Gainesville, FL',
  email: 'juliannauy@ufl.edu',
  about: 'I love to create, work with others, and learn new things. I want to use this website to share my progression as a student and as a person.',
  // Add, remove, or rename languages and tools in this list.
  skills: ['JavaScript', 'Python', 'React', 'HTML & CSS', 'Git & GitHub'],
  // Add a new project by copying one of these lines and changing its words.
  projects: [
    { title: 'Calculator', description: 'A simple calculator.', tag: 'Python project' },
    { title: 'Study Spot Finder', description: 'An app to find study spots on campus.', tag: 'React project' },
    { title: 'Swamphacks project', description: 'A project I\'m making for Swamphacks 2026.', tag: 'Hackathon project' }
  ],
  // Add your social links here. You can remove any of these if you don't want them to show up.
  links: {
    github: 'https://github.com/juliannauy',
    linkedin: 'https://www.linkedin.com/in/julianna-uy',
  },
}

// This takes the first word from the full name for the greeting.
const firstName = siteInfo.name.split(' ')[0]

// App is the main component, which means it describes the whole webpage.

function StudentPage() {
  return (
    <>
      {/* className connects this HTML-like element to styles in App.css. */}
      <div className="site-shell">
        {/* The hero is the first section visitors see. */}
            <section className="hero">
              {/* This side contains the introduction text. */}
              <div className="hero-copy">
                <p className="eyebrow">{siteInfo.role}</p>
                <h1>Hi, I’m {firstName}.</h1>
                <p className="intro">{siteInfo.intro}</p>
              </div>

              {/* The image path and location come from siteInfo above. */}
              <div className="profile">
                <img className="profile-picture" src={siteInfo.image} alt={`Portrait of ${siteInfo.name}`} />
                <p>{siteInfo.location}</p>
              </div>
            </section>
        <div className="page-layout">
          <main>

            {/* This section explains who the person is and lists their skills. */}
            <section className="section" id="about">
              <div className="section-label">01 / My interests </div>

              <div className="section-content">
                <h2>An Artist and Coder</h2>
                <p>{siteInfo.about}</p>

                {/* makes one bullet point for every item in siteInfo.skills. */}
                <ul className="skill-list" aria-label="Skills">
                  {siteInfo.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </div>
            </section>

            {/* This section makes one project row for every project in the list. */}
            
          </main>
          <aside className="sidebar">
            <section className="section" id="projects">
              <div className="section-label">02 / Selected work</div>

              <div className="section-content">
                <h2>Things I’m making.</h2>

                <div className="project-list">
                  {siteInfo.projects.map((project, index) => (
                    // React needs a key so it can keep track of each project row.
                    <article className="project" key={project.title}>
                      <p className="project-number">0{index + 1}</p>
                      <p className="project-tag">{project.tag}</p>
                      <h3>{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </aside>
        </div>
      </div>

      {/* The footer holds contact information and social links. */}
      <footer className="footer">
        <div>
          <p className="eyebrow">Have a question?</p>
          <a className="footer-email" href={`mailto:${siteInfo.email}`}>
            {siteInfo.email}
          </a>
        </div>

        <div className="footer-links">
          <a href={siteInfo.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={siteInfo.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>

        <p className="footer-note">Built with React + CSS</p>
      </footer>
    </>
  )
}
function App() {
  return (
    <>
      <header className="header" />
      <StudentPage />
    </>
  )
}


export default App
