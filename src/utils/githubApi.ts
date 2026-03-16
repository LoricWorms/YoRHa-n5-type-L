let reposCache: Map<string, any[]> = new Map();

async function fetchGithubReposCached(username: string): Promise<any[]> {
  if (reposCache.has(username)) {
    return reposCache.get(username)!;
  }
  const repos = await fetchGithubRepos(username);
  reposCache.set(username, repos);
  return repos;
}

export async function fetchGithubRepos(username: string) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }
    const repos = await response.json();
    return repos;
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error);
    return [];
  }
}

/**
 * LORE MAPPING:
 * Council of Humanity -> School (EPSI, La Joliverie) & Authorized Missions
 * Resistance Support -> Personal & Freelance & Internships (WIKLOG, etc.)
 */
const repoClientMap: Record<string, string> = {
  'pokemon-generator': 'Resistance Support',
  'pokeproject': 'Resistance Support',
  'wagerverse': 'Resistance Support',
  'NieR-Automata-Design-System': 'YoRHa Bunker (Internal)',
  'wiklog': 'Resistance Support (Digitization)',
  'ludwig': 'Resistance Support (Ticketing)',
  'groupe-open': 'Resistance Support (LDAP)',
};

function formatTitle(name: string) {
  return name
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const loreFooters = [
  "REWARD: Technical experience data uploaded to the Bunker.",
  "STATUS: Mission data verified by Operator 6O.",
  "NOTE: Black box signals stable during deployment.",
  "NOTICE: All data authorized for public disclosure by the Council of Humanity.",
  "ANALYSIS: Code structure efficiency exceeds 95%."
];

const completedProjects = new Set([
  'pokemon-generator', 'pokeproject', 'wagerverse',
  'tp_automatisation_tests', 'escape-rooms', 'jpa-jpql'
]);

function mapRepo(repo: any, footSuffix: string) {
  let client = repoClientMap[repo.name];
  if (!client) {
    client = (repo.name.toLowerCase().includes('epsi') || repo.name.toLowerCase().includes('slam'))
      ? 'Council of Humanity'
      : 'Resistance Support';
  }

  const randomFooter = loreFooters[Math.floor(Math.random() * loreFooters.length)];

  return {
    link: repo.name,
    title: formatTitle(repo.name),
    client,
    description: repo.description
      ? [repo.description]
      : ["System analysis: No description provided in repository metadata. Monitoring for activity..."],
    footdescription: `${randomFooter} [${footSuffix}: ${new Date(repo.updated_at).toLocaleDateString()}]`,
    status: completedProjects.has(repo.name.toLowerCase()) ? "Cleared" : (repo.archived ? "Archived" : "Active"),
    html_url: repo.html_url,
    homepage: repo.homepage,
    language: repo.language,
  };
}

export async function getProjectsAsQuests(username: string) {
  const repos = await fetchGithubReposCached(username);
  return repos.map((repo: any) => mapRepo(repo, "Access Point"));
}

export async function getProjectAsQuest(username: string, projectName: string) {
  const repos = await fetchGithubReposCached(username);
  const repo = repos.find((r: any) => r.name === projectName);
  if (!repo) return null;
  return mapRepo(repo, "Last Transmission");
}
