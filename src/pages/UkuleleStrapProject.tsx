function UkuleleStrapProject() {
  return (
    <div className="project-page">

      {/* ── Hero ──────────────────────────────────────── */}
      <header className="mb-12">
        <p className="text-sm font-medium uppercase tracking-widest text-gray-500 mb-2">
          CAD / 3D Printing
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Ukulele Strap Project</h1>
        <p className="mt-3 text-lg text-gray-400 max-w-xl leading-relaxed">
          Custom 3D-printed strap attachment for better playability — no drilling, no permanent
          modifications.
        </p>
      </header>

      {/* ── Design Overview ───────────────────────────── */}
      <section className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Design Overview</h2>
          <p className="text-gray-300 leading-relaxed">
            Designed in <strong className="text-white">Onshape</strong> to fit a concert-sized
            ukulele with a snug, non-permanent friction fit. The mount uses elastic retention
            instead of screws or adhesives, keeping the instrument unmodified.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            The geometry was iterated across several prints to dial in the interference fit — tight
            enough to stay secure during play, loose enough to remove without tools.
          </p>
        </div>
        <img
          src="/images/Ukulele_Strap/Overview_Strap.png"
          alt="CAD render of ukulele strap mount"
          className="rounded-xl border border-white/10 bg-[#0f1213] w-full"
        />
      </section>

      {/* ── Finished Build ────────────────────────────── */}
      <section className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <img
          src="/images/Ukulele_Strap/Finished_Strap.png"
          alt="Completed ukulele strap mounted on instrument"
          className="rounded-xl border border-white/10 bg-[#0f1213] w-full"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-3">Finished Build</h2>
          <p className="text-gray-300 leading-relaxed">
            Printed in <strong className="text-white">PLA+</strong> and sanded smooth. Provides
            full playing comfort while remaining fully removable and visually minimal against the
            instrument body.
          </p>
        </div>
      </section>

    </div>
  );
}

export default UkuleleStrapProject;
