import Exercise1 from "./components/Exercise1";
import Exercise2 from "./components/Exercise2";

function App() {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Exercises</h1>

      {/* Exercise 1: Image Gallery */}
      <section style={{ marginBottom: 60 }}>
        <h2 style={{ textAlign: "center" }}>Exercise 1 – Image Gallery</h2>
        <Exercise1 />
      </section>

      {/* Placeholders for future exercises */}
      <section>
        <h2 style={{ textAlign: "center", opacity: 0.5 }}>Exercise 2 – 7</h2>
        <Exercise2 />
      </section>
    </div>
  );
}

export default App;
