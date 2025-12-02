import React, { useState } from 'react';

export function Participate() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    prediction: '',
    amount: '20'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // URL de base Donorbox
    const baseUrl = "https://donorbox.org/soutien-a-alex-jordanov-proces";
    const params = new URLSearchParams();

    // Paramètres Donorbox standards
    if (formData.amount) params.append('default_interval', 'o'); // one-time
    if (formData.amount) params.append('amount', formData.amount);
    if (formData.firstName) params.append('first_name', formData.firstName);
    if (formData.lastName) params.append('last_name', formData.lastName);
    if (formData.email) params.append('email', formData.email);

    // Champ personnalisé pour le pronostic
    if (formData.prediction) params.append('designation', `Pronostic: ${formData.prediction}`);

    const url = `${baseUrl}?${params.toString()}`;
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-display font-bold mb-8 text-center text-game-gold">
        Faire mon pronostic
      </h1>

      <form onSubmit={handleSubmit} className="bg-game-card p-8 rounded-lg border border-game-border">
        <div className="mb-6">
          <label htmlFor="amount" className="block text-sm font-medium mb-2 text-game-text">
            Montant de votre don (€)
          </label>
          <input
            type="number"
            id="amount"
            min="1"
            step="1"
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-game-bg-light text-game-text border border-game-border focus:outline-none focus:border-game-gold transition-colors"
            placeholder="Montant libre"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-game-text">
            Prénom (optionnel)
          </label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-game-bg-light text-game-text border border-game-border focus:outline-none focus:border-game-gold transition-colors"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-game-text">
            Nom (optionnel)
          </label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-game-bg-light text-game-text border border-game-border focus:outline-none focus:border-game-gold transition-colors"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-game-text">
            Email (optionnel)
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-game-bg-light text-game-text border border-game-border focus:outline-none focus:border-game-gold transition-colors"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-game-text">
            Votre pronostic
          </label>
          <div className="space-y-2">
            {[
              'Amende bien sale', 
              'Grosse tarte dans la gueule', 
              'Prison à vie', 
              'Stage chez Hanouna', 
              'Déradicalisation obligatoire du journalisme'
            ].map((option) => (
              <label key={option} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="prediction"
                  value={option}
                  checked={formData.prediction === option}
                  onChange={(e) => setFormData({ ...formData, prediction: e.target.value })}
                  className="accent-game-gold focus:ring-game-gold"
                  required
                />
                <span className="text-game-text">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-game-bg-light p-4 rounded-lg mb-8 border border-game-border">
          <p className="text-sm text-game-text-muted">
            ⚠️ En participant, vous acceptez que votre don soit utilisé pour la défense d'Alex Jordanov.
            Les données personnelles ne seront utilisées que pour vous contacter en cas de victoire.
          </p>
        </div>

        <button
          type="submit"
          className="w-full game-button bg-game-gold text-game-bg py-3 rounded-lg font-bold hover:bg-game-gold-light transition-all"
        >
          Faire un don et valider mon pronostic
        </button>
        <p className="text-xs text-game-text-muted mt-4 text-center">
          Paiement sécurisé via Donorbox (s'ouvre dans un nouvel onglet)
        </p>
      </form>
    </div>
  );
}
