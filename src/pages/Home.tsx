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
    const interval = setInterval(calculateDaysUntilTrial, 1000 * 60 * 60 * 24);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-gradient-bg min-h-screen">

      {/* Hero Section */}
      <div className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[85vh] flex items-center justify-center px-4 py-8 sm:py-12 md:py-16">
        <div className="max-w-5xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-block glass-card px-4 sm:px-6 py-2 rounded-full mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-semibold text-game-gold uppercase tracking-wider">
              Procès politique • Mars 2026
            </span>
          </div>

          {/* Titre principal */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold mb-4 sm:mb-6 text-game-gold slide-up">
            LOTO PRISON
          </h1>

          {/* Sous-titre */}
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 text-game-text font-medium slide-up">
            Un jeu absurde pour un procès politique
          </p>

          {/* Description */}
          <div className="glass-card rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 mb-8 sm:mb-10 max-w-3xl mx-auto slide-up">
            <p className="text-lg sm:text-xl md:text-2xl text-game-text-muted leading-relaxed mb-4 sm:mb-6">
              Alex Jordanov, journaliste d'investigation, passe en procès. Son crime ?
              <strong className="text-game-gold"> Avoir fait son métier.</strong>
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-game-text-muted leading-relaxed mb-4 sm:mb-6">
              Puisque la justice semble vouloir faire un exemple sans base solide,
              nous avons décidé de répondre par le hasard.
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl text-game-gold italic font-semibold leading-relaxed">
              Ce n'est plus un verdict judiciaire. C'est une roulette politique.
              Alors autant en faire un jeu.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 slide-up">
            <Link
              to="/loto-prison"
              className="glass-button px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg md:px-10 rounded-2xl font-bold text-game-bg hover:text-game-bg transition-all"
            >
              JOUER MAINTENANT
            </Link>
            <Link
              to="/affaire"
              className="glass-card-hover px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg md:px-10 rounded-2xl font-bold text-game-gold border-2 border-game-gold/30 hover:border-game-gold transition-all"
            >
              COMPRENDRE L'AFFAIRE
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="hidden sm:block mt-8 md:mt-12 animate-bounce">
            <div className="w-6 h-10 border-2 border-game-gold/50 rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-game-gold rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">

          <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7 md:p-8 text-center">
            <div className="text-4xl sm:text-5xl font-bold mb-3 text-game-gold">0</div>
            <div className="text-game-text-muted font-medium uppercase tracking-wide text-sm">
              Participants
            </div>
            <p className="text-xs text-game-text-dim mt-2">
              Rejoignez le mouvement
            </p>
          </div>

          <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7 md:p-8 text-center">
            <div className="text-4xl sm:text-5xl font-bold mb-3 text-game-gold">0€</div>
            <div className="text-game-text-muted font-medium uppercase tracking-wide text-sm">
              Somme récoltée
            </div>
            <p className="text-xs text-game-text-dim mt-2">
              Pour la défense d'Alex
            </p>
          </div>

          <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7 md:p-8 text-center border-2 border-game-red-light/30">
            <div className="text-4xl sm:text-5xl font-bold mb-3 text-game-red-light">{daysUntilTrial}</div>
            <div className="text-game-text-muted font-medium uppercase tracking-wide text-sm">
              Jours avant le procès
            </div>
            <p className="text-xs text-game-text-dim mt-2">
              Mars 2026
            </p>
          </div>

        </div>
      </div>

      {/* Comment ça marche */}
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-game-gold mb-3 sm:mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-game-text-muted text-base sm:text-lg">
            Un concept simple pour soutenir un combat important
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">

          <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 glass-card rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 text-3xl sm:text-4xl">
              🎯
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-game-gold mb-3 sm:mb-4">Choisissez vos peines</h3>
            <p className="text-base sm:text-lg text-game-text-muted leading-relaxed">
              Sélectionnez parmi 23 peines, du sérieux à l'absurde, pour prédire
              ce que la justice pourrait décider.
            </p>
          </div>

          <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 glass-card rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 text-3xl sm:text-4xl">
              💰
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-game-gold mb-3 sm:mb-4">Soutenez Alex</h3>
            <p className="text-base sm:text-lg text-game-text-muted leading-relaxed">
              Faites un don du montant de votre choix. 100% des fonds vont à la
              défense juridique d'Alex Jordanov.
            </p>
          </div>

          <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 glass-card rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 text-3xl sm:text-4xl">
              🏆
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-game-gold mb-3 sm:mb-4">Gagnez un prix</h3>
            <p className="text-base sm:text-lg text-game-text-muted leading-relaxed">
              Le participant le plus proche du verdict remporte le Prix Loto Prison
              et un dîner avec Alex.
            </p>
          </div>

        </div>
      </div>

      {/* L'affaire en bref */}
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-game-gold mb-6 sm:mb-8 text-center">
            L'affaire en bref
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">

            {/* Image d'Alex */}
            <div className="order-2 md:order-1">
              <div className="glass-card rounded-2xl p-2 sm:p-3 md:p-4 glass-card-hover">
                <img
                  src="/unnamed.png"
                  alt="Alex Jordanov"
                  className="w-full h-auto rounded-xl object-cover max-h-64 sm:max-h-80 md:max-h-none"
                />
              </div>
            </div>

            {/* Texte */}
            <div className="space-y-4 sm:space-y-6 text-game-text-muted order-1 md:order-2">
              <p className="text-lg sm:text-xl leading-relaxed">
                <strong className="text-game-text">Alex Jordanov</strong> est un journaliste d'investigation
                poursuivi pour avoir révélé des informations d'intérêt public.
              </p>

              <div className="glass-card rounded-2xl p-4 sm:p-6">
                <p className="text-sm sm:text-base font-semibold text-game-gold mb-3 sm:mb-4">Les accusations :</p>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-game-gold">•</span>
                    <span>Appropriation et divulgation de secret défense</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-game-gold">•</span>
                    <span>Recel de violation du secret professionnel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-game-gold">•</span>
                    <span>Recel de violation du secret de l'instruction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-game-gold">•</span>
                    <span>Révélation d'information permettant l'identification d'une source</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg sm:text-xl leading-relaxed">
                Il encourt jusqu'à <strong className="text-game-red-light text-xl sm:text-2xl">7 ans de prison et 100 000 euros d'amende</strong>
                pour avoir exercé son métier de journaliste.
              </p>

              <div className="pt-2 sm:pt-4">
                <Link
                  to="/affaire"
                  className="inline-flex items-center gap-2 text-base sm:text-lg text-game-gold hover:text-game-gold-light transition-colors font-semibold"
                >
                  En savoir plus sur l'affaire
                  <span>→</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Prix Section */}
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border-2 border-game-gold/30 text-center">
          <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🏆</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-game-gold mb-4 sm:mb-6">
            Le Prix Loto Prison 2026
          </h2>
          <p className="text-lg sm:text-xl text-game-text-muted leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto">
            Un trophée honteux remis dans la dignité, un dîner avec Alex (libre, espérons-le),
            et l'honneur d'avoir compris l'absurde mieux que quiconque.
          </p>
          <Link
            to="/prix"
            className="glass-button inline-block px-6 py-3 sm:px-8 rounded-2xl font-bold text-base sm:text-lg text-game-bg hover:text-game-bg transition-all"
          >
            Découvrir les prix
          </Link>
        </div>
      </div>

      {/* CTA Final */}
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 md:py-16 pb-16 sm:pb-24">
        <div className="glass-card rounded-3xl p-8 sm:p-12 md:p-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-game-gold mb-4 sm:mb-6">
            Prêt à participer ?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-game-text-muted mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Faites vos pronostics, soutenez la liberté de la presse, et participez à ce combat absurde contre l'arbitraire.
          </p>
          <Link
            to="/loto-prison"
            className="glass-button inline-block px-8 py-4 sm:px-10 sm:py-5 md:px-12 rounded-2xl font-bold text-lg sm:text-xl text-game-bg hover:text-game-bg transition-all"
          >
            PARTICIPER AU LOTO PRISON
          </Link>
        </div>
      </div>

    </div>
  );
}
