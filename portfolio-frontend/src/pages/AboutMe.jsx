export default function AboutMe() {
    const skills = [
        'JavaScript (ES6+)',
        'React',
        'Node.js',
        'REST APIs',
        'C++',
        'C#',
        'C',
        'HTML & CSS',
        'Git & GitHub',
        'Java',
        'Spring Boot',
        'SQL',
        'Python',
        'Linux',
        'Data Science',
        'Data Visualization',
        'Data Analysis'
    ];

    return (
        <main className="aboutPage">
            <header className="aboutHeader">
                <p className="eyebrow">Profile</p>
                <h1>About Me</h1>
                <p>
                    I am Jesse Navarro, a Computer Science graduate who enjoys building web applications that are clean, intuitive, and user-friendly. I enjoy working across the stack including designing responsive user interfaces to developing backend systems and APIs.
                </p>
                <p>
                    <br />
                    Most of my experience comes from hands-on school and personal projects where I have built full-stack applications, experimented with new technologies, and learned how to use them in a practical way.
                </p>
                <p>
                    <br />
                    I am currently looking for a full-time position in the software engineering field. I am open to remote work and am willing to relocate for the right opportunity.
                </p>
                <p>
                    <br />
                    When I'm not coding, I enjoy lifting weights, hiking, doing puzzles, playing video games, and spending time with family and friends.
                </p>
            </header>

            <section className="aboutGrid">
                <article className="aboutCard">
                    <h2>Personal Information</h2>
                    <div className="aboutInfoList">
                        <p><strong>Age:</strong> 23</p>
                        <p><strong>Based in:</strong> Los Angeles, CA</p>
                        <p><strong>Focus:</strong> Full-Stack Development & Data-Driven Applications</p>
                        <p><strong>Interests:</strong> Software Engineering, UI design, problem solving, Data Science, and learning new technologies.</p>
                        <p><strong>Email:</strong> <a href="mailto:jessnav13@gmail.com">jessnav13@gmail.com</a></p>
                        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/jesse-navarro-709339248/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/jesse-navarro-709339248/</a></p>
                        <p><strong>GitHub:</strong> <a href="https://github.com/JesseNavarro13" target="_blank" rel="noopener noreferrer">https://github.com/JesseNavarro13</a></p>
                    </div>
                </article>

                <article className="aboutCard">
                    <h2>Education</h2>
                    <div className="aboutInfoList">
                        <p><strong>California State University, Dominguez Hills</strong> - Bachelor of Science in Computer Science</p>
                        <p><strong>Graduated:</strong> December 2025</p>
                        <p><strong>GPA:</strong> 3.73</p>
                        <p><strong>Relevant Courses:</strong> Data Structures, Analysis of Algorithms, Operating Systems, Artificial Intelligence, Data Management, C Programming & Unix, Software Engineering, Software Development, and more.</p>
                    </div>
                </article>

                <article className="aboutCard">
                    <h2>Skills</h2>
                    <ul className="skillsList">
                        {skills.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </article>
            </section>
        </main>
    );
}
