import { aboutContent } from "../data";

export default function About() {
  const { hero, values, milestones, team } = aboutContent;

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
        <div className="absolute inset-0 opacity-30">
          <svg
            className="h-full w-full text-white"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              fillOpacity="0.4"
              d="M0,64L60,85.3C120,107,240,149,360,149.3C480,149,600,107,720,112C840,117,960,171,1080,181.3C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            />
          </svg>
        </div>
        <div className="relative mx-auto flex max-w-5xl flex-col gap-8 px-6 py-24 text-center md:py-32">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-xs font-semibold tracking-[0.3em] uppercase">
            {hero.eyebrow}
          </span>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">{hero.title}</h1>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-white/80 md:text-lg">
            {hero.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-8 rounded-3xl bg-white p-8 shadow-xl shadow-indigo-500/10 ring-1 ring-slate-100 md:grid-cols-3 md:p-12">
          {values.map((value) => (
            <div key={value.title} className="flex flex-col gap-4">
              <span className="text-3xl">{value.icon}</span>
              <h2 className="text-xl font-semibold text-slate-900">{value.title}</h2>
              <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">เส้นทางการเติบโตของเรา</h2>
          <p className="mt-3 max-w-3xl text-sm text-slate-600 md:text-base">
            Blog Local เริ่มจากทีมเล็กๆ ที่อยากแบ่งปันบทเรียนจากงานและชีวิต ด้วยแรงสนับสนุนจากผู้อ่าน เราจึงพัฒนาเนื้อหาให้ครอบคลุมทั้งการทำงาน การใช้ชีวิตและการดูแลใจ.
          </p>
          <div className="mt-10 space-y-8 border-l border-slate-200 pl-6">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="relative pl-6">
                <span className="absolute -left-[38px] flex h-8 w-8 items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 text-sm font-semibold text-indigo-600">
                  {milestone.year}
                </span>
                <h3 className="text-lg font-semibold text-slate-900">{milestone.title}</h3>
                <p className="mt-2 text-sm text-slate-600 md:text-base">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="rounded-3xl bg-slate-900 p-10 text-white shadow-2xl shadow-slate-900/30">
          <div className="md:flex md:items-start md:justify-between">
            <div className="md:max-w-xl">
              <h2 className="text-2xl font-bold md:text-3xl">{team.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-base">
                {team.description}
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                {team.label}
              </span>
            </div>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {team.members.map((member) => (
              <div key={member.name} className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-lg font-semibold">
                  {member.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-sm uppercase tracking-[0.2em] text-indigo-200/80">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/80">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
