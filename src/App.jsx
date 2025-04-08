import './App.css'

function App() {
  const jobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp",
      location: "San Francisco, CA",
    },
    {
      id: 2,
      title: "Product Designer",
      company: "DesignHub",
      location: "New York, NY",
    },
    {
      id: 3,
      title: "Full Stack Engineer",
      company: "StartupX",
      location: "Remote",
    },
    {
      id: 4,
      title: "DevOps Engineer",
      company: "CloudTech",
      location: "Seattle, WA",
    },
  ];

  const employers = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/58/Apple_logo_black.svg",
  ];

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <img 
          src="https://placehold.co/120x40?text=JobHub" 
          alt="JobHub Logo" 
          className="logo" 
        />
        <div className="nav-links">
          <a href="#jobs">Jobs</a>
          <a href="#employers">Active Employers</a>
          <a href="#blogs">Job Blogs</a>
          <a href="#pricing">Pricing</a>
        </div>
      </nav>

      {/* Search Section */}
      <section className="search-section">
        <input
          type="text"
          placeholder="Search for jobs..."
          className="search-bar"
        />
      </section>

      {/* Featured Jobs */}
      <section className="featured-jobs">
        <h2 className="section-title">Featured Jobs</h2>
        <div className="job-list">
          {jobs.map((job) => (
            <div key={job.id} className="job-card">
              <h3 className="job-title">{job.title}</h3>
              <p className="company-name">{job.company}</p>
              <p className="location">{job.location}</p>
              <button className="apply-button">Apply Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Active Employers */}
      <section className="employers-section">
        <h2 className="section-title">Active Employers</h2>
        <div className="employer-logos">
          {employers.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Employer ${index + 1}`}
              className="employer-logo"
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;