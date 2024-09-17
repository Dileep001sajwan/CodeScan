// import React from 'react';
// import './Home.css';

// const HomePage = () => {
//   return (
//     <div className="home-page">
//       <div className="left-section">
//         <h1>Welcome to CodeScanner</h1>
//         <p>
//           CodeScanner is a powerful tool that helps developers analyze, review, and manage their code 
//           repositories with ease. Whether you're working with a team or solo, our tool integrates 
//           seamlessly with GitHub and GitLab to provide a smooth and efficient code scanning experience.
//         </p>
//         <div className="icons-section">
//           <div className="icon">⚡ Fast Scanning</div>
//           <div className="icon">📊 Detailed Reports</div>
//           <div className="icon">🔄 CI/CD Integration</div>
//         </div>
//       </div>
//       <div className="right-section">
//         <div className="login-section">
//           <button className="github-login">Login with GitHub</button>
//           <button className="gitlab-login">Login with GitLab</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogin = (provider) => {
    // Perform any authentication logic here, if necessary.
    navigate('/dashboard'); // Navigate to the Dashboard
  };

  return (
    <div className="home-page">
      <div className="left-section">
        <h1>Welcome to CodeScanner</h1>
        <p>
          CodeScanner is a powerful tool that helps developers analyze, review, and manage their code 
          repositories with ease. Whether you're working with a team or solo, our tool integrates 
          seamlessly with GitHub and GitLab to provide a smooth and efficient code scanning experience.
        </p>
        <div className="icons-section">
          <div className="icon">⚡ Fast Scanning</div>
          <div className="icon">📊 Detailed Reports</div>
          <div className="icon">🔄 CI/CD Integration</div>
        </div>
      </div>
      <div className="right-section">
        <div className="login-section">
          <button className="github-login" onClick={() => handleLogin('github')}>Login with GitHub</button>
          <button className="gitlab-login" onClick={() => handleLogin('gitlab')}>Login with GitLab</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
