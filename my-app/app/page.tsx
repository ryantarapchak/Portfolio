"use client";

import { useRef, useState } from "react";

type SectionKey =
  | "professional"
  | "leadership"
  | "education"
  | "credentials"
  | "skills"
  | "portfolio";

type ExperienceItem = {
  title: string;
  company: string;
  date: string;
  description: string;
  achievements: string[];
  skills: string[];
  category: "professional" | "leadership";
};

type Project = {
  title: string;
  subtitle: string;
  description: string;
  pdf: string;
  featured: boolean;
};

export default function Home() {
  const [sidebarView, setSidebarView] = useState<"work" | "contact">("work");
  const [activeSection, setActiveSection] =
    useState<SectionKey>("professional");

  const sectionRefs: Record<SectionKey, React.RefObject<HTMLElement | null>> = {
    professional: useRef<HTMLElement>(null),
    leadership: useRef<HTMLElement>(null),
    education: useRef<HTMLElement>(null),
    credentials: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    portfolio: useRef<HTMLElement>(null),
  };

  const handleSectionClick = (section: SectionKey) => {
    setActiveSection(section);

    setTimeout(() => {
      const sectionEl = sectionRefs[section].current;

      if (sectionEl) {
        const targetY =
          sectionEl.getBoundingClientRect().top + window.scrollY - 95;

        window.scrollTo({
          top: targetY,
          behavior: "smooth",
        });
      }
    }, 150);
  };

  const experience: ExperienceItem[] = [
    {
      title: "Teaching Assistant",
      company: "The Pennsylvania State University",
      date: "Aug 2025 – Present",
      description:
        "Lead weekly labs and support business capstone students through instruction, grading, and team-based financial analysis guidance.",
      achievements: [
        "Lead and prepared weekly labs for 50+ business capstone students, creating lesson plans on financial modeling and strategy",
        "Grade 200+ assignments monthly using Canvas SpeedGrader, Excel, and SharePoint",
        "Advise 20+ student teams on financial analysis, credit risk, and investment evaluation",
        "Enhance student decision-making and simulation performance through real-world case insights",
      ],
      skills: ["Financial Modeling", "Strategy", "Leadership", "Excel"],
      category: "professional",
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
      category: "professional",
    },
    {
      title: "Commerce Intern",
      company: "City of Philadelphia",
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
      category: "professional",
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
      category: "leadership",
    },
  ];

  const professionalExperience = experience.filter(
    (job) => job.category === "professional"
  );

  const leadershipExperience = experience.filter(
    (job) => job.category === "leadership"
  );

  const projects: Project[] = [
    {
      title: "Sabakiball",
      subtitle: "Featured Project • M&A Economic Model",
      description:
        "Built an economic model and acquisition thesis for a patented sport business, analyzing scalability, market opportunity, and buyer fit.",
      pdf: "/econmodel.pdf",
      featured: true,
    },
    {
      title: "Burton Sensors",
      subtitle: "M&A Financial Model",
      description:
        "Developed a financial model to evaluate acquisition value, operating assumptions, and deal-level financial impact.",
      pdf: "/burton.pdf",
      featured: false,
    },
    {
      title: "CrowdStrike (CRWD)",
      subtitle: "Investment Pitch",
      description:
        "Created an investment thesis supported by valuation work, financial analysis, and industry research.",
      pdf: "/crowdstrike.pdf",
      featured: false,
    },
    {
      title: "SensoTech",
      subtitle: "Master Budget",
      description:
        "Built a master budget to forecast financial performance and support operating decision-making.",
      pdf: "/sensotech.pdf",
      featured: false,
    },
  ];

  const navItems = [
    { key: "professional" as const, label: "Professional Experience" },
    { key: "leadership" as const, label: "Leadership Experience" },
    { key: "education" as const, label: "Education" },
    { key: "credentials" as const, label: "Credentials" },
    { key: "skills" as const, label: "Skills" },
    { key: "portfolio" as const, label: "Portfolio" },
  ];

  const featuredProject = projects.find((project) => project.featured);
  const standardProjects = projects.filter((project) => !project.featured);

  const renderExperienceCard = (job: ExperienceItem) => (
    <div
      key={`${job.title}-${job.company}`}
      className="border-b border-white/10 pb-8 last:border-0"
    >
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white">{job.title}</h3>
          <p className="text-[#7CC4FA]">{job.company}</p>
        </div>

        <p className="w-fit rounded-full border border-white/10 bg-white/[0.04] px-4 py-1 text-sm text-slate-300">
          {job.date}
        </p>
      </div>

      <p className="mt-4 leading-7 text-slate-300">{job.description}</p>

      <div className="mt-5">
        <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">
          Achievements
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
  );

  return (
    <main className="min-h-screen bg-[#070B14] text-slate-200">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(75,156,211,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_22%),linear-gradient(to_bottom,#070B14,#0B1530_55%,#08101F)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.06]" />

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
        <header className="mb-4 border-b border-white/10 bg-[#070B14]/80 py-4 backdrop-blur-md lg:sticky lg:top-0 lg:z-50 lg:mb-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
              <h1 className="text-xl font-bold text-white sm:text-2xl">
                <span className="text-[#7CC4FA]">Ryan</span> Tarapchak
              </h1>

              <span className="text-xs text-slate-400 sm:text-sm">
                Finance Graduate Student
              </span>
            </div>

            <nav className="hidden lg:flex lg:items-center lg:gap-3">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => handleSectionClick(item.key)}
                  className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                    activeSection === item.key
                      ? "bg-[#4B9CD3] text-[#041E42] shadow-[0_0_25px_rgba(124,196,250,0.35)]"
                      : "border border-white/15 bg-white/[0.02] text-slate-200 hover:border-[#4B9CD3]/50 hover:bg-white/[0.06]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-10">
          <aside className="h-fit rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-8">
            <div className="mb-6 h-24 w-24 overflow-hidden rounded-full border-2 border-[#4B9CD3]/50 shadow-[0_0_40px_rgba(75,156,211,0.35)] sm:h-32 sm:w-32">
              <img
                src="/headshot.png"
                alt="Ryan Tarapchak"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Ryan Tarapchak
            </h1>

            <p className="mt-2 text-base text-[#7CC4FA] sm:text-lg">
              Penn State Master of Finance
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Langhorne, Pennsylvania
            </p>

            <div className="mt-6">
              <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full flex items-center justify-center rounded-xl border border-[#4B9CD3]/35 bg-[#4B9CD3]/12 px-4 py-3 text-sm font-semibold text-[#B9E3FF] transition hover:-translate-y-0.5 hover:bg-[#4B9CD3]/18"
>
  Resume
</a>
            </div>

            <div className="mt-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7CC4FA]">
                Target Roles
              </h2>

              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Financial Analyst",
                  "Corporate Finance",
                  "Investment Banking",
                ].map((role) => (
                  <span
                    key={role}
                    className="rounded-full border border-[#4B9CD3]/25 bg-[#4B9CD3]/10 px-3 py-1 text-xs font-medium text-[#B9E3FF]"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <button
                type="button"
                onClick={() => setSidebarView("work")}
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                  sidebarView === "work"
                    ? "bg-[#4B9CD3] text-[#041E42] shadow-[0_0_25px_rgba(124,196,250,0.35)]"
                    : "border border-white/15 bg-white/[0.02] text-slate-200 hover:border-[#4B9CD3]/50 hover:bg-white/[0.06]"
                }`}
              >
                About Me
              </button>

              <button
                type="button"
                onClick={() => setSidebarView("contact")}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                  sidebarView === "contact"
                    ? "bg-[#4B9CD3] text-[#041E42] shadow-[0_0_25px_rgba(124,196,250,0.35)]"
                    : "border border-white/15 bg-white/[0.02] text-slate-200 hover:border-[#4B9CD3]/50 hover:bg-white/[0.06]"
                }`}
              >
                Contact
              </button>
            </div>

            <div className="mt-6 lg:hidden">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7CC4FA]">
                Sections
              </h2>

              <div className="mt-3 flex flex-wrap gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => handleSectionClick(item.key)}
                    className={`rounded-xl px-3 py-2 text-xs font-semibold transition ${
                      activeSection === item.key
                        ? "bg-[#4B9CD3] text-[#041E42] shadow-[0_0_25px_rgba(124,196,250,0.35)]"
                        : "border border-white/15 bg-white/[0.02] text-slate-200 hover:border-[#4B9CD3]/50 hover:bg-white/[0.06]"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {sidebarView === "work" ? (
              <>
                <div className="mt-10 border-t border-white/10 pt-8">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7CC4FA]">
                    About
                  </h2>

                  <p className="mt-4 leading-7 text-slate-300">
                    Master of Finance student with experience in financial
                    analysis, valuation, and budgeting. I’ve worked on building
                    models and analyzing real projects, helping support better
                    business decisions. I like getting into the details,
                    figuring out what’s actually driving results, and turning
                    that into clear, useful insights.
                  </p>
                </div>

                <div className="mt-10 border-t border-white/10 pt-8">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7CC4FA]">
                    Focus
                  </h2>

                  <ul className="mt-4 space-y-3 text-slate-300">
                    <li>• Financial modeling and valuation</li>
                    <li>• Forecasting and budgeting</li>
                    <li>• Financial statement analysis & business insights</li>
                  </ul>
                </div>

                <div className="mt-10 border-t border-white/10 pt-8">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7CC4FA]">
                    Status
                  </h2>

                  <p className="mt-4 text-slate-200">
                    Open to new opportunities
                  </p>
                </div>
              </>
            ) : (
              <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7CC4FA]">
                  Contact Information
                </h2>

                <div className="mt-4 space-y-4 text-sm text-slate-300">
                  <div>
                    <p className="text-slate-400">Email</p>
                    <a
                      href="mailto:ryantarapchak@gmail.com"
                      className="text-white transition hover:text-[#7CC4FA]"
                    >
                      ryantarapchak@gmail.com
                    </a>
                  </div>

                  <div>
                    <p className="text-slate-400">Phone</p>
                    <a
                      href="tel:2159628332"
                      className="text-white transition hover:text-[#7CC4FA]"
                    >
                      215-962-8332
                    </a>
                  </div>

                  <div>
                    <p className="text-slate-400">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/ryantarapchak"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white transition hover:text-[#7CC4FA]"
                    >
                      linkedin.com/in/ryantarapchak
                    </a>
                  </div>
                </div>
              </div>
            )}
          </aside>

          <section className="space-y-6 sm:space-y-8">
            {activeSection === "professional" && (
              <section
                ref={sectionRefs.professional}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-sm sm:p-8"
              >
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Professional Experience
                </h2>

                <div className="mt-8 space-y-8">
                  {professionalExperience.map(renderExperienceCard)}
                </div>
              </section>
            )}

            {activeSection === "leadership" && (
              <section
                ref={sectionRefs.leadership}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-sm sm:p-8"
              >
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Leadership Experience
                </h2>

                <div className="mt-8 space-y-8">
                  {leadershipExperience.map(renderExperienceCard)}
                </div>
              </section>
            )}

            {activeSection === "education" && (
              <section
                ref={sectionRefs.education}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-sm sm:p-8"
              >
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Education
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
                      The College of Business
                    </p>
                    <p className="mt-2 text-sm text-slate-400">
                      Graduated: May 2025
                    </p>
                    <p className="mt-2 text-sm text-slate-400">GPA: 3.88</p>
                    <p className="mt-2 text-sm text-slate-400">
                      Magna Cum Laude
                    </p>
                  </div>
                </div>
              </section>
            )}

            {activeSection === "credentials" && (
              <section
                ref={sectionRefs.credentials}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-sm sm:p-8"
              >
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Certifications & Credentials
                </h2>

                <div className="mt-8 space-y-6">
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                    <h3 className="text-lg font-semibold text-white">
                      Truist Emerging Leaders Certification
                    </h3>
                    <p className="mt-1 text-sm text-[#7CC4FA]">
                      Truist Leadership Institute
                    </p>
                    <p className="mt-2 text-sm text-slate-300">
                      A selective leadership development program focused on
                      professional growth, communication, and team-based
                      leadership skills.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                    <h3 className="text-lg font-semibold text-white">
                      Microsoft Office Specialist (MOS): Excel 2016
                    </h3>
                    <p className="mt-1 text-sm text-[#7CC4FA]">Microsoft</p>
                    <p className="mt-2 text-sm text-slate-300">
                      A performance-based certification demonstrating
                      proficiency in Excel, including data analysis, financial
                      modeling, and advanced spreadsheet functions.
                    </p>
                  </div>
                </div>
              </section>
            )}

            {activeSection === "skills" && (
              <section
                ref={sectionRefs.skills}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-sm sm:p-8"
              >
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Skills & Expertise
                </h2>

                <div className="mt-8 grid gap-10 md:grid-cols-2">
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-[#7CC4FA]">
                      Technical Skills
                    </h3>

                    {[
                      {
                        title: "Financial Modeling & Deals",
                        items: [
                          "DCF Modeling",
                          "M&A Case Analysis",
                          "Comparable Company Analysis",
                          "Precedent Transactions",
                        ],
                      },
                      {
                        title: "Corporate Finance",
                        items: [
                          "Financial Statement Analysis",
                          "Forecasting & Budgeting",
                          "Investment Analysis",
                        ],
                      },
                      {
                        title: "Markets & Investments",
                        items: [
                          "Capital Markets",
                          "Portfolio & Risk Analysis",
                          "Fixed Income",
                        ],
                      },
                      {
                        title: "Tools & Programming",
                        items: ["Excel (Advanced)", "Python", "VBA"],
                      },
                      {
                        title: "Data & Analysis",
                        items: [
                          "Quantitative Analysis",
                          "Sensitivity Analysis",
                          "Data Analysis",
                        ],
                      },
                    ].map((section) => (
                      <div key={section.title}>
                        <p className="text-sm font-semibold text-slate-400">
                          {section.title}
                        </p>

                        <div className="mt-2 flex flex-wrap gap-2">
                          {section.items.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-[#4B9CD3]/25 bg-[#4B9CD3]/10 px-3 py-1 text-xs text-[#B9E3FF]"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-[#7CC4FA]">
                      Professional Skills
                    </h3>

                    {[
                      {
                        title: "Problem Solving",
                        items: [
                          "Breaking down complex financial problems",
                          "Thinking through decisions with data",
                          "Attention to detail",
                        ],
                      },
                      {
                        title: "Communication",
                        items: [
                          "Presenting financial ideas clearly",
                          "Explaining analysis to teams and stakeholders",
                        ],
                      },
                      {
                        title: "Leadership & Teamwork",
                        items: [
                          "Leading group projects",
                          "Working closely with teams",
                          "Coordinating across stakeholders",
                        ],
                      },
                      {
                        title: "Execution",
                        items: [
                          "Managing deadlines across multiple priorities",
                          "Making informed decisions under pressure",
                        ],
                      },
                    ].map((section) => (
                      <div
                        key={section.title}
                        className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
                      >
                        <p className="text-sm font-semibold text-slate-400">
                          {section.title}
                        </p>

                        <ul className="mt-2 space-y-1 text-sm text-slate-300">
                          {section.items.map((item) => (
                            <li key={item}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {activeSection === "portfolio" && (
              <section
                ref={sectionRefs.portfolio}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-sm sm:p-8"
              >
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Portfolio
                </h2>

                {featuredProject && (
                  <a
                    href={featuredProject.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 block rounded-3xl border border-[#4B9CD3]/25 bg-[linear-gradient(135deg,rgba(75,156,211,0.16),rgba(255,255,255,0.04))] p-6 transition duration-200 hover:-translate-y-1 hover:border-[#4B9CD3]/45 hover:shadow-[0_0_35px_rgba(75,156,211,0.18)] sm:p-8"
                  >
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                      <div className="max-w-2xl">
                        <p className="inline-flex rounded-full border border-[#4B9CD3]/30 bg-[#4B9CD3]/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#B9E3FF]">
                          Featured Project
                        </p>

                        <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                          {featuredProject.title}
                        </h3>

                        <p className="mt-2 text-base font-medium text-[#7CC4FA]">
                          {featuredProject.subtitle}
                        </p>

                        <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                          {featuredProject.description}
                        </p>
                      </div>

                      <div className="flex shrink-0 items-center">
                        <span className="rounded-xl border border-white/15 bg-white/[0.05] px-4 py-3 text-sm font-semibold text-white">
                          View Project
                        </span>
                      </div>
                    </div>
                  </a>
                )}

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {standardProjects.map((project) => (
                    <a
                      key={project.title}
                      href={project.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-200 hover:-translate-y-1 hover:border-[#4B9CD3]/35 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(75,156,211,0.12)]"
                    >
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-sm text-[#7CC4FA]">
                          {project.subtitle}
                        </p>
                      </div>

                      <p className="mt-4 text-sm leading-6 text-slate-300">
                        {project.description}
                      </p>

                      <p className="mt-4 text-xs text-slate-400">
                        View full project →
                      </p>
                    </a>
                  ))}
                </div>
              </section>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}