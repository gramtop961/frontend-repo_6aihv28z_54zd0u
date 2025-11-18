export default function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-tr from-purple-600/20 via-blue-600/20 to-orange-400/20 p-8 sm:p-12">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 blur-3xl opacity-40" />
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Ready to automate the boring stuff?</h2>
          <p className="mt-3 text-slate-200 max-w-2xl">Tell us your goals and we’ll design an automation that pays for itself. Limited build slots each month.</p>
          <form className="mt-8 grid gap-4 sm:grid-cols-3">
            <input required placeholder="Work email" type="email" className="sm:col-span-1 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" />
            <input required placeholder="Company website" className="sm:col-span-1 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" />
            <button type="submit" className="sm:col-span-1 rounded-xl bg-white text-slate-900 px-4 py-3 font-medium hover:bg-slate-100 transition">Get a proposal →</button>
          </form>
          <p className="mt-3 text-xs text-slate-400">By submitting you agree to our terms and privacy policy.</p>
        </div>
      </div>
    </section>
  )
}
