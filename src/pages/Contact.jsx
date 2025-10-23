import { contactContent } from "../data";

export default function Contact() {
  const { hero, form, contactMethods, officeHours, studioNote } = contactContent;

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-500 via-sky-500 to-cyan-500 text-white">
        <div className="absolute inset-0 opacity-30">
          <svg
            className="h-full w-full text-white"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              fillOpacity="0.4"
              d="M0,128L80,133.3C160,139,320,149,480,144C640,139,800,117,960,117.3C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
          </svg>
        </div>
        <div className="relative mx-auto flex max-w-4xl flex-col gap-6 px-6 py-24 text-center md:py-28">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-xs font-semibold tracking-[0.3em] uppercase">
            {hero.eyebrow}
          </span>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">{hero.title}</h1>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/80 md:text-lg">
            {hero.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-3">
            <div className="rounded-3xl bg-white p-8 shadow-xl shadow-sky-500/10 ring-1 ring-slate-100 md:p-10">
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{form.title}</h2>
              <p className="mt-3 text-sm text-slate-600 md:text-base">{form.description}</p>
              <form className="mt-8 grid gap-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="flex flex-col gap-2 text-left text-sm font-medium text-slate-700">
                    ชื่อและนามสกุล
                    <input
                      type="text"
                      placeholder="เช่น พิมลพรรณ ใจดี"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:ring focus:ring-sky-200/60"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-left text-sm font-medium text-slate-700">
                    อีเมลสำหรับติดต่อกลับ
                    <input
                      type="email"
                      placeholder="name@email.com"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:ring focus:ring-sky-200/60"
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-2 text-left text-sm font-medium text-slate-700">
                  หัวข้อ
                  <input
                    type="text"
                    placeholder="อยากเสนอหัวข้อใหม่/สอบถามข้อมูล/ร่วมงาน"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:ring focus:ring-sky-200/60"
                  />
                </label>
                <label className="flex flex-col gap-2 text-left text-sm font-medium text-slate-700">
                  รายละเอียดเพิ่มเติม
                  <textarea
                    rows={5}
                    placeholder="เล่าให้เราฟังเกี่ยวกับสิ่งที่อยากพูดคุย"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:ring focus:ring-sky-200/60"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:scale-105"
                >
                  {form.submitLabel}
                  <span>{form.submitIcon}</span>
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col gap-8 md:col-span-2">
            <div className="rounded-3xl bg-white p-8 shadow-xl shadow-sky-500/10 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-slate-900">ช่องทางการติดต่อโดยตรง</h3>
              <p className="mt-3 text-sm text-slate-600">
                เลือกช่องทางที่ตรงกับวัตถุประสงค์ ทีมงานที่เกี่ยวข้องจะตอบกลับอย่างรวดเร็ว.
              </p>
              <div className="mt-6 space-y-5">
                {contactMethods.map((method) => (
                  <div key={method.label} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{method.icon}</span>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{method.label}</p>
                        <p className="text-sm text-sky-600">{method.value}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-slate-600">{method.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-2xl shadow-slate-900/30">
              <h3 className="text-lg font-semibold md:text-xl">เวลาที่พร้อมรับสาย</h3>
              <p className="mt-2 text-sm text-white/80">
                หากคุณต้องการพูดคุยแบบ real-time สามารถโทรหาเราในช่วงเวลาทำการด้านล่าง หรือทิ้งข้อความแล้วเราจะติดต่อกลับ.
              </p>
              <ul className="mt-6 space-y-3">
                {officeHours.map((slot) => (
                  <li
                    key={slot.day}
                    className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3 text-sm"
                  >
                    <span>{slot.day}</span>
                    <span className="font-medium text-cyan-200">{slot.time}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl bg-white/10 p-4 text-sm text-white/80">
                <p>{studioNote}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
