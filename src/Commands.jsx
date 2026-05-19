import { SECTIONS } from './Constants.jsx'

const FILESYSTEM = {
  name: "jackpsmith-git",
  type: "dir",
  children: {
    images: {
      name: "images",
      type: "dir",
      children: {
        "headshot.jpeg": {
          name: "headshot.jpeg",
          type: "image",
          src: "/assets/images/headshot.jpeg",
        },
      },
    },

    icons: {
      name: "icons",
      type: "dir",
      children: {
        "favicon.svg": {
          name: "favicon.svg",
          type: "image",
          src: "/assets/icons/favicon.svg",
        },
      },
    },

    "helloworld.txt": {
      name: "helloworld.txt",
      type: "text",
      content: "Hello World!",
    },
  },
};

const colorize = (node) => {
  switch (node.type) {
    case "dir":
      return (
        <span className="text-blue-400 font-medium">
          {node.name}
        </span>
      );

    case "image":
      return (
        <span className="text-green-400">
          {node.name}
        </span>
      );

    case "text":
      return (
        <span className="text-gray-300">
          {node.name}
        </span>
      );

    default:
      return (
        <span className="text-gray-500">
          {node.name}
        </span>
      );
  }
};

let cwd = "/";

const normalizePath = (path) => {
  if (!path) return "/";

  const parts = path.split("/");
  const stack = [];

  for (const part of parts) {
    if (!part || part === ".") continue;

    if (part === "..") {
      stack.pop();
      continue;
    }

    stack.push(part);
  }

  return "/" + stack.join("/");
};

const resolveInputPath = (input = "") => {
  const trimmed = input.trim();

  if (!trimmed || trimmed === ".") {
    return cwd;
  }

  if (trimmed.startsWith("/")) {
    return normalizePath(trimmed);
  }

  return normalizePath(`${cwd}/${trimmed}`);
};

const resolvePath = (input = "") => {
  const fullPath = resolveInputPath(input);

  if (fullPath === "/") return FILESYSTEM;

  const parts = fullPath.split("/").filter(Boolean);

  let node = FILESYSTEM;

  for (const part of parts) {
    if (!node.children?.[part]) {
      return null;
    }

    node = node.children[part];
  }

  return node;
};

const PWD = () => cwd;

const LS = (args = "") => {
  const node = resolvePath(args);

  if (!node) {
    return `ls: no such file or directory: ${args}`;
  }

  if (node.type !== "dir") {
    return colorize(node);
  }

  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1">
      {Object.values(node.children || {}).map((child) => (
        <span key={child.name}>
          {colorize(child)}
        </span>
      ))}
    </div>
  );
};

const CD = (args = "") => {
  const target = args.trim();

  if (!target) {
    cwd = "/";
    return "";
  }

  const node = resolvePath(target);

  if (!node) {
    return `cd: no such directory: ${target}`;
  }

  if (node.type !== "dir") {
    return `cd: not a directory: ${target}`;
  }

  cwd = resolveInputPath(target);

  return "";
};

const TREE = (args = "") => {
  const node = resolvePath(args);

  if (!node) {
    return `tree: no such directory: ${args}`;
  }

  const render = (
    node,
    prefix = "",
    isLast = true,
    isRoot = false
  ) => {
    const children = Object.values(node.children || {});
    const isDir = node.type === "dir";

    return (
      <div>
        {isRoot ? (
          <div>{colorize(node)}</div>
        ) : (
          <div className="whitespace-pre">
            {prefix}
            {isLast ? "└── " : "├── "}
            {colorize(node)}
          </div>
        )}

        {isDir &&
          children.map((child, index) => {
            const last = index === children.length - 1;

            const newPrefix =
              isRoot
                ? ""
                : prefix + (isLast ? "    " : "│   ");

            return (
              <div key={child.name}>
                {render(child, newPrefix, last)}
              </div>
            );
          })}
      </div>
    );
  };

  return render(node, "", true, true);
};

