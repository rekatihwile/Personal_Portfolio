function UkuleleStrapProject() {
  return (
    <div className="project-page mx-auto w-full max-w-6xl px-6 py-14 sm:px-8 lg:px-10">
      <header className="mx-auto mb-16 max-w-4xl text-center md:mb-20">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-gray-500">
          CAD / 3D Printing
        </p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Ukulele Strap Project</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-gray-400">
          Custom 3D-printed strap attachment for better playability with no drilling and no
          permanent modifications.
        </p>
      </header>

      <section className="mb-16 grid gap-8 md:mb-20 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div>
          <h2 className="mb-3 text-2xl font-semibold">Design Overview</h2>
          <p className="leading-relaxed text-gray-300">
            Designed in <strong className="text-white">Onshape</strong> to fit a concert-sized
            ukulele with a snug, non-permanent friction fit. The mount uses elastic retention
            instead of screws or adhesives, keeping the instrument unmodified.
          </p>
          <p className="mt-4 leading-relaxed text-gray-300">
            The geometry was iterated across several prints to dial in the interference fit: tight
            enough to stay secure during play and loose enough to remove without tools.
          </p>
        </div>
        <div className="mx-auto w-full max-w-xl overflow-hidden rounded-xl border border-white/10 bg-[#0f1213] lg:h-[22rem]">
          <img
            src="/images/Ukulele_Strap/Overview_Strap.png"
            alt="CAD render of ukulele strap mount"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mb-10 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div className="mx-auto w-full max-w-xl overflow-hidden rounded-xl border border-white/10 bg-[#0f1213] lg:h-[22rem]">
          <img
            src="/images/Ukulele_Strap/Finished_Strap.png"
            alt="Completed ukulele strap mounted on instrument"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h2 className="mb-3 text-2xl font-semibold">Finished Build</h2>
          <p className="leading-relaxed text-gray-300">
            Printed in <strong className="text-white">PLA+</strong> and sanded smooth. It provides
            full playing comfort while remaining removable and visually minimal against the
            instrument body.
          </p>
        </div>
      </section>
    </div>
  );
}

export default UkuleleStrapProject;
