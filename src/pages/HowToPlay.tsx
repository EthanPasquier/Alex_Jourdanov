import React from 'react';
import { Link } from 'react-router-dom';

export function HowToPlay() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-display font-bold mb-8 text-center text-game-gold">
        Comment participer ?
      </h1>

      <div className="text-game-text mb-12">
        <p className="text-xl mb-6">
          Vous contribuez à la défense d'Alex (et donc à la liberté de la presse) avec le montant de votre choix (minimum suggéré : 10€). 
          En échange, vous remplissez votre bulletin de pronostic :
        </p>
        <p className="text-xl font-bold mb-4 text-game-gold-light italic">
          Quelle sera la peine finale infligée à Alex Jordanov  ?
        </p>
      </div>

      {/* Présentation de l'affaire */}
      <div className="bg-game-card rounded-xl p-8 mb-16 border border-game-red-light border-2">
        <h2 className="text-2xl font-bold mb-6 text-center text-game-red-light">L'Affaire Alex Jordanov </h2>

        <div className="grid gap-6">
          <div className="bg-game-bg-light rounded-lg p-6 border border-game-border">
            <h3 className="text-lg font-bold text-game-gold mb-4">Pourquoi est-il poursuivi ?</h3>
            <div className="text-game-text space-y-3">
              <p><strong>Fondement légal :</strong> Articles 413-10 et suivants du Code pénal</p>
              <p><strong>Chef d'accusation :</strong> Accès, détention et divulgation non autorisée d'informations classifiées contenues dans son livre <em>"Les guerres de l'ombre de la DGSI"</em></p>
              <p><strong>Informations concernées :</strong> méthodes de recrutement, notes de contact, fichiers confidentiels, photos d'opérations, techniques internes</p>
            </div>
          </div>

          <div className="bg-game-bg-light rounded-lg p-6 border border-game-border">
            <h3 className="text-lg font-bold text-game-red-light mb-4">Peines encourues</h3>
            <div className="text-game-text space-y-2">
              <p className="text-xl font-bold">Jusqu'à <span className="text-game-red-light">7 ans de prison et 100 000 euros d'amende</span> et <span className="text-game-red-light">100 000 € d'amende</span></p>
              <p><strong>Circonstances aggravantes :</strong> les sources seraient issues de fonctionnaires soumis au secret</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-game-bg-light rounded-lg p-6 border border-game-border">
              <h3 className="text-lg font-bold text-game-gold mb-4">Défense</h3>
              <ul className="text-game-text list-disc list-inside space-y-2">
                <li>Journaliste d'investigation</li>
                <li>Liberté d'informer</li>
                <li>Intérêt public</li>
                <li>Pas d'intention de nuire</li>
              </ul>
            </div>

            <div className="bg-game-bg-light rounded-lg p-6 border border-game-border">
              <h3 className="text-lg font-bold text-game-red-light mb-4">Enjeux</h3>
              <p className="text-game-text font-semibold">
                Procès d'intimidation contre un journaliste
              </p>
              <p className="text-game-text-muted mt-2 italic">
                Une attaque directe contre la liberté de la presse
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Steps */}
      <div className="grid gap-8 mb-16">
        <div className="bg-game-card p-8 rounded-lg border border-game-border">
          <h2 className="text-2xl font-bold text-game-gold mb-6">Faites votre choix</h2>
          <p className="text-game-text mb-4">
            Choisissez parmi les peines absurdes proposées par la République Spectacle™ : Amende bien sale ? Grosse tarte dans la gueule ? Prison à vie ? Fessée publique par Gérald D. ? Exil en Russie ? Stage chez Hanouna ? À vous de composer la combinaison la plus absurde !
          </p>
          <p className="text-game-text-muted italic">
            Ce n'est plus une décision judiciaire. C'est une roulette politique.
            Alors autant en faire un jeu.
          </p>
        </div>

        <div className="bg-game-card p-8 rounded-lg border border-game-border">
          <h2 className="text-2xl font-bold text-game-gold mb-6">Le Prix Loto Prison</h2>
          <p className="text-game-text mb-4">
            Celui ou celle qui aura deviné la peine exacte remportera :
          </p>
          <ul className="text-game-text space-y-2 list-disc list-inside">
            <li>Un trophée honteux remis avec dignité</li>
            <li>Un dîner avec Alex (libre, espérons-le) et ses amis VIP et Rappeurs</li>
            <li>Et surtout, l'honneur d'avoir compris l'absurde mieux que quiconque</li>
          </ul>
        </div>
      </div>

      <div className="bg-game-card rounded-xl p-8 mb-16 border border-game-border">
        <h2 className="text-2xl font-bold mb-6 text-center text-game-gold">Faites vos jeux. Rien ne va plus.</h2>
        <div className="text-center">
          <p className="text-game-text mb-4">
            Participez maintenant pour soutenir la défense d'Alex et tenter de remporter le Prix Loto Prison 2025.
          </p>
          <p className="text-game-text-muted italic">
            Parce que quand la justice devient une loterie, autant jouer pour la bonne cause.
          </p>
        </div>
      </div>

      <div className="text-center">
        <Link 
          to="/loto-prison"
          className="game-button bg-game-gold text-game-bg px-8 py-3 rounded-lg font-bold hover:bg-game-gold-light transition-all inline-flex items-center gap-2"
        >
          Faire mon pronostic
        </Link>
      </div>
    </div>
  );
}
