import React from 'react';
import { Link } from 'react-router-dom';
import { Target, DollarSign, FileText, Award, AlertTriangle } from 'lucide-react';

export function HowToPlay() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Comment jouer ?</h1>

      <div className="text-slate-300 mb-12">
        <p className="text-xl mb-6">
          Vous contribuez à la défense d'Alex (et donc à la liberté de la presse) avec 10 ou 20 euros. 
          En échange, vous remplissez votre bulletin de pronostic :
        </p>
        <p className="text-xl font-bold mb-4">
          Quelle sera la peine finale infligée à Alex Jordanov ?
        </p>
      </div>
      
      {/* Steps */}
      <div className="grid gap-8 mb-16">
        <div className="bg-slate-800/50 p-6 rounded-lg">
          <div className="flex items-center gap-4 mb-4">
            <Target className="w-8 h-8 text-yellow-400" />
            <h2 className="text-2xl font-bold">Faites votre choix</h2>
          </div>
          <p className="text-slate-300">
            Relaxe ? Amende symbolique ? Prison avec sursis ? Interdiction d'exercer ? Ou… prison ferme ?
          </p>
          <p className="text-slate-300 mt-4 italic">
            Ce n'est plus une décision judiciaire. C'est une roulette politique.
            Alors autant en faire un jeu.
          </p>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-lg">
          <div className="flex items-center gap-4 mb-4">
            <Award className="w-8 h-8 text-yellow-400" />
            <h2 className="text-2xl font-bold">Le Prix Loto Prison 2025</h2>
          </div>
          <p className="text-slate-300 mb-4">
            Celui ou celle qui aura deviné la peine exacte remportera :
          </p>
          <ul className="text-slate-300 space-y-2">
            <li>🏆 Un trophée honteux remis avec dignité</li>
            <li>🍽 Un dîner avec Alex (libre, espérons-le)</li>
            <li>🥇 Et surtout, l'honneur d'avoir compris l'absurde mieux que quiconque</li>
          </ul>
        </div>
      </div>

      <div className="bg-slate-800/30 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Faites vos jeux. Rien ne va plus.</h2>
        <div className="text-center">
          <p className="text-slate-300 mb-4">
            Participez maintenant pour soutenir la défense d'Alex et tenter de remporter le Prix Loto Prison 2025.
          </p>
          <p className="text-slate-300 italic">
            Parce que quand la justice devient une loterie, autant jouer pour la bonne cause.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link 
          to="/participer"
          className="bg-yellow-400 text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 inline-flex items-center gap-2"
        >
          <Award className="w-5 h-5" />
          Faire mon pronostic
        </Link>
      </div>
    </div>
  );
}
