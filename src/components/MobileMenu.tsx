import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const location = useLocation();
  const [canClose, setCanClose] = useState(false);
  const previousPathRef = useRef(location.pathname);

  // Fermer le menu lors du changement de route
  useEffect(() => {
    if (location.pathname !== previousPathRef.current) {
      onClose();
      previousPathRef.current = location.pathname;
    }
  }, [location.pathname, onClose]);

  // Empêcher le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Petit délai avant de pouvoir fermer le menu via le backdrop
      setCanClose(false);
      const timer = setTimeout(() => setCanClose(true), 100);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  // Fermer avec la touche Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleBackdropClick = () => {
    if (canClose) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
        onClick={handleBackdropClick}
        aria-hidden="true"
      />

      {/* Menu slide-in */}
      <div
        className="fixed top-0 right-0 h-full w-[280px] glass-card border-l border-game-border z-50 md:hidden transform transition-transform duration-300 ease-in-out"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation mobile"
      >
        {/* Header avec bouton fermer */}
        <div className="flex justify-between items-center p-4 border-b border-game-border">
          <span className="text-game-gold font-bold text-lg">Menu</span>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-game-gold/10 transition-colors"
            aria-label="Fermer le menu"
          >
            <svg
              className="w-6 h-6 text-game-text"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-col p-4">
          <Link
            to="/loto-prison"
            className={`py-4 px-4 rounded-lg font-medium transition-colors border-b border-game-border/30 ${
              location.pathname === "/loto-prison"
                ? "text-game-gold bg-game-gold/10"
                : "text-game-text hover:text-game-gold hover:bg-game-gold/5"
            }`}
          >
            Jouez
          </Link>
          <Link
            to="/comment-jouer"
            className={`py-4 px-4 rounded-lg font-medium transition-colors border-b border-game-border/30 ${
              location.pathname === "/comment-jouer"
                ? "text-game-gold bg-game-gold/10"
                : "text-game-text hover:text-game-gold hover:bg-game-gold/5"
            }`}
          >
            Comment participer ?
          </Link>
          <Link
            to="/affaire"
            className={`py-4 px-4 rounded-lg font-medium transition-colors border-b border-game-border/30 ${
              location.pathname === "/affaire"
                ? "text-game-gold bg-game-gold/10"
                : "text-game-text hover:text-game-gold hover:bg-game-gold/5"
            }`}
          >
            L'affaire
          </Link>
          <Link
            to="/alex-jordanov"
            className={`py-4 px-4 rounded-lg font-medium transition-colors ${
              location.pathname === "/alex-jordanov"
                ? "text-game-gold bg-game-gold/10"
                : "text-game-text hover:text-game-gold hover:bg-game-gold/5"
            }`}
          >
            Alex Jordanov
          </Link>
        </nav>
      </div>
    </>
  );
}
