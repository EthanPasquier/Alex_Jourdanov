import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Hash, Quote } from 'lucide-react';

export function Case() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">LOTO PRISON — Un jeu absurde pour un procès politique</h1>

      <div className="text-slate-300 mb-16">
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
      <div className="bg-slate-800/50 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-bold mb-6">Il encourt jusqu'à 7 ans de prison, poursuivi pour :</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
          <li>divulgation de secrets de la défense nationale,</li>
          <li>recel de violation du secret professionnel,</li>
          <li>recel de violation du secret de l'instruction,</li>
          <li>et surtout, révélation d'informations permettant d'identifier une source.</li>
        </ul>
        <p className="mt-6 text-slate-300">
          Les accusations s'appuient sur des rapprochements flous entre le contenu du livre, des témoignages, 
          des messages cryptés et un carnet découvert "par hasard". Un procès au goût amer, qui criminalise 
          le journalisme indépendant.
        </p>
      </div>

      {/* Key Points */}
      <div className="grid gap-8 mb-16">
        <div className="bg-slate-800/50 p-6 rounded-lg">
          <div className="flex items-center gap-4 mb-4">
            <BookOpen className="w-8 h-8 text-yellow-400" />
            <h2 className="text-2xl font-bold">Qui est Alex Jordanov ?</h2>
          </div>
          <p className="text-slate-300">
            Franco-bulgare, ancien grand reporter, Alex Jordanov enquête depuis plus de trente ans sur les zones grises : 
            services de renseignement, conflits armés, milieux clandestins.
          </p>
          <p className="text-slate-300 mt-4">
            Il a sillonné les terrains sensibles — Balkans, Moyen-Orient, Afrique de l'Ouest — et produit des documentaires 
            diffusés sur les plus grandes chaînes européennes. Son travail, salué pour sa rigueur, repose sur une méthode 
            exigeante : croiser les sources, vérifier les faits, confronter les témoignages.
          </p>
          <p className="text-slate-300 mt-4">
            Les guerres de l'ombre de la DGSI, paru en 2019, est une enquête d'intérêt public. C'est ce livre — précis, 
            documenté, dérangeant — qui lui vaut aujourd'hui un procès.
          </p>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-lg">
          <div className="flex items-center gap-4 mb-4">
            <Hash className="w-8 h-8 text-yellow-400" />
            <h2 className="text-2xl font-bold">Pourquoi ce geste ?</h2>
          </div>
          <ul className="text-slate-300 list-disc list-inside space-y-2">
            <li>Parce que ce procès est une farce tragique.</li>
            <li>Parce qu'il est temps de désamorcer l'intimidation par la dérision.</li>
            <li>Parce que derrière l'humour noir, il y a une solidarité bien réelle.</li>
            <li>Parce qu'Alex, comme d'autres journalistes, paie le prix fort pour avoir dit ce qu'on préfère taire.</li>
          </ul>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-lg">
          <div className="flex items-center gap-4 mb-4">
            <Quote className="w-8 h-8 text-yellow-400" />
            <h2 className="text-2xl font-bold">Le jeu</h2>
          </div>
          <p className="text-slate-300 mb-4">
            Puisque la justice semble vouloir faire un exemple dans une affaire éminemment politique, nous répondons 
            par ce qu'il reste quand la logique s'effondre : le hasard.
          </p>
          <p className="text-slate-300">
            Ce n'est plus une décision judiciaire. C'est une roulette politique.
            Alors autant en faire un jeu.
          </p>
        </div>
      </div>

      <div className="text-center">
        <Link 
          to="/alex-jordanov"
          className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 hover:text-slate-900 transition inline-block"
        >
          En savoir plus sur Alex Jordanov
        </Link>
      </div>
    </div>
  );
}
