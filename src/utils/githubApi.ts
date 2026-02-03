export async function fetchGithubRepos(username: string) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
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

// Function to simulate getArchive structure
export async function getProjectsAsQuests(username: string) {
    const repos = await fetchGithubRepos(username);
    // Use lowercase for case-insensitive matching and updated names
    const completedProjects = new Set(['pokemon-generator', 'pokeproject', 'wagerverse']);

    return repos.map((repo: any) => ({
      link: repo.name, // Use repo name as link
      title: repo.name, // Use repo name as title
      client: repo.owner.login, // Use owner login as client (your username)
      description: repo.description ? [repo.description] : ["No description available."], // Use repo description
      footdescription: `Last updated: ${new Date(repo.updated_at).toLocaleDateString()}`, // Last update date
      status: completedProjects.has(repo.name.toLowerCase()) ? "Cleared" : (repo.archived ? "Archived" : "Active"), // Case-insensitive check
      html_url: repo.html_url, // Add GitHub URL
      homepage: repo.homepage, // Add homepage URL for live demo
      language: repo.language, // Primary language
    }));
  }

  // Function to simulate getQuest structure for a single project
  export async function getProjectAsQuest(username: string, projectName: string) {
    const repos = await fetchGithubRepos(username);
    const repo = repos.find((r: any) => r.name === projectName);
    if (!repo) return null;

    // Use lowercase for case-insensitive matching and updated names
    const completedProjects = new Set(['pokemon-generator', 'pokeproject', 'wagerverse']);

    return {
      link: repo.name,
      title: repo.name,
      client: repo.owner.login,
      description: repo.description ? [repo.description] : ["No description available."],
      footdescription: `Last updated: ${new Date(repo.updated_at).toLocaleDateString()}`,
      status: completedProjects.has(repo.name.toLowerCase()) ? "Cleared" : (repo.archived ? "Archived" : "Active"), // Case-insensitive check
      html_url: repo.html_url,
      homepage: repo.homepage,
      language: repo.language,
    };
  }
