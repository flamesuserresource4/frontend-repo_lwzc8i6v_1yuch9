import { Check, Zap } from 'lucide-react';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    description: 'Start organizing your subscriptions in minutes.',
    features: ['Up to 10 subscriptions', 'Basic insights', 'Email reminders'],
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$6/mo',
    description: 'For power users who want automation and deeper insights.',
    features: [
      'Unlimited subscriptions',
      'Advanced analytics',
      'Bank sync & smart detection',
      'Cancel assistance',
      'Priority support',
    ],
    highlight: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Fair pricing for real value</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Start free. Upgrade when you need more power. Cancel anytime.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-6 bg-white ${
                tier.highlight ? 'border-indigo-500 shadow-lg shadow-indigo-500/10' : 'border-slate-200'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-indigo-600 text-white px-3 py-1 text-xs font-medium shadow">
                  <Zap size={14} /> Most popular
                </div>
              )}

              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{tier.description}</p>
                </div>
                <div className="text-3xl font-bold text-slate-900">{tier.price}</div>
              </div>

              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="h-5 w-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                      <Check size={16} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                  tier.highlight
                    ? 'bg-slate-900 text-white hover:bg-slate-800'
                    : 'bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50'
                }`}
              >
                {tier.highlight ? 'Start Pro' : 'Get started'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
