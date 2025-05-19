import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Utensils, Award, Calendar, ArrowRight } from 'lucide-react';

export function Prize() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-12">
        <Trophy className="w-16 h-16 text-neon-yellow mx-auto mb-6 neon-flicker" />
        <h1 className="text-4xl font-extrabold mb-4 neon-flicker text-neon-pink">Prix Loto Prison 2025</h1>
        <p className="text-xl text-neon-blue neon-fade">
          Devinez la peine exacte et remportez le prix de l'absurde
        </p>
      </div>

      <div className="bg-[#2d0036]/80 p-8 rounded-lg mb-16 max-w-2xl mx-auto neon-glow slot-anim">
        <h2 className="text-2xl font-bold mb-6 text-neon-pink neon-fade">Le gagnant remportera :</h2>
        <div className="grid gap-6">
          <div className="flex items-center gap-4">
            <Award className="w-8 h-8 text-neon-yellow flex-shrink-0 neon-flicker" />
            <div className="text-left">
              <h3 className="font-bold mb-1 text-neon-pink neon-fade">Un trophée honteux</h3>
              <p className="text-neon-blue">Remis avec toute la dignité que mérite cette farce judiciaire</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Utensils className="w-8 h-8 text-neon-yellow flex-shrink-0 neon-flicker" />
            <div className="text-left">
              <h3 className="font-bold mb-1 text-neon-pink neon-fade">Un dîner avec Alex</h3>
              <p className="text-neon-blue">Une soirée unique avec le journaliste (libre, espérons-le)</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Trophy className="w-8 h-8 text-neon-yellow flex-shrink-0 neon-flicker" />
            <div className="text-left">
              <h3 className="font-bold mb-1 text-neon-pink neon-fade">L'honneur ultime</h3>
              <p className="text-neon-blue">Avoir compris l'absurde mieux que quiconque</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1a0022]/80 rounded-xl p-8 mb-12 neon-glow slot-anim">
        <h2 className="text-2xl font-bold mb-4 text-neon-pink neon-fade">Comment gagner ?</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-neon-blue mb-6">
            Contribuez à la défense d'Alex avec 10€ ou 20€ et pronostiquez sa peine :
            Relaxe ? Amende (grosse tarte) ? Prison avec sursis ? Prison ferme ? Prison à vie ? Fessée publique ? Exilé ? Déchéance de nationalité ? Bracelet électronique (de marque) ? Interdiction d'exercer ? Composez la combinaison la plus absurde !
          </p>
          <p className="text-neon-blue italic neon-fade">
            Quand la justice devient une loterie, autant jouer pour la bonne cause.
          </p>
        </div>
      </div>

      <Link 
        to="/participer" 
        className="inline-flex items-center gap-2 bg-neon-yellow text-casino-bg px-8 py-3 rounded-full font-bold hover:bg-neon-pink hover:text-white neon-glow neon-fade transition"
      >
        Je participe
        <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  );
}
