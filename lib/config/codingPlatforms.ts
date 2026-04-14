export const CODING_PLATFORMS = {
  leetcode: {
    name: 'LeetCode',
    username: 'diivvvyaaaa',
    url: 'https://leetcode.com',
    profile_url: 'https://leetcode.com/u/diivvvyaaaa',
    api_endpoint: 'https://leetcode.com/graphql',
    color: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-300',
      accent: 'text-yellow-600',
      badge: 'bg-yellow-100 text-yellow-800'
    }
  },
  codeforces: {
    name: 'Codeforces',
    username: 'divyavadapalli',
    url: 'https://codeforces.com',
    profile_url: 'https://codeforces.com/profile/divyavadapalli',
    api_endpoint: 'https://codeforces.com/api/user.info',
    color: {
      bg: 'bg-blue-50',
      border: 'border-blue-300',
      accent: 'text-blue-600',
      badge: 'bg-blue-100 text-blue-800'
    }
  },
  codechef: {
    name: 'CodeChef',
    username: 'divyavadapalli',
    url: 'https://www.codechef.com',
    profile_url: 'https://www.codechef.com/users/divyavadapalli',
    api_endpoint: 'https://www.codechef.com/api/user/divyavadapalli',
    color: {
      bg: 'bg-orange-50',
      border: 'border-orange-300',
      accent: 'text-orange-600',
      badge: 'bg-orange-100 text-orange-800'
    }
  }
};

export type PlatformKey = keyof typeof CODING_PLATFORMS;
