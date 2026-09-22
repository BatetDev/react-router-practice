import { useNavigate } from 'react-router';

const App = () => {
  const navigate = useNavigate();
  const names = ['popeye', 'olive', 'bluto', 'spinach'];

  const goToRandomProfile = () => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    navigate(`/profile/${randomName}`);
  };

  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <button onClick={goToRandomProfile}>Go to a random profile</button>
    </div>
  );
};

export default App;
