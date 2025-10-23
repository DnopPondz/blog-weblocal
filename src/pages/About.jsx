const values = [
  {
    title: "แบ่งปันประสบการณ์จริง",
    description:
      "เรื่องราวทุกชิ้นมาจากการลงมือทำของคนในแวดวงครีเอทีฟ เราตั้งใจคัดเลือกข้อมูลที่มีประโยชน์และเล่าให้เข้าใจง่าย เพื่อให้ผู้อ่านนำไปใช้ได้จริงในชีวิตประจำวัน.",
    icon: "💡",
  },
  {
    title: "สนับสนุนชุมชนคนสร้างสรรค์",
    description:
      "เราสร้างพื้นที่ให้คนที่ทำงานในสายอาชีพคล้ายกันได้พบปะ แลกเปลี่ยน และส่งต่อแรงบันดาลใจ ไม่ว่าคุณจะเป็นฟรีแลนซ์ นักออกแบบ หรือผู้ประกอบการ.",
    icon: "🤝",
  },
  {
    title: "ขับเคลื่อนด้วยความใส่ใจ",
    description:
      "ทีมบรรณาธิการให้ความสำคัญกับความถูกต้องของข้อมูล รวมถึงการเล่าเรื่องที่สะท้อนมุมมองที่หลากหลาย เราเชื่อว่าความละเอียดอ่อนคือพลังในการขับเคลื่อนงานสร้างสรรค์.",
    icon: "🧭",
  },
];

const teamMembers = [
  {
    name: "ภัทรสุดา ใจดี",
    role: "บรรณาธิการบริหาร",
    bio: "คอยดูแลภาพรวมของคอนเทนต์ทั้งหมด และชอบตั้งคำถามว่าเรื่องเล่าชิ้นนี้จะช่วยผู้อ่านได้จริงหรือไม่.",
  },
  {
    name: "กิตติพล แสงงาม",
    role: "หัวหน้าทีมครีเอทีฟ",
    bio: "เล่าเรื่องด้วยภาพเก่งเป็นพิเศษ ชอบทดลองรูปแบบการเล่าเรื่องใหม่ๆ ที่ทำให้คนอ่านรู้สึกใกล้ชิดขึ้น.",
  },
  {
    name: "รุจิรา รุ่งโรจน์",
    role: "นักเขียนประจำ",
    bio: "เชี่ยวชาญการเล่าเรื่องสาย Creative และถนัดการนำประสบการณ์จริงมาถ่ายทอดให้เห็นภาพ.",
  },
];

const milestones = [
  {
    year: "2022",
    title: "เริ่มต้นจากบทสนทนาเล็กๆ",
    description:
      "เราเริ่มรวบรวมบทความจากเพื่อนร่วมวงการเพื่อช่วยกันหาวิธีทำงานให้มีความหมายมากขึ้น.",
  },
  {
    year: "2023",
    title: "เปิดเว็บ Blog Local เวอร์ชันแรก",
    description:
      "หลังจากได้รับเสียงตอบรับดีจากจดหมายข่าว จึงต่อยอดสู่เว็บไซต์ที่คัดสรรบทความเจาะลึกมากขึ้น.",
  },
  {
    year: "2024",
    title: "ขยายหัวข้อและคอมมูนิตี้",
    description:
      "เราเพิ่มหมวดหมู่ใหม่ๆ ทั้งเรื่องอาชีพ การจัดการชีวิต และกิจกรรมเวิร์กช็อปเพื่อเชื่อมโยงผู้คนให้กว้างขึ้น.",
  },
];

export default function About() {
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
            About Blog Local
          </span>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            พื้นที่เล่าเรื่องจริงจากคนทำงานสร้างสรรค์ ที่อยากให้ทุกวันเต็มไปด้วยแรงบันดาลใจ
          </h1>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-white/80 md:text-lg">
            เราเชื่อว่าประสบการณ์เล็กๆ ในชีวิตประจำวันสามารถเปลี่ยนมุมมองของใครบางคนได้เสมอ เว็บนี้จึงรวบรวมไอเดีย เทคนิค และบทเรียนจากคนธรรมดาที่หลงใหลการสร้างสรรค์เหมือนกัน.
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
            Blog Local เริ่มจากทีมเล็กๆ ที่อยากแบ่งปันบทเรียนจากงานและชีวิต ด้วยแรงสนับสนุนจากผู้อ่าน เราจึงพัฒนาเนื้อหาให้ครอบคลุมทั้งการทำงาน การใช้ชีวิต และการดูแลใจ.
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
              <h2 className="text-2xl font-bold md:text-3xl">ทีมงานเบื้องหลัง Blog Local</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-base">
                เราเป็นกลุ่มคนที่หลงรักการเล่าเรื่องและอยากให้เนื้อหาที่ดีเข้าถึงผู้คนมากขึ้น ทุกบทความผ่านการรีวิวจากหลายมุมมองเพื่อให้มั่นใจว่าน่าติดตามและมีประโยชน์.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Editorial Team
              </span>
            </div>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {teamMembers.map((member) => (
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
