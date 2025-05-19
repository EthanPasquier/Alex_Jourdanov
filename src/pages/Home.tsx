import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Trophy, Info, DollarSign, Users } from 'lucide-react';

export function Home() {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-extrabold mb-4 neon-flicker text-neon-pink">LOTO PRISON</h1>
      <p className="text-2xl mb-4 neon-fade text-neon-purple">Un jeu absurde pour un procès politique</p>
      <div className="max-w-2xl mx-auto mb-8 text-neon-blue neon-fade">
        <p className="mb-4">
          Alex Jordanov risque 7 ans de prison pour avoir fait son métier de journaliste.
          Son crime ? Avoir enquêté et publié un livre rigoureux sur les coulisses du renseignement intérieur.
        </p>
        <p className="text-xl text-neon-yellow italic neon-flicker">
          Puisque la justice en fait un jeu politique, nous en faisons une loterie.
        </p>
      </div>
      
      <div className="flex justify-center gap-6 mb-12">
        <Link 
          to="/participer"
          className="bg-neon-pink text-white px-8 py-3 rounded-full font-bold hover:bg-neon-yellow hover:text-casino-bg transition shadow-lg"
        >
          JOUER MAINTENANT
        </Link>
        <Link 
          to="/affaire"
          className="border-2 border-neon-pink text-white px-8 py-3 rounded-full font-bold hover:bg-neon-pink hover:text-white transition shadow-lg"
        >
          COMPRENDRE L'AFFAIRE
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
        <div className="bg-[#1a0022] p-6 rounded-lg shadow-lg slot-anim">
          <Users className="w-8 h-8 mx-auto mb-2 text-neon-yellow neon-flicker" />
          <div className="text-3xl font-extrabold mb-2 text-white">1,234</div>
          <div className="text-neon-yellow">Participants</div>
        </div>
        <div className="bg-[#1a0022] p-6 rounded-lg shadow-lg slot-anim">
          <DollarSign className="w-8 h-8 mx-auto mb-2 text-neon-yellow neon-flicker" />
          <div className="text-3xl font-extrabold mb-2 text-white">24,680€</div>
          <div className="text-neon-yellow">Récoltés</div>
        </div>
        <div className="bg-[#1a0022] p-6 rounded-lg shadow-lg slot-anim">
          <Scale className="w-8 h-8 mx-auto mb-2 text-neon-yellow neon-flicker" />
          <div className="text-3xl font-extrabold mb-2 text-white">14</div>
          <div className="text-neon-yellow">Jours avant le verdict</div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="mt-24 bg-[#1a0022]/80 rounded-xl p-8 max-w-4xl mx-auto neon-glow slot-anim">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Trophy className="w-6 h-6 text-neon-yellow neon-flicker" />
          <h2 className="text-2xl font-bold neon-fade text-neon-pink">Prix Loto Prison 2025</h2>
        </div>
        <div className="space-y-2 mb-6">
          <p className="text-lg text-neon-blue">Le gagnant qui aura deviné la peine exacte remportera :</p>
          <ul className="text-neon-yellow">
            <li className="neon-fade">🏆 Un trophée honteux remis avec dignité</li>
            <li className="neon-fade">🍽 Un dîner avec Alex (libre, espérons-le)</li>
            <li className="neon-fade">🥇 L'honneur d'avoir compris l'absurde mieux que quiconque</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <Link 
            to="/prix"
            className="flex items-center gap-2 text-neon-pink hover:text-neon-yellow neon-flicker transition"
          >
            <Info className="w-4 h-4" />
            En savoir plus sur les prix
          </Link>
        </div>
      </div>
    </div>
  );
}
