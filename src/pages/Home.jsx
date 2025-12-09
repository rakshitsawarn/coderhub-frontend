import React, { useState } from "react";
import "../css_files/home.css";
import { Link } from "react-router-dom";
import { Code2, BookOpen, TrendingUp, Users, Award, Zap, ArrowRight, Sparkles, Star, AwardIcon } from "lucide-react";

function Home() {
  const [hoveredLang, setHoveredLang] = useState(null);
  const [hoveredCourse, setHoveredCourse] = useState(null);

  const trendingLanguages = [
    { name: "JavaScript", icon: "JS", color: "#f7df1e", popularity: 98 },
    { name: "Python", icon: "Py", color: "#3776ab", popularity: 100 },
    { name: "Java", icon: "J", color: "#007396", popularity: 95 },
  ];

  const trendingCourses = [
    { name: "Real-Time Chat Server", icon: "💬", students: "50K+", rating: 4.9 },
    { name: "File Encryption and Decryption tool", icon: "🛡️", students: "35K+", rating: 4.8 },
    { name: "Deepfake Detection Software", icon: "🧠", students: "42K+", rating: 4.9 },
    { name: "Online Banking System", icon: "🏦", students: "28K+", rating: 4.7 },
    { name: "CRUD Console App with JSON", icon: "📂", students: "45K+", rating: 4.8 }
  ];

  const features = [
    { icon: Users, title: "Expert Instructors", desc: "Learn from industry professionals" },
    { icon: Award, title: "Certification", desc: "Get recognized credentials" },
    { icon: Zap, title: "Fast Learning", desc: "Accelerated course structure" }
  ];



  return (
    <div className="home-container">

      {/* Profile Circle */}
      <Link to="/pages/profile" className="profile-circle">
        <div className="profile-avatar">
          <span className="profile-text">👤</span>
        </div>
        <div className="profile-status"></div>
      </Link>



      {/* Animated Background */}
      <div className="background-wrapper">
        <div className="background-grid"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Floating Particles */}
      <div className="particles">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      <div className="content-wrapper">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-badge">
            <Sparkles className="badge-icon" />
            <span className="badge-text">Start Your Coding Journey</span>
          </div>

          <h1 className="hero-title">
            Master the Art of <span className="gradient-text">Coding</span>
          </h1>

          <p className="hero-subtitle">
            Transform your career with industry-leading courses and hands-on practice
          </p>

          <div className="hero-buttons">
            <Link to="/courses" className="btn-primary">
              <span>Explore Courses</span>
              <ArrowRight className="btn-icon" />
            </Link>
            <Link to="/Languages" className="btn-secondary">
              <span>View Languages</span>
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <Users className="stat-icon" />
              <div className="stat-content">
                <div className="stat-number">100K+</div>
                <div className="stat-label">Active Students</div>
              </div>
            </div>

            <div className="stat-card">
              <Code2 className="stat-icon" />
              <div className="stat-content">
                <div className="stat-number">3</div>
                <div className="stat-label">Languages</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="feature-card">
                <div>
                  <Icon />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            );
          })}
        </section>

        {/* Main Cards */}
        <section className="main-cards">
          <Link to="/Languages" className="main-card">
            <div className="card-background card-bg-1"></div>
            <div className="card-content">
              <div className="card-icon-wrapper">
                <Code2 className="card-icon" />
              </div>
              <h2 className="card-title">Programming Languages</h2>
              <p className="card-description">
                Explore to kickstart your coding journey
              </p>
              <div className="card-footer">
                <span className="card-link-text">
                  Start Learning
                  <ArrowRight className="card-arrow" />
                </span>
              </div>
            </div>
            <div className="card-shine"></div>
          </Link>

          <Link to="/courses" className="main-card">
            <div className="card-background card-bg-2"></div>
            <div className="card-content">
              <div className="card-icon-wrapper">
                <BookOpen className="card-icon" />
              </div>
              <h2 className="card-title">Premium Courses</h2>
              <p className="card-description">
                Find curated courses to level up your skills
              </p>
              <div className="card-footer">
                <span className="card-link-text">
                  Browse Courses
                  <ArrowRight className="card-arrow" />
                </span>
              </div>
            </div>
            <div className="card-shine"></div>
          </Link>



          <Link to="/Pages/DailyQuiz" className="main-card">
            <div className="card-background card-bg-2"></div>
            <div className="card-content">

              <div className="card-icon-wrapper">
                <Star className="card-icon" />
              </div>

              <h2 className="card-title">Daily Tasks</h2>
              <p className="card-description">
                Personalised questions for you
              </p>
              <div className="card-footer">
                <span className="card-link-text">
                  Try Now
                  <ArrowRight className="card-arrow" />
                </span>
              </div>
            </div>
            <div className="card-shine"></div>
          </Link>



          <Link to="/pages/premium_projects" className="main-card">
            <div className="card-background card-bg-2"></div>
            <div className="card-content">
              <div className="card-icon-wrapper">
                <AwardIcon className="card-icon" />
              </div>
              <h2 className="card-title">Premium Projects</h2>
              <p className="card-description">
                Find Industry given projects up your skills
              </p>
              <div className="card-footer">
                <span className="card-link-text">
                  Browse Projects
                  <ArrowRight className="card-arrow" />
                </span>
              </div>
            </div>
            <div className="card-shine"></div>
          </Link>



          <Link to="/schedule_interview" className="main-card">
            <div className="card-background card-bg-2"></div>
            <div className="card-content">
              <div className="card-icon-wrapper">
                <Users className="card-icon" />
              </div>
              <h2 className="card-title">Schedule Interview</h2>
              <p className="card-description">
                Schedule mock interviews with experts
              </p>
              <div className="card-footer">
                <span className="card-link-text">
                  Browse Experts
                  <ArrowRight className="card-arrow" />
                </span>
              </div>
            </div>
            <div className="card-shine"></div>
          </Link>









        </section>

        {/* Trending Languages */}
        <section className="trending-section">
          <div className="section-header">
            <div className="header-content">
              <TrendingUp className="header-icon" />
              <div>
                <h3 className="section-title">Trending Languages</h3>
                <p className="section-subtitle">Most popular programming languages in 2025</p>
              </div>
            </div>
            <Link to="/Languages" className="view-all-link">
              View All <ArrowRight className="link-arrow" />
            </Link>
          </div>

          <div className="trending-grid">
            {trendingLanguages.map((lang, index) => {
              const path = `/languages/${lang.name.toLowerCase().replace("++", "pp")}`;
              return (
                <Link
                  to={path}
                  key={index}
                  className="trending-card"
                  onMouseEnter={() => setHoveredLang(index)}
                  onMouseLeave={() => setHoveredLang(null)}
                >
                  <div className="trending-card-bg" style={{ background: lang.color }}></div>

                  <div className="trending-card-content">
                    <div className="trending-icon" style={{
                      background: lang.color,
                      boxShadow: `0 8px 25px ${lang.color}40`
                    }}>
                      {lang.icon}
                    </div>

                    <h4 className="trending-name">{lang.name}</h4>

                    <div className="popularity-bar">
                      <div
                        className="popularity-fill"
                        style={{
                          width: `${lang.popularity}%`,
                          background: lang.color
                        }}
                      ></div>
                    </div>

                    <div className="trending-badge">
                      <Star className="badge-star" />
                      <span>Popular</span>
                    </div>
                  </div>

                  <div className="card-glow" style={{ background: lang.color }}></div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Trending Courses */}
        <section className="trending-section">
          <div className="section-header">
            <div className="header-content">
              <BookOpen className="header-icon" />
              <div>
                <h3 className="section-title">Trending Projects</h3>
                <p className="section-subtitle">Top projects chosen by students worldwide</p>
              </div>
            </div>
          </div>

          <div className="trending-grid">
            {trendingCourses.map((course, index) => (
              <div
                key={index}
                className="trending-card course-card"
                onMouseEnter={() => setHoveredCourse(index)}
                onMouseLeave={() => setHoveredCourse(null)}
              >
                <div className="trending-card-content">
                  <div className="course-icon">{course.icon}</div>

                  <h4 className="trending-name">{course.name}</h4>

                  <div className="course-meta">
                    <div className="meta-item">
                      <Users className="meta-icon" />
                      <span>{course.students}</span>
                    </div>
                    <div className="meta-item">
                      <Star className="meta-icon rating-star" />
                      <span>{course.rating}</span>
                    </div>
                  </div>


                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Learning?</h2>
            <p className="cta-subtitle">
              Join thousands of students already learning on our platform
            </p>

          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
