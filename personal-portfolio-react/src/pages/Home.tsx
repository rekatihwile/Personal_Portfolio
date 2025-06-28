import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
        fontFamily: "sans-serif",
        color: "#cbdae2",
        backgroundColor: "#454e53",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Hi, I’m Eli 👋</h1>

      {/* Bio + Image box */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
          marginBottom: "2rem",
          maxWidth: "800px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Bio Box */}
        <div
          style={{
            flex: 1,
            minWidth: "300px",
          }}
        >
          <p style={{ fontSize: "1.2rem", color: "#cbdae2" }}>
            I’m a mechanical engineering student at UCLA passionate about
            robotics, clean design, and problem-solving. Welcome to my site!
          </p>
        </div>

        {/* Profile Image */}
        <img
          src="/images/Profile_Photo.jpeg"
          alt="Eli's profile photo"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "12px",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Projects Header */}
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem", marginTop: "2rem" }}>
        Projects
      </h2>

      {/* Column of Project Boxes */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        {/* Robot Project */}
        <Link to="BallCatchingProject" style={{ textDecoration: "none" }}>
          <div
            style={{
              padding: "1rem",
              backgroundColor: "#f0f0f0",
              borderRadius: "8px",
              width: "300px",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <img
              src="/images/CAD_Design.png"
              alt="Ball Catching Project"
              style={{
                width: "100%",
                height: "120px",
                objectFit: "contain",
                borderRadius: "4px",
                marginBottom: "0.5rem",
              }}
            />
            <h3
              style={{ fontSize: "1.2rem", margin: "0.5rem 0", color: "#333" }}
            >
              Ball Catching Project
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#666", margin: "0" }}>
              Using computer vision and a custom-designed robot arm to catch a
              pingpong ball midair. Utilizes different controllers to optimize
              performance.
            </p>
          </div>
        </Link>
        {/* Ukulele Project */}
        <Link to="UkuleleStrapProject" style={{ textDecoration: "none" }}>
          <div
            style={{
              padding: "1rem",
              backgroundColor: "#f0f0f0",
              borderRadius: "8px",
              width: "300px",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <img
              src="/images/UkuleleStrap.png"
              alt="Ukulele Strap Project"
              style={{
                width: "100%",
                height: "120px",
                objectFit: "contain",
                borderRadius: "4px",
                marginBottom: "0.5rem",
              }}
            />
            <h3
              style={{ fontSize: "1.2rem", margin: "0.5rem 0", color: "#333" }}
            >
              Ukulele Strap Project
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#666", margin: "0" }}>
              A custom 3D-printed ukulele strap attachment for better
              playability without permanently modifying the instrument by
              installing a strap button.
            </p>
          </div>
        </Link>
        {/* Robot Project */}
        <Link to="DiscordAIBot" style={{ textDecoration: "none" }}>
          <div
            style={{
              padding: "1rem",
              backgroundColor: "#f0f0f0",
              borderRadius: "8px",
              width: "300px",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <img
              src="/images/DiscordAI.png"
              alt="DiscordAI"
              style={{
                width: "100%",
                height: "120px",
                objectFit: "contain",
                borderRadius: "4px",
                marginBottom: "0.5rem",
              }}
            />
            <h3
              style={{ fontSize: "1.2rem", margin: "0.5rem 0", color: "#333" }}
            >
              Discord AI Bot Project
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#666", margin: "0" }}>
              A Discord bot that uses OpenAI's GPT-3.5 to provide AI-generated
              responses and ElevenLabs to speak them aloud in voice channels.
            </p>
          </div>
        </Link>
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: "4rem",
          padding: "2rem",
          backgroundColor: "#3a4248",
          width: "100%",
          textAlign: "center",
          color: "#cbdae2",
        }}
      >
        <p style={{ margin: "0.5rem 0", fontSize: "1rem" }}>
          Email: eli.p.p.whitaker@gmail.com
        </p>
        <p style={{ margin: "0.5rem 0", fontSize: "1rem" }}>
          UCLA Mechanical Engineering Student
        </p>
        <p style={{ margin: "0.5rem 0", fontSize: "1rem" }}>
          Expected Graduation: June 2026
        </p>
      </footer>
    </div>
  );
}

export default Home;
