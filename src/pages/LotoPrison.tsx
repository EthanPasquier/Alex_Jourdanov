import React, { useState } from "react";

const PEINES = [
  { label: "Amende bien sale", value: "amende_sale" },
  { label: "Grosse tarte dans la gueule", value: "tarte_gueule" },
  { label: "Prison à vie", value: "prison_vie" },
  { label: "Fessée publique par Gérald D.", value: "fessee_gerald" },
  { label: "Exil en Russie", value: "exil_russie" },
  { label: "Déchéance de nationalité bulgaro-parisienne", value: "decheance_bulgaro" },
  { label: "Bracelet électronique", value: "bracelet" },
  { label: "Lire les rapports de la DGSI à voix haute au Sénat", value: "dgsi_senat" },
  { label: "Stage chez Hanouna", value: "stage_hanouna" },
  { label: "Confiscation de ses stylos et dictaphones", value: "confiscation_stylos" },
  { label: "Livraison de croissants aux anciens directeurs du renseignement", value: "croissants_dgsi" },
  { label: "Internement à l'INA – 40 ans de JT en boucle", value: "ina_jt" },
  { label: "Interdiction de parler à Mediapart pendant 12 ans", value: "interdiction_mediapart" },
  { label: "Rédaction d'un roman feel-good chez Albin Michel", value: "roman_feelgood" },
  { label: "Formation DGSI", value: "formation_dgsi" },
  { label: "Déradicalisation obligatoire de journalistes", value: "deradicalisation" },
];