const CONTACT = (
  <div>
    <a href="mailto:jpsmith8603@gmail.com" target="_blank" rel="noopener no referrer">Gmail</a>
    <br />
    <a href="mailto:jackpsmith@jackpsmith.com" target="_blank" rel="noopener no referrer">Titan</a>
    <br />
    <a href="mailto:jack.p.smith@pace.edu" target="_blank" rel="noopener noreferrer">Pace</a>
  </div>
)

const SKILLS = () => (
  <div>
    {Object.entries(SECTIONS).map(([sectionKey, sectionValue]) => (
      <div key={sectionKey}>
        <span>
          {sectionKey}
        </span>
        {": "}
        <span className="text-gray-300">
          {Object.keys(sectionValue).join(", ")}
        </span>
      </div>
    ))}
  </div>
);

const ECHO = async (...args) => args.join(" ")

const GITHUB = async () => {
  window.open("https://github.com/jackpsmith-git")
}

const LINKEDIN = async () => {
  window.open("https://www.linkedin.com/in/jackpetersmith")
}

const EMAIL = async () => {
  window.open("mailto:jpsmith8603@gmail.com")
}

const FAVICON = (
  <img src="assets/icons/favicon.svg" alt="favicon"/>
)

const GOTO = async (section) => {
  const element = document.getElementById(section);
  element?.scrollIntoView({ behavior: "smooth", block: "start" })
}

const HEADSHOT = (
  <img src="assets/images/headshot.jpeg" alt="headshot" width={100}/>
)

const HELP = (
  <p>
    [about]
    [cd]
    [clear]
    [contact]
    [echo {"<string>"}]
    [email]
    [favicon]
    [github]
    [goto {"<section>"}]
    [headshot]
    [helloworld]
    [help]
    [linkedin]
    [ls]
    [nuget]
    [pwd]
    [run {"<file>"}]
    [skills]
    [socials]
    [tree {"<directory>"}]
    [whoami]
  </p>
)

const NUGET = async () => {
  window.open("https://www.nuget.org/profiles/jackpsmith");
}

const SOCIALS = (
  <div>
    <a href="https://www.github.com/jackpsmith-git" target="_blank" rel="noopener no referrer">GitHub</a>
    <br />
    <a href="https://www.linkedin.com/in/jackpetersmith" target="_blank" rel="noopener no referrer">LinkedIn</a>
    <br />
    <a href="https://www.nuget.org/profiles/jackpsmith" target="_blank" rel="noopener noreferrer">NuGet</a>
  </div>
)

const SUDO = async () => "root privileges denied"

const WHOAMI = "Jack P Smith - Software Developer, Game Developer, Full-Stack Web Developer"

const RUN = (args = "") => {
  const input = args.trim();

  if (!input) {
    return "run: missing file path";
  }

  const node = resolvePath(input);

  if (!node) {
    return `run: no such file or directory: ${input}`;
  }

  if (node.type === "dir") {
    return (
      <div className="flex flex-wrap gap-x-4 gap-y-1">
        {Object.values(node.children || {}).map((child) => (
          <span key={child.name}>
            {colorize(child)}
          </span>
        ))}
      </div>
    );
  }

  if (node.type === "image") {
    return (
      <img
        src={node.src}
        alt={node.name}
        className="max-w-xs rounded"
      />
    );
  }

  if (node.type === "text") {
    return (
      <span className="whitespace-pre-wrap text-gray-300">
        {node.content}
      </span>
    );
  }

  return `run: unsupported file type: ${node.type}`;
};

const ABOUT = "Hi, I'm Jack! I am currently a student at Pace University pursuing a Bachelor of Science in Computer Science. Click on the 'Projects' tab to browse my current and past projects, or navigate to the 'Skills' section to learn more about me."

export const COMMANDS = {
  about: ABOUT,
  cd: CD,
  contact: CONTACT,
  echo: ECHO,
  email: EMAIL,
  favicon: FAVICON,
  github: GITHUB,
  goto: GOTO,
  headshot: HEADSHOT,
  help: HELP,
  linkedin: LINKEDIN,
  ls: LS,
  nuget: NUGET,
  pwd: PWD,
  run: RUN,
  skills: SKILLS,
  socials: SOCIALS,
  sudo: SUDO,
  tree: TREE,
  whoami: WHOAMI,
}