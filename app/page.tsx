import Hero from '../components/Hero';
import Services from '../components/Services';
import Timeline from '../components/Timeline';
import Gallery from '../components/Gallery';
import FooterCTA from '../components/FooterCTA';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-beige font-playful">
      <Hero />
      <Services />
      <Timeline />
      <Gallery />
      <FooterCTA />
    </main>
  );
}
