import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCodeBranch, faClipboardList, faCog } from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css';

const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="dashboard">
      <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="toggle-icon" onClick={toggleSidebar}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {!isCollapsed && (
          <>
            <h3>Dashboard</h3>
            <ul>
              <li><FontAwesomeIcon icon={faHome} /> Overview</li>
              <li><FontAwesomeIcon icon={faCodeBranch} /> Repositories</li>
              <li><FontAwesomeIcon icon={faClipboardList} /> Scans</li>
              <li><FontAwesomeIcon icon={faCog} /> Settings</li>
            </ul>
          </>
        )}
      </div>
      <div className="main-content">
        <h2>Welcome to Your Dashboard</h2>
        <p>Here you can view your repositories, run scans, and manage your account settings.</p>
        <div className="repo-list">
          <h3>Your Repositories</h3>
          <ul>
            <li>Repository 1</li>
            <li>Repository 2</li>
            <li>Repository 3</li>
            {/* Add a loop to dynamically load user's repositories */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
