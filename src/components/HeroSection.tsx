import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight, Shield, Clock, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: Shield, title: "Secure Payments", desc: "256-bit encrypted transactions" },
  { icon: Clock, title: "Instant Updates", desc: "Real-time billing & usage data" },
  { icon: CreditCard, title: "Easy Pay", desc: "Multiple payment methods" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-electric/10 blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 rounded-full bg-electric-glow/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 border border-electric/20 mb-8"
          >
            <Zap className="w-4 h-4 text-electric" />
            <span className="text-sm font-medium text-electric-glow">Smart Electricity Billing</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Manage Your{" "}
            <span className="bg-gradient-to-r from-electric to-electric-glow bg-clip-text text-transparent">
              Energy Bills
            </span>{" "}
            Effortlessly
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto"
          >
            View bills, track usage, and pay online — all in one place. Stay powered up with smart billing insights.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/dashboard">
              <Button variant="electric" size="lg" className="text-base px-8 py-6">
                View Dashboard <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
            <Link to="/pay">
              <Button variant="outline" size="lg" className="text-base px-8 py-6 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                Pay a Bill
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid md:grid-cols-3 gap-6 mt-20 max-w-3xl mx-auto"
        >
          {features.map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-5 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm"
            >
              <div className="w-11 h-11 rounded-lg gradient-electric flex items-center justify-center shrink-0">
                <f.icon className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-primary-foreground text-sm">{f.title}</h3>
                <p className="text-primary-foreground/60 text-xs mt-0.5">{f.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
