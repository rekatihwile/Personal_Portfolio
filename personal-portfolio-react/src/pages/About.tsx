function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16 lg:px-8">
      <section className="mb-14 rounded-2xl border border-white/8 bg-[#13181a] p-6 md:p-8 lg:p-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-gray-500">
          About Me
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
          Mechanical engineering, robotics, and real hardware that has to work.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-400">
          I like projects where perception, controls, and physical systems all have to cooperate in
          the real world.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-[1.25fr_0.75fr] md:items-start lg:gap-10">
        <div className="rounded-2xl border border-white/8 bg-[#13181a] p-6 md:p-8">
          <h2 className="mb-6 text-2xl font-semibold">Background</h2>
          <div className="space-y-5 text-base leading-relaxed text-gray-300">
            <p>
              I&apos;m entering my{' '}
              <strong className="text-white">fourth year of Mechanical Engineering at UCLA</strong>{' '}
              with a <strong className="text-white">4.0 GPA</strong>. I&apos;m part of the{' '}
              <strong className="text-white">Structures-Computer Interaction (SCI) Lab</strong>{' '}
              working on a perception-guided{' '}
              <strong className="text-white">laser weeding project</strong>.
            </p>

            <p>
              I have experience in{' '}
              <strong className="text-white">MATLAB, Python, C++, and JavaScript</strong>, and
              I&apos;m interested in careers involving{' '}
              <strong className="text-white">
                robotics, systems analysis, control design, and diagnostics
              </strong>
              .
            </p>

            <p>
              Outside of coursework, I enjoy working on hands-on projects that bridge mechanical
              design, embedded systems, and computer vision, the kind of problems where hardware
              and software have to work together to produce a reliable result.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <section className="rounded-2xl border border-white/8 bg-[#13181a] p-6 md:p-8">
            <h2 className="mb-5 text-2xl font-semibold">Focus Areas</h2>
            <ul className="space-y-4 text-gray-300">
              {[
                'Robotics and mechatronic systems',
                'Computer vision for physical systems',
                'Control design and diagnostics',
                'Embedded and hardware-software integration',
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-white/8 bg-[#0f1416] px-5 py-4 leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-white/8 bg-[#13181a] p-6 md:p-8">
            <h2 className="mb-5 text-2xl font-semibold">Contact</h2>
            <div className="space-y-4 text-sm leading-relaxed text-gray-400">
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
          </section>
        </div>
      </section>
    </div>
  );
}

export default About;
