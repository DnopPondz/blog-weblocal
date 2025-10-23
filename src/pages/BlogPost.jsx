import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../data";

const formatThaiDate = (dateString) =>
  new Date(dateString).toLocaleDateString("th-TH", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function BlogPost() {
  const { slug } = useParams();

  const post = useMemo(
    () => blogPosts.find((item) => item.slug === slug),
    [slug]
  );

  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return blogPosts
      .filter((item) => item.id !== post.id && item.category === post.category)
      .slice(0, 3);
  }, [post]);

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-24">
        <div className="max-w-lg rounded-3xl bg-white p-10 text-center shadow-xl shadow-blue-900/5 ring-1 ring-slate-100">
          <p className="text-5xl">🤔</p>
          <h1 className="mt-4 text-2xl font-semibold text-slate-900">
            ไม่พบบทความที่คุณต้องการอ่าน
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            บทความนี้อาจถูกย้ายหรือลบไปแล้ว ลองกลับไปดูบทความทั้งหมดอีกครั้ง
            เพื่อเลือกเรื่องที่สนใจนะคะ
          </p>
          <Link
            to="/blog"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700"
          >
            กลับไปหน้าบทความทั้งหมด
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <article className="relative">
        <div className="relative h-96 w-full overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/30 to-slate-900/80" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-4xl px-6 pb-14 text-white">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-white/80 transition hover:bg-white/20"
            >
              ← ย้อนกลับไปหน้าบทความ
            </Link>
            <h1 className="mt-6 text-3xl font-bold leading-snug md:text-5xl">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/80">
              <span className="rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
                {post.category}
              </span>
              <span>{formatThaiDate(post.publishedAt)}</span>
              <span className="flex items-center gap-1">
                ⏱️ {post.readTime} นาที
              </span>
              <span className="flex items-center gap-2">
                ✍️ {post.author}
              </span>
            </div>
          </div>
        </div>

        <div className="mx-auto -mt-20 max-w-4xl px-6">
          <div className="rounded-3xl bg-white p-8 shadow-2xl shadow-blue-900/5 ring-1 ring-slate-100 md:p-12">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-400">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 space-y-6 text-base leading-relaxed text-slate-700 md:text-lg">
              {post.content?.map((paragraph) => (
                <p key={paragraph.slice(0, 30)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-slate-50 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                บันทึกจากผู้เขียน
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                ขอบคุณที่สละเวลาอ่านบทความนี้ หากคุณลองนำแนวทางไปใช้แล้วได้ผลลัพธ์ใหม่ๆ
                อย่าลืมกลับมาเล่าให้ทีม Blog Local ฟังนะคะ เราอยากเก็บเรื่องราวจริงเพื่อนำไปต่อยอดให้ผู้อ่านคนอื่นๆ ด้วยค่ะ
              </p>
            </div>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="mx-auto mt-16 max-w-6xl px-6">
          <div className="rounded-3xl bg-white p-8 shadow-xl shadow-blue-900/5 ring-1 ring-slate-100 md:p-12">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                  บทความอื่นในหมวด {post.category}
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  เลือกอ่านต่อเพื่อเก็บมุมมองเพิ่มเติมจากหัวข้อเดียวกัน
                </p>
              </div>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-800"
              >
                ดูบทความทั้งหมด
                <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {relatedPosts.map((item) => (
                <article
                  key={item.id}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 transition hover:-translate-y-1 hover:border-blue-300"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {item.excerpt}
                    </p>
                    <Link
                      to={`/blog/${item.slug}`}
                      className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                    >
                      อ่านต่อ
                      <span aria-hidden>↗</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
