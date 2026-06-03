function About() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <h1 className="text-3xl font-semibold mb-8">About Me</h1>

      <div className="space-y-5 text-gray-300 leading-relaxed text-base">
        <p>
          I'm entering my <strong className="text-white">fourth year of Mechanical Engineering
          at UCLA</strong> with a <strong className="text-white">4.0 GPA</strong>. I'm part of
          the{' '}
          <strong className="text-white">
            Structures-Computer Interaction (SCI) Lab
          </strong>{' '}
          working on a perception-guided{' '}
          <strong className="text-white">laser weeding project</strong>.
        </p>

        <p>
          I have experience in{' '}
          <strong className="text-white">MATLAB, Python, C++, and JavaScript</strong>, and I'm
          interested in careers involving{' '}
          <strong className="text-white">
            robotics, systems analysis, control design, and diagnostics
          </strong>
          .
        </p>

        <p>
          Outside of coursework, I enjoy working on hands-on projects that bridge mechanical
          design, embedded systems, and computer vision—the kind of problems where hardware and
          software have to work together to produce a reliable result.
        </p>
      </div>

      <div className="mt-10 pt-8 border-t border-white/10 text-sm text-gray-400 space-y-1">
        <p>
          Reach me at{' '}
          <a
            className="text-gray-200 underline decoration-dotted underline-offset-4 hover:text-white"
            href="mailto:eli.p.p.whitaker@gmail.com"
          >
            eli.p.p.whitaker@gmail.com
          </a>
        </p>
        <p>Expected Graduation: June 2026</p>
      </div>
    </div>
  );
}

export default About;
