export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-yellow-400">About Me</h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Hi, I'm <span className="text-yellow-400">Chhavi</span>,I'm a dedicated Company Secretary with expertise in corporate governance, compliance, and regulatory affairs. I ensure seamless legal and financial operations while upholding corporate integrity and strategic decision-making.
        </p>
      </div>

      <div className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <img src="/Developer.png" alt="Developer" className="w-full max-w-sm mx-auto rounded-lg shadow-lg" />
        <div>
          <h2 className="text-2xl font-semibold text-purple-400">Who am I?</h2>
          <p className="text-gray-300 mt-2">
          I specialize in corporate compliance, regulatory affairs, and governance, ensuring that companies adhere to legal frameworks while optimizing their business operations. My goal is to streamline compliance processes and support strategic decision-making.
          </p>
          <div className="mt-4 flex gap-4">
            <a href='/contact'><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Contact Me</button></a>
            <a href='/chhavi cv.pdf' download> <button className="bg-transparent hover:bg-blue-500 text-blue-400 font-semibold hover:text-white py-2 px-4 border border-blue-400 hover:border-transparent rounded">Download CV</button>
            </a>
          </div>
        </div>
      </div>

      {/* Education & Skills Section */}
      <div className="container mx-auto px-6 py-12 bg-gray-800 rounded-lg shadow-lg mt-12">
        <h2 className="text-3xl font-bold text-yellow-400 text-center">Education & Skills</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {/* Education */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-400">Education</h3>
            <ul className="mt-3 text-gray-300 list-disc list-inside">
              <li>Institute of Company Secretaries of India</li>
              <li>CSEET: 148/200 (May 2021)</li>
              <li>Executive Group I: 200/400 (Feb 2022)</li>
              <li>Executive Group II: 247/400 (Aug 2022)</li>
              <li>Professional Group I: 160/300 (Aug 2023)</li>
              <li>Professional Group II: 160/300 (Feb 2024)</li>
              <li>Professional Group III: 170/300 (Aug 2024)</li>
              <li>Chaudhary Charan Singh University Meerut (B.COM, M.COM)</li>
              <li>CBSE Delhi - XII (HSC), X (SSC)</li>
            </ul>
          </div>

          {/* Soft Skills & Achievements */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-400">Soft Skills</h3>
            <ul className="mt-3 text-gray-300 list-disc list-inside">
              <li>Ability to Work under Pressure</li>
              <li>Communication Skills</li>
              <li>Adaptable to Changing Environment</li>
              <li>Good Time Management</li>
              <li>Hard Working</li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-400 mt-6">Achievements</h3>
            <ul className="mt-3 text-gray-300 list-disc list-inside">
              <li>National Service Scheme Certificate</li>
              <li>Participated in gender equality & youth initiatives</li>
              <li>6-month Customer Service Experience</li>
            </ul>
          </div>
        </div>

        {/* Exemptions & Interests */}
        <div className="mt-8 bg-gray-900 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-400">Exemptions in CS Exam</h3>
          <ul className="mt-3 text-gray-300 list-disc list-inside">
            <li>Corporate and Management Accounting</li>
            <li>Financial and Strategic Management</li>
          </ul>


          <h3 className="text-xl font-semibold text-blue-400 mt-6">Hobbies & Interests</h3>
          <ul className="mt-3 text-gray-300 list-disc list-inside">
            <li>Reading, Listening to Music, Badminton</li>
            <li>SEBI Compliances, NBFC, Company Compliances</li>
            <li>Conceptual Understanding</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
