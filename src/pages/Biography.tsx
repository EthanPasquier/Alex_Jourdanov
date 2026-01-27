import React from 'react';

export function Biography() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-6 sm:mb-8 text-center text-game-gold">Alex Jordanov</h1>
      <p className="text-base sm:text-lg md:text-xl text-center text-game-text-muted mb-8 sm:mb-12 font-medium">
        Journaliste d'investigation, réalisateur, auteur.
      </p>

      {/* Bio principale */}
      <div className="bg-game-card p-4 sm:p-6 md:p-8 rounded-lg mb-12 sm:mb-16 border border-game-border">
        <div className="text-game-text space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed">
          <p>
            <strong>Né à Sofia (Bulgarie) en 1963</strong>, Alex Jordanov incarne depuis plus de 30 ans une figure libre et engagée du journalisme français. Arrivé en France dans sa jeunesse, il suit un parcours d'excellence (Math Sup, Math Spé, puis UCLA à Los Angeles), avant de bifurquer vers l'image et l'investigation.
          </p>
          <p>
            Il est l'un des moteurs de la culture rap aux côtés d'Ice-T et participe à l'émergence du hip-hop  de la côte ouest américaine.
          </p>
          <p>
            De retour en France, il se forge une réputation dans les zones grises de l'information : services secrets, conflits armés, réseaux d'influence. Il réalise de nombreux documentaires pour Canal+, France Télévisions, Arte, ou encore National Geographic, souvent sur des sujets sensibles, allant des guerres de l'ombre aux mafias et leurs raisonanance sur la politique internationale.
          </p>
          <p>
            En 2019, il publie <em>Les guerres de l'ombre de la DGSI</em>, un livre-enquête documenté et percutant sur le fonctionnement des services de renseignement français. C'est ce travail journalistique, pourtant salué par la presse dans son ensemble, qui lui vaut aujourd'hui un procès.
          </p>
        </div>
      </div>

      {/* Parcours chronologique */}
      <div className="mb-12 sm:mb-16">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-game-gold">Parcours</h2>
        <div className="relative border-l-2 border-game-gold pl-6 md:pl-8 space-y-6 md:space-y-8 ml-2 md:ml-4">
          <div>
            <div className="absolute w-3 h-3 md:w-4 md:h-4 bg-game-gold rounded-full -left-[7px] md:-left-2"></div>
            <h3 className="text-lg md:text-xl font-bold mb-1 sm:mb-2 text-game-text">1963</h3>
            <p className="text-sm md:text-base text-game-text-muted">Naissance à Sofia, Bulgarie</p>
          </div>
          <div>
            <div className="absolute w-3 h-3 md:w-4 md:h-4 bg-game-gold rounded-full -left-[7px] md:-left-2"></div>
            <h3 className="text-lg md:text-xl font-bold mb-1 sm:mb-2 text-game-text">1970 - 1980</h3>
            <p className="text-sm md:text-base text-game-text-muted">Arrivée en France, études supérieures (Math Sup, Math Spé)</p>
          </div>
          <div>
            <div className="absolute w-3 h-3 md:w-4 md:h-4 bg-game-gold rounded-full -left-[7px] md:-left-2"></div>
            <h3 className="text-lg md:text-xl font-bold mb-1 sm:mb-2 text-game-text">UCLA - Los Angeles</h3>
            <p className="text-sm md:text-base text-game-text-muted">Maitrise de mathématiques aux États-Unis, aux origines de la culture hip-hop West Coast avec Ice-T et Dr. Dre</p>
          </div>
          <div>
            <div className="absolute w-3 h-3 md:w-4 md:h-4 bg-game-gold rounded-full -left-[7px] md:-left-2"></div>
            <h3 className="text-lg md:text-xl font-bold mb-1 sm:mb-2 text-game-text">1995-2026</h3>
            <p className="text-sm md:text-base text-game-text-muted">Carrière de journaliste d'investigation et réalisateur de documentaires</p>
          </div>
          <div>
            <div className="absolute w-3 h-3 md:w-4 md:h-4 bg-game-gold rounded-full -left-[7px] md:-left-2"></div>
            <h3 className="text-lg md:text-xl font-bold mb-1 sm:mb-2 text-game-text">2019</h3>
            <p className="text-sm md:text-base text-game-text-muted">Publication de "Les guerres de l'ombre de la DGSI"</p>
          </div>
          <div>
            <div className="absolute w-3 h-3 md:w-4 md:h-4 bg-game-gold rounded-full -left-[7px] md:-left-2"></div>
            <h3 className="text-lg md:text-xl font-bold mb-1 sm:mb-2 text-game-text">2026</h3>
            <p className="text-sm md:text-base text-game-text-muted text-game-red-light font-semibold">Procès pour son travail journalistique</p>
          </div>
        </div>
      </div>

      {/* Domaines d'expertise */}
      <div className="grid gap-6 sm:gap-8 mb-12 sm:mb-16">
        <h2 className="text-xl sm:text-2xl font-bold text-game-gold">Domaines d'expertise</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-game-card p-4 sm:p-6 rounded-lg border border-game-border">
            <h3 className="font-bold mb-1 sm:mb-2 text-game-text text-sm sm:text-base">Services secrets</h3>
            <p className="text-game-text-muted text-xs sm:text-sm">Investigation sur les services de renseignement français et internationaux</p>
          </div>

          <div className="bg-game-card p-4 sm:p-6 rounded-lg border border-game-border">
            <h3 className="font-bold mb-1 sm:mb-2 text-game-text text-sm sm:text-base">Conflits armés</h3>
            <p className="text-game-text-muted text-xs sm:text-sm">Couverture des zones de guerre et conflits internationaux</p>
          </div>

          <div className="bg-game-card p-4 sm:p-6 rounded-lg border border-game-border">
            <h3 className="font-bold mb-1 sm:mb-2 text-game-text text-sm sm:text-base">Réseaux d'influence</h3>
            <p className="text-game-text-muted text-xs sm:text-sm">Enquêtes sur les mafias internationales et réseaux de pouvoir</p>
          </div>

          <div className="bg-game-card p-4 sm:p-6 rounded-lg border border-game-border">
            <h3 className="font-bold mb-1 sm:mb-2 text-game-text text-sm sm:text-base">Documentaires</h3>
            <p className="text-game-text-muted text-xs sm:text-sm">Réalisations pour Canal+, France TV, Arte, National Geographic</p>
          </div>
        </div>
      </div>

      {/* Œuvre phare */}
      <div className="bg-game-card rounded-xl p-6 sm:p-8 mb-12 sm:mb-16 border border-game-border">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-game-gold">L'œuvre qui dérange</h2>
        <div className="text-center mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-game-text mb-3 sm:mb-4">
            "Les guerres de l'ombre de la DGSI" (2019)
          </h3>
          <p className="text-lg text-game-text-muted mb-4">
            Un livre-enquête documenté et percutant sur le fonctionnement des services de renseignement français.
          </p>
          <p className="text-game-text italic">
            Pourtant salué par la presse spécialisée, c'est ce travail journalistique qui lui vaut aujourd'hui un procès.
          </p>
        </div>
        <div className="bg-game-bg-light rounded-lg p-6 border border-game-border">
          <p className="text-game-text-muted text-center italic">
            "Un journaliste qui fait son métier ne devrait pas finir devant un tribunal."
            il beneficie du droit de protection des sources et à le devoir d'informer.
          </p>
        </div>
      </div>

      {/* Réputation et reconnaissance */}
      <div className="bg-game-card rounded-xl p-8 mb-16 border border-game-border">
        <h2 className="text-2xl font-bold mb-6 text-center text-game-gold">Réputation et reconnaissance</h2>
        
        <div className="grid gap-6 mb-8">
          <div className="bg-game-bg-light rounded-lg p-6 border border-game-border">
            <h3 className="text-lg font-bold text-game-gold mb-4">Reconnaissance médiatique</h3>
            <div className="space-y-3">
              <blockquote className="text-game-text italic">
                "Ovni du paysage audiovisuel français"
                <footer className="text-sm text-game-text-muted mt-1">- Vice</footer>
              </blockquote>
              <blockquote className="text-game-text italic">
                "Le plus grand reporter français vivant"
                <footer className="text-sm text-game-text-muted mt-1">- Vice</footer>
                L'homme qui confessait les espions
                <footer className="text-sm text-game-text-muted mt-1">- Le Point</footer>
              </blockquote>
            </div>
          </div>

          <div className="bg-game-bg-light rounded-lg p-6 border border-game-border">
            <h3 className="text-lg font-bold text-game-gold mb-4">Soutiens institutionnels</h3>
            <div className="space-y-3">
              <div className="text-game-text">
                <strong>Reporters sans frontières</strong> dénonce une <em>"intimidation politique"</em>
              </div>
              <div className="text-game-text">
                <strong>Intelligence Online</strong> voit en lui un <em>emblème du journalisme d'investigation</em>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-game-bg-light rounded-lg p-6 border border-game-red-light border-2">
          <div className="text-game-text space-y-4 text-center">
            <p className="text-lg">
              Alex Jordanov n'a jamais revendiqué l'immunité. Mais il revendique le <strong>droit d'informer</strong>, le <strong>devoir de vérité</strong>, et l'<strong>indépendance du métier de journaliste</strong>.
            </p>
            <p className="text-xl font-bold text-game-red-light">
              Son procès est celui d'un homme… mais il pose une question à toute la société :
            </p>
            <p className="text-2xl font-bold text-game-gold italic">
              A-t-on encore le droit d'enquêter sur les puissants ?
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-game-card rounded-xl p-8 border border-game-border">
        <h2 className="text-2xl font-bold mb-6 text-center text-game-gold">Ce qu'en disent ses pairs</h2>
        <div className="grid gap-6">
          <blockquote className="border-l-4 border-game-gold pl-4">
            <p className="italic text-game-text mb-2">
              "Alex Jordanov incarne le journalisme d'investigation à la française : rigoureux, courageux et indépendant."
            </p>
            <footer className="text-sm text-game-text-muted">
              - Collectif de soutien aux journalistes
            </footer>
          </blockquote>
          
          <blockquote className="border-l-4 border-game-gold pl-4">
            <p className="italic text-game-text mb-2">
              "Ses enquêtes sur les services secrets ont ouvert des perspectives inédites sur le fonctionnement de l'État."
            </p>
            <footer className="text-sm text-game-text-muted">
              - Presse spécialisée
            </footer>
          </blockquote>

          <blockquote className="border-l-4 border-game-gold pl-4">
            <p className="italic text-game-text mb-2">
              "Un parcours atypique au service d'un journalisme libre et sans concession."
            </p>
            <footer className="text-sm text-game-text-muted">
              - Confrères journalistes d'investigation
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}