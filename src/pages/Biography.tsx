import React from 'react';
import { Book, Award, Camera, Quote } from 'lucide-react';

export function Biography() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Qui est Alex Jordanov ?</h1>

      {/* Bio */}
      <div className="bg-slate-800/50 p-8 rounded-lg mb-16">
        <p className="text-lg leading-relaxed text-slate-300">
          Alex Jordanov est un journaliste d'investigation reconnu pour ses enquêtes 
          sur les services de renseignement et la lutte anti-terroriste. Avec plus 
          de 15 ans d'expérience, il a couvert de nombreuses affaires sensibles et 
          publié plusieurs ouvrages de référence.
        </p>
      </div>

      {/* Career Timeline */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Parcours</h2>
        <div className="relative border-l-2 border-yellow-400 pl-8 space-y-12 ml-4">
          <div>
            <div className="absolute w-4 h-4 bg-yellow-400 rounded-full -left-2"></div>
            <h3 className="text-xl font-bold mb-2">2008-2012</h3>
            <p className="text-slate-300">Reporter pour divers médias internationaux</p>
          </div>
          <div>
            <div className="absolute w-4 h-4 bg-yellow-400 rounded-full -left-2"></div>
            <h3 className="text-xl font-bold mb-2">2012-2018</h3>
            <p className="text-slate-300">Journaliste d'investigation indépendant</p>
          </div>
          <div>
            <div className="absolute w-4 h-4 bg-yellow-400 rounded-full -left-2"></div>
            <h3 className="text-xl font-bold mb-2">2018-2023</h3>
            <p className="text-slate-300">Publication de plusieurs enquêtes majeures</p>
          </div>
        </div>
      </div>

      {/* Works */}
      <div className="grid gap-8 mb-16">
        <h2 className="text-2xl font-bold">Publications et Documentaires</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800/30 p-6 rounded-lg">
            <Book className="w-6 h-6 text-yellow-400 mb-4" />
            <h3 className="font-bold mb-2">Les espions de la terreur</h3>
            <p className="text-slate-400">2023 - Une plongée dans les services secrets</p>
          </div>
          
          <div className="bg-slate-800/30 p-6 rounded-lg">
            <Camera className="w-6 h-6 text-yellow-400 mb-4" />
            <h3 className="font-bold mb-2">Dans l'ombre du DGSI</h3>
            <p className="text-slate-400">2021 - Documentaire sur France 5</p>
          </div>
          
          <div className="bg-slate-800/30 p-6 rounded-lg">
            <Book className="w-6 h-6 text-yellow-400 mb-4" />
            <h3 className="font-bold mb-2">Enquête sur le terrorisme</h3>
            <p className="text-slate-400">2019 - Best-seller international</p>
          </div>
          
          <div className="bg-slate-800/30 p-6 rounded-lg">
            <Award className="w-6 h-6 text-yellow-400 mb-4" />
            <h3 className="font-bold mb-2">Prix Albert Londres</h3>
            <p className="text-slate-400">2018 - Pour son travail d'investigation</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-slate-800/30 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Ce qu'en disent ses pairs</h2>
        <div className="grid gap-6">
          <blockquote className="border-l-4 border-yellow-400 pl-4">
            <p className="italic text-slate-300 mb-2">
              "Un des journalistes les plus rigoureux de sa génération."
            </p>
            <footer className="text-sm text-slate-400">
              - Marie Durant, Le Monde
            </footer>
          </blockquote>
          
          <blockquote className="border-l-4 border-yellow-400 pl-4">
            <p className="italic text-slate-300 mb-2">
              "Ses enquêtes ont changé notre compréhension des services secrets."
            </p>
            <footer className="text-sm text-slate-400">
              - Pierre Martin, Mediapart
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}