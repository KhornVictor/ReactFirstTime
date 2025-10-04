import { useEffect, useState } from "react";
import ProfileCard from "./components/prop";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/user.json") // file stored in public/data.json
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
        console.clear();
        console.log("JSON loaded:", data);
        data.forEach(user => console.log(user));
      })
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-wrap justify-center gap-6 p-6">
      {users.map((user, index) => (
        <ProfileCard
          key={index}
          name={user.name}
          title={user.title}
          image={user.image}
          backgroundImage={user.backgroundImage}
          about={user.about}
          posts={user.posts}
          following={user.following}
          followers={user.followers}
        />
      ))}
    </div>
  );
}

export default App;
