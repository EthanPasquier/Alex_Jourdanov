import React from 'react';
import { Link } from 'react-router-dom';

export function Case() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-display font-bold mb-8 text-center text-game-gold">
        LOTO PRISON — Un jeu absurde pour un procès politique
      </h1>

      <div className="text-game-text mb-16">
        <p className="mb-6 text-lg">
          Alex Jordanov , l'un des journalistes d'investigation les plus respectés de sa génération, passe en procès. 
          Son crime ? Avoir fait son métier. Avoir enquêté. Avoir publié Les guerres de l'ombre de la DGSI, un livre 
          rigoureux et documenté sur les coulisses du renseignement intérieur. Autrement dit : avoir informé.
        </p>
        <p className="mb-6 text-lg">
          La justice française ne l'accuse pas d'avoir menti. Elle lui reproche d'avoir dit trop de choses.
        </p>
      </div>

      {/* Charges */}
      <div className="bg-game-card p-8 rounded-lg mb-16 border border-game-border">
        <h2 className="text-2xl font-bold mb-6 text-game-red-light">Mis en examen des chefs de :</h2>
        <ul className="list-disc list-inside space-y-3 text-game-text mb-6">
          <li>Appropriation et divulgation de secret défense</li>
          <li>Recel de violation du secret professionnel</li>
          <li>Recel de violation du secret de l'instruction</li>
          <li>Révélation d'information permettant l'identification d'une source</li>
        </ul>
        <p className="text-game-text-muted mb-4">
          Il encourt jusqu'à 7 ans de prison et 100 000 euros d'amende.
        </p>
        <p className="text-game-text-muted">
          Les accusations s'appuient sur des rapprochements flous entre le contenu du livre, des témoignages,
          des messages cryptés et un carnet découvert "par hasard". Un procès au goût amer, qui criminalise
          le journalisme indépendant.
        </p>
      </div>

      {/* Key Points */}
      <div className="grid gap-8 mb-16">
        <div className="bg-game-card p-8 rounded-lg border border-game-border">
          <h2 className="text-2xl font-bold text-game-gold mb-6">Qui est Alex Jordanov  ?</h2>
          <p className="text-game-text mb-4">
            Franco-americano d'origine bulgare, ancien grand reporter, Alex Jordanov  enquête depuis plus de trente ans sur les zones grises : 
            services de renseignement, conflits armés, milieux clandestins.
            Specialiste de politique internationale, il connait par coeur le congrès americain.
          </p>
          <p className="text-game-text mb-4">
            Il a sillonné les terrains sensibles — Balkans, Moyen-Orient, Afrique de l'Ouest — et produit des documentaires 
            diffusés sur les plus grandes chaînes americaines et européennes. Son travail, salué pour sa rigueur, repose sur une méthode 
            exigeante : croiser les sources, vérifier les faits, confronter les témoignages.
          </p>
          <p className="text-game-text">
            Les guerres de l'ombre de la DGSI, paru en 2019, est une enquête d'intérêt public. C'est ce livre — précis, 
            documenté, dérangeant — qui lui vaut aujourd'hui un procès.
          </p>
        </div>

        <div className="bg-game-card p-8 rounded-lg border border-game-border">
          <h2 className="text-2xl font-bold text-game-gold mb-6">Pourquoi ce geste ?</h2>
          <ul className="text-game-text list-disc list-inside space-y-3">
            <li>Parce que ce procès est une farce tragique.</li>
            <li>Parce qu'il est temps de désamorcer l'intimidation par la dérision.</li>
            <li>Parce que derrière l'humour noir, il y a une solidarité bien réelle.</li>
            <li>Parce qu'Alex, comme d'autres journalistes, paie le prix fort pour avoir dit ce qu'on préfère taire.</li>
          </ul>
        </div>

        <div className="bg-game-card p-8 rounded-lg border border-game-border">
          <h2 className="text-2xl font-bold text-game-gold mb-6">Le jeu</h2>
          <p className="text-game-text mb-4">
            Puisque la justice semble vouloir faire un exemple dans une affaire éminemment politique, nous répondons 
            par ce qu'il reste quand la logique s'effondre : le hasard.
          </p>
          <p className="text-game-text">
            Ce n'est plus une décision judiciaire. C'est une roulette politique.
            Alors autant en faire un jeu.
          </p>
        </div>
      </div>

      <div className="text-center">
        <Link 
          to="/alex-jordanov "
          className="game-button border-2 border-game-gold text-game-gold px-8 py-3 rounded-lg font-bold hover:bg-game-gold hover:text-game-bg transition-all inline-block"
        >
          En savoir plus sur Alex Jordanov 
        </Link>
      </div>
    </div>
  );
}
