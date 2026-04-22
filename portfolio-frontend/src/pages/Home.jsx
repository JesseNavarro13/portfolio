const Home = () => {
    return (
        <main className="homePage">
            <section className="homeHero">
                <p className="eyebrow">Portfolio</p>
                <h1>Hi, I am Jesse Navarro</h1>
                <p className="homeSubtitle">
                    Computer Science graduate building clean, reliable web applications.
                </p>
                <p className="homeIntro">
                    Explore featured projects, review the technologies I use, and take a quick
                    look at the work that best represents my skills.
                </p>
            </section>

            <section className="homeHighlights" aria-label="Highlights">
                <article className="highlightCard">
                    <h3>Projects</h3>
                    <p>Hands-on apps focused on practical user experience and maintainable code.</p>
                </article>
                <article className="highlightCard">
                    <h3>Tech Stack</h3>
                    <p>Java, JavaScript, React, Spring Boot, SQL, APIs, and modern frontend tooling.</p>
                </article>
                <article className="highlightCard">
                    <h3>Goal</h3>
                    <p>Create products that feel polished, fast, and intuitive to use.</p>
                </article>
            </section>

            <div className="homeLinks" style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                <a href="/about" className="primaryBtn">About Me</a>
                <a href="/projects" className="secondaryBtn">View Projects</a>
            </div>
        </main>
    );
};

export default Home;