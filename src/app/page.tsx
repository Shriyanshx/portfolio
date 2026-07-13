"use client";
import "./landing.css";
import { useState } from "react";
import { MailOutline } from "@mui/icons-material";
import SocialMedia from "./widgets/social_media_icons";
import Bio from "./widgets/bio";
import Experience from "./widgets/experience";
import LinkArrow from "./widgets/svgs";
import Project from "./widgets/project";
import DescriptionPoint from "./widgets/description_point";
import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <body className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
      <div
        className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0"
        onMouseMove={handleMouseMove}
      >
        <div
          className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:fixed"
          style={{
            background: `radial-gradient(600px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
          }}
        ></div>

        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>

              <Image src="/shriyansh.jpg" alt="Shriyansh Raj" width={200} height={200} style={{ borderRadius: "50%", marginBottom: 16, width: 200, height: 200, objectFit: "cover" }} />

              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <a href="/">Shriyansh Raj</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Flutter Engineer
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
                I build pixel-perfect, engaging, and accessible digital
                experiences.
              </p>

              <p className="mt-4 max-w-xs leading-normal flex items-center gap-22">
                <MailOutline sx={{ height: 20, marginRight: 1 }} />
                <a
                  href="mailto:iShreeyansh@gmail.com"
                  className="hover:underline"
                >
                  iShreeyansh@gmail.com
                </a>
              </p>

              <nav
                className="nav hidden lg:block"
                aria-label="In-page jump links"
              >
                <ul className="mt-16 w-max">
                  <li>
                    <a className="group flex items-center py-3" href="#about">
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        About
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="group flex items-center py-3 active"
                      href="#experience"
                    >
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        Experience
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="group flex items-center py-3"
                      href="#projects"
                    >
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        Projects
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <SocialMedia />
          </header>

          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <div className="github-commit">

              <GitHubCalendar username="shriyanshx" />
            </div>

            <Bio />
            <Experiences />
            <Projects />
          </main>
        </div>
      </div>
    </body>
  );
}

function Experiences() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>
      <ol className="group/list">
        <li className="mb-12">
          <Experience
            role="SDE II - Flutter"
            companyName={{
              name: "Sunstone",
              url: "https://sunstone.in/",
            }}
            subtitle="Flutter Developer"
            description=<>
              <DescriptionPoint
                title="Mobile Engineering Lead"
                description={
                  <>
                    Led mobile engineering, building high-performance Flutter
                    apps with native iOS/Android WebViews, bridging layers, and
                    advanced streaming features.
                  </>
                }
              />

              <DescriptionPoint
                title="Firebase Services"
                description={
                  <>
                    Integrated Firebase (FCM, Remote Config, Dynamic Links,
                    Analytics, Google Auth) for rollout management,
                    notifications, and mobile insights.
                  </>
                }
              />

              <DescriptionPoint
                title="Video Player"
                description={
                  <>
                    Built a custom multi-provider video player
                    (YouTube/Wistia/M3U8) with adaptive streaming and
                    analytics.
                  </>
                }
              />

              <DescriptionPoint
                title="Bluetooth Low Energy (BLE)"
                description={
                  <>
                    Developed a BLE-based attendance system used by 16,000+
                    students daily, automating check-ins and eliminating
                    manual effort.
                  </>
                }
              />

              <DescriptionPoint
                title="Dynamic Forms"
                description={
                  <>
                    Created dynamic JSON-driven forms supporting instant UI
                    generation across mobile apps.
                  </>
                }
              />

              <DescriptionPoint
                title="Backend & APIs"
                description={
                  <>
                    Built and optimized REST APIs (Node.js, Express) with
                    caching, queues, and rate-limiting.
                  </>
                }
              />

              <DescriptionPoint
                title="CI/CD"
                description={
                  <>
                    Implemented CI/CD for iOS, Android, and Web using Fastlane,
                    Azure DevOps, and GitHub Actions.
                  </>
                }
              />

              <DescriptionPoint
                title="LMS & Content Library"
                description={
                  <>
                    Built a custom LMS for 8,000+ students with video,
                    quizzes, assignments, coding assessments, and real-time
                    progress tracking.
                  </>
                }
              />

              <DescriptionPoint
                title="Moodle Integration"
                description={
                  <>
                    Integrated Moodle with a custom auto-login solution,
                    cutting third-party cost and maintenance.
                  </>
                }
              />

              <DescriptionPoint
                title="AI Call Audit System"
                description={
                  <>
                    Developed an AI call audit system enabling batch
                    processing and faster turnaround.
                  </>
                }
              />

              <DescriptionPoint
                title="AI Content Feedback"
                description={
                  <>
                    Built a Python backend for AI-driven content feedback,
                    improving teaching efficiency and engagement.
                  </>
                }
              />

              <DescriptionPoint
                title="Analytics & Tracking"
                description={
                  <>
                    Integrated analytics platforms (MoEngage, Mixpanel,
                    Branch) to enhance user insights and attribution accuracy.
                  </>
                }
              />

              <DescriptionPoint
                title="Automation & Architecture"
                description={
                  <>
                    Built Selenium scrapers, automated data processing, and
                    implemented Clean Architecture across projects.
                  </>
                }
              />

              <DescriptionPoint
                title="Team Leadership"
                description={
                  <>
                    Managed a team of 2 engineers, owned critical modules, and
                    led architecture decisions.
                  </>
                }
              />
            </>
            technologies={[
              { name: "Flutter" },
              { name: "iOS" },
              { name: "Android" },
              { name: "Flutter Web" },
              { name: "Dart" },
              { name: "BLE" },
              { name: "Getx" },
              { name: "Firebase" },
              { name: "CI/CD" },
              { name: "Node.js" },
              { name: "Mixpanel MoEngage" },
              { name: "LMS" },
              { name: "Github" },
            ]}
            timePeriod="Mar 2023 — May 2026"
            isPresent={false}
          />
        </li>

        <li className="mb-12">
          <Experience
            role="SDE"
            companyName={{
              name: "Reliance Jio",
              url: "https://jiomeetpro.jio.com/",
            }}
            subtitle="Flutter developer & Automation Engineer"
            description=<>
              <DescriptionPoint
                title="Automation Testing"
                description="Developed and maintained automation test scripts for the JioMeet Pro app using Cucumber and Java, ensuring the app's reliability and quality."
              />
              <DescriptionPoint
                title="Jio News App"
                description="
      Contributed to the development of the Jio News app, a digital newsstand that provides access to a wide range of newspapers and magazines. "
              />
            </>
            technologies={[
              { name: "Flutter" },
              { name: "Clean architecture" },
              { name: "REST services" },
              { name: "Cucumber" },
              { name: "BDD" },
              { name: "Windows Automation" },
              { name: "Selenium" },
              { name: "Java" },
              { name: "Azure devops" },
            ]}
            timePeriod="Aug 2021 — May 2022 "
          />
        </li>

        <li className="mb-12">
          <Experience
            role="Flutter Developer"
            companyName={{
              name: "Jsimple Technologies",
              url: "https://www.jsimple.com/",
            }}
            subtitle="Flutter Architect"
            description=<>
              <DescriptionPoint description="I worked as the sole developer on the following projects:" />
              <DescriptionPoint
                title="AI/ML"
                description="Implemented a facial recognition service to recognize user faces for marking attendance."
              />

              <DescriptionPoint
                title="Firebase"
                description="Integrated and implemented various Firebase services - FCM, Analytics, Deep linking"
              />

              <DescriptionPoint
                title="Geo-Fencing"
                description="Developed a system for marking attendance when a user enters a specific area of the office."
              />

              <DescriptionPoint
                title="Google Maps"
                description="Utilized Google Maps to display employees' locations on the map along with additional information"
              />
            </>
            technologies={[
              { name: "Flutter" },
              { name: "Clean architecture" },
              { name: "Bloc" },
              { name: "Firebase" },
              { name: "HRMS" },
              { name: "Geo Fencing" },
              { name: "Google Maps" },
              { name: "Machine Learning" },
            ]}
            timePeriod="Feb 2021 — Sep 2021 "
          />
        </li>
      </ol>

      <div className="mt-12">
        <a
          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="View Full Résumé (opens in a new tab)"
        >
          <span>
            View Full <span className="inline-block">Résumé</span>
            <LinkArrow />
          </span>
        </a>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>

      <Project
        title="Flutter Process Manager"
        description="VSCode extension for managing Flutter run processes — Hot Reload/Restart/Quit, live logs, and multi-device support from a sidebar panel. Tracks processes whether started manually or by AI coding agents."
        image="/flutter-process-manager.png"
        url="https://marketplace.visualstudio.com/items?itemName=shriyanshraj.flutter-process-manager"
        technologies={[
          { label: "VSCode Extension" },
          { label: "Flutter" },
          { label: "TypeScript" },
        ]}
      />

      <Project
        title="Sunstone App"
        description="Extensively worked on Features like LMS, Live Classes, and many more. Created LMS from scratch, which is used by 10000+ students. "
        image="/sunstone.png"
        url="https://play.google.com/store/apps/details?id=com.sunstone.hub&hl=en_IN&gl=US"
        technologies={[
          { label: "Flutter" },
          { label: "Getx" },
          { label: "Firebase" },
          { label: "Mixpanel" },
          { label: "Hive" },
          { label: "Dart" },
          { label: "Ed-Tech" },
        ]}
      />

      <Project
        title="HighPriestess App"
        description="Cross-platform tarot reading app built with Flutter, featuring personalized card readings, daily insights, and love/career guidance. Powered by a Firebase backend with Auth, Firestore, Cloud Functions, AI-driven interpretations, push notifications, and subscription payments via Razorpay."
        image="/highpriestess.png"
        url="https://play.google.com/store/apps/details?id=com.highpriestiss.highpriestiss&hl=en_IN"
        technologies={[
          { label: "Flutter" },
          { label: "Firebase" },
          { label: "Cloud Functions" },
          { label: "AI" },
          { label: "Razorpay" },
        ]}
      />

      <Project
        title="iFakePDF"
        description="Full-stack web app that lets users select a region on a PDF and replace it with AI-generated content (signatures, seals, handwriting) seamlessly blended into the page. Built with a Next.js/React frontend and FastAPI/PyMuPDF backend; integrates multiple AI image generation APIs with edge-feathering and noise-matching for realistic compositing."
        image="/ifakepdf.svg"
        url="https://ifakepdf.com"
        technologies={[
          { label: "Next.js" },
          { label: "React" },
          { label: "FastAPI" },
          { label: "PyMuPDF" },
          { label: "AI" },
        ]}
      />

      <Project
        title="ClipMind"
        description="Native macOS clipboard manager (SwiftUI + AppKit) that auto-captures clipboard history and layers on-device AI via Apple Intelligence for smart categorization, daily summaries, and productivity insights. Features a global-shortcut quick-access panel, a full-featured main window with regex search/stats/favorites, AI-powered text rewriting (professional/casual/concise styles), and export/import — all with a privacy-first, local-only storage design."
        image="/clipmind_logo.png"
        url="https://clipmindapp.com/"
        technologies={[
          { label: "Swift" },
          { label: "SwiftUI" },
          { label: "AppKit" },
          { label: "Apple Intelligence" },
        ]}
      />

      <Project
        title="WidgetForm"
        description="iOS home-screen widget rendering LaTeX math formulas. Pick, pin, or add custom formulas, with customizable backgrounds and refresh intervals."
        image="/widgetform.png"
        url="https://apps.apple.com/us/app/widgetform/id6752328127"
        technologies={[
          { label: "Swift" },
          { label: "SwiftUI" },
          { label: "WidgetKit" },
        ]}
      />

      <Project
        title="Formula Lockscreen"
        description="Android app that replaces the lockscreen with random math formulas. Built a library of ~1000 formulas across categories and subcategories, letting users pick their preferred set to display."
        image="/formula_lockscreen.png"
        url="https://play.google.com/store/apps/details?id=com.stackindex.formula_lockscreen&hl=en_IN"
        technologies={[
          { label: "Android" },
          { label: "Kotlin" },
          { label: "Jetpack Compose" },
          { label: "Ed-Tech" },
        ]}
      />
    </section>
  );
}
