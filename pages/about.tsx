const About = () => {
  return (
    <main>
      <div className="contentWrapper">
        <h2>More about me</h2>
        <div className="detailsContainer">
          <details>
            <summary>Timeline</summary>
            <h4>2018</h4>
            <p>
              Oct – I was introduced to programming whilst working closely with
              external software developers
            </p>
            <p>
              Dec – Most of my free time was being spent teaching myself HTML,
              CSS and JavaScript
            </p>
            <h4>2019</h4>
            <p>
              Feb – My interest in coding grew as I started attending meetup
              events and conferences, and speaking to different people in the
              tech industry
            </p>
            <p>May – I made it my goal to transition to tech</p>
            <p>
              Aug – Being accepted onto{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.foundersandcoders.com/"
              >
                Founders and Coders (FAC)
              </a>
              , a highly selective full stack JavaScript bootcamp, was a major
              turning point in achieving this
            </p>
            <p>Oct – I quit my insurance job to start FAC</p>
            <h4>2020</h4>
            <p>
              Jan – Whilst still at FAC, I began teaching students at{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://codebar.io"
              >
                Codebar.io
              </a>
            </p>
            <p>Feb – Graduated from Founders and Coders</p>
            <p>
              Mar – Mentored current students at FAC, teaching the curriculum
              and guiding teams through weekly projects
            </p>
            <p>
              Jul – Launched my career in tech as a Frontend Developer at{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://smartway2.com"
              >
                Smartway2
              </a>
            </p>
          </details>
          <details>
            <summary>Recent adventures and new learnings</summary>
            <p>I&apos;m not really the type to stand still! Recently I have:</p>
            <ul>
              <li>
                Continued to mentor (remotely) at{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://codebar.io"
                >
                  Codebar.io
                </a>
              </li>
              <li>
                Tried out different tech and tools like{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.typescriptlang.org"
                >
                  TypeScript
                </a>{" "}
                and{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://tailwindcss.com"
                >
                  Tailwind
                </a>
              </li>
              <li>
                Been playing with{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.arduino.cc"
                >
                  Arduino
                </a>
                , an electronics platform for hardware prototyping
              </li>
            </ul>
          </details>
        </div>
      </div>
    </main>
  );
};

export default About;
