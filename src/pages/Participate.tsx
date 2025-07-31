import React, { useState } from 'react';

export function Participate() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    prediction: '',
    amount: '10'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store form data if needed
    console.log(formData);
    // Redirect to Tipeee
    const tipeeeUrl = `https://fr.tipeee.com/alex-jordanov?amount=${formData.amount}`;
    window.location.href = tipeeeUrl;
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-display font-bold mb-8 text-center text-game-gold">
        Faire mon pronostic
      </h1>

      <form onSubmit={handleSubmit} className="bg-game-card p-8 rounded-lg border border-game-border">
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-game-text">
            Nom ou Pseudo
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-game-bg-light text-game-text border border-game-border focus:outline-none focus:border-game-gold transition-colors"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-game-text">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-game-bg-light text-game-text border border-game-border focus:outline-none focus:border-game-gold transition-colors"
            required
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
              'Déradicalisation obligatoire de journalistes'
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

        <div className="mb-8">
          <label htmlFor="amount" className="block text-sm font-medium mb-2 text-game-text">
            Montant de votre don (€)
          </label>
          <input
            type="number"
            id="amount"
            min="10"
            step="1"
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-game-bg-light text-game-text border border-game-border focus:outline-none focus:border-game-gold transition-colors"
            placeholder="Minimum suggéré : 10€"
            required
          />
          <p className="text-xs text-game-text-muted mt-1">
            Montant libre - Minimum suggéré : 10€
          </p>
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
          Valider mon pronostic
        </button>
      </form>
    </div>
  );
}
