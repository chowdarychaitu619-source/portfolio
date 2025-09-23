import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaShoppingCart, FaGavel, FaStar, FaBell, FaCode } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const projects = [
    {
      id: 0,
      title: "G-Mart",
      subtitle: "React Based E-Commerce Platform",
      period: "2024 - Present",
      description: "A full-stack e-commerce platform built with the MERN stack, featuring user authentication, product management, and a smooth shopping experience.",
      image: "/project-gmart.svg",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      features: [
        "User Authentication & Authorization",
        "Product Management System",
        "Advanced Search & Filtering",
        "Shopping Cart Functionality",
        "Product Reviews & Ratings",
        "Category-based Organization",
        "Responsive Design"
      ],
      github: "https://github.com/subashsg7777",
      demo: "#",
      icon: FaShoppingCart,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 1,
      title: "Servify",
      subtitle: "MERN Based Auction Platform",
      period: "2025 - Present",
      description: "A comprehensive bidding platform that connects clients with skilled professionals through real-time bidding and automated notifications.",
      image: "/project-servify.svg",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Real-time Communication"],
      features: [
        "Real-time Bidding System",
        "User Authentication & OTP Verification",
        "Project Posting & Management",
        "Automated Email Notifications",
        "Professional Profile Management",
        "Bid Tracking & History",
        "Secure Payment Integration"
      ],
      github: "https://github.com/subashsg7777",
      demo: "#",
      icon: FaGavel,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const techIcons = {
    "React": SiReact,
    "Node.js": SiNodedotjs,
    "Express.js": SiExpress,
    "MongoDB": SiMongodb,
    "Tailwind CSS": FaCode,
    "Real-time Communication": FaBell
  };

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-secondary-800 mb-4">
              My <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Showcasing my best work and the technologies I use to bring ideas to life
            </p>
          </motion.div>

          {/* Project Navigation */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {projects.map((project, index) => (
              <motion.button
                key={project.id}
                onClick={() => setActiveProject(index)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeProject === index
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-xl shadow-primary-500/30'
                    : 'bg-white text-secondary-600 hover:bg-gradient-to-r hover:from-primary-100 hover:to-accent-100 hover:text-primary-600 shadow-lg hover:shadow-xl'
                }`}
              >
                {project.title}
              </motion.button>
            ))}
          </motion.div>

          {/* Project Details */}
          <motion.div
            key={activeProject}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Project Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl card-hover">
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center relative">
                  <img 
                    src={projects[activeProject].image} 
                    alt={projects[activeProject].title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${projects[activeProject].color} mb-3 animate-pulse-slow`}>
                      {React.createElement(projects[activeProject].icon, { className: "text-white text-3xl" })}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {projects[activeProject].title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {projects[activeProject].subtitle}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Project Information */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-primary-600 font-semibold">{projects[activeProject].period}</span>
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                </div>
                <h3 className="text-3xl font-bold text-secondary-800 mb-4">
                  {projects[activeProject].title}
                </h3>
                <p className="text-lg text-secondary-600 leading-relaxed">
                  {projects[activeProject].description}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-lg font-semibold text-secondary-800 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].technologies.map((tech, index) => {
                    const IconComponent = techIcons[tech] || FaCode;
                    return (
                      <span
                        key={index}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                      >
                        <IconComponent className="text-sm" />
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-lg font-semibold text-secondary-800 mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {projects[activeProject].features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-secondary-600">
                      <FaStar className="text-primary-500 text-sm mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <motion.a
                  href={projects[activeProject].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary inline-flex items-center gap-2 shimmer"
                >
                  <FaGithub className="animate-pulse" />
                  View Code
                </motion.a>
                <motion.a
                  href={projects[activeProject].demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-accent inline-flex items-center gap-2"
                >
                  <FaExternalLinkAlt className="animate-bounce" />
                  Live Demo
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* GitHub Link */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-secondary-800 mb-4">
                View All My Projects
              </h3>
              <p className="text-secondary-600 mb-6">
                Check out my GitHub profile for more projects and contributions
              </p>
              <motion.a
                href="https://github.com/subashsg7777"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center gap-2"
              >
                <FaGithub />
                Visit GitHub Profile
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
