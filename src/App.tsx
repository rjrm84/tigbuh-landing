import Hero from "./Components/Hero.tsx";
import Projects from "./Components/Projects.tsx";
import Highlights from "./Components/Highlights.tsx";
import SocialLinks from "./Components/SocialLinks.tsx";
import Footer from "./Components/Footer.tsx";
import Support from "./Components/Support.tsx";
export default function App() {
  return (
    <div className="page">
      <main className="main">
        <div className="container">
          <Hero />
          <Projects />
          <Highlights />
           <Support />
          <SocialLinks />
        </div>
      </main>
      <Footer />
    </div>
  );
}