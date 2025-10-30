import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DatasetCard } from '@/components/DatasetCard';
import { mockDatasets } from '@/lib/mockData';
import { motion } from 'framer-motion';

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);

  const filteredDatasets = mockDatasets.filter(dataset =>
    dataset.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dataset.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dataset.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Data Marketplace</h1>
          <p className="text-lg text-muted-foreground">
            Discover high-quality datasets for training your AI models
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 flex flex-col md:flex-row gap-4"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search datasets by keyword, tag, or type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 glass-card border-border/50"
            />
          </div>
          <Button
            variant="outline"
            onClick={() => setFilterOpen(!filterOpen)}
            className="border-border/50"
          >
            <SlidersHorizontal className="h-5 w-5 mr-2" />
            Filters
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          <div className="glass-card p-4 rounded-lg">
            <div className="text-sm text-muted-foreground mb-1">Available Datasets</div>
            <div className="text-2xl font-bold">{filteredDatasets.length}</div>
          </div>
          <div className="glass-card p-4 rounded-lg">
            <div className="text-sm text-muted-foreground mb-1">Total Size</div>
            <div className="text-2xl font-bold">2.3 TB</div>
          </div>
          <div className="glass-card p-4 rounded-lg">
            <div className="text-sm text-muted-foreground mb-1">Avg Quality</div>
            <div className="text-2xl font-bold text-accent">89/100</div>
          </div>
          <div className="glass-card p-4 rounded-lg">
            <div className="text-sm text-muted-foreground mb-1">Price Range</div>
            <div className="text-2xl font-bold text-secondary">1.5 - 5.5 SOL</div>
          </div>
        </motion.div>

        {/* Dataset Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {filteredDatasets.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDatasets.map((dataset, index) => (
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
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No datasets match your search</p>
              <Button
                variant="outline"
                onClick={() => setSearchQuery('')}
                className="mt-4"
              >
                Clear Search
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Marketplace;
