import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Utensils, Award, Calendar, ArrowRight } from 'lucide-react';

export function Prize() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-12">
        <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4">Prix Loto Prison 2025</h1>
        <p className="text-xl text-slate-300">
          Devinez la peine exacte et remportez le prix de l'absurde
        </p>
      </div>

      <div className="bg-slate-800/50 p-8 rounded-lg mb-16 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Le gagnant remportera :</h2>
        <div className="grid gap-6">
          <div className="flex items-center gap-4">
            <Award className="w-8 h-8 text-yellow-400 flex-shrink-0" />
            <div className="text-left">
              <h3 className="font-bold mb-1">Un trophée honteux</h3>
              <p className="text-slate-300">Remis avec toute la dignité que mérite cette farce judiciaire</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Utensils className="w-8 h-8 text-yellow-400 flex-shrink-0" />
            <div className="text-left">
              <h3 className="font-bold mb-1">Un dîner avec Alex</h3>
              <p className="text-slate-300">Une soirée unique avec le journaliste (libre, espérons-le)</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Trophy className="w-8 h-8 text-yellow-400 flex-shrink-0" />
            <div className="text-left">
              <h3 className="font-bold mb-1">L'honneur ultime</h3>
              <p className="text-slate-300">Avoir compris l'absurde mieux que quiconque</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800/30 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">Comment gagner ?</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-slate-300 mb-6">
            Contribuez à la défense d'Alex avec 10€ ou 20€ et pronostiquez sa peine :
            Relaxe ? Amende symbolique ? Prison avec sursis ? Ou prison ferme ?
          </p>
          <p className="text-slate-300 italic">
            Quand la justice devient une loterie, autant jouer pour la bonne cause.
          </p>
        </div>
      </div>

      <Link 
        to="/participer" 
        className="inline-flex items-center gap-2 bg-yellow-400 text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition"
      >
        Je participe
        <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  );
}
