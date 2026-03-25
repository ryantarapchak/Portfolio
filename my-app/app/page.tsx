export default function Home() {
  const experience = [
    {
      title: "Teaching Assistant",
      company: "The Pennsylvania State University",
      date: "Aug 2025 – Present",
      description:
        "Lead weekly labs and support business capstone students through instruction, grading, and team-based financial analysis guidance.",
      achievements: [
        "Lead and prepare weekly labs for 50+ business capstone students, creating lesson plans on financial modeling and strategy",
        "Grade 200+ assignments monthly using Canvas SpeedGrader, Excel, and SharePoint",
        "Advise 20+ student teams on financial analysis, credit risk, and investment evaluation",
        "Help improve student decision-making and simulation performance through real-world case insights",
      ],
      skills: [
        "Financial Modeling",
        "Strategy",
        "Teaching",
        "Excel",
        "Canvas",
      ],
    },
    {
      title: "M&A Intern",
      company: "Sabakiball International, LLC",
      date: "Oct 2025 – Dec 2025",
      description:
        "Supported early-stage M&A outreach and strategic analysis for a patented sport business by building economic models and acquisition materials.",
      achievements: [
        "Produced a strategic economic model and acquisition thesis for a patented sport with 1M+ users and adoption in 300+ schools",
        "Quantified market size, unit economics, and TAM penetration to support sale positioning",
        "Identified and contacted 15+ potential buyers and helped facilitate introductory discussions",
        "Developed supporting materials to advance Sabakiball’s M&A outreach",
      ],
      skills: [
        "M&A",
        "Economic Modeling",
        "Market Analysis",
        "Outreach",
        "Valuation",
      ],
    },
    {
      title: "Office of Neighborhood Economic Development Intern",
      company: "City of Philadelphia Department of Commerce",
      date: "June 2025 – Aug 2025",
      description:
        "Performed financial and operational analysis on grant-funded projects and built tools to support funding visibility and data-driven decisions.",
      achievements: [
        "Conducted financial and operational analysis for 10 grant-funded projects using Excel and Quickbase",
        "Built and maintained a $10M project database in Excel tracking 30+ performance metrics",
        "Designed 10 digital project profiles in Canva to improve visibility across commerce initiatives",
        "Created and managed a $100K project budget using Excel to model ROI, credit feasibility, and risk mitigation strategies",
      ],
      skills: [
        "Financial Analysis",
        "Excel",
        "Quickbase",
        "Budgeting",
        "ROI Modeling",
      ],
    },
    {
      title: "Treasurer",
      company: "Business Leaders for Change",
      date: "Aug 2025 – Present",
      description:
        "Manage budgeting, transactions, and funding coordination for a student organization serving thousands of students through annual events.",
      achievements: [
        "Oversee $10K in budgets for four annual events reaching 8,000+ students",
        "Use Excel to track spending, improve efficiency, and help raise participation by 30%",
        "Manage and reconcile 100+ financial transactions in the ASA account",
        "Collaborate with executives and external stakeholders to secure $10K+ in funding while maintaining compliance and transparency",
      ],
      skills: [
        "Budgeting",
        "Leadership",
        "Excel",
        "Financial Tracking",
        "Stakeholder Management",
      ],
    },
  ];

  const projects = [
    {
      title: "SensoTech Master Budget",
      subtitle: "Financial Modeling Project",
      description:
        "Built a dynamic multi-sheet Excel master budget for a manufacturing firm, including sales, production, inventory, labor, overhead, SG&A, cash flow, and financial statements.",
    },
    {
      title: "Burton Sensors M&A Case",
      subtitle: "Financial Modeling & Valuation Project",
      description:
        "Built dynamic Excel models applying DCF, FCFF, WACC, IRR, NPV, and EBITDA multiple analysis to evaluate acquisition and investment decisions.",
    },
    {
      title: "Market & Investment Analysis",
      subtitle: "Academic / Applied Finance",
      description:
        "Applied finance coursework and analytical tools to evaluate companies, industries, and financial decisions with a focus on practical recommendations.",
    },
    {
      title: "Strategy Presentations",
      subtitle: "Business Communication",
      description:
        "Created clear presentations and materials that communicate financial findings, strategic direction, and decision support in a professional format.",
    },
  ];

  const technicalSkills = [
    "Financial Modeling & Valuation",
    "Budgeting & Forecasting",
    "Advanced Excel",
    "Data Visualization",
    "Python",
    "VBA",
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
        <header className="sticky top-0 z-50 mb-10 flex flex-col gap-4 border-b border-white/10 bg-[#070B14]/80 pb-6 pt-2 backdrop-blur-md md:flex-row md:items-center md:justify-between">
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
            <div className="mb-6 h-32 w-32 overflow-hidden rounded-full border-2 border-[#4B9CD3]/50 shadow-[0_0_40px_rgba(75,156,211,0.35)]">
              <img
                src="headshot.jpg"
                alt="Ryan Tarapchak"
                className="h-full w-full object-cover object-top"
              />
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
                I’m a Master of Finance student with experience in financial
                analysis, valuation, budgeting, and strategic decision support.
                I enjoy taking complex ideas and turning them into practical,
                data-driven recommendations.
              </p>
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7CC4FA]">
                Focus
              </h2>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li>• Financial modeling and valuation</li>
                <li>• M&A and investment analysis</li>
                <li>• Budgeting, forecasting, and decision support</li>
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
              className="scroll-mt-28 rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-sm"
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
              className="scroll-mt-28 rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-sm"
            >
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Academic Experience
              </h2>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#4B9CD3]/35 hover:bg-white/[0.05]">
                  <h3 className="text-lg font-semibold text-white">
                    Master of Finance
                  </h3>
                  <p className="mt-2 text-[#7CC4FA]">
                    The Pennsylvania State University
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    Smeal College of Business
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    Expected Graduation: May 2026
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#4B9CD3]/35 hover:bg-white/[0.05]">
                  <h3 className="text-lg font-semibold text-white">
                    Bachelor of Science in Business Administration
                  </h3>
                  <p className="mt-2 text-[#7CC4FA]">
                    East Carolina University
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    Concentration in Finance
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    GPA: 3.88
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    Magna Cum Laude
                  </p>
                </div>
              </div>
            </section>

            <section
              id="skills"
              className="scroll-mt-28 rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-sm"
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
              className="scroll-mt-28 rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-sm"
            >
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Portfolio
              </h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {projects.map((project) => (
                  <div
                    key={project.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-200 hover:-translate-y-1 hover:border-[#4B9CD3]/35 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(75,156,211,0.12)]"
                  >
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#7CC4FA]">
                      {project.subtitle}
                    </p>
                    <p className="mt-3 text-slate-300">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section
              id="contact"
              className="scroll-mt-28 rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-sm"
            >
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Contact
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                I’m currently interested in opportunities across finance,
                strategy, and analysis.
              </p>

              <div className="mt-6 space-y-2 text-slate-300">
                <p>Email: ryantarapchak@gmail.com</p>
                <p>Phone: 215-962-8332</p>
                <p>
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/ryantarapchak"
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