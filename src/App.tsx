import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { HowToPlay } from './pages/HowToPlay';
import { Case } from './pages/Case';
import { Biography } from './pages/Biography';
import LotoPrison from './pages/LotoPrison';
import { Prize } from './pages/Prize';
import { MentionsLegales } from './pages/MentionsLegales';
import { ProtectionDonnees } from './pages/ProtectionDonnees';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comment-jouer" element={<HowToPlay />} />
        <Route path="/affaire" element={<Case />} />
        <Route path="/alex-jordanov" element={<Biography />} />
        <Route path="/participer" element={<LotoPrison />} />
        <Route path="/prix" element={<Prize />} />
        <Route path="/loto-prison" element={<LotoPrison />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/protection-donnees" element={<ProtectionDonnees />} />
      </Routes>
    </Layout>
  );
}

export default App;
