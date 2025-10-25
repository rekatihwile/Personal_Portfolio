import { Link } from "react-router-dom";


function Home() {
return (
<div className="min-h-full flex flex-col items-center">
{/* Hero */}
<section className="relative isolate overflow-hidden bg-gradient-to-b from-[#1e2427] to-[#171a1c] w-full">
<div className="w-full max-w-6xl px-4 py-16">
<div className="grid grid-cols-1 md:grid-cols-[1.2fr,0.8fr] gap-10 items-center justify-items-center">
<div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Hi, I’m Eli<span className="ml-2">👋</span></h1>
<p className="mt-4 text-lg text-gray-300 max-w-prose">UCLA mechanical engineering student focused on robotics, clean design, and rigorous problem‑solving. This portfolio highlights hands‑on projects and systems thinking.</p>

</div>
<img src="/images/Profile_Photo.jpeg" alt="Portrait of Eli Whitaker" className="w-48 h-48 md:w-64 md:h-64 rounded-xl object-cover justify-self-center border border-white/10"/>
</div>
</div>
</section>


{/* Projects */}
<section className="w-full max-w-6xl px-4 py-12">
<h2 className="text-2xl font-semibold">Projects</h2>
<div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-5xl justify-items-center">
<Link to="/projects/ball-catching" className="group rounded-xl border border-white/10 bg-[#0f1213] hover:bg-white/[0.04] p-4 transition">
<img src="/images/CAD_Design.png" alt="CAD render for the ball-catching arm" className="w-full h-36 object-contain rounded-lg border border-white/10 bg-[#121517]"/>
<h3 className="mt-3 text-base font-medium text-white">Ball Catching Project</h3>
<p className="mt-1 text-sm text-gray-400">Computer vision + 2‑DOF arm to intercept ping‑pong trajectories; multiple controllers benchmarked.</p>
</Link>


<Link to="/projects/ResearchLab" className="group rounded-xl border border-white/10 bg-[#0f1213] hover:bg-white/[0.04] p-4 transition">
<img src="/images/ResearchLab.png" alt="Laser Weeding Research" className="w-full h-36 object-contain rounded-lg border border-white/10 bg-[#121517]"/>
<h3 className="mt-3 text-base font-medium text-white">Laser Weeding Research</h3>
<p className="mt-1 text-sm text-gray-400">Non‑invasive 3D‑printed strap attachment for improved playability without drilling.</p>
</Link>


<Link to="/projects/discord-ai-bot" className="group rounded-xl border border-white/10 bg-[#0f1213] hover:bg-white/[0.04] p-4 transition">
<img src="/images/DiscordAI.png" alt="Discord AI bot preview" className="w-full h-36 object-contain rounded-lg border border-white/10 bg-[#121517]"/>
<h3 className="mt-3 text-base font-medium text-white">Discord AI Bot</h3>
<p className="mt-1 text-sm text-gray-400">OpenAI responses + ElevenLabs voice in Discord voice channels.</p>
</Link>
</div>
</section>
</div>
);
}


export default Home;