import { useState, useEffect } from "react";

import cataclysm from "../images/Cataclysm.png"
import shadersandbox from "../images/ShaderSandbox.png"
import pcr from "../images/PointCloudRenderer.png"
import forge from "../images/forge.png"
import uno from "../images/TermProject.png"
import react from "../images/react.png"

const REPO_IMAGES = {
  "ShaderSandbox" : shadersandbox,
  "Cataclysm" : cataclysm,
  "PointCloudRenderer" : pcr,
  "Forge" : forge,
  "TermProject" : uno,
  "jackpsmith-git.github.io" : react
}

const USERNAME = "jackpsmith-git";

export const useLatestRepos = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=5`
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
  }, [USERNAME]);

  return repos;
};

export const useGitHubUser = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const base = `https://api.github.com/users/${USERNAME}`;

        const [userRes, followersRes, orgsRes, starredRes] =
          await Promise.all([
            fetch(base),
            fetch(`${base}/followers?per_page=100`),
            fetch(`${base}/orgs`),
            fetch(`${base}/starred?per_page=100`)
          ]);

        const user = await userRes.json();
        const followers = await followersRes.json();
        const orgs = await orgsRes.json();
        const starred = await starredRes.json();

        if (!user || user.message === "Not Found") {
          console.error("GitHub API error:", user);
          return;
        }

        const enriched = {
          username: user.login,
          name: user.name,
          bio: user.bio,
          avatar: user.avatar_url,
          profileUrl: user.html_url,
          followersCount: user.followers,
          followers: Array.isArray(followers) ? followers.map((f) => f.login) : [],
          organizations: Array.isArray(orgs) ? orgs.map((o) => o.login) : [],
          starredReposCount: Array.isArray(starred) ? starred.length : 0,
          starredRepos: Array.isArray(starred) ? starred.map((r) => ({name: r.name, url: r.html_url, stars: r.stargazers_count,})) : [],
        };

        setUserInfo(enriched);
      } catch (err) {
        console.error("GitHub fetch failed:", err);
      }
    };

    fetchUser();
  }, [USERNAME]);

  return userInfo;
};
