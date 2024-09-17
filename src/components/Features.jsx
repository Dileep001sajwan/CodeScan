import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features">
      <h2>Our Features</h2>
      <div className="features-list">
        <div className="feature-item">
          <h3>Fast Scanning</h3>
          <p>Quickly analyze and scan your code with minimal latency.</p>
        </div>
        <div className="feature-item">
          <h3>Detailed Reports</h3>
          <p>Receive comprehensive reports to improve your code quality.</p>
        </div>
        <div className="feature-item">
          <h3>CI/CD Integration</h3>
          <p>Seamlessly integrate with your continuous integration and deployment pipelines.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
