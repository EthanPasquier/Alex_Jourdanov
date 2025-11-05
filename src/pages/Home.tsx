import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Home() {
  const [daysUntilTrial, setDaysUntilTrial] = useState<number>(0);

  useEffect(() => {
    const calculateDaysUntilTrial = () => {
      const trialDate = new Date('2026-03-01T00:00:00');
      const today = new Date();
      const diffTime = trialDate.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysUntilTrial(diffDays > 0 ? diffDays : 0);
    };

    calculateDaysUntilTrial();
    // Mettre à jour chaque jour
    const interval = setInterval(calculateDaysUntilTrial, 1000 * 60 * 60 * 24);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      {/* Section héro avec image de fond */}
      <div className="hero-bg py-16 mb-16">
        <div className="hero-content">
          <h1 className="text-5xl font-display font-bold mb-6 text-game-gold">
            LOTO PRISON
          </h1>
          <p className="text-2xl mb-6 text-game-text-muted font-medium">
            Un jeu absurde pour un procès politique.
          </p>
          <div className="max-w-2xl mx-auto mb-8 text-game-text">
            <p className="mb-4 text-lg">
              Alex Jordanov, journaliste d'investigation, passe en procès. Son crime ? Avoir fait son métier.
            </p>
            <p className="mb-4 text-lg">
              Puisque la justice semble vouloir faire un exemple, sans base solide, nous avons décidé de répondre par le hasard.
            </p>
            <p className="text-xl text-game-gold-light italic font-medium">
              Ce n'est plus un verdict judiciaire. C'est une roulette politique. Alors autant en faire un jeu : bienvenue dans le LOTO PRISON.
            </p>
          </div>
          
          <div className="flex justify-center gap-6 mb-12">
            <Link 
              to="/loto-prison"
              className="game-button bg-game-gold text-game-bg px-8 py-3 rounded-lg font-bold hover:bg-game-gold-light transition-all"
            >
              JOUER MAINTENANT
            </Link>
            <Link 
              to="/affaire"
              className="game-button border-2 border-game-gold text-game-gold px-8 py-3 rounded-lg font-bold hover:bg-game-gold hover:text-game-bg transition-all"
            >
              COMPRENDRE L'AFFAIRE
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
        <div className="game-card bg-game-card p-8 rounded-lg border border-game-border">
          <div className="text-3xl font-bold mb-2 text-game-gold">0</div>
          <div className="text-game-text-muted font-medium">Participants</div>
        </div>
        <div className="game-card bg-game-card p-8 rounded-lg border border-game-border">
          <div className="text-3xl font-bold mb-2 text-game-gold">0€</div>
          <div className="text-game-text-muted font-medium">Somme récoltée</div>
        </div>
        <div className="game-card bg-game-card p-8 rounded-lg border border-game-border">
          <div className="text-3xl font-bold mb-2 text-game-red-light">{daysUntilTrial}</div>
          <div className="text-game-text-muted font-medium">Jours avant le procès</div>
        </div>
      </div>

      {/* Encart Prix Absurde */}
      <div className="bg-game-card rounded-xl p-8 max-w-4xl mx-auto border border-game-border">
        <h2 className="text-2xl font-display font-bold mb-6 text-game-gold">
          Le Prix Loto Prison 2025
        </h2>
        <p className="text-lg text-game-text mb-6">
          Un trophée honteux remis dans la dignité, un dîner avec Alex (libre, espérons-le), et l'honneur d'avoir compris l'absurde mieux que quiconque.
        </p>
        <div className="flex justify-center">
          <Link 
            to="/prix"
            className="text-game-gold hover:text-game-gold-light transition-colors font-medium"
          >
            En savoir plus sur les prix →
          </Link>
        </div>
      </div>
    </div>
  );
}
