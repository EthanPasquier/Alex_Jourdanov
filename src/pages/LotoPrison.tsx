import React, { useState } from "react";

const PEINES = [
  { label: "Amende pénale (1 000 € – 50 000 €)", value: "amende" },
  { label: "Travail d'intérêt général (TIG)", value: "tig" },
  { label: "Grosse tarte dans la gueule", value: "tarte_gueule" },
  { label: "Peine d'emprisonnement avec sursis", value: "prison_sursis" },
  { label: "Prison ferme (- 10 ans)", value: "prison_ferme" },
  { label: "Prison à vie", value: "prison_vie" },
  { label: "Interdiction d'exercer le journalisme (1 à 5 ans)", value: "interdiction_journalisme" },
  { label: "Fessée publique par Gérald D.", value: "fessee_gerald" },
  { label: "Saisie du matériel professionnel (stylos, dictaphones, disques durs)", value: "saisie_materiel" },
  { label: "Exil en Russie", value: "exil_russie" },
  { label: "Déchéance de « nationalité bulgaro-parisienne »", value: "decheance_bulgaro" },
  { label: "Bracelet électronique (placement sous surveillance)", value: "bracelet" },
  { label: "Rectificatif obligatoire dans Valeurs Actuelles accompagné d'un selfie avec le ministre", value: "rectificatif_va" },
  { label: "Stage chez Hanouna", value: "stage_hanouna" },
  { label: "Livraison de croissants aux anciens directeurs du renseignement", value: "croissants_dgsi" },
  { label: "Internement à l'INA — 40 ans de JT en boucle", value: "ina_jt" },
  { label: "Interdiction de parler à Mediapart pendant 12 ans", value: "interdiction_mediapart" },
  { label: "Retrait d'accréditation / suspension de visa de presse", value: "retrait_accreditation" },
  { label: "Dommages et intérêts civils (indemnisation des parties lésées)", value: "dommages_interets" },
  { label: "Rédaction d'un roman feel-good chez Albin Michel", value: "roman_feelgood" },
  { label: "Retrait de passeport", value: "retrait_passeport" },
  { label: "Formation DGSI", value: "formation_dgsi" },
  { label: "Déradicalisation obligatoire de journalistes", value: "deradicalisation" },
];

const ACCUSATIONS = [
  "Appropriation et divulgation de secret défense",
  "Recel de violation du secret professionnel",
  "Recel de violation du secret de l'instruction",
  "Révélation d'information permettant l'identification d'une source",
];

