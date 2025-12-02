import React from 'react';

export function ProtectionDonnees() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-6 sm:mb-8 text-center text-game-gold">
        Protection des Données
      </h1>

      <div className="space-y-6 sm:space-y-8">
        {/* Collecte des données */}
        <div className="bg-game-card p-4 sm:p-6 md:p-8 rounded-lg border border-game-border">
          <h2 className="text-2xl font-bold mb-6 text-game-gold">Collecte et utilisation des données</h2>
          <div className="text-game-text space-y-4">
            <p>
              <strong>Données collectées :</strong> Dans le cadre du Loto Prison, nous collectons uniquement 
              les données strictement nécessaires :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Nom ou pseudonyme (pour identification du participant)</li>
              <li>Adresse email (pour contact en cas de victoire)</li>
              <li>Pronostic sur la peine (objet du jeu)</li>
              <li>Montant de la contribution (libre, minimum 5€)</li>
            </ul>
            <p>
              <strong>Utilisation :</strong> Ces données sont utilisées uniquement pour :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Gérer votre participation au Loto Prison</li>
              <li>Vous contacter en cas de victoire</li>
              <li>Établir des statistiques de participation (de manière anonymisée)</li>
            </ul>
          </div>
        </div>

        {/* RGPD */}
        <div className="bg-game-card p-8 rounded-lg border border-game-border">
          <h2 className="text-2xl font-bold mb-6 text-game-gold">Vos droits RGPD</h2>
          <div className="text-game-text space-y-4">
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Droit d'accès :</strong> Vous pouvez demander l'accès à vos données personnelles</li>
              <li><strong>Droit de rectification :</strong> Vous pouvez demander la correction de vos données</li>
              <li><strong>Droit d'effacement :</strong> Vous pouvez demander la suppression de vos données</li>
              <li><strong>Droit d'opposition :</strong> Vous pouvez vous opposer au traitement de vos données</li>
              <li><strong>Droit à la portabilité :</strong> Vous pouvez demander le transfert de vos données</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à : <strong>contact@lotoprison.org</strong>
            </p>
          </div>
        </div>

        {/* Cookies et tracking */}
        <div className="bg-game-card p-8 rounded-lg border border-game-border">
          <h2 className="text-2xl font-bold mb-6 text-game-gold">Cookies et suivi</h2>
          <div className="text-game-text space-y-4">
            <p>
              <strong>Pas de cookies de tracking commercial :</strong> Ce site n'utilise pas de cookies 
              de suivi à des fins publicitaires ou commerciales.
            </p>
            <p>
              <strong>Cookies techniques uniquement :</strong> Seuls les cookies strictement nécessaires 
              au fonctionnement du site sont utilisés (sessions, préférences d'affichage).
            </p>
            <p>
              <strong>Pas de revente de données :</strong> Vos données personnelles ne sont jamais vendues, 
              louées ou transmises à des tiers à des fins commerciales.
            </p>
          </div>
        </div>

        {/* Conservation des données */}
        <div className="bg-game-card p-8 rounded-lg border border-game-border">
          <h2 className="text-2xl font-bold mb-6 text-game-gold">Conservation et sécurité</h2>
          <div className="text-game-text space-y-4">
            <p>
              <strong>Durée de conservation :</strong> Vos données sont conservées uniquement le temps 
              nécessaire à la finalisation du Loto Prison et aux éventuels contacts post-verdict.
            </p>
            <p>
              <strong>Sécurité :</strong> Nous mettons en œuvre des mesures techniques et organisationnelles 
              appropriées pour protéger vos données contre tout accès non autorisé, altération, divulgation 
              ou destruction.
            </p>
            <p>
              <strong>Transparence totale :</strong> Cette initiative étant satirique et militante, 
              nous nous engageons à une transparence maximale sur l'utilisation des fonds et des données.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-game-card p-8 rounded-lg border border-game-border">
          <h2 className="text-2xl font-bold mb-6 text-game-gold">Contact</h2>
          <div className="text-game-text space-y-4">
            <p>
              Pour toute question concernant la protection de vos données personnelles, 
              n'hésitez pas à nous contacter :
            </p>
            <p>
              <strong>Email :</strong> contact@lotoprison.org
            </p>
            <p>
              <strong>Délai de réponse :</strong> Nous nous engageons à répondre à vos demandes 
              dans un délai maximum de 30 jours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 