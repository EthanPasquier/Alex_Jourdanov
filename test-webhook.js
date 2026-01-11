// Script de test pour vérifier l'appel webhook

// Test 1: Formulaire LotoPrison (page avec plusieurs peines)
const testLotoPrison = {
  montant: "50",
  prenom: "Jean",
  nom: "Dupont",
  email: "jean.dupont@example.com",
  peines: ["prison_vie", "stage_hanouna", "exil_russie"],
  peinesTexte: "Prison à vie, Stage chez Hanouna, Exil en Russie",
  timestamp: new Date().toISOString(),
};

// Test 2: Formulaire Participate (page avec un pronostic unique)
const testParticipate = {
  montant: "20",
  prenom: "Marie",
  nom: "Martin",
  email: "marie.martin@example.com",
  prediction: "Amende bien sale",
  timestamp: new Date().toISOString(),
};

const WEBHOOK_URL = "https://n8n.srv1263347.hstgr.cloud/webhook/lotoprison";

console.log("=== TEST 1: LotoPrison ===");
console.log("URL:", WEBHOOK_URL);
console.log("Method: POST");
console.log("Headers:", { "Content-Type": "application/json" });
console.log("Body:", JSON.stringify(testLotoPrison, null, 2));

console.log("\n=== TEST 2: Participate ===");
console.log("URL:", WEBHOOK_URL);
console.log("Method: POST");
console.log("Headers:", { "Content-Type": "application/json" });
console.log("Body:", JSON.stringify(testParticipate, null, 2));

// Tentative d'appel réel au webhook
async function testWebhook() {
  console.log("\n=== TENTATIVE D'APPEL RÉEL AU WEBHOOK ===\n");

  try {
    console.log("Test 1: Envoi des données LotoPrison...");
    const response1 = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(testLotoPrison),
    });
    console.log("✓ Status:", response1.status);
    const text1 = await response1.text();
    console.log("✓ Response:", text1 || "(vide)");
  } catch (error) {
    console.log("✗ Erreur:", error.message);
  }

  try {
    console.log("\nTest 2: Envoi des données Participate...");
    const response2 = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(testParticipate),
    });
    console.log("✓ Status:", response2.status);
    const text2 = await response2.text();
    console.log("✓ Response:", text2 || "(vide)");
  } catch (error) {
    console.log("✗ Erreur:", error.message);
  }
}

testWebhook();
