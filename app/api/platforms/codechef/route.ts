import type { PlatformResponse, PlatformStats } from '@/lib/types/platforms';
import { CODING_PLATFORMS } from '@/lib/config/codingPlatforms';

const CODECHEF_USERNAME = CODING_PLATFORMS.codechef.username;

// CodeChef doesn't have an official public JSON API
// This is a fallback that returns hardcoded stats or fetches from unofficial sources
async function fetchCodeChefStats(): Promise<PlatformStats | null> {
  try {
    // Attempt to fetch using unofficial API or scraping
    // For now, we'll return a placeholder that can be updated manually
    // In production, you could use:
    // 1. Unofficial CodeChef API (if available)
    // 2. Web scraping with cheerio/puppeteer
    // 3. Cached hardcoded stats

    // Try unofficial API endpoints
    const unofficialApiUrl = `https://competitive-coding-api.herokuapp.com/api/codechef/${CODECHEF_USERNAME}`;
    
    try {
      const response = await fetch(unofficialApiUrl);
      
      if (response.ok) {
        const data = await response.json();
        
        return {
          username: CODECHEF_USERNAME,
          platform: 'codechef',
          rating: data.rating,
          globalRank: data.globalRank,
          problemsSolved: data.solved,
          contestsParticipated: data.contesParticipated,
          lastUpdated: new Date().toISOString(),
        };
      }
    } catch (error) {
      console.warn('Unofficial CodeChef API failed:', error);
    }

    // Fallback: Return info that user should view profile directly
    throw new Error(
      `CodeChef API unavailable. Stats for ${CODECHEF_USERNAME} are not currently available. Please visit the profile directly for current stats.`
    );
  } catch (error) {
    console.error('CodeChef fetch error:', error);
    throw error;
  }
}

export async function GET(): Promise<Response> {
  try {
    const stats = await fetchCodeChefStats();

    const response: PlatformResponse = {
      success: true,
      data: stats || undefined,
    };

    return Response.json(response, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('CodeChef API route error:', errorMessage);

    return Response.json(
      {
        success: false,
        error: errorMessage || 'Failed to fetch CodeChef data',
      } as PlatformResponse,
      { status: 200 }
    );
  }
}
