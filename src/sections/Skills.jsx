import { Content } from '../components/Content.jsx'

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

export const Skills = () => {
  return (
    <section id='skills' className="bg-gray-700 dark:bg-black text-[#faf2d8] transition-col">
      <Content className="py-12">
        <h2 className='text-2xl font-semibold'>Skills</h2>
        <hr className='mt-2 mb-10'/>
        <div className="flex flex-col text-center">
            <div className="items-stretch justify-center
              grid gap-4
              grid-cols-6"
            >
            {Object.entries(SECTIONS).flatMap(([sectionKey, sectionValue]) =>
              Object.entries(sectionValue).map(([key, value]) => (
                <div key={`${sectionKey}-${key}`} className='hover:scale-110 flex flex-row items-center justify-center gap-2 text-center my-3'>
                  <img src={value} alt={name} className='aspect-square h-12 object-contain' />
                  <h4 className='hidden lg:block text-sm font-medium whitespace-nowrap'>{key}</h4>
                </div>
              ))
            )}
          </div>
        </div>
      </Content>
    </section>
  )
}