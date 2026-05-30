import { ReactTerminal } from 'react-terminal'
import { SECTIONS } from '../sections/Skills.jsx'
import { FEATURED_PROJECTS } from '../sections/Projects.jsx'
import { useTheme } from "../hooks/useTheme"

export const Terminal = () => {
  const [theme, setTheme] = useTheme()
  const isDark = theme === "dark"

  const FILESYSTEM = {
    name: "jackpsmith-git",
    type: "dir",
    children: {

      hero: {
        name: "hero",
        type: "dir",
        children: {
          "HeroVideo.mp4" : {
            name: "HeroVideo.mp4",
            type: "video",
            src: "/assets/videos/HeroVideo.mp4"
          },
          "title.txt" : {
            name: "title.txt",
            type: "text",
            content: "Jack P Smith - Software Developer"
          },
        }
      },

      home: {
        name: "home",
        type: "dir",
        children: {
          "Cataclysm.png" : {
            name: "Cataclysm.png",
            type: "image",
            src: "/assets/images/Cataclysm.png"
          },
          "ShaderSandbox.png" : {
            name: "ShaderSandbox.png",
            type: "image",
            src: "/assets/images/ShaderSandbox.png"
          },
          "PointCloudRenderer.png" : {
            name: "PointCloudRenderer.png",
            type: "image",
            src: "/assets/images/PointCloudRenderer.png"
          },
        }
      },

      about : {
        name: "about",
        type: "dir",
        children: {
          "bio.txt" : {
            name: "bio.txt",
            type: "text",
            content: "Hi, I'm Jack! I am currently a student at Pace University pursuing a Bachelor of Science in Computer Science. Click on the 'Projects' tab to browse my current and past projects, or navigate to the 'Skills' section to learn more about me.",
          },
          "headshot.jpeg" : {
            name: "headshot.jpeg",
            type: "image",
            src: "/assets/images/headshot.jpeg",
          },
          "quote.txt" : {
            name: "quote.txt",
            type: "text",
            content: '\"You might not think that programmers are artists, but programming is an extremely creative profession.\" - John Romero, Co-Founder, id Software',
          },
        }
      },

      "favicon.svg": {
        name: "favicon.svg",
        type: "image",
        src: "/assets/icons/favicon.svg",
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

      case "video":
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
      <a href="mailto:jpsmith8603@gmail.com" target="_blank" rel="noopener no referrer">Gmail - jpsmith8603@gmail.com</a>
      <br />
      <a href="mailto:jack.p.smith@pace.edu" target="_blank" rel="noopener noreferrer">Pace - jack.p.smith@pace.edu</a>
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

  const PROJECTS = () => (
    <div>
      {FEATURED_PROJECTS.map((project) => (
        <div key={project.name}>
          {project.name} ({project.languages.join(', ')}): {project.description}
        </div>
      ))}
    </div>
  );

  const ECHO = async (...args) => args.join(" ")

  const EMAIL = async () => {
    window.open("mailto:jpsmith8603@gmail.com")
  }

  const FAVICON = (
    <img src="assets/icons/favicon.svg" alt="favicon"/>
  )

  const HELP = (
    <p>
      [cd]
      [clear]
      [coinflip]
      [contact]
      [darkmode]
      [echo {"<string>"}]
      [email]
      [exit]
      [favicon]
      [help]
      [lightmode]
      [ls]
      [projects]
      [pwd]
      [run {"<file>"}]
      [skills]
      [socials]
      [toggletheme]
      [tree {"<directory>"}]
    </p>
  )

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
          className="max-w-xs"
        />
      );
    }

    if (node.type === "video") {
      return (
        <video
          src={node.src}
          alt={node.name}
          className="max-w-xs"
          autoPlay muted loop playsInline
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

  const COINFLIP = () => (Math.random() < 0.5 ? "heads" : "tails")
  const EXIT = () => {window.location.href='/'; return "exiting terminal mode..."}

  const LIGHTMODE = () => {
    setTheme("light")
    return "light mode activated"
  }

  const DARKMODE = () => {
    setTheme("dark")
    return "dark mode activated"
  }

  const TOGGLETHEME = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark")
    return "theme toggled"
  }

  const COMMANDS = {
    cd: CD,
    coinflip: COINFLIP,
    contact: CONTACT,
    darkmode: DARKMODE,
    echo: ECHO,
    email: EMAIL,
    exit: EXIT,
    favicon: FAVICON,
    help: HELP,
    lightmode: LIGHTMODE,
    ls: LS,
    projects: PROJECTS,
    pwd: PWD,
    run: RUN,
    skills: SKILLS,
    socials: SOCIALS,
    sudo: SUDO,
    toggletheme: TOGGLETHEME,
    tree: TREE,
  }

  return(
    <div id="terminal" key={theme} className='w-full h-full min-h-screen 
      bg-gray-700 dark:bg-black 
      flex flex-col 
      transition-col'
    >
      <div className="w-full h-full px-4 pb-2 rounded-t-xl flex items-center gap-2">
        <img
          // src="/assets/images/terminal.png"
          src="/assets/icons/favicon.svg"
          className="h-4 w-4 object-contain invert brightness-100"
          alt="terminal icon"
        />
        <p className="text-lg font-medium text-[gray]">Terminal</p>
      </div>
      <hr className='border-white/50'/>
      <div className='overflow-hidden whitespace-pre-wrap flex-1 text-black dark:text-white [&_.react-terminal-wrapper]:h-full
        [&_.react-terminal]:h-full'>
        <ReactTerminal
          commands={COMMANDS}
          themes={{
            "dark-mode": {
              themeBGColor: "transparent",
              themeColor: "#FFFEFC",
              themePromptColor: "#08e500",
            },
          }}
          prompt={`jackpsmith.vercel.app >`}
          theme="dark-mode"
          showControlBar={false}
          errorMessage="Command not recognized."
          welcomeMessage={
            <div>
              https://jackpsmith.vercel.app<br />
              Terminal initialized...<br/>
              Run 'help' to view commands.<br/>
              Run 'exit' to return to GUI mode.<br/>
              ㅤ
            </div>
          }
        />
      </div>
    </div>
  )
}