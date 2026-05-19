import { useState, useEffect } from "react";

export const useGitHubUser = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const base = 'https://api.github.com/users/jackpsmith-git';

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
          followingCount: user.following,
          followers: Array.isArray(followers) ? followers.map((f) => f.login) : [],
          organizations: Array.isArray(orgs) ? orgs.map((o) => o.login) : [],
          organizationsCount: Array.isArray(orgs) ? orgs.length : 0,
          starredReposCount: Array.isArray(starred) ? starred.length : 0,
          starredRepos: Array.isArray(starred) ? starred.map((r) => ({name: r.name, url: r.html_url, stars: r.stargazers_count,})) : [],
        };

        setUserInfo(enriched);
      } catch (err) {
        console.error("GitHub fetch failed:", err);
      }
    };

    fetchUser();
  }, ["jackpsmith-git"]);

  return userInfo;
};
