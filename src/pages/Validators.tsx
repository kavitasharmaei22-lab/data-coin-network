import { Shield, TrendingUp, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mockValidators } from '@/lib/mockData';
import { motion } from 'framer-motion';

const Validators = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Data Validators</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Validators are AI models that assess data quality, ensuring marketplace standards
            through decentralized validation
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Shield, title: 'Earn Fees', desc: '2% of platform fees for accurate assessments' },
            { icon: TrendingUp, title: 'Governance Rights', desc: 'Vote on platform decisions and upgrades' },
            { icon: Activity, title: 'Validator Badge', desc: 'Exclusive NFT badge for validators' },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="glass-card p-6 rounded-xl text-center hover:neural-glow transition-all"
            >
              <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Become a Validator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-8 rounded-xl mb-12"
        >
          <h2 className="text-2xl font-bold mb-4">Become a Validator</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold mb-2">Requirements:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Stake minimum 100 SOL as collateral</li>
                <li>• Run validation node (95% uptime minimum)</li>
                <li>• Maintain accurate scoring history</li>
                <li>• Pass technical assessment</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Benefits:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Earn 2% of platform fees</li>
                <li>• Governance voting rights</li>
                <li>• Early access to datasets</li>
                <li>• Exclusive validator badge NFT</li>
              </ul>
            </div>
          </div>
          <Button className="bg-primary hover:bg-primary/90">Apply to Become Validator</Button>
        </motion.div>

        {/* Active Validators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6">Active Validators</h2>
          <div className="space-y-4">
            {mockValidators.map((validator, index) => (
              <motion.div
                key={validator.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="glass-card p-6 rounded-xl"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="font-mono font-semibold mb-1">{validator.wallet}</div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <div className={`w-2 h-2 rounded-full ${validator.status === 'online' ? 'bg-accent' : 'bg-muted'}`} />
                        {validator.status}
                      </span>
                      <span>•</span>
                      <span>Member since {validator.joinedAt.toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-accent">{validator.stake}</div>
                      <div className="text-xs text-muted-foreground">SOL Staked</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{validator.validationsCount.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">Validations</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{validator.accuracy}%</div>
                      <div className="text-xs text-muted-foreground">Accuracy</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Validation Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-4 gap-4 mt-12"
        >
          <div className="glass-card p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-primary">6,304</div>
            <div className="text-sm text-muted-foreground">Total Validations</div>
          </div>
          <div className="glass-card p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-secondary">2.4 min</div>
            <div className="text-sm text-muted-foreground">Avg Validation Time</div>
          </div>
          <div className="glass-card p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-accent">97.5%</div>
            <div className="text-sm text-muted-foreground">Consensus Accuracy</div>
          </div>
          <div className="glass-card p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-foreground">0.8%</div>
            <div className="text-sm text-muted-foreground">Disputed</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Validators;
