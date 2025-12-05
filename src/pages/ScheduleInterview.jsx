import React, { useState } from "react";
import { Calendar, Clock, Video, Star, Sparkles, Crown, Zap, MessageCircle, CheckCircle, Award, TrendingUp, Users } from "lucide-react";
import "/src/CSS files/schedule_interview.css";

const ScheduleInterview = () => {
    const [selectedInterviewer, setSelectedInterviewer] = useState(null);
    const [googleFormUrl, setGoogleFormUrl] = useState("https://forms.gle/PFnv9XRdZkdeEoyM9");


    const interviewers = [
        {
            id: 1,
            name: "Amruta Vivek Saharkar",
            role: "AI/ML Intern",
            company: "Genesys International Corporation Ltd",
            experience: "6 months",
            specialization: "AI Developer",
            availability: "Available Today",
            imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",            // OR use a placeholder if the image doesn't load
            linkedin: "https://www.linkedin.com/in/amruta-saharkar-70bb4b257/",
            tags: ["AI model development", "RAG", "Langchain"],
            price: "₹999",
            badge: "Top Rated"
        }
    ];

    const features = [
        {
            icon: Video,
            title: "Live Video Call",
            description: "High-quality 1-on-1 video sessions"
        },
        {
            icon: Award,
            title: "Get Certified",
            description: "Receive completion certificate"
        },
        {
            icon: Clock,
            title: "Flexible Timing",
            description: "Choose slots that fit your schedule"
        },
        {
            icon: TrendingUp,
            title: "Track Progress",
            description: "Detailed feedback after each session"
        }
    ];

    return (
        <div className="schedule-interview-container">
            {/* Profile Circle */}
            <a href="/pages/profile" className="profile-circle">
                <div className="profile-avatar">
                    <span className="profile-text">👤</span>
                </div>
                <div className="profile-status"></div>
            </a>

            {/* Animated Background */}
            <div className="premium-background">
                <div className="premium-grid"></div>
                <div className="premium-orb orb-1"></div>
                <div className="premium-orb orb-2"></div>
                <div className="premium-orb orb-3"></div>
            </div>

            {/* Floating Elements */}
            <div className="floating-elements">
                <div className="float-icon float-1">
                    <Crown className="icon" />
                </div>
                <div className="float-icon float-2">
                    <Star className="icon" />
                </div>
                <div className="float-icon float-3">
                    <Zap className="icon" />
                </div>
                <div className="float-icon float-4">
                    <Sparkles className="icon" />
                </div>
            </div>

            {/* Main Content */}
            <div className="interview-content">
                {/* Header Section */}
                <div className="interview-header">
                    <div className="header-badge">
                        <Sparkles className="badge-icon" />
                        <span className="badge-text">Premium Interviews</span>
                    </div>

                    <h1 className="interview-title">
                        Schedule Your <span className="gradient-text">Mock Interview</span>
                    </h1>

                    <p className="interview-subtitle">
                        Practice with industry experts from top tech companies and boost your confidence for real interviews
                    </p>
                </div>

                {/* Features Grid */}
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="feature-icon-circle">
                                <feature.icon className="feature-icon" />
                            </div>
                            <h4 className="feature-title">{feature.title}</h4>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Interviewer Cards Grid */}
                <div className="interviewers-grid">
                    {interviewers.map((interviewer, index) => (
                        <div
                            key={interviewer.id}
                            className={`interviewer-card ${selectedInterviewer === interviewer.id ? 'selected' : ''}`}
                            style={{ animationDelay: `${index * 0.05}s` }}
                            onClick={() => setSelectedInterviewer(interviewer.id)}
                        >
                            <div className="card-shine"></div>

                            {/* Compact Header */}
                            <div className="card-compact-header">
                                <div className="interviewer-avatar-small">
                                    <img
                                        src={interviewer.imageUrl}
                                        alt={interviewer.name}
                                        className="avatar-img-small"
                                    />
                                </div>


                                <div className="header-info">
                                    <div className="name-badge-row">
                                        <h3 className="interviewer-name-compact">{interviewer.name}</h3>

                                        {/* Crown Badge */}
                                        <div className="card-badge-compact">
                                            <Crown className="badge-icon-tiny" />
                                        </div>

                                        {/* LinkedIn Button */}
                                        <a
                                            href={interviewer.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="linkedin-btn"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.2 8h4.6v14H.2V8zM8.3 8h4.4v1.9h.1c.6-1.1 2-2.3 4.2-2.3 4.5 0 5.4 3 5.4 6.9V22H17V15c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V22H8.3V8z" />
                                            </svg>
                                        </a>
                                    </div>

                                    <p className="interviewer-role-compact">{interviewer.role}</p>
                                    <span className="company-badge-compact">{interviewer.company}</span>
                                </div>
                            </div>

                            {/* Compact Stats */}
                            <div className="stats-row-compact">


                                <div className="availability-compact">
                                    <div className="availability-dot-small"></div>
                                    <span>Available</span>
                                </div>
                            </div>

                            {/* Tags Compact */}
                            <div className="tags-compact">
                                {interviewer.tags.map((tag, idx) => (
                                    <span key={idx} className="skill-tag-compact">{tag}</span>
                                ))}
                            </div>

                            {/* Footer */}
                            <div className="card-footer-compact">
                                <div className="price-compact">
                                    <span className="price-value-compact">{interviewer.price}</span>
                                </div>
                                <button
                                    className="google-form-btn"
                                    onClick={() => window.open(googleFormUrl, "_blank")}
                                >
                                    Fill Booking Form
                                </button>

                            </div>
                        </div>
                    ))}
                </div>

                {/* Info Box */}
                <div className="info-box">
                    <div className="info-icon-wrapper">
                        <Video className="info-icon" />
                    </div>
                    <div className="info-content">
                        <h4 className="info-title">How It Works?</h4>
                        <p className="info-text">
                            Select an interviewer based on your target role, choose your preferred time slot, and join a
                            comprehensive mock interview session. Get detailed feedback,
                            personalized tips, and a performance report to improve your interview skills.
                        </p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ScheduleInterview;