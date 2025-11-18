import { CheckCircle2 } from 'lucide-react'

const steps = [
  { title: 'Discovery', desc: 'We audit your workflows, tools, and data to pinpoint high-impact automation wins.' },
  { title: 'Design', desc: 'Define agent roles, guardrails, integrations, and KPIs with a clear success plan.' },
  { title: 'Build', desc: 'We implement, test, and integrate with your stack using best-in-class tooling.' },
  { title: 'Deploy', desc: 'Ship to production with monitoring, alerts, and human-in-the-loop when needed.' },
  { title: 'Optimize', desc: 'We iterate with analytics, evals, and A/B tests to compound ROI month over month.' },
]

export default function Process() {
  return (
    <section id="process" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">How we work</h2>
          <p className="mt-3 text-slate-300 max-w-2xl">A simple, effective path from idea to measurable impact.</p>
        </div>

        <ol className="relative border-l border-white/10 pl-6 space-y-8">
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <span className="absolute -left-[11px] top-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-slate-900">
                <CheckCircle2 className="h-3.5 w-3.5" />
              </span>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm text-slate-400">Step {i + 1}</div>
                <h3 className="mt-1 text-white font-semibold">{s.title}</h3>
                <p className="mt-2 text-slate-300 text-sm">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
