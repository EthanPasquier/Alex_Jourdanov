import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2 } from 'lucide-react';

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  
  return (
    <div
      className="min-h-screen text-white"
      style={{
        background:
          "radial-gradient(ellipse at top, #2d0036 0%, #0a0a23 100%)",
      }}
    >
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2"
            style={{
              textShadow: "0 0 8px #ff0059, 0 0 16px #a259ff",
            }}
          >
            <Building2 className="w-8 h-8 text-neon-pink drop-shadow-[0_2px_8px_rgba(255,0,120,0.7)]" />
            <span className="text-2xl font-extrabold text-neon-pink tracking-widest">
              LOTO PRISON
            </span>
          </Link>
          <div className="flex gap-4">
            <Link
              to="/loto-prison"
              className={`hover:text-neon-pink transition font-bold ${
                location.pathname === "/loto-prison" ? "text-neon-pink" : ""
              }`}
              style={{
                textShadow: "0 0 8px #ff00b4, 0 0 16px #a259ff",
              }}
            >
              Loto Prison
            </Link>
            <Link
              to="/comment-jouer"
              className={`hover:text-neon-yellow transition ${
                location.pathname === "/comment-jouer" ? "text-neon-yellow" : ""
              }`}
            >
              Comment jouer ?
            </Link>
            <Link
              to="/affaire"
              className={`hover:text-neon-yellow transition ${
                location.pathname === "/affaire" ? "text-neon-yellow" : ""
              }`}
            >
              L'affaire
            </Link>
            <Link
              to="/alex-jordanov"
              className={`hover:text-neon-yellow transition ${
                location.pathname === "/alex-jordanov" ? "text-neon-yellow" : ""
              }`}
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
      <footer className="container mx-auto px-4 py-8 mt-16 border-t border-neon-pink">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-neon-blue text-center md:text-left drop-shadow-[0_2px_8px_rgba(0,234,255,0.7)]">
            © 2025 Loto Prison - Une initiative satirique pour la liberté de la presse
          </div>
          <div className="flex gap-4 text-sm">
            <Link
              to="/mentions-legales"
              className="text-neon-purple hover:text-neon-yellow transition"
            >
              Mentions légales
            </Link>
            <Link
              to="/protection-donnees"
              className="text-neon-purple hover:text-neon-yellow transition"
            >
              Protection des données
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
