import { useState, useEffect } from 'react';

interface CampaignStats {
  totalRaised: number;
  donationsCount: number;
  goal: number;
  lastUpdated?: string;
  error?: string;
}

export function useCampaignStats() {
  const [stats, setStats] = useState<CampaignStats>({
    totalRaised: 0,
    donationsCount: 0,
    goal: 20000,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Try Netlify function first
        let response = await fetch('/.netlify/functions/campaign-stats');

        // If Netlify function not available, try Vercel
        if (!response.ok) {
          response = await fetch('/api/campaign-stats');
        }

        // If serverless functions are not available (local dev without netlify dev)
        // fallback to direct fetch with CORS proxy or use static data
        if (!response.ok) {
          throw new Error('Serverless function not available');
        }

        const data = await response.json();
        setStats(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching campaign stats:', err);
        setError('Impossible de charger les statistiques en temps réel');

        // Use fallback data
        setStats({
          totalRaised: 8,
          donationsCount: 2,
          goal: 20000,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchStats();

    // Refresh stats every 5 minutes
    const interval = setInterval(fetchStats, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return { stats, loading, error };
}
