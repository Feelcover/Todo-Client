import Form from "../Form/Form";
import Header from "../Header/Header";
import Items from "../Items/Items";

function App() {
  return (
    <>
      <Header/>
      <main>
        <section className="container">
        <Form/>
        </section>
        <section className="container">
        <Items/>
        </section>
      </main>
    </>
  );
}

export default App;
