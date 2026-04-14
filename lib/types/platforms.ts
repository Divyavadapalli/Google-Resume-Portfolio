export interface PlatformStats {
  username: string;
  platform: 'leetcode' | 'codeforces' | 'codechef';
  rating?: number;
  rank?: string;
  globalRank?: number;
  problemsSolved?: number;
  contestsParticipated?: number;
  maxRating?: number;
  badges?: Badge[];
  errorMessage?: string;
  lastUpdated?: string;
}

export interface Badge {
  name: string;
  description?: string;
  icon?: string;
}

export interface PlatformResponse {
  success: boolean;
  data?: PlatformStats;
  error?: string;
  cached?: boolean;
}
