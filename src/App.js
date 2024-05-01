import "./App.css";
import Header from "./components/Header/Header";
import JobListing from "./components/Joblisting/JobListing";

function App() {
  return (
    <>
      <div style={{ display: "flex",gap:"20px" }}>
        <Header />
      </div>
      <div>
        <JobListing />
      </div>
    </>
  );
}

export default App;
