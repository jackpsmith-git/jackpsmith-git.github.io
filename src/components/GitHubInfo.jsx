import CountUp from "react-countup";
import { Float } from "../components/Float.jsx";

export const GitHubInfo = ({
  username,
  avatar,
  followingCount,
  followersCount,
  starredReposCount,
  organizationsCount
}) => {
  return (
    <div>
      <div className="flex items-center gap-3 pb-4 w-full">
        <a
          href="https://github.com/jackpsmith-git"
          target="_blank"
          rel="noopener noreferrer"
          className="h-8 w-8 shrink-0 border border-[#faeab4]"
        >
          <img
            src={avatar}
            className="h-full w-full rounded-full object-cover border border-white/10"
          />
        </a>

        <a
          href="https://github.com/jackpsmith-git"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold hover:underline whitespace-nowrap shrink-0"
        >
          jackpsmith-git
        </a>

        <div className="ml-auto shrink-0">
          <img
            src="assets/images/github.png"
            className="brightness-0 invert"
            width={30}
            alt="github"
          />
        </div>

      </div>
      <div className="h-px w-full bg-white/10 mb-4" />
      <div className="grid grid-cols-4 gap-6 text-center">
        <div className="flex flex-col">
          <span className="text-xl min-[600px]:text-[28pt] font-bold">
            <CountUp start={0} end={followingCount ?? 0} duration={2.75} enableScrollSpy />
          </span>
          <span className="text-xs min-[600px]:text-sm opacity-70">
            following
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-xl min-[600px]:text-[28pt] font-bold">
            <CountUp start={0} end={followersCount ?? 0} duration={2.75} enableScrollSpy />
          </span>
          <span className="text-xs min-[600px]:text-sm opacity-70">
            followers
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-xl min-[600px]:text-[28pt] font-bold">
            <CountUp start={0} end={starredReposCount ?? 0} duration={2.75} enableScrollSpy />
          </span>
          <span className="text-xs min-[600px]:text-sm opacity-70">
            starred repos
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-xl min-[600px]:text-[28pt] font-bold">
            <CountUp start={0} end={organizationsCount ?? 0} duration={2.75} enableScrollSpy />
          </span>
          <span className="text-xs min-[600px]:text-sm opacity-70">
            organizations
          </span>
        </div>
      </div>

    </div>
  );
};