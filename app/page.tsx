import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="bg-secondary-light dark:bg-secondary py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">CareerBoost</div>
          <div className="hidden md:flex space-x-6">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary-light to-white dark:from-secondary dark:to-black py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Unlock Your <span className="text-primary">Career Potential</span></h1>
            <p className="text-lg mb-8">Professional guidance to help you navigate your career journey with confidence and purpose.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark transition-colors">
                Book a Consultation
              </button>
              <button className="border border-secondary px-6 py-3 rounded-full hover:bg-secondary-light transition-colors">
                Explore Services
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-80 w-full">
              {/* Replace with your own hero image */}
              <div className="absolute inset-0 bg-primary opacity-20 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center text-primary">
                Career Growth Image Placeholder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* LinkedIn Optimization */}
            <div className="bg-white dark:bg-secondary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">LinkedIn Optimization</h3>
              <p className="mb-4">Stand out to recruiters with a professionally optimized LinkedIn profile that highlights your achievements.</p>
              <a href="#" className="text-primary hover:underline">Learn more →</a>
            </div>
            
            {/* Career Coaching */}
            <div className="bg-white dark:bg-secondary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Career Coaching</h3>
              <p className="mb-4">One-on-one guidance to help you navigate career transitions, promotions, and professional growth.</p>
              <a href="#" className="text-primary hover:underline">Learn more →</a>
            </div>
            
            {/* Certified Training Programs */}
            <div className="bg-white dark:bg-secondary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Certified Training</h3>
              <p className="mb-4">Industry-recognized certification programs to boost your skills and enhance your résumé.</p>
              <a href="#" className="text-primary hover:underline">Learn more →</a>
            </div>
            
            {/* School Enrollment Assistance */}
            <div className="bg-white dark:bg-secondary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">School Enrollment</h3>
              <p className="mb-4">Expert guidance on selecting and applying to educational programs that align with your career goals.</p>
              <a href="#" className="text-primary hover:underline">Learn more →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Career?</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Our expert career advisors are ready to help you take the next step in your professional journey.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-secondary-light transition-colors">
            Schedule a Free Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CareerBoost</h3>
              <p>Professional career guidance to help you achieve your professional goals and ambitions.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary">LinkedIn Optimization</a></li>
                <li><a href="#" className="hover:text-primary">Career Coaching</a></li>
                <li><a href="#" className="hover:text-primary">Certified Training</a></li>
                <li><a href="#" className="hover:text-primary">School Enrollment</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary">About Us</a></li>
                <li><a href="#" className="hover:text-primary">Our Team</a></li>
                <li><a href="#" className="hover:text-primary">Testimonials</a></li>
                <li><a href="#" className="hover:text-primary">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>contact@careerboost.com</li>
                <li>(555) 123-4567</li>
                <li>123 Career Avenue, Suite 200<br />Professional City, PR 12345</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} CareerBoost. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
