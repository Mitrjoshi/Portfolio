import { useState } from "react";
import { ArrowDown, ArrowRight, Code2, Download, MapPin } from "lucide-react";
import {
  ExternalArrow,
  FlowArrow,
  Marquee,
  SectionFrame,
  ShipMark,
  Stamp,
  Status,
  Sticker,
  TerminalPanel,
} from "@/components/maximal";
import { ProjectCard } from "@/components/projects";
import {
  learning,
  principles,
  profile,
  projects,
  stack,
  workHistory,
} from "@/data/portfolio";

function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-nav${menuOpen ? " menu-open" : ""}`}>
      <a className="nav-brand" href="#top" onClick={closeMenu}>
        <ShipMark />
      </a>
      <button className="nav-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>
        <span>INDEX</span>
        <i aria-hidden="true" />
      </button>
      <nav id="primary-navigation" aria-label="Primary navigation">
        <a href="#about" onClick={closeMenu}>
          <b>01</b> ABOUT
        </a>
        <a href="#stack" onClick={closeMenu}>
          <b>02</b> STACK
        </a>
        <a href="#work" onClick={closeMenu}>
          <b>03</b> WORK
        </a>
        <a href="#experience" onClick={closeMenu}>
          <b>04</b> EXPERIENCE
        </a>
        <a href="#contact" onClick={closeMenu}>
          <b>05</b> CONTACT
        </a>
      </nav>
      <div className="nav-status">
        <Status />
        <span>v2.0 / IN</span>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero section-ink">
      <SiteNav />
      <div className="hero-inner">
        <div className="hero-ghost" aria-hidden="true">
          BUILD
          <br />
          DEBUG
          <br />
          SHIP
        </div>
        <div className="hero-copy">
          <div className="section-kicker">
            <span>ISSUE_001 / IDENTITY</span>
            <span>2026 — NOW</span>
          </div>
          <p className="hero-hello">
            HELLO /<br />
            <span>I'M MITR.</span>
          </p>
          <h1>
            <span>SOFTWARE</span>
            <span className="hero-developer">DEVELOPER</span>
            <em>L2</em>
          </h1>
          <div className="hero-actions">
            <a className="button button-yellow" href="#work">
              EXPLORE WORK <ExternalArrow />
            </a>
            <a className="button button-outline" href="/cv.pdf" download>
              DOWNLOAD RESUME <Download size={16} />
            </a>
          </div>
        </div>
        <div className="hero-portrait">
          <img src="/profile.jpg" alt="Portrait of Mitr Joshi" />
          <Sticker className="portrait-sticker">BUILD PASSED ✓</Sticker>
          <span className="portrait-index" aria-hidden="true">
            /001
          </span>
        </div>
        <div className="hero-notes">
          <span>ROLE: SOFTWARE DEVELOPER L2</span>
          <span>
            <MapPin size={13} /> INDIA
          </span>
          <span>
            <Status /> / BRANCH: MAIN
          </span>
          <span>STACK: REACT · TS · NODE · AWS</span>
        </div>
        <div className="hero-arrow">
          <ArrowRight />{" "}
          <span>
            THINGS THAT
            <br />
            ACTUALLY SHIP
          </span>
        </div>
        <Sticker tone="red" className="hero-sticker">
          PRODUCTION
          <br />
          READY
        </Sticker>
        <span className="hero-scroll">
          <ArrowDown size={16} /> SCROLL TO INSPECT
        </span>
      </div>
    </section>
  );
}

function About() {
  return (
    <SectionFrame
      id="about"
      eyebrow="02 / ABOUT + MANIFESTO"
      title={
        <>
          I DON'T JUST
          <br />
          <span>BUILD SCREENS.</span>
          <br />I BUILD <i>SYSTEMS.</i>
        </>
      }
      tone="paper"
    >
      <div className="about-grid">
        <div className="about-lead">
          <p>{profile.summary}</p>
          <p>
            My work sits where product thinking meets implementation: interfaces
            people can use, APIs that can be trusted, and systems that hold up
            after launch.
          </p>
          <Stamp>READ THE SOURCE / THINK IN SYSTEMS</Stamp>
        </div>
        <div className="annotation-stack">
          <p>→ cares about edge cases</p>
          <p>→ reads the API response before blaming frontend</p>
          <p>
            → responsive means more than adding <code>md:</code>
          </p>
          <p>→ currently building better questions</p>
        </div>
      </div>
      <div className="principles">
        <div className="module-label">
          ENGINEERING PRINCIPLES <span>04 ITEMS / NO FILLER</span>
        </div>
        {principles.map((item) => (
          <article className="principle" key={item.number}>
            <strong>{item.number}</strong>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </SectionFrame>
  );
}

function Stack() {
  return (
    <SectionFrame
      id="stack"
      eyebrow="03 / STACK + TOOL WALL"
      title={
        <>
          THE TOOLS
          <br />
          <span>I SHIP WITH.</span>
        </>
      }
      tone="yellow"
    >
      <div className="stack-layout">
        <TerminalPanel title="developer --skills">
          <p className="terminal-command">$ developer --skills</p>
          <div className="skill-line">
            <span>frontend</span>
            <b>█████████░</b>
          </div>
          <div className="skill-line">
            <span>typescript</span>
            <b>█████████░</b>
          </div>
          <div className="skill-line">
            <span>api-integration</span>
            <b>████████░░</b>
          </div>
          <div className="skill-line">
            <span>debugging</span>
            <b>█████████░</b>
          </div>
          <div className="skill-line">
            <span>aws</span>
            <b>███████░░░</b>
          </div>
          <small>// visual indicators, not laboratory data</small>
        </TerminalPanel>
        <div className="tool-wall">
          {stack.map((item, index) => (
            <div className={`tool tool-${index + 1}`} key={item.text}>
              <span>{item.text}</span>
              <small>
                {index < 3
                  ? "DAILY DRIVER"
                  : index < 6
                    ? "PRODUCTION"
                    : "WORKING KNOWLEDGE"}
              </small>
            </div>
          ))}
        </div>
      </div>
      <div className="stack-footer">
        <span>REACT · TYPESCRIPT · NODE.JS · AWS</span>
        <Sticker tone="blue">NO ANY ZONE</Sticker>
      </div>
    </SectionFrame>
  );
}

function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const archiveProjects = projects.filter((project) => !project.featured);
  return (
    <SectionFrame
      id="work"
      eyebrow="04 / SELECTED WORK"
      title={
        <>
          SELECTED
          <br />
          <span>WORK.</span>
        </>
      }
      tone="ink"
      className="projects-section"
    >
      <div className="projects-intro">
        <p>SYSTEMS / CAMPAIGNS / AI / EXPERIENCES</p>
        <div className="archive-meta">
          <span>PROJECT_ARCHIVE</span>
          <span>2024 — 2026</span>
          <span>BUILD STATUS: SHIPPED</span>
          <span>INDEX: 001 — {projects.at(-1)?.index}</span>
        </div>
        <span className="projects-ghost" aria-hidden="true">
          {String(projects.length).padStart(2, "0")}
        </span>
      </div>
      <div className="project-index">
        {projects.map((project) => (
          <a href={`#project-${project.index}`} key={project.id}>
            <b>{project.index}</b>
            <span>{project.title}</span>
          </a>
        ))}
      </div>
      <div className="featured-label">
        <span>FEATURED WORK</span>
        <span>
          {String(featuredProjects.length).padStart(2, "0")} SYSTEMS / ONE CARD
          SYSTEM, SIX PLACEMENTS
        </span>
      </div>
      <div className="projects-list">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {archiveProjects.length > 0 && (
        <div className="archive">
          <div className="archive-heading">
            <span>MORE SYSTEMS</span>
            <h3>
              ARCHIVE <i>/</i>
            </h3>
            <span>UNRELEASED / INTERNAL / STILL SHIPPING</span>
          </div>
          <div className="archive-list">
            {archiveProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}
    </SectionFrame>
  );
}

