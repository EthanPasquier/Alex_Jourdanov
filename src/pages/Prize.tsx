import React from 'react';
import { Link } from 'react-router-dom';

export function Prize() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-12">
        <h1 className="text-4xl font-display font-bold mb-4 text-game-gold">Prix Loto Prison 2025</h1>
        <p className="text-xl text-game-text-muted">
          Devinez la peine exacte et remportez le prix de l'absurde
        </p>
      </div>

      <div className="bg-game-card p-8 rounded-lg mb-16 max-w-2xl mx-auto border border-game-border">
        <h2 className="text-2xl font-bold mb-6 text-game-gold">Le gagnant remportera :</h2>
        <div className="grid gap-6">
          <div className="flex items-center gap-4">
            <div className="text-left">
              <h3 className="font-bold mb-1 text-game-text">🏆 Un trophée honteux</h3>
              <p className="text-game-text-muted">Remis avec toute la dignité que mérite cette farce judiciaire</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-left">
              <h3 className="font-bold mb-1 text-game-text">🍽 Un dîner avec Alex</h3>
              <p className="text-game-text-muted">Une soirée unique avec le journaliste (libre, espérons-le)</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-left">
              <h3 className="font-bold mb-1 text-game-text">🥇 L'honneur ultime</h3>
              <p className="text-game-text-muted">Avoir compris l'absurde mieux que quiconque</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-game-card rounded-xl p-8 mb-12 border border-game-border">
        <h2 className="text-2xl font-bold mb-4 text-game-gold">Comment gagner ?</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-game-text mb-6">
            Contribuez à la défense d'Alex avec le montant de votre choix (minimum suggéré : 10€) et pronostiquez sa peine :
            Amende bien sale ? Grosse tarte dans la gueule ? Prison à vie ? Fessée publique par Gérald D. ? Exil en Russie ? Stage chez Hanouna ? Déradicalisation obligatoire de journalistes ? Composez la combinaison la plus absurde !
          </p>
          <p className="text-game-text-muted italic">
            Quand la justice devient une loterie, autant jouer pour la bonne cause.
          </p>
        </div>
      </div>

      <Link 
        to="/participer" 
        className="game-button bg-game-gold text-game-bg px-8 py-3 rounded-lg font-bold hover:bg-game-gold-light transition-all inline-flex items-center gap-2"
      >
        Je participe →
      </Link>
    </div>
  );
}