export default function LotoPrison() {
  const [selectedPeines, setSelectedPeines] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    montant: "20",
    prenom: "",
    nom: "",
    email: "",
  });

  const handlePeineChange = (value: string) => {
    setSelectedPeines((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construction de l'URL Donorbox avec les paramètres
    const peinesTexte = selectedPeines
      .map((peine) => PEINES.find((p) => p.value === peine)?.label)
      .filter(Boolean)
      .join(", ");

    let url = "https://donorbox.org/soutien-a-alex-jourdanov-proces?";
    url += `amount=${encodeURIComponent(formData.montant)}`;
    if (formData.prenom) url += `&first_name=${encodeURIComponent(formData.prenom)}`;
    if (formData.nom) url += `&last_name=${encodeURIComponent(formData.nom)}`;
    if (formData.email) url += `&email=${encodeURIComponent(formData.email)}`;
    if (peinesTexte) url += `&custom_1=${encodeURIComponent(peinesTexte)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="glass-gradient-bg min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Hero Section */}
        <div className="glass-card rounded-3xl p-8 md:p-12 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-game-gold mb-4">
            LOTO PRISON
          </h1>
          <p className="text-xl md:text-2xl text-game-text mb-6">
            Misez sur la peine d'Alex Jourdanov
          </p>
          <p className="text-game-text-muted max-w-2xl mx-auto leading-relaxed">
            Un concept humoristique pour soutenir un combat sérieux. Choisissez les peines absurdes
            que la justice pourrait infliger, mais votre don aide réellement Alex dans son procès.
          </p>
        </div>

        {/* Section Comment ça marche */}
        <div className="glass-card rounded-3xl p-6 md:p-8">
          <h2 className="text-2xl font-display font-bold text-game-gold mb-4 text-center">
            Comment ça marche ?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl mb-2">🎯</div>
              <h3 className="font-semibold text-game-text mb-2">1. Misez</h3>
              <p className="text-sm text-game-text-muted">
                Sélectionnez les peines absurdes que vous imaginez
              </p>
            </div>
            <div>
              <div className="text-4xl mb-2">💰</div>
              <h3 className="font-semibold text-game-text mb-2">2. Donnez</h3>
              <p className="text-sm text-game-text-muted">
                Choisissez le montant de votre soutien (libre)
              </p>
            </div>
            <div>
              <div className="text-4xl mb-2">⚖️</div>
              <h3 className="font-semibold text-game-text mb-2">3. Soutenez</h3>
              <p className="text-sm text-game-text-muted">
                100% des fonds aident Alex dans sa défense juridique
              </p>
            </div>
          </div>
        </div>

        {/* Section Accusations */}
        <div className="glass-card rounded-3xl p-6 md:p-8">
          <h2 className="text-2xl font-display font-bold text-game-gold mb-4">
            Pourquoi Alex est-il poursuivi ?
          </h2>
          <p className="text-game-text-muted mb-4">
            Alex Jourdanov est mis en examen pour avoir révélé des informations d'intérêt public.
            Il encourt jusqu'à <strong className="text-game-gold">10 ans de prison</strong>.
          </p>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-game-text mb-2">Chefs d'accusation :</p>
            {ACCUSATIONS.map((accusation, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-game-gold mt-1">•</span>
                <p className="text-sm text-game-text-muted">{accusation}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section Peines */}
        <div className="glass-card rounded-3xl p-6 md:p-8">
          <h2 className="text-2xl font-display font-bold text-game-gold mb-2 text-center">
            Misez sur les peines
          </h2>
          <p className="text-center text-game-text-muted mb-6 text-sm">
            De vraies peines juridiques aux sanctions complètement farfelues
          </p>

          <div className="grid md:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-2">
            {PEINES.map((peine) => (
              <label
                key={peine.value}
                className={`glass-card-hover flex items-start gap-3 rounded-xl px-4 py-3 cursor-pointer ${
                  selectedPeines.includes(peine.value)
                    ? "bg-game-gold/20 border-game-gold"
                    : ""
                }`}
              >
                <input
                  type="checkbox"
                  value={peine.value}
                  checked={selectedPeines.includes(peine.value)}
                  onChange={() => handlePeineChange(peine.value)}
                  className="glass-checkbox mt-0.5 flex-shrink-0"
                />
                <span className="text-sm text-game-text leading-tight">{peine.label}</span>
              </label>
            ))}
          </div>

          {selectedPeines.length > 0 && (
            <div className="mt-6 glass-card rounded-2xl p-4 border-2 border-game-gold/50">
              <h3 className="text-lg font-bold text-game-gold mb-3 text-center">
                Vos prédictions ({selectedPeines.length})
              </h3>
              <ul className="space-y-1 text-sm text-game-text-muted max-h-40 overflow-y-auto">
                {selectedPeines.map((peine) => (
                  <li key={peine} className="flex items-start gap-2">
                    <span className="text-game-gold">✓</span>
                    <span>{PEINES.find((p) => p.value === peine)?.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Formulaire de don */}
        <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-6 md:p-8">
          <h2 className="text-2xl font-display font-bold text-game-gold mb-6 text-center">
            Soutenez Alex
          </h2>

          <div className="space-y-4">
            {/* Montant */}
            <div>
              <label htmlFor="montant" className="block text-game-text font-semibold mb-2">
                Montant du don (€) *
              </label>
              <input
                type="number"
                id="montant"
                min="1"
                step="1"
                value={formData.montant}
                onChange={(e) => setFormData({ ...formData, montant: e.target.value })}
                className="glass-input w-full px-4 py-3 rounded-xl text-game-text"
                required
              />
            </div>

            {/* Prénom */}
            <div>
              <label htmlFor="prenom" className="block text-game-text font-semibold mb-2">
                Prénom (optionnel)
              </label>
              <input
                type="text"
                id="prenom"
                value={formData.prenom}
                onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                className="glass-input w-full px-4 py-3 rounded-xl text-game-text"
              />
            </div>

            {/* Nom */}
            <div>
              <label htmlFor="nom" className="block text-game-text font-semibold mb-2">
                Nom (optionnel)
              </label>
              <input
                type="text"
                id="nom"
                value={formData.nom}
                onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                className="glass-input w-full px-4 py-3 rounded-xl text-game-text"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-game-text font-semibold mb-2">
                Email (optionnel)
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="glass-input w-full px-4 py-3 rounded-xl text-game-text"
              />
            </div>
          </div>

          <button
            type="submit"
            className="glass-button w-full mt-6 px-8 py-4 rounded-xl font-bold text-lg text-game-bg hover:text-game-bg"
          >
            FAIRE UN DON MAINTENANT
          </button>

          <p className="text-xs text-game-text-muted mt-4 text-center">
            Paiement sécurisé via Donorbox • S'ouvre dans un nouvel onglet
          </p>
        </form>

        {/* Footer / Disclaimer */}
        <div className="glass-card rounded-3xl p-6 text-center">
          <p className="text-sm text-game-text-muted leading-relaxed">
            ⚖️ Le Loto Prison est une initiative humoristique de soutien. Les peines listées sont un
            mélange de sanctions juridiques réelles et de suggestions complètement farfelues.
            L'intégralité des dons est utilisée pour la défense juridique d'Alex Jourdanov.
          </p>
          <p className="text-xs text-game-text-dim mt-3 font-medium uppercase tracking-wider">
            Un jeu de la Française des Vieux™
          </p>
        </div>
      </div>
    </div>
  );
}
