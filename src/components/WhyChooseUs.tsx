import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";
import accountingImage from "@/assets/accounting-desk.jpg";

const features = [
  "Certified professionals with extensive experience",
  "Tailored solutions for your unique needs",
  "Cutting-edge technology and methodologies",
  "Transparent pricing with no hidden fees",
  "24/7 support and consultation",
  "Proven track record of success",
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-choose-us" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Why Choose <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Us?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              We combine expertise, innovation, and dedication to deliver exceptional financial services that drive your success.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={accountingImage}
                alt="Professional accounting services"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent rounded-3xl opacity-20"></div>
            {/* <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary rounded-3xl opacity-20"></div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
