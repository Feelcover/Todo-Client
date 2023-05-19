import Form from "../Form/Form";
import Header from "../Header/Header";
import List from "../List/List";
function App() {
  return (
    <>
      <Header/>
      <main>
        <section className="container">
        <Form/>
        </section>
        <section className="container">
          <h1 className="pt-3">Новые задачи</h1>
        <List/>
        </section>
      </main>
    </>
  );
}

export default App;