function Engineering() {
  return (
    <SectionFrame
      id="engineering"
      eyebrow="05 / ENGINEERING CASE FILES"
      title={
        <>
          BUGS / SYSTEMS /<br />
          <span>DECISIONS.</span>
        </>
      }
      tone="blue"
    >
      <div className="case-grid">
        <div className="case-main">
          <div className="case-label">
            CASE_001 <span>FIELD NOTES / OPEN</span>
          </div>
          <h3>
            THE WORK IS IN
            <br />
            <em>THE DECISIONS.</em>
          </h3>
          <p>
            Every interface is a set of trade-offs. Every production issue is a
            chance to understand the system better.
          </p>
          <div className="diagram">
            <span>CLIENT</span>
            <FlowArrow />
            <span>REACT</span>
            <FlowArrow />
            <span>API</span>
            <FlowArrow />
            <span>BACKEND</span>
            <FlowArrow />
            <span>DATABASE</span>
          </div>
        </div>
        <div className="bug-wall">
          <div className="module-label">
            BUG GRAVEYARD <span>06 DEFEATED</span>
          </div>
          <div className="bug bug-red">CORS</div>
          <div className="bug bug-paper">500</div>
          <div className="bug bug-yellow">
            INFINITE
            <br />
            RENDER
          </div>
          <div className="bug bug-ink">
            TYPE
            <br />
            <small>'ANY'</small>
          </div>
        </div>
      </div>
      <div className="case-note">
        <Code2 size={18} />
        <span>
          DETAILED CASE STUDIES ARE READY FOR THE NEXT SHIP/LOG UPDATE.
        </span>
        <span className="case-issue">ISSUE_002 →</span>
      </div>
    </SectionFrame>
  );
}

