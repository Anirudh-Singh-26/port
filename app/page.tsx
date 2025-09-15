import { AboutMe } from "@/components/main/aboutMe";
import { Education } from "@/components/main/education";
import { Encryption } from "@/components/main/encryption";
import { Experience } from "@/components/main/experience";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { Certificates } from "@/components/main/certificates";
import { Contact } from "@/components/main/contact";
import { GithubStats } from "@/components/main/github-stats";
import { Highlights } from "@/components/main/quick-stats";


export default function Home() {
  return (
    <main className="h-full w-full">
      {/* 1. Hero Section */}
      <Hero />

      <div className="flex flex-col items-center w-full">
        {/* 2. Skills */}
        <section className="w-full max-w-8xl px-6 md:px-12 lg:px-20 mt-20">
          <AboutMe />
        </section>

        {/* 3. Highlights / Quick Stats */}
        <section className="w-full max-w-7xl px-6 md:px-12 lg:px-20 py-20 pb-0">
          <Highlights />
        </section>

        {/* 5. About Me */}
        <section className="w-full max-w-7xl px-6 md:px-12 lg:px-20 py-20">
          <Skills />
        </section>

        {/* 6. Experience */}
        <section className="w-full max-w-7xl px-6 md:px-12 lg:px-20 py-20">
          <Experience />
        </section>

        {/* 7. Education */}
        <section className="w-full max-w-7xl px-6 md:px-12 lg:px-20 py-20">
          <Education />
        </section>

        {/* 8. Certificates */}
        <section className="w-full max-w-7xl px-6 md:px-12 lg:px-20 py-20">
          <Certificates />
        </section>

        {/* 9. Projects */}
        <section className="w-full max-w-7xl px-6 md:px-12 lg:px-20 py-20">
          <Projects />
        </section>

        {/* 10. GitHub Stats */}
        <section className="w-full max-w-7xl px-6 md:px-12 lg:px-20 py-20">
          <GithubStats />
        </section>

        {/* 11. Contact */}
        <section className="w-full max-w-7xl px-6 md:px-12 lg:px-20 py-20">
          <Contact />
        </section>
      </div>
    </main>
  );
}
