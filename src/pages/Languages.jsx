import React, { useState } from "react";
import "/src/CSS files/Languages.css";
import { Link } from "react-router-dom";
import { Search, X, Code2, Sparkles, TrendingUp, Zap } from "lucide-react";

const languages = [
  { name: "Java", icon: "J", color: "#007396", category: "Enterprise", popularity: 98 },
  { name: "JavaScript", icon: "JS", color: "#F7DF1E", category: "Web", popularity: 99 },
  { name: "Python", icon: "Py", color: "#3776AB", category: "General", popularity: 100 },
];

function Languages() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filteredSuggestions = languages.filter((lang) =>
        lang.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setFocusedIndex(-1);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (langName) => {
    setSearchTerm(langName);
    setSuggestions([]);
  };

  const handleKeyDown = (e) => {
    if (suggestions.length > 0) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setFocusedIndex((prev) =>
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setFocusedIndex((prev) => (prev > 0 ? prev - 1 : -1));
      } else if (e.key === "Enter" && focusedIndex >= 0) {
        e.preventDefault();
        handleSuggestionClick(suggestions[focusedIndex].name);
      }
    }
  };

  const filteredLanguages = languages.filter((lang) =>
    lang.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getLink = (name) => {
    const routes = {
      "Java": "/languages/java",
      "JavaScript": "/languages/javascript",
      "Python": "/languages/python",
      
    };
    return routes[name] || "#";
  };

  return (
    <div className="languages-container">

      {/* Profile Circle */}
      <Link to="/pages/profile" className="profile-circle">
        <div className="profile-avatar">
          <span className="profile-text">👤</span>
        </div>
        <div className="profile-status"></div>
      </Link>





      {/* Animated Background */}
      <div className="background-elements">
        <div className="background-grid"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Floating Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>

      <div className="content-wrapper">
        {/* Header Section */}
        <div className="languages-header">
          <div className="header-badge">
            <Sparkles className="badge-icon" />
            Master Programming
          </div>

          <h1>
            Programming Languages
          </h1>

          <p className="subtitle">
            Explore {languages.length} powerful programming languages and accelerate your coding journey
          </p>

          {/* Stats Section */}
          <div className="stats-row">
            <div className="stat-item">
              <Code2 className="stat-icon" />
              <div className="stat-content">
                <div className="stat-value">{languages.length}</div>
                <div className="stat-label">Languages</div>
              </div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <TrendingUp className="stat-icon" />
              <div className="stat-content">
                <div className="stat-value">100K+</div>
                <div className="stat-label">Developers</div>
              </div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <Zap className="stat-icon" />
              <div className="stat-content">
                <div className="stat-value">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="search-section">
          <div className="search-wrapper">
            <div className="search-container">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search for a language..."
                value={searchTerm}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className="search-input"
              />
              {searchTerm && (
                <button
                  className="clear-button"
                  onClick={() => {
                    setSearchTerm("");
                    setSuggestions([]);
                  }}
                  aria-label="Clear search"
                >
                  <X className="clear-icon" />
                </button>
              )}
            </div>

            {/* Suggestions Dropdown */}
            {suggestions.length > 0 && (
              <div className="suggestions-list">
                {suggestions.map((lang, index) => (
                  <div
                    key={index}
                    onClick={() => handleSuggestionClick(lang.name)}
                    className={`suggestion-item ${focusedIndex === index ? "focused" : ""}`}
                  >
                    <div
                      className="suggestion-icon"
                      style={{ background: lang.color }}
                    >
                      {lang.icon}
                    </div>
                    <div className="suggestion-content">
                      <span className="suggestion-name">{lang.name}</span>
                      <span className="suggestion-category">{lang.category}</span>
                    </div>
                    <div className="suggestion-arrow">→</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Results Count */}
          {searchTerm && (
            <div className="results-count">
              <span className="results-number">{filteredLanguages.length}</span>
              {" "}{filteredLanguages.length === 1 ? "language" : "languages"} found
            </div>
          )}
        </div>

        {/* Language Cards Grid */}
        <div className="languages-grid">
          {filteredLanguages.map((lang, index) => (
            <Link
              key={index}
              to={getLink(lang.name)}
              className="language-card"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="card-background" style={{ background: lang.color }}></div>

              <div className="card-content">
                <div className="card-header">
                  <div
                    className="language-icon"
                    style={{
                      background: lang.color,
                      boxShadow: `0 8px 25px ${lang.color}40`
                    }}
                  >
                    {lang.icon}
                  </div>

                  <div className="popularity-badge">
                    <div className="popularity-bar">
                      <div
                        className="popularity-fill"
                        style={{
                          width: `${lang.popularity}%`,
                          background: lang.color
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                <h3 className="language-name">{lang.name}</h3>
                <span className="language-category">{lang.category}</span>

                <div className="card-footer">
                  <span className="learn-more">
                    Learn More
                    <svg className="arrow-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 3L13 8L8 13M13 8H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="card-shine"></div>
              <div className="card-glow" style={{ background: lang.color }}></div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredLanguages.length === 0 && (
          <div className="no-results">
            <div className="no-results-icon">
              <Search size={64} />
            </div>
            <h3 className="no-results-title">No languages found</h3>
            <p className="no-results-text">
              Try searching with a different term or browse all languages
            </p>
            <button
              className="reset-button"
              onClick={() => {
                setSearchTerm("");
                setSuggestions([]);
              }}
            >
              View All Languages
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Languages;