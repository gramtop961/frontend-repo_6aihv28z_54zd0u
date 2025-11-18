import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400" />
              AI Agents • Automations • Voice • Integrations
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
              Automate your business with intelligent AI agents
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-2xl">
              We design, deploy, and maintain production-grade AI automations that answer calls, handle support, generate leads, and connect with your tools. Faster ops, happier customers.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-6 py-3 font-medium shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition">
                Book a strategy call
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white px-6 py-3 font-medium hover:bg-white/10 transition">
                Explore services
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-300/80">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 border border-white/20" />
                ))}
              </div>
              <p>Trusted by modern teams shipping with AI</p>
            </div>
          </div>
          <div className="lg:col-span-5" />
        </div>
      </div>
    </section>
  )
}
