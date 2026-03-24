export default function Home() {
  const experience = [
    {
      title: "Master of Finance Candidate",
      company: "Penn State University",
      date: "Expected May 2026",
      description:
        "Graduate finance training focused on valuation, financial analysis, capital markets, and strategic decision-making.",
      achievements: [
        "Built a strong foundation in corporate finance, modeling, and investment analysis",
        "Applied classwork to real business and market-based case problems",
        "Focused on analytical thinking, clear communication, and decision support",
      ],
      skills: ["Financial Analysis", "Valuation", "Capital Markets", "Excel"],
    },
    {
      title: "Economic Development Analysis Experience",
      company: "Philadelphia Department of Commerce",
      date: "Previous Experience",
      description:
        "Supported review of economic development projects through financial and strategic analysis tied to investment and growth outcomes.",
      achievements: [
        "Reviewed project-level business and economic impact factors",
        "Helped structure information into clearer decision support",
        "Worked on analysis connected to public-private investment outcomes",
      ],
      skills: ["Economic Analysis", "Strategy", "Project Evaluation", "Research"],
    },
    {
      title: "Division I Athlete",
      company: "Track & Cross Country",
      date: "Previous Experience",
      description:
        "Built discipline, consistency, and high-performance habits through Division I athletics.",
      achievements: [
        "Balanced athletics with academics and long-term goals",
        "Developed resilience, time management, and consistency",
        "Learned how to perform under pressure and structure improvement",
      ],
      skills: ["Discipline", "Leadership", "Work Ethic", "Performance"],
    },
  ];

  const projects = [
    "Financial Modeling",
    "Valuation Work",
    "Market & Investment Analysis",
    "Strategy Presentations",
  ];

  const technicalSkills = [
    "Excel",
    "PowerPoint",
    "Financial Modeling",
    "Valuation",
    "Data Analysis",
    "Research",
  ];

  const softSkills = [
    "Communication",
    "Leadership",
    "Problem Solving",
    "Time Management",
    "Presentation Skills",
    "Teamwork",
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <header className="mb-10 flex flex-col gap-4 border-b border-slate-200 pb-6 md:flex-row md:items-center md:justify-between">
          <a href="#" className="text-xl font-semibold tracking-tight">
            Ryan Tarapchak
          </a>

          <nav className="flex flex-wrap gap-5 text-sm text-slate-600">
            <a href="#experience" className="hover:text-slate-900">
              Experience
            </a>
            <a href="#education" className="hover:text-slate-900">
              Education
            </a>
            <a href="#skills" className="hover:text-slate-900">
              Skills
            </a>
            <a href="#portfolio" className="hover:text-slate-900">
              Portfolio
            </a>
            <a href="#contact" className="hover:text-slate-900">
              Contact
            </a>
          </nav>
        </header>

        <div className="grid gap-10 lg:grid-cols-[340px_minmax(0,1fr)]">
          <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-slate-200 text-2xl font-bold text-slate-700">
              RT
            </div>

            <h1 className="text-3xl font-bold tracking-tight">Ryan Tarapchak</h1>
            <p className="mt-2 text-lg text-slate-600">
              Master of Finance Candidate
            </p>
            <p className="mt-1 text-sm text-slate-500">Pennsylvania, United States</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Financial Analysis", "Valuation", "Strategy", "Business Consulting"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {item}
                  </span>
                )
              )}
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href="#portfolio"
                className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700"
              >
                Contact
              </a>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                About
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                I’m focused on finance, strategy, and analysis. I like taking
                complicated ideas and turning them into clean, practical decisions
                through modeling, research, and structured thinking.
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Focus
              </h2>
              <ul className="mt-4 space-y-3 text-slate-600">
                <li>• Financial modeling and valuation</li>
                <li>• Investment and market analysis</li>
                <li>• Strategy and business decision support</li>
              </ul>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Status
              </h2>
              <p className="mt-4 text-slate-700">Available for new opportunities</p>
            </div>
          </aside>

          <section className="space-y-8">
            <section
              id="experience"
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h2 className="text-3xl font-bold tracking-tight">Experience</h2>

              <div className="mt-8 space-y-8">
                {experience.map((job) => (
                  <div key={job.title} className="border-b border-slate-100 pb-8 last:border-0">
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <p className="text-slate-600">{job.company}</p>
                      </div>
                      <p className="text-sm text-slate-500">{job.date}</p>
                    </div>

                    <p className="mt-4 leading-7 text-slate-600">{job.description}</p>

                    <div className="mt-5">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                        Key Highlights
                      </h4>
                      <ul className="mt-3 space-y-2 text-slate-600">
                        {job.achievements.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                        Skills
                      </h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {job.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section
              id="education"
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h2 className="text-3xl font-bold tracking-tight">Education</h2>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-lg font-semibold">Master of Finance</h3>
                  <p className="mt-2 text-slate-600">Penn State University</p>
                  <p className="mt-2 text-sm text-slate-500">Expected Graduation: May 2026</p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-lg font-semibold">Bachelor’s Degree</h3>
                  <p className="mt-2 text-slate-600">Finance Background</p>
                  <p className="mt-2 text-sm text-slate-500">
                    Academic and professional foundation in business and finance
                  </p>
                </div>
              </div>
            </section>

            <section
              id="skills"
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h2 className="text-3xl font-bold tracking-tight">Skills & Expertise</h2>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold">Technical Skills</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {technicalSkills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Professional Skills</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {softSkills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section
              id="portfolio"
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h2 className="text-3xl font-bold tracking-tight">Portfolio</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {projects.map((project) => (
                  <div
                    key={project}
                    className="rounded-2xl border border-slate-200 p-5 transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <h3 className="text-lg font-semibold">{project}</h3>
                    <p className="mt-2 text-slate-600">
                      Add a short case study, PDF, deck, or project link here.
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section
              id="contact"
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                I’m currently interested in opportunities across finance, strategy,
                and analysis.
              </p>

              <div className="mt-6 space-y-2 text-slate-700">
                <p>Email: your-email@example.com</p>
                <p>LinkedIn: linkedin.com/in/your-link</p>
              </div>
            </section>
          </section>
        </div>
      </div>
    </main>
  );
}