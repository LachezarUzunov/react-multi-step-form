import classes from "./App.module.css";
import Form from "./components/Form";

function App() {
  return (
    <section className={classes.container}>
      <article className={classes.header}>
        <h1>Website</h1>
        <button className="secondary__btn">Need Help?</button>
      </article>
      <Form />
    </section>
  );
}

export default App;
