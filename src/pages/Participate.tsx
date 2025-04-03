import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

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
      <h1 className="text-4xl font-bold mb-8 text-center">Faire mon pronostic</h1>

      <form onSubmit={handleSubmit} className="bg-slate-800/50 p-8 rounded-lg">
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Nom ou Pseudo
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 focus:outline-none focus:border-yellow-400"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 focus:outline-none focus:border-yellow-400"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Votre pronostic
          </label>
          <div className="space-y-2">
            {['Relaxe', 'Amende symbolique', 'Prison avec sursis', 'Prison ferme'].map((option) => (
              <label key={option} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="prediction"
                  value={option}
                  checked={formData.prediction === option}
                  onChange={(e) => setFormData({ ...formData, prediction: e.target.value })}
                  className="text-yellow-400 focus:ring-yellow-400 focus:ring-offset-slate-800"
                  required
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium mb-2">
            Montant du don
          </label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="amount"
                value="10"
                checked={formData.amount === '10'}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                className="text-yellow-400 focus:ring-yellow-400 focus:ring-offset-slate-800"
              />
              10€
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="amount"
                value="20"
                checked={formData.amount === '20'}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                className="text-yellow-400 focus:ring-yellow-400 focus:ring-offset-slate-800"
              />
              20€
            </label>
          </div>
        </div>

        <div className="bg-slate-700/50 p-4 rounded-lg mb-8 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-slate-300">
            En participant, vous acceptez que votre don soit utilisé pour la défense d'Alex Jordanov. 
            Les données personnelles ne seront utilisées que pour vous contacter en cas de victoire.
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 text-slate-900 py-3 rounded-lg font-bold hover:bg-yellow-300 transition"
        >
          Valider mon pronostic
        </button>
      </form>
    </div>
  );
}
