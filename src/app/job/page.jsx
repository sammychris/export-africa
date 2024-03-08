
'use client'
import Head from 'next/head'
// import HeroSection from '../components/HeroSection' 
// import ValueProps from '../components/ValueProps'
// import LatestFeatured from '../components/LatestFeatured'
// import Testimonials from '../components/Testimonials'
// import Footer from '../components/Footer'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick'; // You'll need to install a slider library
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4"> 
      <Head>
        <title>Your Portal Name | Remote Dev Jobs & Open Source</title>
        {/* Add meta description */}
      </Head>

      {/* Top Banner - Logo, Tagline, CTAs - Replace with your elements */}
      {/* <header className="bg-gray-100 py-4">  */}
        {/* ...   */}
      {/* </header> */}
      <Header />

      <main>
        <HeroSection />
        <ValueProps />
        <LatestFeatured /> 
        <Testimonials />  
      </main>

      <Footer />
    </div>
  )
}


function HeroSection() {
    return (
      <section className="bg-gradient-to-br from-blue-400 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">The Hub for Remote Web Developers & Open-Source Projects</h1>
          <p className="mb-6">Showcase skills, build in the open, find top remote opportunities</p>
            <div className="flex items-center gap-4 mb-8"> {/* Adjust mb-8 for margin as needed */}
                <div className="flex-1"> 
                    <input type="text" placeholder="Search by skill, tech stack..." 
                        className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
                </div>

                <div className="flex-1"> 
                    <input type="text" placeholder="Search open-source projects..." 
                        className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
                </div>
            </div>

            {/* <div className="flex gap-4"> 
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-5 rounded-md">
                    Find Developer Talent
                </button>
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-5 rounded-md">
                    Find Remote Jobs
                </button>
            </div> */}

        </div>
     </section>
   )
}





