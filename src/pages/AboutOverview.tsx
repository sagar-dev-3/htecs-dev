import Navigation from "@/pages/Navigation";
import Footer from "@/components/Footer";

const AboutOverview = () => {
  return (
    <div>
      <Navigation />

      <main className="min-h-screen pt-[13rem]">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-4">About Us — Overview</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Hill Top Emerging Consultancy Services FZC provides expert advisory, accounting,
            tax, and assurance services. Our team focuses on delivering tailored solutions
            to help businesses grow and remain compliant.
          </p>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <p className="text-muted-foreground">
              To deliver professional services that support sustainable growth and financial clarity.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutOverview;
