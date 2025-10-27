function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
      <h1 className="text-3xl font-semibold mb-6">About Me</h1>
      <div className="max-w-2xl">
        <p className="text-gray-300 leading-relaxed text-lg">
          I’m entering my <strong>fourth year of Mechanical Engineering at UCLA</strong> with a{' '}
          <strong>4.0 GPA</strong>. I’m part of the{' '}
          <strong>Structures Interaction & Computation Lab (SIC Lab)</strong> working on a
          perception-guided <strong>laser weeding project</strong>.
        </p>
        <p className="mt-4 text-gray-300 leading-relaxed text-lg">
          I have experience in <strong>MATLAB, Python, C++, and JavaScript</strong>, and I’m
          interested in careers involving{' '}
          <strong>robotics, systems analysis, control design, and diagnostics</strong>.
        </p>
        <p className="mt-6 text-gray-400 text-sm">
          Reach me at{' '}
          <a
            className="underline decoration-dotted underline-offset-4"
            href="mailto:eli.p.p.whitaker@gmail.com"
          >
            eli.p.p.whitaker@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default About;