function ValueProps() {
  const valueProps = [
    { icon: 'icon-placeholder', title: 'Niche Remote Focus', description: 'Find and be found for truly remote opportunities.' }, 
    { icon: 'icon-placeholder', title: 'Open-Source Portfolio', description:  'Showcase your skills through real-world contributions.' },
    { icon: 'icon-placeholder', title: 'Community Powered', description: 'Connect with like-minded developers and build your network.' },
    // ... Add more value prop items as needed
  ];

  return (
    <section className="bg-white py-12"> 
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose Our Platform</h2> 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> 
          {valueProps.map((prop) => (
            <div key={prop.title} className="bg-gray-100 rounded-md p-6 text-center"> 
              {/* Replace with actual icon component/element */}
              <div className="mb-4">{prop.icon}</div>
              <h3 className="text-lg font-medium mb-2">{prop.title}</h3>
              <p>{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

  
function LatestFeatured() {
  // Placeholder Data - Ideally, fetch from API/database
  const latestJobs = [
    { title: 'Frontend React Developer', company: 'Awesome Tech Co.', skills: ['React', 'JavaScript', 'CSS'], location: 'Remote' },
    { title: 'Backend Node.js Developer', company: 'Amazing Software Solutions', skills: ['Node.js', 'Express', 'MongoDB'], location: 'Onsite' },
    { title: 'Full-stack Developer', company: 'Innovative Web Solutions', skills: ['React', 'Node.js', 'MongoDB', 'HTML', 'CSS', 'JavaScript'], location: 'Remote' },
    { title: 'UI/UX Designer', company: 'Creative Design Studio', skills: ['UI Design', 'UX Design', 'Adobe XD', 'Figma'], location: 'Onsite' },
];

const featuredProjects = [
    { name: 'Open-Source eCommerce', tech: ['Next.js', 'Tailwind', 'GraphQL'], description: 'A collaborative e-commerce platform.' },
    { name: 'Social Networking App', tech: ['React Native', 'Firebase', 'Redux'], description: 'Connect with friends and family.' },
    { name: 'Online Learning Platform', tech: ['Django', 'PostgreSQL', 'Bootstrap'], description: 'Learn new skills anytime, anywhere.' },
    { name: 'Real-time Chat Application', tech: ['Socket.io', 'Express', 'React'], description: 'Instant messaging for seamless communication.' },
];

  return (
    <section className="py-12"> 
      <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold">Latest & Featured</h2>
            <div className="flex gap-2"> {/* Add gap space */}
                <Link href="/jobs"> 
                <div className="text-blue-500 hover:underline">View All Jobs</div>
                </Link>
                <Link href="/projects">
                <div className="text-blue-500 hover:underline">View All Projects</div>
                </Link>
            </div>
           </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
          <div> {/* Latest Jobs */}
            <h3 className="text-lg font-medium mb-4">Latest Jobs</h3>
            <ul className="space-y-4"> 
              {latestJobs.map((job) => (
                // <li key={job.title} className="bg-gray-100 rounded-md p-4">
                //   {/* Job Title, Company, Skills, Location */}
                // </li>
                <li key={job.title} className="bg-gray-100 rounded-md p-4">
                    <h3 className="text-lg font-medium mb-2">{job.title}</h3>
                    <p className="text-gray-600">{job.company}</p>
                    <ul className="flex flex-wrap gap-2 mt-2"> 
                    {job.skills.map((skill) => (
                        <li key={skill} className="bg-gray-200 px-2 py-1 rounded text-xs">{skill}</li> 
                    ))}
                    </ul>
                    {/* Potentially add location depending on how it's stored in the job data */}
                </li>
              
              ))}
            </ul>
          </div>

          <div> {/* Featured Projects */}
            <h3 className="text-lg font-medium mb-4">Featured Projects</h3>
            <ul className="space-y-4">
              {featuredProjects.map((project) => (
                // <li key={project.name} className="bg-gray-100 rounded-md p-4">
                //   {/* Project Name, Tech Stack, Description */}  
                // </li>
                <li key={project.name} className="bg-gray-100 rounded-md p-4">
                    <h3 className="text-lg font-medium mb-2">{project.name}</h3>
                    <ul className="flex flex-wrap gap-2 mt-2">
                        {project.tech.map((techItem) => (
                        <li key={techItem} className="bg-gray-200 px-2 py-1 rounded text-xs">{techItem}</li>
                        ))}
                    </ul>
                    <p className="mt-2">{project.description}</p>
                </li>

              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const Header = () => (
    <header className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
            {/* Logo and Tagline */}
            <div className="flex items-center"> 
            <a href="/" className="mr-4"> 
                {/* Replace with your logo image (or text logo) */}
                <img src="/your-logo.svg" alt="Your Portal Name" className="h-8" />  
            </a>
            <div>
                <h1 className="text-xl font-semibold">Your Portal Name</h1>  
                {/* <p className="text-sm">The Hub for Remote Web Developers & Open-Source Projects</p>   */}
            </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4"> 
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-5 rounded-md">Find Developer Talent</button>
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-5 rounded-md">Find Remote Jobs</button>
            </div>
        </div>
    </header>
)


function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8"> 
      <div className="container mx-auto px-4 flex flex-col items-center md:flex-row md:justify-between">

        {/* Logo/Copyright */}
        <div className="mb-4 md:mb-0">
          <Link href="/">
            <div className="text-lg font-semibold">Your Portal Name</div> 
          </Link>
          <p className="text-sm mt-2">&copy; {new Date().getFullYear()} All Rights Reserved.</p> 
        </div>

        {/* Navigation Links */}
        <nav> 
          <ul className="flex flex-wrap gap-4 justify-center md:justify-start">
            <li><Link href="/about">About Us</Link></li> 
            <li><Link href="/blog">Blog</Link></li> 
            <li><Link href="/contact">Contact</Link></li> 
          </ul>
        </nav>

      </div>
    </footer>
  );
}




function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    { quote: 'Amazing platform! Found my ideal remote job within a week.', name: 'Sarah J.', role: 'Frontend Developer' },
    { quote: 'I love the community here. It\'s great for networking and learning new skills.', name: 'John D.', role: 'Full-stack Developer' },
    { quote: 'Highly recommended! Helped me land multiple freelance projects.', name: 'Emily S.', role: 'UI/UX Designer' },
    { quote: 'The best job board I\'ve used so far. Very user-friendly interface.', name: 'Michael P.', role: 'Backend Developer' },
    { quote: 'Excellent resource for remote work opportunities. 10/10 would recommend!', name: 'Lisa W.', role: 'Data Scientist' },
    // Add more testimonial objects as needed
  ];
  

  // Basic Slider Settings
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Option to enable autoplay if desired
    autoplaySpeed: 5000, // Control autoplay interval if used
  };

  return (
    <section className="bg-gray-100 py-12"> 
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-8 text-center">What Our Users Say</h2>

        <Slider {...settings}> 
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white rounded-md shadow-md"> 
              <p className="text-lg italic mb-4">{testimonial.quote}</p>
              <div className="flex items-center">
                {/* Consider adding an avatar image here if available */}
                <div> 
                  <h3 className="text-base font-medium">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
