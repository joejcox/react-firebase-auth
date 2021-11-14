import "./test.css";

const App = () => {
  console.log(process.env.FIREBASE_API_KEY);
  return (
    <div className="wrapper">
      <h1>Hello World!</h1>
    </div>
  );
};

export default App;
