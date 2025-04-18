import React, { useEffect, useState } from 'react';
import '../styles/UserProfilePage.css'; // Create this CSS file for styling

const UserProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate user data fetch (replace with real API call if available)
    const mockUser = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      joinedDate: '2024-06-15',
      bio: 'Passionate about trading electronics, books, and furniture.',
    };

    setUser(mockUser);
  }, []);

  if (!user) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="user-profile-container">
      <h1>User Profile</h1>
      <div className="profile-card">
        <div className="profile-info">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Joined:</strong> {new Date(user.joinedDate).toLocaleDateString()}</p>
          <p><strong>Bio:</strong> {user.bio}</p>
        </div>
        <button className="edit-profile-button">Edit Profile</button>
      </div>
    </div>
  );
};

export default UserProfilePage;
