export default function Home() {
  const experience = [
    {
      title: "Master of Finance Student",
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
    <main className="min-h-screen bg-[#070B14] text-slate-200">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(75,156,211,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_22%),linear-gradient(to_bottom,#070B14,#0B1530_55%,#08101F)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.06]" />

      <div className="mx-auto max-w-7xl px-6 py-8">
        <header className="mb-10 flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
            <a
              href="#"
              className="text-2xl font-bold tracking-tight text-white"
            >
              <span className="text-[#7CC4FA]">Ryan</span> Tarapchak
            </a>
            <p className="text-sm text-slate-400">
              Finance • Analysis • Strategy
            </p>
          </div>

          <nav className="flex flex-wrap gap-3 text-sm">
            {[
              ["#experience", "Experience"],
              ["#education", "Education"],
              ["#skills", "Skills"],
              ["#portfolio", "Portfolio"],
              ["#contact", "Contact"],
            ].map(([href, label]) => (
              <a
                key={label}
                href={href}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-slate-300 transition duration-200 hover:border-[#4B9CD3]/50 hover:bg-[#4B9CD3]/10 hover:text-white hover:shadow-[0_0_20px_rgba(75,156,211,0.18)]"
              >
                {label}
              </a>
            ))}
          </nav>
        </header>

        <div className="grid gap-10 lg:grid-cols-[340px_minmax(0,1fr)]">
          <aside className="h-fit rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-[#4B9CD3]/40 bg-gradient-to-br from-[#4B9CD3]/20 to-white/10 text-2xl font-bold text-white shadow-[0_0_30px_rgba(75,156,211,0.2)]">
              RT
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-white">
              Ryan Tarapchak
            </h1>
            <p className="mt-2 text-lg text-[#7CC4FA]">
              Master of Finance Candidate
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Pennsylvania, United States
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Financial Analysis",
                "Valuation",
                "Strategy",
                "Business Consulting",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#4B9CD3]/25 bg-[#4B9CD3]/10 px-3 py-1 text-xs font-medium text-[#B9E3FF]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href="#portfolio"
                className="rounded-xl bg-[#4B9CD3] px-4 py-2 text-sm font-semibold text-[#041E42] transition hover:bg-[#7CC4FA] hover:shadow-[0_0_25px_rgba(124,196,250,0.35)]"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-white/15 bg-white/[0.02] px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-[#4B9CD3]/50 hover:bg-white/[0.06] hover:text-white"
              >
                Contact
              </a>
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7CC4FA]">
                About
              </h2>
              <p className="mt-4 leading-7 text-slate-300">
                I’m focused on finance, strategy, and analysis. I like taking
                complicated ideas and turning them into clean, practical
                decisions through modeling, research, and structured thinking.
              </p>
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7CC4FA]">
                Focus
              </h2>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li>• Financial modeling and valuation</li>
                <li>• Investment and market analysis</li>
                <li>• Strategy and business decision support</li>
              </ul>
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7CC4FA]">
                Status
              </h2>
              <p className="mt-4 text-slate-200">
                Available for new opportunities
              </p>
            </div>
          </aside>

          <section className="space-y-8">
            <section
              id="experience"
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-sm"
            >
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Experience
              </h2>

              <div className="mt-8 space-y-8">
                {experience.map((job) => (
                  <div
                    key={job.title}
                    className="border-b border-white/10 pb-8 last:border-0"
                  >
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {job.title}
                        </h3>
                        <p className="text-[#7CC4FA]">{job.company}</p>
                      </div>
                      <p className="w-fit rounded-full border border-white/10 bg-white/[0.04] px-4 py-1 text-sm text-slate-300">
                        {job.date}
                      </p>
                    </div>

                    <p className="mt-4 leading-7 text-slate-300">
                      {job.description}
                    </p>

                    <div className="mt-5">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">
                        Key Highlights
                      </h4>
                      <ul className="mt-3 space-y-2 text-slate-300">
                        {job.achievements.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">
                        Skills
                      </h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {job.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-[#4B9CD3]/25 bg-[#4B9CD3]/10 px-3 py-1 text-xs font-medium text-[#B9E3FF]"
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
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-sm"
            >
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Education
              </h2>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#4B9CD3]/35 hover:bg-white/[0.05]">
                  <h3 className="text-lg font-semibold text-white">
                    Master of Finance
                  </h3>
                  <p className="mt-2 text-[#7CC4FA]">Penn State University</p>
                  <p className="mt-2 text-sm text-slate-400">
                    Expected Graduation: May 2026
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#4B9CD3]/35 hover:bg-white/[0.05]">
                  <h3 className="text-lg font-semibold text-white">
                    Bachelor’s Degree
                  </h3>
                  <p className="mt-2 text-[#7CC4FA]">Finance Background</p>
                  <p className="mt-2 text-sm text-slate-400">
                    Academic and professional foundation in business and finance
                  </p>
                </div>
              </div>
            </section>

            <section
              id="skills"
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-sm"
            >
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Skills & Expertise
              </h2>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold text-[#7CC4FA]">
                    Technical Skills
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {technicalSkills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[#4B9CD3]/25 bg-[#4B9CD3]/10 px-3 py-1 text-sm text-[#B9E3FF]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#7CC4FA]">
                    Professional Skills
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {softSkills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[#4B9CD3]/25 bg-[#4B9CD3]/10 px-3 py-1 text-sm text-[#B9E3FF]"
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
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-sm"
            >
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Portfolio
              </h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {projects.map((project) => (
                  <div
                    key={project}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-200 hover:-translate-y-1 hover:border-[#4B9CD3]/35 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(75,156,211,0.12)]"
                  >
                    <h3 className="text-lg font-semibold text-white">
                      {project}
                    </h3>
                    <p className="mt-2 text-slate-300">
                      Add a short case study, PDF, deck, or project link here.
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section
              id="contact"
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-sm"
            >
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Contact
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                I’m currently interested in opportunities across finance,
                strategy, and analysis.
              </p>

              <div className="mt-6 space-y-2 text-slate-300">
                <p>Email: your-email@example.com</p>
                <p>
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/ryantarapchak/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#7CC4FA] transition hover:text-white"
                  >
                    linkedin.com/in/ryantarapchak
                  </a>
                </p>
              </div>
            </section>
          </section>
        </div>
      </div>
    </main>
  );
}