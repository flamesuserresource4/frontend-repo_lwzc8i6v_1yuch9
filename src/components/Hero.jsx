import { Rocket, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-0">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-indigo-700 mb-6">
              <ShieldCheck size={16} />
              <span className="text-xs font-medium">Bank-grade security</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Take control of every subscription in one beautiful dashboard
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Track renewals, avoid surprise charges, and optimize your spending. Subscriptly automatically detects subscriptions from your accounts and keeps you in the know.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-slate-800">
                Get started free
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 ring-1 ring-slate-200 px-5 py-3 text-sm font-semibold hover:bg-slate-50">
                Explore features
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Rocket size={16} className="text-indigo-500" />
                <span>Quick setup</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-indigo-500">★</span>
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-indigo-500">✓</span>
                <span>No credit card required</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <div className="p-4 border-b border-slate-100 bg-slate-50/50">
                <div className="h-2 w-2 rounded-full bg-rose-400 inline-block mr-1" />
                <div className="h-2 w-2 rounded-full bg-amber-400 inline-block mr-1" />
                <div className="h-2 w-2 rounded-full bg-emerald-400 inline-block" />
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {['Netflix', 'Spotify', 'Notion', 'Figma', 'Apple', 'Adobe'].map((name) => (
                    <div key={name} className="rounded-xl border border-slate-200 p-4 hover:shadow-sm transition-shadow">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white flex items-center justify-center font-bold">
                        {name[0]}
                      </div>
                      <div className="mt-3 font-medium text-slate-900">{name}</div>
                      <div className="text-xs text-slate-500">Active • Renews soon</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl bg-slate-50 p-4 border border-slate-200">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-slate-700">Estimated monthly spend</div>
                    <div className="text-sm font-semibold text-slate-900">$82.49</div>
                  </div>
                  <div className="mt-3 h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
