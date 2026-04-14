import type { PlatformResponse, PlatformStats } from '@/lib/types/platforms';
import { CODING_PLATFORMS } from '@/lib/config/codingPlatforms';

export const dynamic = 'force-dynamic';

const LEETCODE_USERNAME = CODING_PLATFORMS.leetcode.username;

async function fetchLeetCodeStats(): Promise<PlatformStats | null> {
  try {
    const query = `
      query getUserProfile($username: String!) {
        allQuestionsCount {
          difficulty
          count
        }
        matchedUser(username: $username) {
          username
          profile {
            realName
            userAvatar
          }
          submissionCalendar
          submitStats {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
            totalTestcases
            totalSubmission {
              submissions
            }
          }
          badges {
            id
            name
            displayName
            icon
            creationDate
          }
        }
      }
    `;

    const response = await fetch(CODING_PLATFORMS.leetcode.api_endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
      body: JSON.stringify({
        operationName: 'getUserProfile',
        query: query,
        variables: {
          username: LEETCODE_USERNAME,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`LeetCode API error: ${response.status}`);
    }

    const data = await response.json();

    if (data.errors) {
      throw new Error(`LeetCode GraphQL error: ${data.errors[0]?.message}`);
    }

    const user = data.data?.matchedUser;
    if (!user) {
      throw new Error(`User ${LEETCODE_USERNAME} not found on LeetCode`);
    }

    // Calculate total problems solved
    const acStats = user.submitStats?.acSubmissionNum || [];
    const totalSolved = acStats.reduce((sum: number, stat: any) => sum + stat.count, 0);

    // Get badges
    const badges = (user.badges || []).map((badge: any) => ({
      name: badge.displayName || badge.name,
      description: badge.name,
    }));

    return {
      username: user.username,
      platform: 'leetcode',
      problemsSolved: totalSolved,
      badges: badges,
      lastUpdated: new Date().toISOString(),
    };
  } catch (error) {
    console.error('LeetCode fetch error:', error);
    throw error;
  }
}

export async function GET(): Promise<Response> {
  try {
    const stats = await fetchLeetCodeStats();
    
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
    console.error('LeetCode API route error:', errorMessage);

    return Response.json(
      {
        success: false,
        error: errorMessage || 'Failed to fetch LeetCode data',
      } as PlatformResponse,
      { status: 200 } // Return 200 to avoid blocking page load
    );
  }
}
