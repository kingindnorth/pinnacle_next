
export default function AboutUsPage() {
  return (
    <section className="text-gray-100 bg-gray-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Who We Are</h1>
          <p className="text-lg text-gray-300">
            We're a passionate team dedicated to crafting impactful digital experiences. Through innovation, technology, and creativity—we build products that users love.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" // Adjust the path as necessary
            alt="Our team"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>
      </div>

      {/* Mission */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-gray-400">
          To simplify technology and empower businesses and individuals with innovative, scalable, and user-centric solutions.
        </p>
      </div>

      {/* Core Team */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Core Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Prajjawal Tiwari', role: 'Founder & CTO', img: 'https://randomuser.me/api/portraits/men/46.jpg' },
            { name: 'Aarav Sharma', role: 'Product Manager', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
            { name: 'Nisha Kapoor', role: 'Lead Designer', img: 'https://randomuser.me/api/portraits/women/47.jpg' },
          ].map((member) => (
            <div key={member.name} className="bg-gray-800 rounded-lg shadow-md p-6 text-center">
              <img
                src={member.img}
                alt={member.name}
                width={120}
                height={120}
                className="mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-center mb-10">What Makes Us Different</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-800 rounded-lg p-6">
            <h4 className="text-xl font-bold mb-2">Cutting-edge Tech</h4>
            <p className="text-gray-400">We stay ahead of the curve using the latest tools and frameworks.</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h4 className="text-xl font-bold mb-2">Client-Centric Approach</h4>
            <p className="text-gray-400">Our users and clients are at the heart of everything we build.</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h4 className="text-xl font-bold mb-2">Transparent Workflow</h4>
            <p className="text-gray-400">From planning to delivery, we prioritize clear communication and collaboration.</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 py-16 bg-gray-800 rounded-lg mb-12">
        <h2 className="text-3xl font-semibold text-center mb-10">What Our Clients Say</h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="bg-gray-900 p-6 rounded-lg shadow">
            <p className="text-gray-300 italic">“This team transformed our outdated platform into a modern, scalable app. Communication was top-notch!”</p>
            <p className="mt-4 text-sm text-gray-500 text-right">— Rajeev S., CEO, TechPath</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow">
            <p className="text-gray-300 italic">“Highly professional and technically strong. They understood our needs and delivered flawlessly.”</p>
            <p className="mt-4 text-sm text-gray-500 text-right">— Ananya R., Product Lead, LearnMate</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow">
            <p className="text-gray-300 italic">“Creative, fast, and efficient. We loved working with them and will definitely return for more projects.”</p>
            <p className="mt-4 text-sm text-gray-500 text-right">— Vikram J., Founder, FitNation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
