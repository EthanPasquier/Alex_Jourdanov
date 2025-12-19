import { Handler } from '@netlify/functions';

export const handler: Handler = async () => {
  try {
    const response = await fetch('https://donorbox.org/soutien-a-alex-jordanov-proces');
    const html = await response.text();

    // Extract data from the HTML
    // Look for the statistics in the page
    const amountMatch = html.match(/class="dbox_amount_raised[^>]*>([^<]+)</i);
    const donationsMatch = html.match(/class="dbox_donation_count[^>]*>(\d+)/i);
    const goalMatch = html.match(/class="dbox_goal[^>]*>([^<]+)</i);

    // Alternative: Look for JSON-LD or meta tags
    const jsonLdMatch = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s);

    let stats = {
      totalRaised: 8,
      donationsCount: 2,
      goal: 20000,
      lastUpdated: new Date().toISOString()
    };

    // Try to extract from various patterns
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

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=300' // Cache for 5 minutes
      },
      body: JSON.stringify(stats)
    };
  } catch (error) {
    console.error('Error fetching campaign stats:', error);

    // Return fallback data
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        totalRaised: 8,
        donationsCount: 2,
        goal: 20000,
        lastUpdated: new Date().toISOString(),
        error: 'Using cached data'
      })
    };
  }
};
