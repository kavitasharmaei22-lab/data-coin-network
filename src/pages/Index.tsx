import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, DollarSign, Brain, ArrowRight, Database, TrendingUp, Users, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StatsCard } from '@/components/StatsCard';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        </div>

        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Your Data. Your Revenue. Your Control.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Train AI models with your conversations and get paid. Privacy-preserved. Decentralized. Fair.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/upload">
                <Button size="lg" className="bg-primary hover:bg-primary/90 neural-glow text-lg px-8">
                  Start Earning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/marketplace">
                <Button size="lg" variant="outline" className="text-lg px-8 border-primary/50 hover:bg-primary/10">
                  Browse Data
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
          >
            <div className="glass-card p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-primary">127 TB</div>
              <div className="text-sm text-muted-foreground">Data Uploaded</div>
            </div>
            <div className="glass-card p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-secondary">2,847</div>
              <div className="text-sm text-muted-foreground">Contributors</div>
            </div>
            <div className="glass-card p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-accent">3,421 SOL</div>
              <div className="text-sm text-muted-foreground">Distributed</div>
            </div>
            <div className="glass-card p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-foreground">47</div>
              <div className="text-sm text-muted-foreground">AI Models</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-xl text-center hover:neural-glow transition-all duration-300"
            >
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Privacy First</h3>
              <p className="text-muted-foreground">
                Zero-knowledge proofs keep your data encrypted. You control who accesses what. Revoke access anytime.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-xl text-center hover:data-glow transition-all duration-300"
            >
              <div className="inline-flex p-4 rounded-full bg-secondary/10 mb-4">
                <DollarSign className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Fair Compensation</h3>
              <p className="text-muted-foreground">
                Get paid per data usage. Quality bonuses from AI validators. Transparent revenue sharing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-xl text-center hover:earn-glow transition-all duration-300"
            >
              <div className="inline-flex p-4 rounded-full bg-accent/10 mb-4">
                <Brain className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3">AI-Powered Quality</h3>
              <p className="text-muted-foreground">
                Automated quality scoring. Instant valuation. Real-time market pricing.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">Four simple steps to start earning</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Upload', desc: 'Upload conversations, documents, or datasets', icon: Database },
              { step: '2', title: 'Validate', desc: 'AI assesses quality and assigns value score', icon: Brain },
              { step: '3', title: 'List', desc: 'Your data appears in marketplace for AI models', icon: Users },
              { step: '4', title: 'Earn', desc: 'Get paid when models access your data', icon: TrendingUp },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="glass-card p-6 rounded-xl text-center h-full">
                  <div className="inline-flex p-3 rounded-full bg-gradient-to-br from-primary to-secondary mb-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-sm font-bold text-primary mb-2">STEP {item.step}</div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-primary/50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {[
              { icon: Shield, text: 'Built on Solana' },
              { icon: Lock, text: 'Zero-knowledge encrypted' },
              { icon: Users, text: 'Community governed' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 glass-card px-6 py-3 rounded-full"
              >
                <item.icon className="h-5 w-5 text-primary" />
                <span className="font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-12 rounded-2xl text-center neural-glow"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to monetize your data?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of contributors earning from their digital footprint
            </p>
            <Link to="/upload">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-12">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