function Experience() {
  return (
    <SectionFrame
      id="experience"
      eyebrow="06 / EXPERIENCE + CHANGELOG"
      title={
        <>
          RELEASE NOTES
          <br />
          <span>FROM THE FIELD.</span>
        </>
      }
      tone="paper"
    >
      <div className="changelog">
        <div className="changelog-spine" />
        {workHistory.map((job, index) => (
          <article className="changelog-entry" key={`${job.role}-${index}`}>
            <div className="release-version">
              v{index === 0 ? "2.4" : index === 1 ? "1.8" : "1.0"}
            </div>
            <div className="release-copy">
              <div className="release-meta">
                {job.duration} / {job.type}
              </div>
              <h3>{job.role}</h3>
              <h4>{job.company}</h4>
              <ul>
                {job.description.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <div className="release-stack">{job.tech.join(" · ")}</div>
            </div>
          </article>
        ))}
      </div>
    </SectionFrame>
  );
}

function ProcessCode() {
  return (
    <SectionFrame
      id="process"
      eyebrow="07 / PROCESS + SOURCE"
      title={
        <>
          UNDERSTAND.
          <br />
          <span>BUILD. SHIP.</span>
        </>
      }
      tone="red"
    >
      <div className="process-code-grid">
        <div className="process-flow">
          {[
            "UNDERSTAND",
            "BREAK IT",
            "BUILD IT",
            "BREAK IT AGAIN",
            "FIX IT",
            "SHIP IT",
          ].map((step, index) => (
            <div className="process-step" key={step}>
              <strong>0{index + 1}</strong>
              <span>{step}</span>
              <small>
                {
                  [
                    "find the actual problem",
                    "make the work legible",
                    "turn decisions into code",
                    "test the edges",
                    "follow the signal",
                    "leave it better",
                  ][index]
                }
              </small>
            </div>
          ))}
        </div>
        <TerminalPanel title="ProjectCard.tsx">
          <div className="code-line">
            <i>01</i>
            <span>
              <b>const</b> project = <em>{"{"}</em>
            </span>
          </div>
          <div className="code-line">
            <i>02</i>
            <span>
              {" "}
              outcome: <strong>"actually ships"</strong>,
            </span>
          </div>
          <div className="code-line">
            <i>03</i>
            <span>
              {" "}
              stack: [<strong>"React"</strong>, <strong>"TypeScript"</strong>],
            </span>
          </div>
          <div className="code-line">
            <i>04</i>
            <span>
              {" "}
              principle: <strong>"debug first"</strong>,
            </span>
          </div>
          <div className="code-line">
            <i>05</i>
            <span>
              <em>{"}"}</em>
            </span>
          </div>
          <div className="code-caption">
            <span>VIEW SOURCE</span>
            <ArrowRight size={16} />
          </div>
        </TerminalPanel>
      </div>
      <div className="learning-strip">
        <span>CURRENT SIDE QUESTS</span>
        {learning.map((item) => (
          <b key={item}>{item}</b>
        ))}
      </div>
    </SectionFrame>
  );
}

function Contact() {
  return (
    <SectionFrame
      id="contact"
      eyebrow="08 / CONTACT + FINALE"
      title={
        <>
          HAVE SOMETHING
          <br />
          <span>INTERESTING</span>
          <br />
          TO BUILD?
        </>
      }
      tone="yellow"
    >
      <div className="contact-grid">
        <div>
          <p className="contact-cta">
            LET'S
            <br />
            <em>SHIP IT.</em> <ExternalArrow />
          </p>
          <div className="contact-links">
            <a href="/cv.pdf" download>
              RESUME <Download size={16} />
            </a>
            <span className="contact-muted">
              EMAIL / SOCIAL LINKS CAN BE ADDED HERE
            </span>
          </div>
        </div>
        <div className="readme">
          <div className="readme-head">
            <span>README.md</span>
            <span>v2.0</span>
          </div>
          <p>
            <b>works_best_with:</b>
          </p>
          <p>
            　- clear requirements
            <br />
            　- difficult bugs
            <br />
            　- clean APIs
            <br />
            　- coffee
          </p>
          <p>
            <b>ships_with:</b> curiosity + care
          </p>
        </div>
      </div>
      <footer>
        <span>© MITR JOSHI / SHIP/LOG</span>
        <span>DESIGNED × BUILT × DEBUGGED × SHIPPED</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </SectionFrame>
  );
}

export function ShipLogPage() {
  return (
    <main className="shiplog-page">
      <Hero />
      <Marquee>
        REACT ✦ TYPESCRIPT ✦ NODE.JS ✦ AWS ✦ UI ENGINEERING ✦ APIS ✦ DEBUGGING ✦
        SHIPPING ✦{" "}
      </Marquee>
      <About />
      <Stack />
      <Projects />
      <Engineering />
      <Experience />
      <ProcessCode />
      <Contact />
    </main>
  );
}
