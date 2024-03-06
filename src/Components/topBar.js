import React from "react";

const UserProfile = ({ username, imageSrc }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    }}
  >
    <div
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        overflow: "hidden",
        border: "2px solid #e91e63",
        marginBottom: "5px",
      }}
    >
      <img
        src={imageSrc}
        alt={username}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "50%",
        }}
      />
    </div>
    <span>{username}</span>
  </div>
);

const StorySection = () => {

  const users = [
    { username: "user1", imageSrc: "mj.jpg" },
    { username: "user2", imageSrc: "user2.jpg" },
    { username: "user3", imageSrc: "user3.jpg" },
    { username: "user4", imageSrc: "user4.jpg" },
    { username: "user5", imageSrc: "user5.jpg" },
    { username: "user6", imageSrc: "user6.jpg" },
    { username: "user7", imageSrc: "user7.jpg" },
    { username: "user8", imageSrc: "user8.jpg" },
   
  ];

  return (
    <div style={{ display: "flex", gap: "10px", margin: "0 auto" }}>
      {users.map((user, index) => (
        <UserProfile key={index} {...user} />
      ))}
    </div>
  );
};

function App() {
  return (
    <div
      style={{
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <StorySection />
    </div>
  );
}

export default App;
