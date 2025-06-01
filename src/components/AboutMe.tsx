export default function AboutMe() {
    return (
      <section id="about" className="py-24 bg-white dark:bg-slate-900 text-gray-800 dark:text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6">About Me</h2>
  
          <p className="text-lg leading-relaxed mb-6">
            I'm a <span className="font-semibold text-indigo-600 dark:text-indigo-400">Software Engineer</span> with over 8 years of experience creating tools for
            manufacturing, logistics, and enterprise automation. I've worked with teams at
            <span className="font-semibold"> Toyota, Stellantis,</span> and <span className="font-semibold">IBM</span>, focusing on full-stack solutions
            across mobile, desktop, and web platforms.
          </p>
  
          <p className="text-lg leading-relaxed mb-6">
            My expertise includes building mobile apps with <span className="font-semibold">SwiftUI</span>, designing robust backend APIs with
            <span className="font-semibold"> .NET Core</span>, and integrating data pipelines with <span className="font-semibold">SQL Server</span> and
            <span className="font-semibold"> Python</span>. I love turning complex manual processes into real-time, trackable systems that deliver
            measurable impact.
          </p>
  
          <p className="text-lg leading-relaxed mb-6">
            I'm currently working on regionally scaling apps like <span className="font-semibold">Tapping Tool</span> and <span className="font-semibold">LOMS</span> in
            collaboration with TMNA and TMMTX teams.
          </p>
  
          <p className="text-lg leading-relaxed">
            Let's connect and build something meaningful.
          </p>
        </div>
      </section>
    );
  }
  