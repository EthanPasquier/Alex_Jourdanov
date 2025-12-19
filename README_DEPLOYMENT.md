# Déploiement et Configuration

## Configuration des données de la cagnotte

Les données de la page d'accueil (montant récolté, nombre de participants) sont maintenant connectées aux vraies données de la cagnotte Donorbox.

### Comment ça fonctionne

1. **Fonction serverless** : Une fonction serverless récupère les données de Donorbox toutes les 5 minutes
2. **Hook React** : Un hook personnalisé (`useCampaignStats`) charge les données depuis la fonction serverless
3. **Affichage** : La page d'accueil affiche automatiquement les vraies données

### Développement local

Pour tester en local avec les fonctions serverless Netlify :

```bash
# Installer Netlify CLI (si pas déjà installé)
npm install -g netlify-cli

# Démarrer le serveur de développement avec les fonctions
npm run dev:netlify
```

En mode développement normal (`npm run dev`), des données de fallback seront utilisées si les fonctions serverless ne sont pas disponibles.

### Déploiement sur Netlify

1. Connectez votre repository GitHub à Netlify
2. La configuration est déjà dans `netlify.toml` :
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Functions directory: `netlify/functions`

Les données seront automatiquement mises à jour depuis Donorbox.

### Déploiement sur Vercel

1. Connectez votre repository à Vercel
2. Les fonctions sont dans le dossier `api/`
3. Vercel détectera automatiquement la configuration

### Données affichées

- **Participants** : Nombre de donations sur la campagne Donorbox
- **Somme récoltée** : Montant total récolté en euros
- **Mise à jour** : Les données sont rafraîchies toutes les 5 minutes

### Fallback

Si les fonctions serverless ne sont pas disponibles ou en cas d'erreur, le site affichera les dernières données connues :
- Montant récolté : 8 €
- Nombre de donations : 2

Ces données seront automatiquement mises à jour dès que la connexion à Donorbox sera rétablie.
