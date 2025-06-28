function About() {
  return (
    <div
      style={{
        fontFamily:
          "'JetBrains Mono', 'Fira Code', 'Source Code Pro', 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace",
        padding: "2rem",
        color: "#cbdae2",
        backgroundColor: "#454e53",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ flex: 1 }}>
        <h1>About Me</h1>
        <p>
          I&apos;m a UCLA mechanical engineering student who loves robotics.
        </p>
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: "4rem",
          padding: "2rem",
          backgroundColor: "#3a4248",
          textAlign: "center",
          color: "#cbdae2",
        }}
      >
        <p style={{ margin: "0.5rem 0", fontSize: "1rem" }}>
          Email: eli@example.com
        </p>
        <p style={{ margin: "0.5rem 0", fontSize: "1rem" }}>
          UCLA Mechanical Engineering Student
        </p>
      </footer>
    </div>
  );
}

export default About;
