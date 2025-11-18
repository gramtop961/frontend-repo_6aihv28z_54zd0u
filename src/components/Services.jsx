import { Brain, PhoneCall, Zap, Workflow, MessagesSquare, Bot } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: 'AI Strategy & Roadmapping',
    desc: 'Identify high-ROI automation opportunities and define a pragmatic roadmap aligned to business goals.'
  },
  {
    icon: PhoneCall,
    title: 'Voice & Call Automations',
    desc: 'Deploy natural voice agents that qualify leads, book appointments, and handle support 24/7.'
  },
  {
    icon: MessagesSquare,
    title: 'Support & CX Agents',
    desc: 'Omnichannel agents that resolve tickets, surface answers, and escalate to humans when needed.'
  },
  {
    icon: Workflow,
    title: 'Workflow Orchestration',
    desc: 'Automate processes end‑to‑end with robust integrations to CRMs, helpdesks, calendars, and data.'
  },
  {
    icon: Zap,
    title: 'Custom Tooling & Integrations',
    desc: 'Build secure tools, actions, and connectors tailored to your stack and compliance needs.'
  },
  {
    icon: Bot,
    title: 'Monitoring & MLOps',
    desc: 'Measure impact, track performance, and maintain agents with guardrails, evals, and analytics.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_0%,rgba(168,85,247,0.08),transparent),radial-gradient(600px_300px_at_100%_30%,rgba(59,130,246,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">What we ship</h2>
            <p className="mt-3 text-slate-300 max-w-2xl">From discovery to deployment, we build pragmatic automations that deliver measurable value in weeks, not months.</p>
          </div>
          <a href="#cta" className="hidden sm:inline-flex items-center rounded-xl border border-white/15 bg-white/5 text-white px-4 py-2 font-medium hover:bg-white/10 transition">Get a proposal →</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 text-white shadow-lg">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
