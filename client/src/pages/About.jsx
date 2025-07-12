import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">About SA Food Critique</h1>
          
          <div className="prose max-w-none">
            <p className="mb-4">
              SA Food Critique was born out of a passion for South Africa's diverse culinary landscape. 
              Our mission is to uncover and showcase the authentic dining experiences that make our 
              country's food culture so unique and vibrant.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Story</h2>
            <p className="mb-4">
              Founded in 2023 by a group of food enthusiasts, SA Food Critique started as a small blog 
              documenting personal dining experiences across Cape Town. As we discovered more hidden gems 
              and shared our honest reviews, our audience grew rapidly. Today, we're a community-driven 
              platform with contributors from all over South Africa.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Approach</h2>
            <p className="mb-4">
              We believe in honest, transparent reviews that highlight both the strengths and areas for 
              improvement of each establishment. Our reviewers visit restaurants unannounced and pay for 
              their meals to ensure unbiased opinions. We focus on:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Authenticity of the dining experience</li>
              <li>Quality and presentation of food</li>
              <li>Service and atmosphere</li>
              <li>Value for money</li>
              <li>Cultural significance</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Meet The Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="h-40 bg-gray-200 rounded mb-4"></div>
                <h3 className="font-bold">Thando Mbeki</h3>
                <p className="text-gray-600 text-sm">Founder & Lead Reviewer</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="h-40 bg-gray-200 rounded mb-4"></div>
                <h3 className="font-bold">Nomfundo Zulu</h3>
                <p className="text-gray-600 text-sm">Cape Town Correspondent</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="h-40 bg-gray-200 rounded mb-4"></div>
                <h3 className="font-bold">James Khumalo</h3>
                <p className="text-gray-600 text-sm">Johannesburg Correspondent</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Join Our Community</h2>
            <p>
              We're always looking for passionate food lovers to join our community of reviewers. 
              Whether you're a seasoned food critic or just someone who loves great food, we'd 
              love to hear from you. <a href="/contact" className="text-amber-600 hover:underline">Get in touch</a> to learn more about contributing.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;