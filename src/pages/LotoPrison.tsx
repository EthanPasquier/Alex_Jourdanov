import React, { useState } from "react";

const PEINES = [
  { label: "Acquittal (Relaxe)", value: "acquittal" },
  { label: "Suspended sentence (Prison avec sursis)", value: "suspended" },
  { label: "Subpoena (Assignation à comparaître)", value: "subpoena" },
  { label: "Bail (Libération sous caution)", value: "bail" },
  { label: "Time (Prison ferme)", value: "time" },
  { label: "Race (Course absurde)", value: "race" },
  { label: "Amende (grosse tarte)", value: "amende" },
  { label: "Prison à vie", value: "prison_vie" },
  { label: "Fessée publique", value: "fessee" },
  { label: "Exilé", value: "exile" },
  { label: "Déchéance de nationalité", value: "decheance" },
  { label: "Bracelet électronique (de marque)", value: "bracelet" },
];

export default function LotoPrison() {
  const [selectedPeines, setSelectedPeines] = useState<string[]>([]);
  const [amendeMontant, setAmendeMontant] = useState<string>("");

  const handlePeineChange = (value: string) => {
    setSelectedPeines((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12"
      style={{
        background:
          "radial-gradient(ellipse at top, #2d0036 0%, #0a0a23 100%)",
      }}
    >
      <div className="max-w-2xl w-full bg-[#1a0022]/90 rounded-2xl shadow-2xl border-4 border-pink-700 p-8 neon-glow">
        <h1 className="text-4xl font-extrabold text-pink-500 text-center mb-6 neon-flicker">
          LOTO PRISON
        </h1>
        <p className="text-center text-lg text-fuchsia-200 mb-8 font-semibold neon-fade">
          Compose ta peine absurde pour Alex Jordanov !
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-fuchsia-300 font-bold mb-2">
              Choisis une ou plusieurs peines :
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PEINES.map((peine, idx) => (
                <label
                  key={peine.value}
                  className={`flex items-center gap-2 bg-[#2d0036]/80 rounded-lg px-3 py-2 cursor-pointer border-2 slot-anim ${
                    selectedPeines.includes(peine.value)
                      ? "border-pink-500 neon-glow"
                      : "border-transparent"
                  } hover:border-fuchsia-400 transition`}
                  style={{
                    animationDelay: `${idx * 0.07}s`
                  }}
                >
                  <input
                    type="checkbox"
                    value={peine.value}
                    checked={selectedPeines.includes(peine.value)}
                    onChange={() => handlePeineChange(peine.value)}
                    className="accent-pink-500 w-5 h-5"
                  />
                  <span className="text-fuchsia-100 neon-flicker">{peine.label}</span>
                </label>
              ))}
            </div>
          </div>
          {selectedPeines.includes("amende") && (
            <div>
              <label className="block text-fuchsia-300 font-bold mb-2">
                Montant de l’amende (€) :
              </label>
              <input
                type="number"
                min="1"
                step="1"
                className="w-full rounded-lg px-4 py-2 bg-[#2d0036]/70 text-fuchsia-100 border-2 border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-400"
                value={amendeMontant}
                onChange={(e) => setAmendeMontant(e.target.value)}
                placeholder="Saisis le montant de l’amende"
              />
            </div>
          )}
        </form>
        <div className="mt-8 bg-[#2d0036]/70 rounded-lg p-4 border border-fuchsia-700 neon-glow">
          <h2 className="text-xl text-pink-400 font-bold mb-2 neon-fade">Ta combinaison de peines :</h2>
          {selectedPeines.length === 0 ? (
            <p className="text-fuchsia-200 italic">Aucune peine sélectionnée.</p>
          ) : (
            <ul className="list-disc list-inside text-fuchsia-100">
              {selectedPeines.map((peine) =>
                peine === "amende" && amendeMontant ? (
                  <li key={peine} className="neon-flicker">
                    Amende (grosse tarte) : <span className="font-bold">{amendeMontant} €</span>
                  </li>
                ) : (
                  <li key={peine} className="neon-flicker">
                    {PEINES.find((p) => p.value === peine)?.label}
                  </li>
                )
              )}
            </ul>
          )}
        </div>
        <div className="mt-10 text-center">
          <span className="text-xs text-fuchsia-400 font-bold uppercase tracking-widest neon-fade">
            Le loto Prison est un jeu de la française des vieux.
          </span>
        </div>
      </div>
    </div>
  );
}