export default function LotoPrison() {
  const [selectedPeines, setSelectedPeines] = useState<string[]>([]);
  const [amendeMontant, setAmendeMontant] = useState<string>("");
  const [donMontant, setDonMontant] = useState<string>("15");
  const [nom, setNom] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handlePeineChange = (value: string) => {
    setSelectedPeines((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  const handleValidation = () => {
    if (selectedPeines.length === 0) {
      alert("Veuillez sélectionner au moins une peine !");
      return;
    }
    if (!nom || !email) {
      alert("Veuillez remplir votre nom et email !");
      return;
    }
    if (!donMontant || parseInt(donMontant) < 5) {
      alert("Le montant minimum est de 5€ !");
      return;
    }

    // Stocker les données (localStorage pour l'exemple)
    const participation = {
      nom,
      email,
      peines: selectedPeines,
      amendeMontant: selectedPeines.includes("amende_sale") ? amendeMontant : null,
      montant: donMontant,
      date: new Date().toISOString()
    };
    localStorage.setItem('loto-prison-participation', JSON.stringify(participation));

    // Redirection vers le paiement sécurisé
    const tipeeeUrl = `https://fr.tipeee.com/alex-jordanov?amount=${donMontant}`;
    window.open(tipeeeUrl, '_blank');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-game-card rounded-2xl border border-game-border-light p-8">
        <h1 className="text-4xl font-display font-bold text-game-gold text-center mb-4">
          LOTO PRISON
        </h1>
        <p className="text-center text-sm text-game-text-muted mb-6 font-medium">
          Peines absurdes proposées par la République Spectacle™
        </p>
        <p className="text-center text-lg text-game-text-muted mb-8 font-medium">
          Compose ta peine absurde pour Alex Jordanov !
        </p>
        
        <form className="space-y-8">
          {/* Informations personnelles */}
          <div className="bg-game-bg-light rounded-lg p-6 border border-game-border">
            <h3 className="text-lg font-bold text-game-gold mb-4">Vos informations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-game-text font-semibold mb-2">
                  Nom ou Pseudo *
                </label>
                <input
                  type="text"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  className="w-full rounded-lg px-4 py-3 bg-game-card text-game-text border-2 border-game-border focus:outline-none focus:border-game-gold transition-colors"
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div>
                <label className="block text-game-text font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg px-4 py-3 bg-game-card text-game-text border-2 border-game-border focus:outline-none focus:border-game-gold transition-colors"
                  placeholder="votre@email.com"
                  required
                />
              </div>
            </div>
          </div>

          {/* Montant du don - Plus visible */}
          <div className="bg-game-gold-light bg-opacity-10 rounded-lg p-6 border-2 border-game-gold">
            <h3 className="text-xl font-bold text-game-gold mb-4 text-center">💰 Montant de votre don</h3>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {["10", "20", "50"].map((montant) => (
                <button
                  key={montant}
                  type="button"
                  onClick={() => setDonMontant(montant)}
                  className={`py-3 px-4 rounded-lg font-bold transition-all ${
                    donMontant === montant
                      ? "bg-game-gold text-game-bg"
                      : "bg-game-card text-game-text border-2 border-game-border hover:border-game-gold"
                  }`}
                >
                  {montant}€
                </button>
              ))}
            </div>
            <div>
              <label className="block text-game-text font-semibold mb-2">
                Ou montant libre (minimum 5€)
              </label>
              <input
                type="number"
                min="5"
                step="1"
                value={donMontant}
                onChange={(e) => setDonMontant(e.target.value)}
                className="w-full rounded-lg px-4 py-3 bg-game-card text-game-text border-2 border-game-border focus:outline-none focus:border-game-gold transition-colors text-center text-xl font-bold"
                placeholder="15€"
              />
              <p className="text-xs text-game-text-muted mt-2 text-center">
                100% des fonds vont à la défense juridique d'Alex Jordanov
              </p>
            </div>
          </div>

          {/* Sélection des peines */}
          <div>
            <label className="block text-game-text font-semibold mb-4">
              Choisis une ou plusieurs peines :
            </label>
            <div className="grid grid-cols-1 gap-3">
              {PEINES.map((peine) => (
                <label
                  key={peine.value}
                  className={`flex items-center gap-3 bg-game-bg-light rounded-lg px-4 py-3 cursor-pointer border-2 transition-all ${
                    selectedPeines.includes(peine.value)
                      ? "border-game-gold bg-game-card-hover"
                      : "border-game-border hover:border-game-border-light"
                  }`}
                >
                  <input
                    type="checkbox"
                    value={peine.value}
                    checked={selectedPeines.includes(peine.value)}
                    onChange={() => handlePeineChange(peine.value)}
                    className="w-4 h-4 accent-game-gold"
                  />
                  <span className="text-game-text">{peine.label}</span>
                </label>
              ))}
            </div>
          </div>
          
          {selectedPeines.includes("amende_sale") && (
            <div>
              <label className="block text-game-text font-semibold mb-3">
                Montant de l'amende (€) :
              </label>
              <input
                type="number"
                min="1"
                step="1"
                className="w-full rounded-lg px-4 py-3 bg-game-bg-light text-game-text border-2 border-game-border focus:outline-none focus:border-game-gold transition-colors"
                value={amendeMontant}
                onChange={(e) => setAmendeMontant(e.target.value)}
                placeholder="Saisis le montant de l'amende"
              />
            </div>
          )}
        </form>
        
        {/* Résumé de la participation */}
        <div className="mt-8 bg-game-bg-light rounded-lg p-6 border border-game-border">
          <h2 className="text-xl text-game-gold font-bold mb-4">Votre participation :</h2>
          <div className="space-y-2 mb-4">
            <p className="text-game-text"><strong>Don :</strong> {donMontant}€</p>
            {nom && <p className="text-game-text"><strong>Participant :</strong> {nom}</p>}
          </div>
          {selectedPeines.length === 0 ? (
            <p className="text-game-text-muted italic">Aucune peine sélectionnée.</p>
          ) : (
            <div>
              <p className="text-game-text font-semibold mb-2">Peines prédites :</p>
              <ul className="list-disc list-inside text-game-text space-y-1">
                {selectedPeines.map((peine) =>
                  peine === "amende_sale" && amendeMontant ? (
                    <li key={peine}>
                      Amende bien sale : <span className="font-bold text-game-gold">{amendeMontant} €</span>
                    </li>
                  ) : (
                    <li key={peine}>
                      {PEINES.find((p) => p.value === peine)?.label}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>

        {/* Bouton de validation */}
        <div className="mt-8 text-center">
          <button
            onClick={handleValidation}
            className="w-full game-button bg-game-gold text-game-bg py-4 rounded-lg font-bold text-xl hover:bg-game-gold-light transition-all mb-4"
          >
            🎯 VALIDER & PAYER MAINTENANT
          </button>
          <p className="text-xs text-game-text-dim font-medium">
            Paiement sécurisé via Tipeee
          </p>
        </div>
        
        <div className="mt-6 text-center">
          <span className="text-xs text-game-text-dim font-medium uppercase tracking-wider">
            Le loto Prison est un jeu de la française des vieux.
          </span>
        </div>
      </div>
    </div>
  );
}
