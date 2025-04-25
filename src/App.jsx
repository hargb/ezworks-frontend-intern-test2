import USPSection from "./components/USPSection";
import ServicesSection from "./components/ServicesSection";
import ContactForm from "./components/ContactForm";
function App() {
  return (
    <main className="bg-white text-gray-900">
      <ServicesSection />
      <USPSection />
      <ContactForm/>
    </main>
  );
}

export default App;
