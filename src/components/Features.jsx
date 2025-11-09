import { Bell, BarChart3, Shield, Wand2 } from 'lucide-react';

const features = [
  {
    title: 'Smart detection',
    description: 'Automatically finds recurring charges across your connected accounts and categorizes them for you.',
    icon: Wand2,
  },
  {
    title: 'Spend insights',
    description: 'Understand monthly trends, price increases, and opportunities to save with clear analytics.',
    icon: BarChart3,
  },
  {
    title: 'Renewal alerts',
    description: "Never miss a renewal. Get timely reminders via email or push so you're always in control.",
    icon: Bell,
  },
  {
    title: 'Security first',
    description: 'Your data is encrypted end-to-end. We never sell or share your information.',
    icon: Shield,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Everything you need to stay organized</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">A modern subscription manager with the right mix of automation and control so you can spend smarter.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-slate-200 p-6 hover:shadow-sm transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-indigo-600/10 text-indigo-600 flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
