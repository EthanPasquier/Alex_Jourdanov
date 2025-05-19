import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2 } from 'lucide-react';

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Building2 className="w-8 h-8" />
            <span className="text-xl font-bold">LOTO PRISON</span>
          </Link>
          <div className="flex gap-4">
            <Link 
              to="/loto-prison"
              className={`hover:text-pink-400 transition font-bold ${
                location.pathname === '/loto-prison' ? 'text-pink-400' : ''
              }`}
            >
              Loto Prison
            </Link>
            <Link 
              to="/comment-jouer"
              className={`hover:text-yellow-400 transition ${location.pathname === '/comment-jouer' ? 'text-yellow-400' : ''}`}
            >
              Comment jouer ?
            </Link>
            <Link 
              to="/affaire"
              className={`hover:text-yellow-400 transition ${location.pathname === '/affaire' ? 'text-yellow-400' : ''}`}
            >
              L'affaire
            </Link>
            <Link 
              to="/alex-jordanov"
              className={`hover:text-yellow-400 transition ${location.pathname === '/alex-jordanov' ? 'text-yellow-400' : ''}`}
            >
              Alex Jordanov
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-16 border-t border-slate-700">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-400 text-center md:text-left">
            © 2025 Loto Prison - Une initiative satirique pour la liberté de la presse
          </div>
          <div className="flex gap-4 text-sm">
            <Link to="/mentions-legales" className="text-slate-400 hover:text-yellow-400 transition">
              Mentions légales
            </Link>
            <Link to="/protection-donnees" className="text-slate-400 hover:text-yellow-400 transition">
              Protection des données
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
