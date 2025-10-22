const featuredBlogs = [
  {
    id: 1,
    title: "สำรวจแนวคิด Minimalist ในการจัดบ้านให้โล่งสบาย",
    category: "LIFESTYLE",
    excerpt:
      "รู้จักหลักคิดและเทคนิคในการจัดบ้านสไตล์มินิมอล ที่ช่วยให้ทุกพื้นที่โล่ง โปร่ง และใช้งานได้จริง พร้อมไอเดียเริ่มต้นสำหรับมือใหม่.",
    image:
      "https://images.unsplash.com/photo-1529429617124-aee711a65a36?auto=format&fit=crop&w=1200&q=80",
    author: "ภัทรสุดา ใจดี",
    published: "12 ตุลาคม 2024",
    readTime: 8,
  },
  {
    id: 2,
    title: "เคล็ดลับถ่ายภาพท่องเที่ยวให้มีสตอรี่ในทุกช็อต",
    category: "CREATIVE",
    excerpt:
      "จับประเด็นสำคัญของการเล่าเรื่องผ่านภาพท่องเที่ยว ตั้งแต่การเตรียมตัว คุมโทนสี ไปจนถึงวิธีการจัดองค์ประกอบให้คนดูรู้สึกเหมือนได้ไปด้วยกัน.",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
    author: "กิตติพล แสงงาม",
    published: "4 ตุลาคม 2024",
    readTime: 6,
  },
  {
    id: 3,
    title: "เริ่มต้นสร้างแบรนด์ส่วนตัวบนโลกออนไลน์แบบไม่ต้องฝืนตัวเอง",
    category: "CAREER",
    excerpt:
      "สรุปขั้นตอนสร้าง Personal Brand ที่จริงใจและยั่งยืน ตั้งแต่การค้นหาแก่นแท้ของตัวเอง ไปจนถึงการทำคอนเทนต์ที่คนดูรู้สึกเชื่อมโยงได้.",
    image:
      "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=1200&q=80",
    author: "รุจิรา รุ่งโรจน์",
    published: "28 กันยายน 2024",
    readTime: 9,
  },
];

const getInitials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-slate-50">
      <header className="relative overflow-hidden bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500">
        <div className="absolute inset-0 opacity-20">
          <svg
            className="h-full w-full text-white/60"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 600 600"
          >
            <g fill="currentColor" fillOpacity="0.4">
              <circle cx="100" cy="100" r="60" />
              <circle cx="500" cy="120" r="90" />
              <circle cx="320" cy="400" r="120" />
              <circle cx="160" cy="430" r="80" />
            </g>
          </svg>
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 text-white md:flex-row md:items-center md:py-24">
          <div className="md:w-2/3">
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
              Blog Local Insight
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
              พื้นที่แชร์เรื่องราวดีๆ เพื่อแรงบันดาลใจของคนทำงานสร้างสรรค์ยุคใหม่
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
              เราเชื่อว่าความรู้และประสบการณ์จริงสามารถส่งต่อพลังบวกได้เสมอ เลือกอ่านเรื่องที่คุณสนใจ ทั้งไลฟ์สไตล์ การทำงาน ไปจนถึงเคล็ดลับสร้างสรรค์ ที่ถูกเรียบเรียงให้อ่านง่าย นำไปใช้ได้ทันที
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-sm">
                <span className="text-lg">✨</span>
                <span>อัปเดตทุกสัปดาห์</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-sm">
                <span className="text-lg">🧭</span>
                <span>คัดสรรโดยทีมครีเอทีฟ</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-sm">
                <span className="text-lg">🤝</span>
                <span>เปิดพื้นที่แบ่งปันประสบการณ์จริง</span>
              </div>
            </div>
          </div>
          <div className="relative flex-1">
            <div className="absolute -top-10 -right-6 h-24 w-24 rounded-full bg-white/20 blur-2xl" />
            <div className="absolute -bottom-10 left-6 h-20 w-20 rounded-full bg-purple-300/30 blur-2xl" />
            <div className="relative mx-auto max-w-sm rounded-3xl bg-white/10 p-6 shadow-2xl backdrop-blur">
              <div className="flex flex-col gap-4 text-sm text-white/80">
                <p className="text-lg font-semibold text-white">
                  "แรงบันดาลใจเกิดขึ้นได้เมื่อเราได้คุยกับคนที่เข้าใจเส้นทางเดียวกัน"
                </p>
                <p>
                  เว็บบล็อกนี้สร้างขึ้นเพื่อเป็นชุมชนเล็กๆ ที่พาคุณไปพบกับมุมมองใหม่ๆ ในทุกวัน ไม่ว่าจะเป็นการจัดบ้าน การเดินทาง หรือการทำงานในโลกดิจิทัล
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="h-10 w-10 rounded-full bg-white/30 backdrop-blur flex items-center justify-center text-base font-semibold text-white">
                    BL
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">ทีมบรรณาธิการ Blog Local</p>
                    <p className="text-xs text-white/70">ชวนคุยเรื่องสร้างสรรค์ทุกสัปดาห์</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative -mt-16 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl bg-white p-8 shadow-2xl shadow-blue-500/5 ring-1 ring-slate-100 md:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                  บทความล่าสุดจากทีมงาน
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-slate-500 md:text-base">
                  เลือกหยิบเรื่องราวที่อยากอ่าน แล้วใช้การ์ดแปลกตานี้นำทางไปยังหัวข้อที่คุณสนใจ
                  เราออกแบบให้คุณมองเห็นภาพรวมของเนื้อหาตั้งแต่แรกเห็น
                </p>
              </div>
              <button className="group inline-flex items-center gap-2 self-start rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:scale-105">
                สำรวจบทความทั้งหมด
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>

            <div className="mt-10 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
              {featuredBlogs.map((blog) => (
                <article
                  key={blog.id}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-transparent bg-slate-900 text-white shadow-[0_20px_45px_-28px_rgba(15,23,42,0.7)] transition duration-500 hover:-translate-y-2 hover:border-blue-400/80 hover:shadow-[0_30px_60px_-35px_rgba(59,130,246,0.8)]"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-900/10 to-slate-900/80" />
                    <span className="absolute left-5 top-5 inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold tracking-[0.4em] text-white/90">
                      {blog.category}
                    </span>
                    <div className="absolute -bottom-6 right-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-slate-900 shadow-lg">
                      <div className="text-center text-xs font-semibold">
                        <span className="block text-lg">{blog.readTime}</span>
                        นาที
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <h3 className="text-xl font-semibold leading-tight text-white transition group-hover:text-blue-200">
                      {blog.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/70">
                      {blog.excerpt}
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-4 text-xs text-white/60">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 text-sm font-semibold text-white">
                          {getInitials(blog.author)}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-semibold text-white/90">{blog.author}</span>
                          <span>{blog.published}</span>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/80 transition hover:border-blue-200 hover:text-blue-100"
                      >
                        อ่านต่อ
                        <span className="transition-transform group-hover:translate-x-1">↗</span>
                      </a>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
