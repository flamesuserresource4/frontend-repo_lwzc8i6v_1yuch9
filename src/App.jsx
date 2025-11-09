import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="security" className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="rounded-2xl border border-slate-200 p-6 bg-white">
                <h3 className="text-2xl font-semibold">Privacy and security, by design</h3>
                <p className="mt-3 text-slate-600">We use strong encryption, strict access controls, and undergo regular audits. You stay in control of your data at all times.</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-3"><span className="mt-1 h-5 w-5 rounded-full bg-indigo-600/10 text-indigo-600 flex items-center justify-center">✓</span> Bank-grade encryption (AES-256 at rest, TLS in transit)</li>
                  <li className="flex items-start gap-3"><span className="mt-1 h-5 w-5 rounded-full bg-indigo-600/10 text-indigo-600 flex items-center justify-center">✓</span> 2FA and passkeys supported</li>
                  <li className="flex items-start gap-3"><span className="mt-1 h-5 w-5 rounded-full bg-indigo-600/10 text-indigo-600 flex items-center justify-center">✓</span> No data selling, ever</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6 bg-gradient-to-br from-indigo-50 to-fuchsia-50">
                <div className="text-sm text-slate-600">Live preview</div>
                <div className="mt-2 grid grid-cols-2 gap-4">
                  {['Upcoming renewals', 'Price changes', 'Spending by category', 'Cancellations'].map((item) => (
                    <div key={item} className="rounded-xl border border-slate-200 bg-white p-4">
                      <div className="text-xs text-slate-500">Widget</div>
                      <div className="mt-1 font-medium text-slate-900">{item}</div>
                      <div className="mt-2 h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full w-1/2 bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
