import { Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-600">© {new Date().getFullYear()} Subscriptly. All rights reserved.</div>
          <div className="flex items-center gap-4 text-slate-500">
            <a href="#" className="hover:text-slate-900" aria-label="Twitter">
              <Twitter size={18} />
            </a>
            <a href="#" className="hover:text-slate-900" aria-label="GitHub">
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
