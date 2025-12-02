import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MobileMenu } from './MobileMenu';

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen text-game-text font-sans"
      style={{
        background: "linear-gradient(135deg, #0a0b1a 0%, #141526 100%)",
      }}
    >
      {/* Header */}
      <header className="container mx-auto px-3 py-3 sm:px-4 sm:py-4 md:px-4 md:py-6">
        <nav className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center"
          >
            <img
              src="/nouveaulogo.png"
              alt="Loto Prison"
              className="h-20 sm:h-28 md:h-36 lg:h-44 xl:h-52 w-auto object-contain"
            />
          </Link>

          {/* Menu desktop - caché sur mobile */}
          <div className="hidden md:flex gap-6">
            <Link
              to="/loto-prison"
              className={`hover:text-game-gold transition-colors font-medium ${
                location.pathname === "/loto-prison" ? "text-game-gold" : "text-game-text"
              }`}
            >
              Jouez
            </Link>
            <Link
              to="/comment-jouer"
              className={`hover:text-game-gold transition-colors font-medium ${
                location.pathname === "/comment-jouer" ? "text-game-gold" : "text-game-text"
              }`}
            >
              Comment participer ?
            </Link>
            <Link
              to="/affaire"
              className={`hover:text-game-gold transition-colors font-medium ${
                location.pathname === "/affaire" ? "text-game-gold" : "text-game-text"
              }`}
            >
              L'affaire
            </Link>
            <Link
              to="/alex-jordanov"
              className={`hover:text-game-gold transition-colors font-medium ${
                location.pathname === "/alex-jordanov" ? "text-game-gold" : "text-game-text"
              }`}
            >
              Alex Jordanov
            </Link>
          </div>

          {/* Bouton hamburger - visible sur mobile uniquement */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen(true);
            }}
            className="md:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-game-gold/10 transition-colors"
            aria-label="Ouvrir le menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="w-6 h-0.5 bg-game-gold rounded-full"></span>
            <span className="w-6 h-0.5 bg-game-gold rounded-full"></span>
            <span className="w-6 h-0.5 bg-game-gold rounded-full"></span>
          </button>
        </nav>
      </header>

      {/* Menu mobile */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-16 border-t border-game-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <div className="text-sm text-game-text-muted text-center md:text-left">
            © 2026 Loto Prison - Une initiative satirique pour la liberté de la presse
          </div>
          <div className="flex gap-3 sm:gap-4 text-sm">
            <Link
              to="/mentions-legales"
              className="text-game-text-dim hover:text-game-gold transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              to="/protection-donnees"
              className="text-game-text-dim hover:text-game-gold transition-colors"
            >
              Protection des données
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
