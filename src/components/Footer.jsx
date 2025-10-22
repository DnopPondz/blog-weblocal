export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 text-gray-600 md:flex-row md:justify-between">
        <div className="flex items-center gap-2 text-2xl font-semibold text-blue-600">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-blue-200 text-lg uppercase tracking-widest">BB</span>
          <span>Bog Blog</span>
        </div>
        <p className="text-center text-sm text-gray-500 md:text-base">
          © 2026 Bog Blog. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-gray-400">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-sm font-medium uppercase hover:border-blue-300 hover:text-blue-500">Fb</span>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-sm font-medium uppercase hover:border-blue-300 hover:text-blue-500">Tw</span>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-sm font-medium uppercase hover:border-blue-300 hover:text-blue-500">In</span>
          <span className="text-2xl text-gray-300">|</span>
        </div>
      </div>
    </footer>
  );
}
