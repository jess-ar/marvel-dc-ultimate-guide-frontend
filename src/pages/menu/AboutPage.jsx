const AboutPage = () => {
  return (
    <section className="relative w-full min-h-screen px-4 py-16 text-white bg-black overflow-hidden">
      <h1 className="mb-18 md:mb-10 text-4xl sm:text-5xl font-[Bangers] text-primary text-center md:text-left">About Me</h1>

      <div className="relative z-20 flex flex-col-reverse items-center justify-center max-w-6xl mx-auto space-y-10 md:space-y-0 md:gap-0 md:flex-row">
        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="mb-4 text-lg leading-relaxed text-gray-300">
            Hi! I'm Jess, a junior developer focused on FrontEnd. This project started as part of my Full Stack training, where I had to prove I could work with <strong className="text-white">React</strong> on the frontend and <strong className="text-white">Python</strong> and <strong className="text-white">PostgreSQL</strong> on the backend.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-300">
            I built a full CRUD project themed around the <strong className="text-white">Marvel & DC</strong> universe, combining functionality with design and lots of attention to detail. The frontend is deployed on <strong className="text-white">Vercel</strong> and the backend, along with the database, on <strong className="text-white">Fly.io</strong>.
          </p>
          <p className="mb-6 text-lg leading-relaxed text-gray-300">
            I keep improving this guide because it helps me grow and truly represents me: visual, organized, and built with passion. It's one of the main projects in my professional portfolio.
          </p>

          {/* Links */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <a
              href="https://www.jessicaarroyolebron.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 text-sm font-semibold text-white rounded-full shadow-md hover:opacity-90 transition"
              style={{
                background: "linear-gradient(to right, #DC2626, #7A1317, #0C518B, #0291CD)",
              }}
            >
              View my portfolio
            </a>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/jess-ar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition flex items-center gap-1"
              >
                <i className="devicon-github-original text-xl" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/jessica-arroyo-lebron/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition flex items-center gap-1"
              >
                <i className="devicon-linkedin-plain text-xl" /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center relative group">
          {/* Speech bubble */}
          <div className="absolute top-0 -translate-y-[120%] left-1/2 -translate-x-1/2 bg-blue-400 text-black text-xs sm:text-sm px-2 py-2 min-w-[170px] text-center rounded-lg shadow-lg border-4 border-black font-bold z-20 tracking-wide\n  before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-[10px_10px_0] before:border-t-blue-400 before:border-x-transparent before:border-b-0 before:border-solid\n  after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:-mt-1 after:border-[10px_10px_0] after:border-t-black after:border-x-transparent after:border-b-0 after:border-solid">
            Frontend with powers 🦸‍♀️
          </div>

          <div className="relative w-64 h-64 mb-10 transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:rotate-1">
            <img
              src="https://res.cloudinary.com/dt052lsti/image/upload/v1744314909/a10e56e6beec4e89e54975d4ac7e07d9_k4qgsg.jpg"
              alt="Jess estilo cómic"
              className="w-full h-full object-cover rounded-lg shadow-lg border-2 border-primary"
            />
            <div className="absolute inset-0 rounded-lg ring-2 ring-blue-400 opacity-0 group-hover:opacity-100 animate-ping pointer-events-none z-0" />
            <div className="absolute inset-0 rounded-lg ring-2 ring-blue-300 opacity-0 group-hover:opacity-80 animate-ping pointer-events-none z-0 scale-110" />
            <div className="absolute inset-0 rounded-lg ring-2 ring-blue-200 opacity-0 group-hover:opacity-60 animate-ping pointer-events-none z-0 scale-125" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutPage;
