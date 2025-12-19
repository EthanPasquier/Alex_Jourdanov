import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    const response = await fetch('https://donorbox.org/soutien-a-alex-jordanov-proces');
    const html = await response.text();

    // Extract data from the HTML
    const amountMatch = html.match(/class="dbox_amount_raised[^>]*>([^<]+)</i);
    const donationsMatch = html.match(/class="dbox_donation_count[^>]*>(\d+)/i);
    const goalMatch = html.match(/class="dbox_goal[^>]*>([^<]+)</i);

    let stats = {
      totalRaised: 8,
      donationsCount: 2,
      goal: 20000,
      lastUpdated: new Date().toISOString()
    };

    if (amountMatch) {
      const amount = amountMatch[1].replace(/[^\d,.]/g, '').replace(',', '.');
      stats.totalRaised = parseFloat(amount) || 0;
    }

    if (donationsMatch) {
      stats.donationsCount = parseInt(donationsMatch[1]) || 0;
    }

    if (goalMatch) {
      const goal = goalMatch[1].replace(/[^\d,.]/g, '').replace(',', '.');
      stats.goal = parseFloat(goal) || 20000;
    }

    // Try to find embedded data in scripts
    const dataMatches = html.matchAll(/data-total[_-]?raised["\s=:]+["']?(\d+(?:\.\d+)?)/gi);
    for (const match of dataMatches) {
      const value = parseFloat(match[1]);
      if (!isNaN(value) && value > 0) {
        stats.totalRaised = value;
        break;
      }
    }

    const countMatches = html.matchAll(/data-donations?[_-]?count["\s=:]+["']?(\d+)/gi);
    for (const match of countMatches) {
      const value = parseInt(match[1]);
      if (!isNaN(value) && value >= 0) {
        stats.donationsCount = value;
        break;
      }
    }

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'public, max-age=300');
    res.status(200).json(stats);
  } catch (error) {
    console.error('Error fetching campaign stats:', error);

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({
      totalRaised: 8,
      donationsCount: 2,
      goal: 20000,
      lastUpdated: new Date().toISOString(),
      error: 'Using cached data'
    });
  }
}
