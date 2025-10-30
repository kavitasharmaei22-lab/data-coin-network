import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Database, TrendingUp, Users, DollarSign } from 'lucide-react';
import { StatsCard } from '@/components/StatsCard';
import { DatasetCard } from '@/components/DatasetCard';
import { mockDatasets } from '@/lib/mockData';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const { connected } = useWallet();

  if (!connected) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center glass-card p-12 rounded-2xl max-w-md"
        >
          <h2 className="text-3xl font-bold mb-4">Connect Your Wallet</h2>
          <p className="text-muted-foreground mb-6">
            Connect your wallet to view your dashboard and start earning
          </p>
          <WalletMultiButton className="!bg-primary hover:!bg-primary/90 !rounded-lg !h-12 !w-full" />
        </motion.div>
      </div>
    );
  }

  const userDatasets = mockDatasets.slice(0, 3);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Dashboard</h1>
          <p className="text-lg text-muted-foreground">
            Track your earnings and manage your datasets
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatsCard
            title="Total Earnings"
            value="256.32 SOL"
            change="+12.5 SOL"
            icon={DollarSign}
            trend="up"
          />
          <StatsCard
            title="Active Datasets"
            value="3"
            change="+1 this month"
            icon={Database}
            trend="up"
          />
          <StatsCard
            title="Total Accesses"
            value="178"
            change="+23"
            icon={Users}
            trend="up"
          />
          <StatsCard
            title="Pending Revenue"
            value="12.8 SOL"
            icon={TrendingUp}
          />
        </div>

        {/* My Datasets */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">My Datasets</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userDatasets.map((dataset, index) => (
              <motion.div
                key={dataset.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <DatasetCard dataset={dataset} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="divide-y divide-border/50">
              {[
                { action: 'Dataset accessed', dataset: 'Customer Support Conversations', amount: '+2.5 SOL', time: '2 hours ago' },
                { action: 'Dataset uploaded', dataset: 'Technical Documentation', amount: null, time: '1 day ago' },
                { action: 'Dataset accessed', dataset: 'E-commerce Reviews', amount: '+1.5 SOL', time: '3 days ago' },
              ].map((activity, index) => (
                <div key={index} className="p-4 hover:bg-muted/20 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{activity.action}</div>
                      <div className="text-sm text-muted-foreground">{activity.dataset}</div>
                    </div>
                    <div className="text-right">
                      {activity.amount && (
                        <div className="text-accent font-semibold">{activity.amount}</div>
                      )}
                      <div className="text-sm text-muted-foreground">{activity.time}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
