import Image from "next/image";
const projects = [
    {
      title: "Stock Price Predictor",
      description: "A machine learning model to predict stock prices.",
      image: "/fullstackdeveloper.webp",  // ✅ Correct path (public ke bina)
      github: "https://github.com/VashuTheGreat/snake",
    },
    {
      title: "Spam Filter App",
      description: "An Android app to detect spam messages using AI.",
      image: "/fullstackdeveloper.webp",
      github: "https://github.com/VashuTheGreat/snake",
    },
    {
      title: "Video Calling Web App",
      description: "A peer-to-peer video calling application.",
      image: "/fullstackdeveloper.webp",
      github: "https://github.com/VashuTheGreat/snake",
    },
  ];

  

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-5 rounded-xl shadow-lg">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={200}
              className="rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-lg transition-all"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}