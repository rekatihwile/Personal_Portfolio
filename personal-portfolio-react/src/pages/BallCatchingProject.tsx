import LoopingVideos from "../LoopingVideos";

function BallCatchingProject() {


  const BASE = 'videos/Ball_Catching_Project/'         // e.g. "/" locally, or "/my-site/" when deployed

  // 1) Make a dictionary / hashmap from a short name to a file path (string)
  const videoPaths = {
    "Ball_On_Stick":        BASE + "IMG_4009.mp4",
    "Catch_DC":  BASE + "63_Decentralized.mov",
    "Catch_JSID": BASE + "JointSpaceInverseDynamics.mov",
    "Catch_OID": BASE + "OperationalInverseDynamics.mov",
    "Catch_RJS_1": BASE + "RobustJointSpace.mov",
    "Catch_RJS_2": BASE + "63_RobustJoint.mov",
    "results":         BASE + "results.mp4"
  }
  



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
          <img
            src="/images/Ball_Catching_Robot/Experimental_Setup.png"
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
                    <LoopingVideos src={videoPaths.Ball_On_Stick} style={{ width: "100%", maxWidth: "600px" }} />

        </div>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            Implementation
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            The implementation involved designing a 2RR planar robotic arm with Dyanmixel M-28
            motors and 3D-printed linkages and base mounts. Computer vision algorithms track
            the ball using OpenCV, calculating trajectory and velocity in
            real-time. A PID controller optimizes the arm's movement to achieve
            precise positioning. The system processes video at 60fps to ensure
            rapid response times essential for successful ball catching.
          </p>
        </div>
      </div>

      {/* Results Section - Text Above, Videos Below */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem",
          gap: "2rem",
          width: "100vw",
          maxWidth: "100vw",
          margin: "0 auto",
        }}
      >
        <div style={{ width: "100%", maxWidth: "1400px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem", textAlign: "center" }}>Results</h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6", textAlign: "center" }}>
        The final system achieved an 85% success rate in catching ping pong
        balls thrown from various angles and speeds. The project
        demonstrated successful integration of mechanical engineering
        principles, control theory, and computer vision. Performance
        improvements were noted when using different control algorithms,
        with the PID controller showing the best balance between speed and
        accuracy.
          </p>
          <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "repeat(2, 1fr)",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
          width: "100%",
        }}
          >
        {/* Catch_DC */}
        <div style={{ textAlign: "center", width: "100%" }}>
          <LoopingVideos src={videoPaths.Catch_DC} style={{ width: "100%", maxWidth: "600px" }} />
          <div style={{ marginTop: "0.5rem", fontSize: "1rem", color: "#cbdae2" }}>
            Decentralized Control Catch
          </div>
        </div>
        {/* Catch_JSID */}
        <div style={{ textAlign: "center", width: "100%" }}>
          <LoopingVideos src={videoPaths.Catch_JSID} style={{ width: "100%", maxWidth: "600px" }} />
          <div style={{ marginTop: "0.5rem", fontSize: "1rem", color: "#cbdae2" }}>
            Joint Space Inverse Dynamics Catch
          </div>
        </div>
        {/* Catch_OID */}
        <div style={{ textAlign: "center", width: "100%" }}>
          <LoopingVideos src={videoPaths.Catch_OID} style={{ width: "100%", maxWidth: "600px" }} />
          <div style={{ marginTop: "0.5rem", fontSize: "1rem", color: "#cbdae2" }}>
            Operational Inverse Dynamics Catch
          </div>
        </div>
        {/* Catch_RJS */}
        <div style={{ textAlign: "center", width: "100%" }}>
          <LoopingVideos src={videoPaths.Catch_RJS_2} style={{ width: "100%", maxWidth: "600px" }} />
          <div style={{ marginTop: "0.5rem", fontSize: "1rem", color: "#cbdae2" }}>
            Robust Joint Space Catch
          </div>
        </div>
          </div>
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