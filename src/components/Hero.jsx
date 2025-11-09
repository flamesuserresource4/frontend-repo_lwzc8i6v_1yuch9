import Spline from '@splinetool/react-spline';
import { Rocket, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 min-h-[70vh]">
      {/* 3D background cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-white" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-100/40 backdrop-blur px-3 py-1 text-emerald-900 mb-6">
                <ShieldCheck size={16} />
                <span className="text-xs font-medium">Bank-grade security</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-md leading-tight">
                Take control of every subscription in one beautiful dashboard
              </h1>
              <p className="mt-6 text-lg text-slate-100/90 max-w-2xl">
                Track renewals, avoid surprise charges, and optimize your spending. Subscriptly automatically detects subscriptions from your accounts and keeps you in the know.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow hover:bg-slate-100">
                  Get started free
                </a>
                <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-slate-900/60 text-white ring-1 ring-white/20 px-5 py-3 text-sm font-semibold hover:bg-slate-900/70">
                  Explore features
                </a>
              </div>

              <div className="mt-8 flex items-center gap-6 text-sm text-slate-100/80">
                <div className="flex items-center gap-2">
                  <Rocket size={16} className="text-emerald-300" />
                  <span>Quick setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-300">★</span>
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-300">✓</span>
                  <span>No credit card required</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur shadow-sm overflow-hidden">
                <div className="p-4 border-b border-white/10 bg-white/5">
                  <div className="h-2 w-2 rounded-full bg-rose-400 inline-block mr-1" />
                  <div className="h-2 w-2 rounded-full bg-amber-400 inline-block mr-1" />
                  <div className="h-2 w-2 rounded-full bg-emerald-400 inline-block" />
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {['Netflix', 'Spotify', 'Notion', 'Figma', 'Apple', 'Adobe'].map((name) => (
                      <div key={name} className="rounded-xl border border-white/20 bg-white/10 backdrop-blur p-4 hover:shadow-sm transition-shadow">
                        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 text-white flex items-center justify-center font-bold">
                          {name[0]}
                        </div>
                        <div className="mt-3 font-medium text-white">{name}</div>
                        <div className="text-xs text-slate-100/70">Active • Renews soon</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-xl bg-white/10 backdrop-blur p-4 border border-white/20">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-white">Estimated monthly spend</div>
                      <div className="text-sm font-semibold text-white">$82.49</div>
                    </div>
                    <div className="mt-3 h-2 w-full bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-gradient-to-r from-emerald-400 to-cyan-400" />
                    </div>
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
