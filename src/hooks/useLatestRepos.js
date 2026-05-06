import { useState, useEffect } from "react";

import cataclysm from "../assets/images/Cataclysm.png"
import shadersandbox from "../assets/images/ShaderSandbox.png"
import pcr from "../assets/images/PointCloudRenderer.png"
import forge from "../assets/images/forge.png"
import uno from "../assets/images/TermProject.png"
import react from "../assets/images/react.png"

const REPO_IMAGES = {
  "ShaderSandbox" : shadersandbox,
  "Cataclysm" : cataclysm,
  "PointCloudRenderer" : pcr,
  "Forge" : forge,
  "TermProject" : uno,
  "jackpsmith-git.github.io" : react
}

export const useLatestRepos = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/jackpsmith-git/repos?sort=updated&per_page=5`
        );
        const data = await res.json();

        if (!Array.isArray(data)) {
          console.error("GitHub API error:", data);
          return;
        }

        const enriched = await Promise.all(
          data.map(async (repo) => {
            const image = REPO_IMAGES[repo.name];
            const languagesRes = await fetch(repo.languages_url);
            const languages = await languagesRes.json();

            return {
              name: repo.name,
              description: repo.description,
              url: repo.html_url,
              stars: repo.stargazers_count,
              watchers: repo.watchers_count,
              issues: repo.open_issues_count,
              languages: Object.keys(languages),
              image,
            };
          })
        );

        setRepos(enriched);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRepos();
  }, ["jackpsmith-git"]);

  return repos;
};
