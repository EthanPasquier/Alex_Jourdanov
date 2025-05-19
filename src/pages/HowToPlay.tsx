import React from 'react';
import { Link } from 'react-router-dom';
import { Target, DollarSign, FileText, Award, AlertTriangle } from 'lucide-react';

export function HowToPlay() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-8 text-center neon-flicker text-neon-pink">
        Comment jouer ?
      </h1>

      <div className="text-neon-blue mb-12 neon-fade">
        <p className="text-xl mb-6">
          Vous contribuez à la défense d'Alex (et donc à la liberté de la presse) avec 10 ou 20 euros. 
          En échange, vous remplissez votre bulletin de pronostic :
        </p>
        <p className="text-xl font-bold mb-4 text-neon-yellow neon-flicker">
          Quelle sera la peine finale infligée à Alex Jordanov ?
        </p>
      </div>
      
      {/* Steps */}
      <div className="grid gap-8 mb-16">
        <div className="bg-[#2d0036]/80 p-6 rounded-lg neon-glow slot-anim">
          <div className="flex items-center gap-4 mb-4">
            <Target className="w-8 h-8 text-neon-yellow neon-flicker" />
            <h2 className="text-2xl font-bold text-neon-pink neon-fade">Faites votre choix</h2>
          </div>
          <p className="text-neon-blue">
            Relaxe ? Amende (grosse tarte) ? Prison avec sursis ? Prison ferme ? Prison à vie ? Fessée publique ? Exilé ? Déchéance de nationalité ? Bracelet électronique (de marque) ? Interdiction d'exercer ? À vous de composer la combinaison la plus absurde !
          </p>
          <p className="text-neon-blue mt-4 italic neon-fade">
            Ce n'est plus une décision judiciaire. C'est une roulette politique.
            Alors autant en faire un jeu.
          </p>
        </div>

        <div className="bg-[#2d0036]/80 p-6 rounded-lg neon-glow slot-anim">
          <div className="flex items-center gap-4 mb-4">
            <Award className="w-8 h-8 text-neon-yellow neon-flicker" />
            <h2 className="text-2xl font-bold text-neon-pink neon-fade">Le Prix Loto Prison 2025</h2>
          </div>
          <p className="text-neon-blue mb-4">
            Celui ou celle qui aura deviné la peine exacte remportera :
          </p>
          <ul className="text-neon-yellow space-y-2">
            <li className="neon-fade">🏆 Un trophée honteux remis avec dignité</li>
            <li className="neon-fade">🍽 Un dîner avec Alex (libre, espérons-le)</li>
            <li className="neon-fade">🥇 Et surtout, l'honneur d'avoir compris l'absurde mieux que quiconque</li>
          </ul>
        </div>
      </div>

      <div className="bg-[#1a0022]/80 rounded-xl p-8 mb-16 neon-glow slot-anim">
        <h2 className="text-2xl font-bold mb-6 text-center text-neon-pink neon-fade">Faites vos jeux. Rien ne va plus.</h2>
        <div className="text-center">
          <p className="text-neon-blue mb-4">
            Participez maintenant pour soutenir la défense d'Alex et tenter de remporter le Prix Loto Prison 2025.
          </p>
          <p className="text-neon-blue italic neon-fade">
            Parce que quand la justice devient une loterie, autant jouer pour la bonne cause.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link 
          to="/participer"
          className="bg-neon-yellow text-casino-bg px-8 py-3 rounded-full font-bold hover:bg-neon-pink hover:text-white neon-glow neon-fade inline-flex items-center gap-2 transition"
        >
          <Award className="w-5 h-5" />
          Faire mon pronostic
        </Link>
      </div>
    </div>
  );
}
