import "./App.css";
import { About, Contact, Footer, Hero, Navbar, Projects } from "./views";
import { LanguageSwitcher } from "./components/LanguageSwitcher";

function App() {
  return (
    <>
      <header>
        <LanguageSwitcher />
        <Navbar />
      </header>

      <main>
        {/* Hero section */}
        <section>
          <Hero />
        </section>

        {/* About section */}
        <section>
          <About />
        </section>

        {/* Projects section */}
        <section>
          <Projects />
        </section>

        {/* Contact section */}
        <section>
          <Contact />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
