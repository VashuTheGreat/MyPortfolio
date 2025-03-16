export default function AboutPage() {
    return (
      <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl font-bold text-yellow-400">About Me</h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Hi, I'm <span className="text-yellow-400">Vashu</span>, a passionate developer with expertise in web and mobile development. I create innovative solutions and love coding!
          </p>
        </div>
  
        <div className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
          <img src="/Developer.png" alt="Developer" className="w-full max-w-sm mx-auto rounded-lg shadow-lg" />
          <div>
            <h2 className="text-2xl font-semibold text-purple-400">Who am I?</h2>
            <p className="text-gray-300 mt-2">
              I specialize in building high-performance web applications using modern technologies like React, Next.js, and MongoDB. My goal is to create seamless and efficient user experiences.
            </p>
            <div className="mt-4 flex gap-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Contact Me</button>
              <button className="bg-transparent hover:bg-blue-500 text-blue-400 font-semibold hover:text-white py-2 px-4 border border-blue-400 hover:border-transparent rounded">Download CV</button>
            </div>
          </div>
        </div>
      </div>
    );
  }