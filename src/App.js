import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  // Handle scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education', 'experience', 'projects', 'skills', 'achievements'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      {/* Navigation */}
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <div className="container nav-container">
          <motion.div 
            className="logo"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span>CJ</span>
          </motion.div>
          
          <div className="nav-controls">
            <button className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          
          <motion.ul 
            className={`nav-links ${isMenuOpen ? 'open' : ''}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <li className={activeSection === 'about' ? 'active' : ''}>
              <a href="#about" onClick={() => scrollToSection('about')}>About</a>
            </li>
            <li className={activeSection === 'education' ? 'active' : ''}>
              <a href="#education" onClick={() => scrollToSection('education')}>Education</a>
            </li>
            <li className={activeSection === 'experience' ? 'active' : ''}>
              <a href="#experience" onClick={() => scrollToSection('experience')}>Experience</a>
            </li>
            <li className={activeSection === 'projects' ? 'active' : ''}>
              <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
            </li>
            <li className={activeSection === 'skills' ? 'active' : ''}>
              <a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a>
            </li>
            <li className={activeSection === 'achievements' ? 'active' : ''}>
              <a href="#achievements" onClick={() => scrollToSection('achievements')}>Achievements</a>
            </li>
            <li>
              <button className="theme-toggle" onClick={toggleDarkMode} style={{ background: 'none', border: 'none' }}>
                <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
              </button>
            </li>
          </motion.ul>
        </div>
      </nav>

      <header className="header">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Chirag Jaiswal
          </motion.h1>
          
          <motion.p 
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Software Development Engineer
          </motion.p>
          
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p><i className="fas fa-envelope"></i> <a href="mailto:chiragjaiswalju@gmail.com">chiragjaiswalju@gmail.com</a></p>
            <p><i className="fas fa-phone"></i> +91-9330715519</p>
          </motion.div>
          
          <motion.div 
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.a 
              href="https://www.linkedin.com/in/chirag-jaiswal-76330b19a/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </motion.a>
            <motion.a 
              href="https://www.geeksforgeeks.org/user/chiragjaiswal454/?ref=header_profile/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-code"></i> GeeksForGeeks
            </motion.a>
            <motion.a 
              href="https://leetcode.com/u/chirag404/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-laptop-code"></i> LeetCode
            </motion.a>
          </motion.div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </header>

      <section className="section" id="about">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm a Software Development Engineer at slice with expertise in Go, TypeScript, and microservices architecture.
            I specialize in building high-performance, scalable systems that handle millions of transactions.
          </motion.p>
        </div>
      </section>

      <section className="section" id="education">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Education
          </motion.h2>
          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10 }}
          >
            <h3><i className="fas fa-graduation-cap"></i> Jadavpur University</h3>
            <p className="period"><i className="far fa-calendar-alt"></i> Jun 2019 - May 2023</p>
            <p>Bachelor of Engineering in Information Technology</p>
            <p>CGPA: 7.82</p>
          </motion.div>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Experience
          </motion.h2>
          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(98, 0, 234, 0.2)" }}
          >
            <h3><i className="fas fa-briefcase"></i> Software Development Engineer I</h3>
            <p className="company"><i className="fas fa-building"></i> slice, Bangalore, India</p>
            <p className="period"><i className="far fa-calendar-alt"></i> June 2023 - Present</p>
            
            <div className="project" data-aos="fade-up" data-aos-delay="300">
              <h4><i className="fas fa-project-diagram"></i> Mandible & Activity Center</h4>
              <p>
                A highly complex service powering the transaction history in the slice app, handling multiple 
                event-driven consumers and 25 million transactions monthly (about 6.5 million weekly).
              </p>
              <ul>
                <li><strong>Go Migration:</strong> Migrated critical consumers (e.g., PPI recharge/withdraw/autoload, borrow, repayment, UPI) from Node.js to Go for better performance and maintainability.</li>
                <li><strong>Transaction Filters:</strong> Led the Filters project using OpenSearch for faster transaction lookups and a more intuitive browsing experience.</li>
                <li><strong>Delayed Letter Queue:</strong> Implemented a delayed message queue to handle race conditions between dependent events.</li>
                <li><strong>Banking Integration:</strong> Collaborated with transaction orchestrator teams to onboard UPI, NEFT, RTGS, IMPS, and card-related transactions.</li>
                <li><strong>Spend Analytics:</strong> Re-architected from OpenSearch to PostgreSQL, reducing costs while ensuring real-time experience.</li>
                <li><strong>Credit Line on UPI:</strong> Drove user migration from "borrow" to "credit line on UPI" in accordance with NPCI guidelines.</li>
                <li><strong>End-to-End Ownership:</strong> Conducted brown-bag sessions for 10+ engineers, 2 engineering managers, and 1 director of engineering.</li>
              </ul>
            </div>
            
            <div className="project" data-aos="fade-up" data-aos-delay="400">
              <h4><i className="fas fa-exchange-alt"></i> slice Account (PPI) to Savings Account Migration</h4>
              <p>
                Led the project to migrate users from a PPI account structure to a slice Savings account, 
                collaborating with multiple teams to ensure a seamless transition and zero downtime.
              </p>
            </div>
            
            <div className="project" data-aos="fade-up" data-aos-delay="500">
              <h4><i className="fas fa-bell"></i> Poke Service & Nudges</h4>
              <p>
                Built and maintained the "Poke" microservice to nudge users toward key features 
                (dot, tooltip, bottom sheet, full-screen, etc.).
              </p>
              <ul>
                <li>Delivered a full-screen onboarding nudge that boosted user onboarding by 38%</li>
                <li>Managed lifecycle, frontend integrations, and cross-team contracts</li>
                <li>Provided in-depth code reviews and facilitated onboarding for new contributors</li>
              </ul>
            </div>
            
            <div className="project" data-aos="fade-up" data-aos-delay="600">
              <h4><i className="fas fa-exchange-alt"></i> MQTT Migration for Nudge Acknowledgment</h4>
              <p>
                Led the migration to MQTT for event-driven acknowledgment and consolidated redundant APIs.
              </p>
              <ul>
                <li>Reduced 9.7 Lakhs API calls/day by replacing HTTP APIs with MQTT events</li>
                <li>Merged redundant APIs, reducing 50 Lakhs API calls/day</li>
                <li>Optimized app performance in low-internet conditions</li>
              </ul>
            </div>
            
            <div className="project" data-aos="fade-up" data-aos-delay="700">
              <h4><i className="fas fa-code-branch"></i> Repository Consolidation</h4>
              <p>
                Merged two separate repositories (poke and poke-worker) into a single monorepo.
              </p>
              <ul>
                <li>Corrected an architecturally flawed setup, eliminating unnecessary network hops</li>
                <li>Achieved a 60% traffic reduction</li>
                <li>Simplified development and streamlined deployments</li>
              </ul>
            </div>
            
            <div className="project" data-aos="fade-up" data-aos-delay="800">
              <h4><i className="fas fa-database"></i> Mongo-to-Postgres Migrations</h4>
              <p>
                Designed PostgreSQL schemas and migrated traffic from MongoDB to PostgreSQL.
              </p>
              <ul>
                <li>Maintained 90% unit-test coverage</li>
                <li>Optimized queries and improved performance</li>
                <li>Migrated Discovery Service with zero downtime</li>
              </ul>
            </div>
            
            <div className="project" data-aos="fade-up" data-aos-delay="900">
              <h4><i className="fas fa-tachometer-alt"></i> Performance & Reliability Optimizations</h4>
              <p>
                Implemented circuit breakers and optimized database performance.
              </p>
              <ul>
                <li>Reduced CPU usage by 45-50% through SQL query optimization</li>
                <li>Lowered average response latency from 30ms to 5-8ms</li>
                <li>Introduced Kubernetes-based crons for archival and manual vacuuming</li>
                <li>Reduced CPU usage from 90% to 65-70% during vacuuming</li>
              </ul>
            </div>
            
            <div className="project" data-aos="fade-up" data-aos-delay="1000">
              <h4><i className="fas fa-tasks"></i> Savings L0 ToDo's</h4>
              <p>
                Integrated various todo's (global, bank downtime, marketing, user-level) 
                for the Savings L0 product, streamlining user engagement and lifecycle management.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Projects
          </motion.h2>
          
          <motion.div 
            className="card project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(98, 0, 234, 0.2)" }}
          >
            <h3><i className="fas fa-laptop-code"></i> SRIJAN DASHBOARD</h3>
            <p className="links">
              <motion.a 
                href="https://github.com/chiragjaiswal/Srijan-22" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, backgroundColor: "var(--primary-color)", color: "white" }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-github"></i> GitHub
              </motion.a>
            </p>
            <p className="tech"><i className="fas fa-code"></i> React, MongoDB, NodeJS, Express</p>
            <p>
              Developed a full-stack dashboard for registration and management of the annual intra-college 
              techno fest with over 5,000 participants. Created an admin interface for event coordinators 
              to oversee participant data.
            </p>
          </motion.div>
          
          <motion.div 
            className="card project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(98, 0, 234, 0.2)" }}
          >
            <h3><i className="fas fa-route"></i> PathVisualiser</h3>
            <p className="links">
              <motion.a 
                href="https://github.com/chiragjaiswal/PathVisualiser" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, backgroundColor: "var(--primary-color)", color: "white" }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-github"></i> GitHub
              </motion.a>
            </p>
            <p className="tech"><i className="fas fa-code"></i> JavaScript, React, HTML/CSS</p>
            <p>
              Developed a web application to visually demonstrate Dijkstra's algorithm in finding the shortest 
              path between two user-defined points. Features an interactive grid layout where users can set 
              start and end nodes, add obstacles, and observe real-time visualization.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Technical Skills
          </motion.h2>
          
          <div className="skills-container">
            <motion.div 
              className="skill-category"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(98, 0, 234, 0.2)" }}
            >
              <h3><i className="fas fa-code"></i> Languages & Frameworks</h3>
              <ul className="skill-list">
                {['Go', 'TypeScript', 'JavaScript', 'NestJS', 'SQL', 'C/C++', 'Java'].map((skill, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover={{ x: 5, color: "var(--primary-color)" }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(98, 0, 234, 0.2)" }}
            >
              <h3><i className="fas fa-server"></i> Technologies</h3>
              <ul className="skill-list">
                {['AWS', 'REST', 'Kafka', 'Postgres', 'OpenSearch', 'React'].map((skill, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover={{ x: 5, color: "var(--primary-color)" }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="skill-category"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(98, 0, 234, 0.2)" }}
            >
              <h3><i className="fas fa-tools"></i> Tools</h3>
              <ul className="skill-list">
                {['Postman', 'Visual Studio', 'JetBrains', 'ArgoCD', 'Sentry', 'Elastic', 'Amplitude', 'Grafana', 'Jenkins', 'Git'].map((skill, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover={{ x: 5, color: "var(--primary-color)" }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section" id="achievements">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Achievements and Roles
          </motion.h2>
          
          <motion.ul 
            className="achievements-list"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { icon: 'trophy', title: 'GeeksforGeeks:', desc: 'Institute Ranking 1 (solved 1000+ problems)' },
              { icon: 'medal', title: 'CodeChef:', desc: 'Ranked 68th globally in CodeChef Cook Off and 98th globally in CodeChef Starters' },
              { icon: 'code', title: 'LeetCode:', desc: 'Solved 900+ problems' },
              { icon: 'users', title: 'Lead, Code Club JU:', desc: 'Mentored 1000+ students at Jadavpur University' },
              { icon: 'calendar-check', title: 'Organizer of Srijan 2023:', desc: 'Planned and executed the annual Techno-Management Fest' },
              { icon: 'laptop-code', title: 'Core Development Team, Srijan 2022:', desc: 'Developed coding problems for contests with 1500+ participants' },
              { icon: 'lightbulb', title: 'Member, Jadavpur University Entrepreneurship Cell', desc: '' }
            ].map((achievement, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ x: 5, backgroundColor: "rgba(98, 0, 234, 0.05)" }}
              >
                <i className={`fas fa-${achievement.icon}`}></i>
                <div>
                  <strong>{achievement.title}</strong> {achievement.desc}
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <motion.footer 
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Chirag Jaiswal. All rights reserved.</p>
          <div className="back-to-top">
            <motion.button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fas fa-arrow-up"></i>
            </motion.button>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;
