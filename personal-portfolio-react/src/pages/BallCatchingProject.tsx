function BallCatchingProject() {
  return (
    <div
      style={{
        fontFamily:
          "'JetBrains Mono', 'Fira Code', 'Source Code Pro', 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace",
        color: "#cbdae2",
        backgroundColor: "#454e53",
        minHeight: "100vh",
      }}
    >
      {/* Page Header */}
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Ball Catching Project
        </h1>
      </div>

      {/* Overview Section - Text Left, Video Right */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "2rem",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Overview</h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            This project combines computer vision and robotics to create a
            system capable of catching a ping pong ball in mid-air. The system
            uses real-time object tracking to predict the ball's trajectory and
            coordinates a custom-designed robotic arm to intercept the ball at
            the optimal position. The project demonstrates advanced control
            systems, mechanical design, and computer vision integration.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <video
            src="/videos/overview.mp4"
            controls
            style={{
              width: "100%",
              borderRadius: "8px",
              backgroundColor: "#666",
            }}
          />
        </div>
      </div>

      {/* Implementation Section - Video Left, Text Right */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "2rem",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          backgroundColor: "#3a4248",
        }}
      >
        <div style={{ flex: 1 }}>
          <video
            src="/videos/implementation.mp4"
            controls
            style={{
              width: "100%",
              borderRadius: "8px",
              backgroundColor: "#666",
            }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            Implementation
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            The implementation involved designing a 6-DOF robotic arm with servo
            motors and 3D-printed components. Computer vision algorithms track
            the ball using OpenCV, calculating trajectory and velocity in
            real-time. A PID controller optimizes the arm's movement to achieve
            precise positioning. The system processes video at 60fps to ensure
            rapid response times essential for successful ball catching.
          </p>
        </div>
      </div>

      {/* Results Section - Text Left, Video Right */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "2rem",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Results</h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            The final system achieved an 85% success rate in catching ping pong
            balls thrown from various angles and speeds. The project
            demonstrated successful integration of mechanical engineering
            principles, control theory, and computer vision. Performance
            improvements were noted when using different control algorithms,
            with the PID controller showing the best balance between speed and
            accuracy.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <video
            src="/videos/results.mp4"
            controls
            style={{
              width: "100%",
              borderRadius: "8px",
              backgroundColor: "#666",
            }}
          />
        </div>
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

export default BallCatchingProject;
