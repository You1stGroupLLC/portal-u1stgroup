export default function Home() {
  return (
    <main className="space-y-6">
      <section className="rounded-2xl border border-white/10 p-6">
        <h2 className="text-xl font-medium">Welcome</h2>
        <p className="opacity-80">
          This is the initial scaffold. Use the links below to access the first tools.
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li><a className="underline" href="/tools/assessor-permits">Assessor & Permits</a></li>
          <li><a className="underline" href="/tools/renewals">Renewal Assistant</a></li>
        </ul>
      </section>
    </main>
  );
}
