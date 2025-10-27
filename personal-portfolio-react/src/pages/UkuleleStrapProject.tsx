function UkuleleStrapProject() {
  return (
    <div className="min-h-screen bg-[#171a1c] text-gray-100">
      <div className="text-center px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-semibold">Ukulele Strap Project</h1>
        <p className="mt-2 text-gray-400 text-lg">
          Custom 3D-printed strap attachment for better playability without drilling.
        </p>
      </div>

      <section className="mt-10 grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto px-4">
        <div>
          <h2 className="text-2xl font-medium">Design Overview</h2>
          <p className="mt-3 text-gray-300 leading-relaxed text-lg">
            Designed in <strong>Onshape</strong> to ensure a snug, non-permanent fit for a
            concert-sized ukulele. The mount uses friction and elastic retention instead of screws.
          </p>
        </div>
        <img
          src="/images/Ukulele_Strap/Overview_Strap.png"
          alt="CAD render of ukulele strap mount"
          className="rounded-xl border border-white/10 bg-[#0f1213]"
        />
      </section>

      <section className="mt-10 grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto px-4">
        <img
          src="/images/Ukulele_Strap/Finished_Strap.png"
          alt="Completed ukulele strap in use"
          className="rounded-xl border border-white/10 bg-[#0f1213]"
        />
        <div>
          <h2 className="text-2xl font-medium">Finished Build</h2>
          <p className="mt-3 text-gray-300 leading-relaxed text-lg">
            Printed in <strong>PLA+</strong> and sanded for a smooth finish. Provides full playing
            comfort while being removable and visually minimal.
          </p>
        </div>
      </section>
    </div>
  );
}

export default UkuleleStrapProject;
