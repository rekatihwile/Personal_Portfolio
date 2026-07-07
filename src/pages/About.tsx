import { usePageTitle } from '../hooks/usePageTitle';

function About() {
  usePageTitle('About');
  return (
    <div className="project-page mx-auto w-full max-w-6xl px-6 py-14 sm:px-8 lg:px-10">
      <header className="mx-auto mb-16 max-w-4xl animate-fade-up text-center motion-reduce:animate-none md:mb-20">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-gray-500">
          About Me
        </p>
        <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
          Mechanical engineering, robotics, and real work that makes a difference.
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-gray-400">
          I like projects where perception, controls, and physical systems all have to cooperate in
          the real world.
        </p>
      </header>

      <section className="grid gap-8 md:mb-20 lg:grid-cols-[1.25fr_0.75fr] lg:items-start lg:gap-10">
        <div>
          <h2 className="mb-6 text-2xl font-semibold">Background</h2>
          <div className="space-y-5 text-base leading-relaxed text-gray-300">
            <p>
              I recently graduated from{' '}
              <strong className="text-white">UCLA with a B.S. in Mechanical Engineering</strong>{' '}
              and a <strong className="text-white">4.000 GPA</strong>. While at UCLA, I was part of
              the <strong className="text-white">Structures-Computer Interaction (SCI) Lab</strong>
              , where I worked on a perception-guided{' '}
              <strong className="text-white">laser weeding robot</strong>, and I led a
              capstone team building an{' '}
              <strong className="text-white">autonomous grocery bagging robot</strong> that
              combined stereo vision, motion planning, and embedded control on real hardware.
            </p>

            <p>
              I have hands-on experience in{' '}
              <strong className="text-white">MATLAB, Python, C++, and JavaScript</strong>, spanning
              both research and full-stack robotics builds, from perception and controls to
              mechanical design and embedded systems integration. I&apos;m now looking for{' '}
              <strong className="text-white">
                full-time roles in robotics, systems analysis, control design, and diagnostics
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

        <div className="space-y-10">
          <div>
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
                  className="accent-item"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-5 text-2xl font-semibold">Contact</h2>
            <div className="space-y-3 text-sm leading-relaxed text-gray-400">
              <p>
                Reach me at{' '}
                <a
                  className="text-gray-200 underline decoration-dotted underline-offset-4 hover:text-white"
                  href="mailto:eli.p.p.whitaker@gmail.com"
                >
                  eli.p.p.whitaker@gmail.com
                </a>
              </p>
              <p>UCLA Mechanical Engineering, Class of 2026</p>
              <p>Open to full-time opportunities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
