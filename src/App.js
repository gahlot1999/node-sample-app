import { useEffect, useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    async function getInfo() {
      try {
        const res = await fetch(
          'https://node-sample-app-kbkl.onrender.com/api/info',
        );
        if (!res.ok) {
          throw new Error('Failed fetching user information.');
        }
        const data = await res.json();
        setUserInfo(data.users);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getInfo();
  }, []);

  console.log(userInfo);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        userInfo.map((user) => (
          <div style={{ backgroundColor: 'lightpink' }} key={user.id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
            <p>
              Address:{' '}
              {`${user.address.city}, ${user.address.state}, ${user.address.country}`}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
