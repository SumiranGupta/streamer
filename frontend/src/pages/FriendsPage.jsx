import { useEffect, useState } from "react";

const FriendsPage = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/friends") // or your actual endpoint
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Failed to load friends");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading friends...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Your Friends</h1>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>{friend.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FriendsPage;
