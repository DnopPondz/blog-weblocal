import { useMemo, useState } from "react";
import { blogPosts } from "../data";

const dateFilters = [
  { label: "ทั้งหมด", value: "all" },
  { label: "7 วันที่ผ่านมา", value: "7" },
  { label: "30 วันที่ผ่านมา", value: "30" },
  { label: "90 วันที่ผ่านมา", value: "90" },
];

const formatThaiDate = (dateString) =>
  new Date(dateString).toLocaleDateString("th-TH", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedDateRange, setSelectedDateRange] = useState("all");

  const categories = useMemo(
    () => Array.from(new Set(blogPosts.map((post) => post.category))).sort(),
    []
  );

  const tags = useMemo(
    () =>
      Array.from(new Set(blogPosts.flatMap((post) => post.tags))).sort((a, b) =>
        a.localeCompare(b, "th")
      ),
    []
  );

  const filteredPosts = useMemo(() => {
    const lowerKeyword = searchTerm.trim().toLowerCase();
    const selectedDate = parseInt(selectedDateRange, 10);
    const now = new Date();

    return blogPosts.filter((post) => {
      const matchesSearch = lowerKeyword
        ? [
            post.title,
            post.excerpt,
            post.author,
            ...post.keywords,
            ...post.tags,
          ]
            .join(" ")
            .toLowerCase()
            .includes(lowerKeyword)
        : true;

      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(post.category);

      const matchesTags =
        selectedTags.length === 0 || post.tags.some((tag) => selectedTags.includes(tag));

      const matchesDate =
        selectedDateRange === "all"
          ? true
          : (() => {
              const postDate = new Date(post.publishedAt);
              const diffTime = now - postDate;
              const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
              return diffDays <= selectedDate;
            })();

      return matchesSearch && matchesCategory && matchesTags && matchesDate;
    });
  }, [searchTerm, selectedCategories, selectedTags, selectedDateRange]);

  const hasActiveFilters =
    searchTerm.trim() !== "" ||
    selectedCategories.length > 0 ||
    selectedTags.length > 0 ||
    selectedDateRange !== "all";

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setSelectedTags([]);
    setSelectedDateRange("all");
  };

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-white/70">All Stories</p>
            <h1 className="mt-4 text-4xl font-bold md:text-5xl">
              สำรวจบทความทั้งหมดใน Blog Local
            </h1>
            <p className="mt-4 max-w-2xl text-white/80">
              ค้นหาเรื่องที่ใช่จากหมวดหมู่ คีย์เวิร์ด หรือช่วงเวลาที่ต้องการ เรารวบรวมทุกบทความไว้ที่นี่ในรูปแบบรายการอ่านง่าย พร้อมเครื่องมือช่วยคัดกรองแบบละเอียด.
            </p>
          </div>
          <div className="rounded-3xl bg-white/10 p-6 text-sm text-white/80 backdrop-blur">
            <p className="font-semibold text-white">{blogPosts.length} บทความ</p>
            <p className="mt-1 leading-relaxed">
              อัปเดตเนื้อหาใหม่ทุกสัปดาห์เพื่อให้คุณไม่พลาดไอเดียสดใหม่ ทั้งเรื่องการทำงาน ไลฟ์สไตล์ และการพัฒนาตัวเองในโลกสร้างสรรค์.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-8 px-6 md:flex-row">
        <aside className="md:w-72">
          <div className="rounded-3xl bg-white p-6 shadow-xl shadow-blue-900/5 ring-1 ring-slate-100">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">กรองบทความ</h2>
              <button
                type="button"
                onClick={clearFilters}
                className="text-xs font-semibold text-blue-600 transition hover:text-blue-800"
              >
                เคลียร์
              </button>
            </div>

            <div className="mt-6">
              <label className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                ค้นหา
              </label>
              <div className="mt-2 flex items-center gap-2 rounded-xl bg-slate-100 px-3 py-2">
                <span className="text-slate-400">🔍</span>
                <input
                  type="search"
                  placeholder="พิมพ์คำค้นหา..."
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                หมวดหมู่
              </h3>
              <div className="mt-3 space-y-2">
                {categories.map((category) => {
                  const checked = selectedCategories.includes(category);
                  return (
                    <label
                      key={category}
                      className={`flex cursor-pointer items-center justify-between rounded-xl border px-3 py-2 text-sm transition ${
                        checked
                          ? "border-blue-500 bg-blue-50 text-blue-600"
                          : "border-slate-200 bg-white text-slate-600 hover:border-blue-200"
                      }`}
                    >
                      <span>{category}</span>
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleCategory(category)}
                        className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                      />
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                คีย์เวิร์ดยอดนิยม
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {tags.map((tag) => {
                  const active = selectedTags.includes(tag);
                  return (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleTag(tag)}
                      className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                        active
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                          : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                      }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                ช่วงวันที่เผยแพร่
              </h3>
              <div className="mt-3 space-y-2">
                {dateFilters.map((option) => (
                  <label
                    key={option.value}
                    className={`flex cursor-pointer items-center justify-between rounded-xl border px-3 py-2 text-sm transition ${
                      selectedDateRange === option.value
                        ? "border-purple-500 bg-purple-50 text-purple-600"
                        : "border-slate-200 bg-white text-slate-600 hover:border-purple-200"
                    }`}
                  >
                    <span>{option.label}</span>
                    <input
                      type="radio"
                      name="date-range"
                      value={option.value}
                      checked={selectedDateRange === option.value}
                      onChange={() => setSelectedDateRange(option.value)}
                      className="h-4 w-4 border-slate-300 text-purple-600 focus:ring-purple-500"
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <section className="flex-1">
          <div className="flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-xl shadow-blue-900/5 ring-1 ring-slate-100">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900">
                  บทความทั้งหมด
                </h2>
                <p className="text-sm text-slate-500">
                  พบ {filteredPosts.length} เรื่องจากทั้งหมด {blogPosts.length} เรื่อง
                </p>
              </div>
              {hasActiveFilters && (
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <span className="font-semibold text-slate-400">กำลังใช้งาน:</span>
                  {searchTerm.trim() !== "" && (
                    <span className="rounded-full bg-slate-100 px-3 py-1">
                      ค้นหา: "{searchTerm}"
                    </span>
                  )}
                  {selectedCategories.map((category) => (
                    <span key={category} className="rounded-full bg-blue-100 px-3 py-1 text-blue-700">
                      {category}
                    </span>
                  ))}
                  {selectedTags.map((tag) => (
                    <span key={tag} className="rounded-full bg-violet-100 px-3 py-1 text-violet-700">
                      {tag}
                    </span>
                  ))}
                  {selectedDateRange !== "all" && (
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-amber-700">
                      ภายใน {selectedDateRange} วัน
                    </span>
                  )}
                </div>
              )}
            </div>

            <div className="divide-y divide-slate-100">
              {filteredPosts.length === 0 ? (
                <div className="flex flex-col items-center gap-3 py-16 text-center text-slate-500">
                  <span className="text-4xl">🔍</span>
                  <p className="text-lg font-semibold text-slate-700">
                    ไม่พบบทความที่ตรงกับการค้นหา
                  </p>
                  <p className="max-w-md text-sm">
                    ลองปรับเงื่อนไขการค้นหาใหม่ หรือกดปุ่ม "เคลียร์" เพื่อดูบทความทั้งหมดอีกครั้ง
                  </p>
                </div>
              ) : (
                filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="flex flex-col gap-4 py-6 md:flex-row md:items-start"
                  >
                    <div className="w-full overflow-hidden rounded-2xl bg-slate-100 md:w-60 md:flex-shrink-0">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-3">
                      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                        <span className="rounded-full bg-slate-100 px-3 py-1 tracking-[0.4em] text-slate-600">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-slate-400">
                          <span className="text-slate-300">•</span> {formatThaiDate(post.publishedAt)}
                        </span>
                        <span className="flex items-center gap-1 text-slate-400">
                          <span className="text-slate-300">•</span> {post.readTime} นาที
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 md:text-2xl">
                        {post.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                          ✍️ {post.author}
                        </span>
                        {post.tags.map((tag) => (
                          <span key={tag} className="rounded-full bg-indigo-50 px-3 py-1 text-indigo-500">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-3 pt-2 text-sm font-semibold text-blue-600">
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 transition hover:text-blue-800"
                        >
                          อ่านบทความ
                          <span aria-hidden>↗</span>
                        </a>
                        <button
                          type="button"
                          className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 transition hover:text-slate-600"
                        >
                          บันทึกไว้ภายหลัง
                        </button>
                      </div>
                    </div>
                  </article>
                ))
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
