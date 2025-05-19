import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Hash, Quote } from 'lucide-react';

export function Case() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-8 text-center neon-flicker text-neon-pink">
        LOTO PRISON — Un jeu absurde pour un procès politique
      </h1>

      <div className="text-neon-blue mb-16 neon-fade">
        <p className="mb-6">
          Alex Jordanov, l'un des journalistes d'investigation les plus respectés de sa génération, passe en procès. 
          Son crime ? Avoir fait son métier. Avoir enquêté. Avoir publié Les guerres de l'ombre de la DGSI, un livre 
          rigoureux et documenté sur les coulisses du renseignement intérieur. Autrement dit : avoir informé.
        </p>
        <p className="mb-6">
          La justice française ne l'accuse pas d'avoir menti. Elle lui reproche d'avoir dit trop de choses.
        </p>
      </div>

      {/* Charges */}
      <div className="bg-[#2d0036]/80 p-8 rounded-lg mb-16 neon-glow slot-anim">
        <h2 className="text-2xl font-bold mb-6 text-neon-pink neon-fade">Il encourt jusqu'à 7 ans de prison, poursuivi pour :</h2>
        <ul className="list-disc list-inside space-y-2 text-neon-yellow">
          <li>divulgation de secrets de la défense nationale,</li>
          <li>recel de violation du secret professionnel,</li>
          <li>recel de violation du secret de l'instruction,</li>
          <li>et surtout, révélation d'informations permettant d'identifier une source.</li>
        </ul>
        <p className="mt-6 text-neon-blue">
          Les accusations s'appuient sur des rapprochements flous entre le contenu du livre, des témoignages, 
          des messages cryptés et un carnet découvert "par hasard". Un procès au goût amer, qui criminalise 
          le journalisme indépendant.
        </p>
      </div>

      {/* Key Points */}
      <div className="grid gap-8 mb-16">
        <div className="bg-[#2d0036]/80 p-6 rounded-lg neon-glow slot-anim">
          <div className="flex items-center gap-4 mb-4">
            <BookOpen className="w-8 h-8 text-neon-yellow neon-flicker" />
            <h2 className="text-2xl font-bold text-neon-pink neon-fade">Qui est Alex Jordanov ?</h2>
          </div>
          <p className="text-neon-blue">
            Franco-bulgare, ancien grand reporter, Alex Jordanov enquête depuis plus de trente ans sur les zones grises : 
            services de renseignement, conflits armés, milieux clandestins.
          </p>
          <p className="text-neon-blue mt-4">
            Il a sillonné les terrains sensibles — Balkans, Moyen-Orient, Afrique de l'Ouest — et produit des documentaires 
            diffusés sur les plus grandes chaînes européennes. Son travail, salué pour sa rigueur, repose sur une méthode 
            exigeante : croiser les sources, vérifier les faits, confronter les témoignages.
          </p>
          <p className="text-neon-blue mt-4">
            Les guerres de l'ombre de la DGSI, paru en 2019, est une enquête d'intérêt public. C'est ce livre — précis, 
            documenté, dérangeant — qui lui vaut aujourd'hui un procès.
          </p>
        </div>

        <div className="bg-[#2d0036]/80 p-6 rounded-lg neon-glow slot-anim">
          <div className="flex items-center gap-4 mb-4">
            <Hash className="w-8 h-8 text-neon-yellow neon-flicker" />
            <h2 className="text-2xl font-bold text-neon-pink neon-fade">Pourquoi ce geste ?</h2>
          </div>
          <ul className="text-neon-yellow list-disc list-inside space-y-2">
            <li>Parce que ce procès est une farce tragique.</li>
            <li>Parce qu'il est temps de désamorcer l'intimidation par la dérision.</li>
            <li>Parce que derrière l'humour noir, il y a une solidarité bien réelle.</li>
            <li>Parce qu'Alex, comme d'autres journalistes, paie le prix fort pour avoir dit ce qu'on préfère taire.</li>
          </ul>
        </div>

        <div className="bg-[#2d0036]/80 p-6 rounded-lg neon-glow slot-anim">
          <div className="flex items-center gap-4 mb-4">
            <Quote className="w-8 h-8 text-neon-yellow neon-flicker" />
            <h2 className="text-2xl font-bold text-neon-pink neon-fade">Le jeu</h2>
          </div>
          <p className="text-neon-blue mb-4">
            Puisque la justice semble vouloir faire un exemple dans une affaire éminemment politique, nous répondons 
            par ce qu'il reste quand la logique s'effondre : le hasard.
          </p>
          <p className="text-neon-blue">
            Ce n'est plus une décision judiciaire. C'est une roulette politique.
            Alors autant en faire un jeu.
          </p>
        </div>
      </div>

      <div className="text-center">
        <Link 
          to="/alex-jordanov"
          className="border-2 border-neon-pink text-neon-pink px-8 py-3 rounded-full font-bold hover:bg-neon-pink hover:text-white neon-glow neon-fade transition inline-block"
        >
          En savoir plus sur Alex Jordanov
        </Link>
      </div>
    </div>
  );
}
