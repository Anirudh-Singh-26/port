"use client";

import { useEffect } from "react";
import { AboutMe } from "@/components/main/aboutMe";
import { Education } from "@/components/main/education";
import { Experience } from "@/components/main/experience";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { Certificates } from "@/components/main/certificates";
import { Contact } from "@/components/main/contact";
import { GithubStats } from "@/components/main/github-stats";
import { Highlights } from "@/components/main/quick-stats";

export default function Home() {
  // 🔥 This ensures we always start at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="h-full w-full">
      {/* 1. Hero Section */}
      <div className="flex flex-col items-center w-full">
      <Hero />

        {/* 2. About Me */}
        <section className="w-full max-w-8xl px-6 md:px-12 lg:px-20 mt-20">
          <AboutMe />
        </section>

        {/* 3. Highlights / Quick Stats */}
        <section className="w-full max-w-7xl px-6 md:px-12 lg:px-20 py-20 pb-0">
          <Highlights />
        </section>

        {/* 4. Skills */}
        <section className="w-full max-w-7xl px-6 md:px-12 lg:px-20 py-20">
          <Skills />
        </section>

        {/* 5. Experience */}
        <section className="w-full max-w-7xl px-6 md:px-12 lg:px-20 py-20">
          <Experience />
        </section>

        {/* 6. Education */}
        <section className="w-full max-w-7xl px-6 md:px-12 lg:px-20 py-20">
          <Education />
        </section>

        {/* 7. Certificates */}
        <section className="w-full max-w-7xl px-6 md:px-12 lg:px-20 py-20">
          <Certificates />
        </section>

        {/* 8. Projects */}
        <section className="w-full max-w-7xl px-6 md:px-12 lg:px-20 py-20">
          <Projects />
        </section>

        {/* 9. GitHub Stats */}
        <section className="w-full max-w-7xl px-6 md:px-12 lg:px-20 py-20">
          <GithubStats />
        </section>

        {/* 10. Contact */}
        <section className="w-full max-w-7xl px-6 md:px-12 lg:px-20 py-20">
          <Contact />
        </section>
      </div>
    </main>
  );
}
