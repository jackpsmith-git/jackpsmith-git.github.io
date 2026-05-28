export const FEATURED_PROJECTS = [
  {
    "name" : "Cataclysm",
    "languages" : ["C", "C++", "C#", "OpenGL", "GLSL", "Lua"],
    "description" : "Cataclysm is a Windows-only, 2D rendering and game development engine written in C++, based on Hazel Engine by Studio Cherno. Included with the Cataclysm Engine is Caterpillar, the visual editor for Cataclysm, as well as the Cataclysm Core Mono Library (CCML). The default renderer included with Cataclysm is Vesuvius, a custom-built 2D renderer that currently supports OpenGL. Cataclysm supports C# scripting with Mono, an open source implementation of .NET, as well as native scripting with C++.",
    "image" : "./assets/images/Cataclysm.png",
    "link" : "https://www.github.com/jackpsmith-git/Cataclysm"
  },
  {
    "name" : "React Portfolio",
    "languages" : ["JavaScript", "React", "Tailwind", "HTML", "CSS"],
    "description" : "My personal portfolio with modern, responsive design powered by React and Tailwind CSS.",
    "image" : "./assets/images/react.png",
    "link" : "https://github.com/jackpsmith-git/jackpsmith-git.github.io"
  },
  {
    "name" : "Shader Sandbox",
    "languages" : ["C", "C++", "OpenGL", "GLSL", "JavaScript", "Objective-C++", "Objective-C"],
    "description" : "Shader Sandbox is a portable Windows tool for testing GLSL shaders in an offline environment. Shader Sandbox supports OpenGL/GLSL 4.6.",
    "image" : "./assets/images/ShaderSandbox.png",
    "link" : "https://www.github.com/jackpsmith-git/ShaderSandbox"
  },
  {
    "name" : "Point-Cloud Renderer",
    "languages" : ["C", "C++", "Vulkan", "GLSL"],
    "description" : '3D, point-cloud, Vulkan renderer for Windows. Utilizes compute shaders to calculate, distribute, and render up to tens of millions of particles on the GPU. The binaries below contain a sample application that renders a small mesh with 10,000 particles.',
    "image" : './assets/images/PointCloudRenderer.png',
    "link" : 'https://www.github.com/jackpsmith-git/PointCloudRenderer'
  },
  {
    "name" : "Forge Password Management Utility",
    "languages" : ["C#", "WinForms"],
    "description" : 'Forge is a portable password management utility for Windows 10/11. Forge stores user data in encrypted files called vaults. Vaults live in a subdirectory alongside the executable so that you always have control over your own data. Forge collects no user data. When you give Forge your sensitive data, it is never written to disk in an unencrypted state. Forge serializes and encrypts the vault data in memory before writing to disk, and can only decrypt the data if the correct AES key is provided.',
    "image" : './assets/images/forge.png',
    "link" : 'https://www.github.com/jackpsmith-git/Forge'
  },
  {
    "name" : "SEE ALL ->",
    "languages" : [],
    "description" : '',
    "image" : '',
    "link" : 'https://www.github.com/jackpsmith-git?tab=repositories'   
  }
]

export const LANG_COLS = {
  "C": '#064090',
  "Objective-C" : '#064090',
  "C++" : '#041e42',
  "Objective-C++" : '#041e42',
  "C#": '#68217A',
  "JavaScript": '#833e2c',
  "Python": '#0B6623',
  "Lua": '#6e6a39',
  "Batchfile" : "#000000",
  "CMake" : 'green',
  "HTML" : '#E34C26',
  "CSS" : '#663399',
  "Java" : '#007396',
  "Vulkan" : '#E34C26',
  "OpenGL" : '#0B6623',
  "GLSL" : '#25ad49',
  "React" : '#3a0bd4',
  "Tailwind" : '#9b1111',
  "WinForms" : '#5d2626'
};

const PROGRAMMING_LANGUAGES = {
  "C/C++" : "assets/images/cpp.png",
  "Python" : "assets/images/python.png",
  "Java" : "assets/images/java.png",
  "C#" : "assets/images/csharp.png",
  "JavaScript" : "assets/images/javascript.png",
  "HTML" : "assets/images/html.png",
  "CSS" : "assets/images/css.png",
  "Lua" : "assets/images/lua.png",
  "PHP" : "assets/images/php.png",
}

const FRAMEWORKS = {
  "OpenGL" : "assets/images/opengl.png",
  "Vulkan" : "assets/images/vulkan.png",
  "React" : "assets/images/react.png",
  "Bootstrap" : "assets/images/bootstrap.png",
  "Tailwind" : "assets/images/tailwind.png",
  ".NET" : "assets/images/dotnet-logo.png",
  "node.js" : "assets/images/nodejs.png",
  "Three.js" : "assets/images/threejs.png",
  "FastAPI" : "assets/images/FastAPI.png",
  "Qt" : "assets/images/qt.png",
}

const DEVTOOLS = {
  "VS 2022" : "assets/images/visualstudio.png",
  "VS Code" : "assets/images/vscode.png",
  "Git" : "assets/images/git.png",
  "GitHub" : "assets/images/github.png",
  "Claude" : "assets/images/claude-color.png",
  "Unity" : "assets/images/unity.png",
  "Unreal"  : "assets/images/unreal.png",
  "Docker" : "assets/images/docker.png",
  "MySQL" : "assets/images/mysql.png",
  "CMake" : "assets/images/cmake.png",
  "Vercel" : "assets/icons/vercel.svg"
}

const CREATIVE_TOOLS = {
  "Photoshop" : "assets/images/photoshop.png",
  "Illustrator" : "assets/images/illustrator.png",
  "Figma" : "assets/images/figma.png"
}

const OPERATING_SYSTEMS = {
  "Windows" : "assets/images/windows.png",
  "Unix/Linux" : "assets/images/linux.png",
  "MacOS" : "assets/images/apple.png",
  "iOS" : "assets/images/apple.png",
  "Android" : "assets/images/android.png",
}

export const SECTIONS = {
  "Programming Languages" : PROGRAMMING_LANGUAGES,
  "Frameworks/Libraries" : FRAMEWORKS,
  "Development Tools" : DEVTOOLS,
  "Creative Tools" : CREATIVE_TOOLS,
  "Operating Systems" : OPERATING_SYSTEMS,
}