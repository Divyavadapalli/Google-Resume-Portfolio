import type { PlatformResponse, PlatformStats } from '@/lib/types/platforms';
import { CODING_PLATFORMS } from '@/lib/config/codingPlatforms';

const CODEFORCES_USERNAME = CODING_PLATFORMS.codeforces.username;

interface CodeforcesUserInfo {
  result: {
    handle: string;
    rating?: number;
    maxRating?: number;
    rank?: string;
    maxRank?: string;
    friendOfCount: number;
    titlePhoto: string;
    contribution: number;
    registrationTimeSeconds: number;
    lastOnlineTimeSeconds: number;
  }[];
}

interface CodeforcesProblemStats {
  result: {
    problems: any[];
    submissions: {
      id: number;
      contestId: number;
      creationTimeSeconds: number;
      relativeTimeSeconds: number;
      problem: { index: string; name: string };
      author: { participantType: string; members: any[] };
      programmingLanguage: string;
      verdict: string;
      testset: string;
      passedTestCount: number;
      timeConsumedMillis: number;
      memoryConsumedBytes: number;
    }[];
  };
}

async function fetchCodeforcesStats(): Promise<PlatformStats | null> {
  try {
    // Fetch user info
    const userResponse = await fetch(
      `${CODING_PLATFORMS.codeforces.api_endpoint}?handles=${CODEFORCES_USERNAME}`
    );

    if (!userResponse.ok) {
      throw new Error(`Codeforces API error: ${userResponse.status}`);
    }

    const userData: CodeforcesUserInfo = await userResponse.json();

    if (!userData.result || userData.result.length === 0) {
      throw new Error(`User ${CODEFORCES_USERNAME} not found on Codeforces`);
    }

    const user = userData.result[0];

    // Fetch user submissions to count AC problems
    const submissionsResponse = await fetch(
      `https://codeforces.com/api/user.status?handle=${CODEFORCES_USERNAME}&from=1&count=100000`
    );

    let problemsSolved = 0;
    if (submissionsResponse.ok) {
      const submissionsData: CodeforcesProblemStats = await submissionsResponse.json();
      
      // Count unique AC problems
      const acProblems = new Set<string>();
      (submissionsData.result?.submissions || [])
        .filter((sub: any) => sub.verdict === 'OK')
        .forEach((sub: any) => {
          acProblems.add(`${sub.problem.index}`);
        });
      
      problemsSolved = acProblems.size;
    }

    return {
      username: user.handle,
      platform: 'codeforces',
      rating: user.rating,
      maxRating: user.maxRating,
      rank: user.rank,
      problemsSolved: problemsSolved,
      lastUpdated: new Date().toISOString(),
    };
  } catch (error) {
    console.error('Codeforces fetch error:', error);
    throw error;
  }
}

export async function GET(): Promise<Response> {
  try {
    const stats = await fetchCodeforcesStats();

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
    console.error('Codeforces API route error:', errorMessage);

    return Response.json(
      {
        success: false,
        error: errorMessage || 'Failed to fetch Codeforces data',
      } as PlatformResponse,
      { status: 200 }
    );
  }
}
