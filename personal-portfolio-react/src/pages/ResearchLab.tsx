import LoopingVideos from '../components/LoopingVideos';

function LaserWeeding() {
  return (
    <div className="min-h-screen bg-[#171a1c] text-gray-100">
      {/* Page Header */}
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Laser Weeding Project</h1>
        <p style={{ fontSize: '1.2rem', color: '#aeb8bd' }}>
          Perception-guided laser system for precision weed removal.
        </p>
      </div>

      {/* Overview Section */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '2rem',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Overview</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            This project explores perception-guided actuation using a{' '}
            <strong>B1 Longer 40W diode laser engraver</strong> mounted to a gantry system. The
            platform is used to selectively target and burn unwanted weeds based on camera-based
            perception feedback.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginTop: '1rem' }}>
            The full system was modeled in <strong>OnShape</strong> for mechanical layout and
            calibration studies. An{' '}
            <strong>Arducam 4K 8MP IMX219 Autofocus USB Camera Module</strong> provides workspace
            imaging to establish a global coordinate frame.
          </p>
        </div>

        <img
          src="/images/Research_Lab/CAD_Setup.png"
          alt="Experimental setup: B1 Longer laser engraver and camera system"
          style={{
            flex: 1,
            minWidth: '300px',
            borderRadius: '12px',
            width: '100%',
            backgroundColor: '#3a4248',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        />
      </div>

      {/* Implementation Section */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '2rem',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
          flexWrap: 'wrap-reverse',
          backgroundColor: '#3a4248',
        }}
      >
        <section className="mt-10" style={{ flex: 1, minWidth: '300px' }}>
          <LoopingVideos
            src="/videos/Research_Lab/Computer_Vision_Test.mov"
            text="Laser targeting test"
            className="w-full max-w-xl mx-auto rounded-xl border border-white/10 bg-[#121517]"
          />
        </section>

        <div style={{ flex: 1, minWidth: '300px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Implementation</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            The system’s control stack interfaces with the laser’s onboard firmware via serial
            G-code commands, enabling precise positioning and power modulation. Safety interlocks
            are included to limit exposure and prevent unwanted firing.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginTop: '1rem' }}>
            The perception pipeline is built with <strong>OpenCV</strong> to identify weeds from the
            captured frame using a grayscale conversion, followed by <em>erosion</em>,{' '}
            <em>dilation</em>, and centroid detection. Detected centroids are then mapped into the
            global frame through a calibrated homogeneous transformation matrix between the camera
            and laser coordinate systems.
          </p>
        </div>
      </div>

      {/* Calibration Section */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '2rem',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
          flexWrap: 'wrap',
          backgroundColor: '#3a4248',
        }}
      >
        {/* Left side: text */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Calibration</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            Calibration establishes the relationship between the <strong>camera</strong> and{' '}
            <strong>laser coordinate frames</strong>. A printed grid is used as a reference, and
            each dot’s pixel location is mapped to a known task-space coordinate. From this, a{' '}
            <em>homography transformation matrix</em> is derived to translate detections into
            real-world millimeter coordinates.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginTop: '1rem' }}>
            When you hover over the calibration photo, you’ll see the visual processing
            results—showing how OpenCV detects the grid points and transforms them for precise
            alignment.
          </p>
        </div>

        {/* Right side: image hover effect */}
        <div className="calibration-hover" style={{ flex: 1, position: 'relative' }}>
          {/* Base image */}
          <img
            src="/images/Research_Lab/Calibration_Grid_Photo.png"
            alt="Calibration pattern for transformation matrix"
            className="calibration-base"
          />

          {/* Hover container (hidden until hover) */}
          <div className="calibration-overlay">
            <img
              src="/images/Research_Lab/CV_PL_1.png"
              alt="CV pipeline part 1"
              className="calibration-subimage"
            />
            <img
              src="/images/Research_Lab/CV_PL_2.png"
              alt="CV pipeline part 2"
              className="calibration-subimage"
            />
          </div>
        </div>
      </div>
      {/* 
      
      <div style={{ textAlign: 'center', padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Results</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
          Below are representative clips of the system performing laser targeting and centroid
          detection trials.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          <LoopingVideos src="/videos/Weed_Detection.mp4" text="Centroid detection pipeline" />
          <LoopingVideos src="/videos/Calibration_Test.mp4" text="Calibration alignment test" />
          <LoopingVideos src="/videos/Laser_Targeting.mp4" text="Laser targeting sequence" />
          <LoopingVideos src="/videos/Safety_Test.mp4" text="Safety interlock demonstration" />
        </div>
      </div> */}

      {/* Footer */}
      <footer
        style={{
          marginTop: '4rem',
          padding: '2rem',
          backgroundColor: '#3a4248',
          textAlign: 'center',
          color: '#cbdae2',
        }}
      >
        <p style={{ margin: '0.5rem 0', fontSize: '1rem' }}>Email: eli.p.p.whitaker@gmail.com</p>
        <p style={{ margin: '0.5rem 0', fontSize: '1rem' }}>
          UCLA Mechanical Engineering Student | SIC Lab
        </p>
        <p style={{ margin: '0.5rem 0', fontSize: '1rem' }}>Expected Graduation: June 2026</p>
      </footer>
    </div>
  );
}

export default LaserWeeding;
