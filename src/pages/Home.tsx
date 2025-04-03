import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Trophy, Info, DollarSign, Users } from 'lucide-react';

export function Home() {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-4">LOTO PRISON</h1>
      <p className="text-2xl mb-4">Un jeu absurde pour un procès politique</p>
      <div className="max-w-2xl mx-auto mb-8 text-slate-300">
        <p className="mb-4">
          Alex Jordanov risque 7 ans de prison pour avoir fait son métier de journaliste.
          Son crime ? Avoir enquêté et publié un livre rigoureux sur les coulisses du renseignement intérieur.
        </p>
        <p className="text-xl text-yellow-400 italic">
          Puisque la justice en fait un jeu politique, nous en faisons une loterie.
        </p>
      </div>
      
      <div className="flex justify-center gap-6 mb-12">
        <Link 
          to="/participer"
          className="bg-yellow-400 text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition"
        >
          JOUER MAINTENANT
        </Link>
        <Link 
          to="/affaire"
          className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 hover:text-slate-900 transition"
        >
          COMPRENDRE L'AFFAIRE
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
        <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur">
          <Users className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
          <div className="text-3xl font-bold mb-2">1,234</div>
          <div className="text-slate-400">Participants</div>
        </div>
        <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur">
          <DollarSign className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
          <div className="text-3xl font-bold mb-2">24,680€</div>
          <div className="text-slate-400">Récoltés</div>
        </div>
        <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur">
          <Scale className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
          <div className="text-3xl font-bold mb-2">14</div>
          <div className="text-slate-400">Jours avant le verdict</div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="mt-24 bg-slate-800/30 rounded-xl p-8 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Trophy className="w-6 h-6 text-yellow-400" />
          <h2 className="text-2xl font-bold">Prix Loto Prison 2025</h2>
        </div>
        <div className="space-y-2 mb-6">
          <p className="text-lg">Le gagnant qui aura deviné la peine exacte remportera :</p>
          <ul className="text-slate-300">
            <li>🏆 Un trophée honteux remis avec dignité</li>
            <li>🍽 Un dîner avec Alex (libre, espérons-le)</li>
            <li>🥇 L'honneur d'avoir compris l'absurde mieux que quiconque</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <Link 
            to="/prix"
            className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition"
          >
            <Info className="w-4 h-4" />
            En savoir plus sur les prix
          </Link>
        </div>
      </div>
    </div>
  );
}
