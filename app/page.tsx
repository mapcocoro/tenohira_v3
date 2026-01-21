import Header from '@/components/Header';
import IntroSection from '@/components/IntroSection';
import InstagramSection from '@/components/InstagramSection';
import TreatmentCategorySection from '@/components/TreatmentCategorySection';
import AccidentSection from '@/components/AccidentSection';
import PriceSection from '@/components/PriceSection';
import AccessSection from '@/components/AccessSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <InstagramSection />
        <TreatmentCategorySection />
        <AccidentSection />
        <PriceSection />
        <AccessSection />
      </main>
      <Footer />
    </>
  );
}
