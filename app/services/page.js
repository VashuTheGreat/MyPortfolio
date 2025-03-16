import Link from "next/link";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">Our Services</h1>
        <p className="text-lg text-gray-300 mb-8">
          We provide top-notch solutions to help you achieve your goals. Explore our services below.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-2">{service.title}</h2>
            <p className="text-gray-300 mb-4">{service.description}</p>
            <Link href={service.link} className="text-blue-400 hover:underline">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const services = [
  { title: "Web Development", description: "Custom websites tailored to your needs.", link: "/web-development" },
  { title: "App Development", description: "Building high-performance mobile apps.", link: "/app-development" },
  { title: "SEO Optimization", description: "Improve your search engine rankings.", link: "/seo-optimization" },
  { title: "Graphic Design", description: "Creative and stunning designs.", link: "/graphic-design" },
  { title: "Digital Marketing", description: "Grow your online presence effectively.", link: "/digital-marketing" },
  { title: "Consulting Services", description: "Expert guidance for your business.", link: "/consulting" }
];

export default ServicesPage;