import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
} from "@/constants";

export const Skills = () => {
  interface Skili {
    skill_name: string;
    image: string;
    width: number;
    height: number;
  }

  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-10 h-full relative overflow-hidden py-10"
    >
      <SkillText />

      {/* Languages */}
      <div className="flex flex-col items-center gap-4 w-full">
        <h2 className="text-white text-xl md:text-2xl font-semibold mb-2">
          Languages
        </h2>
        <div className="flex flex-wrap justify-center gap-5">
          {SKILL_DATA.map((skill: Skili, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
      </div>
      

      {/* Frontend Frameworks */}
      <div className="flex flex-col items-center gap-4 w-full">
        <h2 className="text-white text-xl md:text-2xl font-semibold mb-2">
          Frontend Frameworks
        </h2>
        <div className="flex flex-wrap justify-center gap-5">
          {FRONTEND_SKILL.map((skill: Skili, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Backend */}
      <div className="flex flex-col items-center gap-4 w-full">
        <h2 className="text-white text-xl md:text-2xl font-semibold mb-2">
          Backend
        </h2>
        <div className="flex flex-wrap justify-center gap-5">
          {BACKEND_SKILL.map((skill: Skili, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Fullstack */}
      <div className="flex flex-col items-center gap-4 w-full">
        <h2 className="text-white text-xl md:text-2xl font-semibold mb-2">
          Fullstack
        </h2>
        <div className="flex flex-wrap justify-center gap-5">
          {FULLSTACK_SKILL.map((skill: Skili, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Tools / Others */}
      <div className="flex flex-col items-center gap-4 w-full">
        <h2 className="text-white text-xl md:text-2xl font-semibold mb-2">
          Tools & Others
        </h2>
        <div className="flex flex-wrap justify-center gap-5">
          {OTHER_SKILL.map((skill: Skili, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
      </div>

     
    </section>
  );
};
