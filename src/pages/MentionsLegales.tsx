import React from 'react';

export function MentionsLegales() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-6 sm:mb-8 text-center text-game-gold">
        Mentions Légales
      </h1>

      <div className="space-y-6 sm:space-y-8">
        {/* Éditeur du site */}
        <div className="bg-game-card p-4 sm:p-6 md:p-8 rounded-lg border border-game-border">
          <h2 className="text-2xl font-bold mb-6 text-game-gold">Éditeur du site</h2>
          <div className="text-game-text space-y-3">
            <p><strong>Nom :</strong> Initiative Loto Prison</p>
            <p><strong>Contact :</strong> contact@lotoprison.org</p>
            <p><strong>Hébergement :</strong> Service d'hébergement web standard</p>
          </div>
        </div>

        {/* Nature du projet */}
        <div className="bg-game-card p-8 rounded-lg border border-game-border">
          <h2 className="text-2xl font-bold mb-6 text-game-gold">Nature du projet</h2>
          <div className="text-game-text space-y-4">
            <p>
              <strong>Important :</strong> Le Loto Prison n'est pas un jeu d'argent au sens légal du terme, 
              ni un tirage au sort commercial.
            </p>
            <p>
              Il s'agit d'une initiative satirique de soutien à la défense juridique d'Alex Jordanov,
              journaliste d'investigation poursuivi en justice.
            </p>
            <p>
              <strong>Utilisation des fonds :</strong> L'intégralité des sommes récoltées est destinée
              exclusivement au financement de la défense juridique d'Alex Jordanov. Aucun profit commercial 
              n'est réalisé par les organisateurs.
            </p>
          </div>
        </div>

        {/* Responsabilité */}
        <div className="bg-game-card p-8 rounded-lg border border-game-border">
          <h2 className="text-2xl font-bold mb-6 text-game-gold">Responsabilité</h2>
          <div className="text-game-text space-y-4">
            <p>
              Les informations présentes sur ce site sont fournies à titre informatif et satirique. 
              Bien que nous nous efforcions de maintenir les informations à jour et exactes, nous ne pouvons 
              garantir l'exactitude, la complétude ou l'actualité de toutes les informations.
            </p>
            <p>
              L'utilisation des informations présentes sur ce site se fait sous votre propre responsabilité.
            </p>
          </div>
        </div>

        {/* Propriété intellectuelle */}
        <div className="bg-game-card p-8 rounded-lg border border-game-border">
          <h2 className="text-2xl font-bold mb-6 text-game-gold">Propriété intellectuelle</h2>
          <div className="text-game-text space-y-4">
            <p>
              Le contenu de ce site, incluant mais ne se limitant pas aux textes, images, graphiques 
              et codes, est protégé par les lois sur la propriété intellectuelle.
            </p>
            <p>
              Toute reproduction, distribution, modification ou utilisation commerciale du contenu 
              sans autorisation écrite préalable est strictement interdite.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 