import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, Share2, Shield, Clock, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { QualityBadge } from '@/components/QualityBadge';
import { mockDatasets } from '@/lib/mockData';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const DatasetDetail = () => {
  const { id } = useParams();
  const dataset = mockDatasets.find(d => d.id === id);

  if (!dataset) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Dataset not found</h2>
          <Link to="/marketplace">
            <Button variant="outline">Back to Marketplace</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleRequestAccess = () => {
    toast.success('Access request submitted!');
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Link copied to clipboard');
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Back Button */}
        <Link to="/marketplace">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Marketplace
          </Button>
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 rounded-xl mb-8"
        >
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-3xl md:text-4xl font-bold">{dataset.title}</h1>
                <QualityBadge score={dataset.qualityScore} />
              </div>
              <p className="text-muted-foreground mb-4">{dataset.description}</p>
              <div className="flex flex-wrap gap-2">
                {dataset.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-muted rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:w-80">
              <div className="glass-card p-6 rounded-xl space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-1">{dataset.price} SOL</div>
                  <div className="text-sm text-muted-foreground">per access</div>
                </div>
                <Button onClick={handleRequestAccess} className="w-full bg-primary hover:bg-primary/90 h-12">
                  <Download className="h-5 w-5 mr-2" />
                  Request Access
                </Button>
                <Button onClick={handleShare} variant="outline" className="w-full">
                  <Share2 className="h-5 w-5 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 glass-card">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="quality">Quality Metrics</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              {/* Key Statistics */}
              <div className="glass-card p-6 rounded-xl">
                <h2 className="text-xl font-bold mb-4">Key Statistics</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Total Files</div>
                    <div className="text-2xl font-bold">{dataset.files.length}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Total Size</div>
                    <div className="text-2xl font-bold">
                      {(dataset.totalSize / 1024 / 1024 / 1024).toFixed(2)} GB
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Language</div>
                    <div className="text-2xl font-bold">{dataset.language}</div>
                  </div>
                </div>
              </div>

              {/* Privacy Details */}
              <div className="glass-card p-6 rounded-xl">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Privacy & Security
                </h2>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span>Encryption: ZK-proof encrypted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span>PII removed: Yes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span>Privacy Level: {dataset.privacyLevel}</span>
                  </div>
                </div>
              </div>

              {/* License */}
              <div className="glass-card p-6 rounded-xl">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  License Information
                </h2>
                <p className="text-muted-foreground">{dataset.license}</p>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="preview">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass-card p-6 rounded-xl"
            >
              <h2 className="text-xl font-bold mb-4">Data Preview</h2>
              <div className="bg-muted/20 rounded-lg p-6 font-mono text-sm space-y-2">
                <div className="text-muted-foreground">// Sample data - Full access requires purchase</div>
                <div>{'{'}</div>
                <div className="pl-4">"id": "sample_001",</div>
                <div className="pl-4">"content": "This is a sample entry from the dataset",</div>
                <div className="pl-4">"metadata": {'{'} ... {'}'}</div>
                <div>{'}'}</div>
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Limited preview only. Purchase access to view the complete dataset.
              </p>
            </motion.div>
          </TabsContent>

          <TabsContent value="quality">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div className="glass-card p-6 rounded-xl text-center">
                <div className="text-6xl font-bold text-accent mb-2">{dataset.qualityScore}/100</div>
                <div className="text-lg text-muted-foreground">Overall Quality Score</div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(dataset.qualityBreakdown).map(([key, value]) => (
                  <div key={key} className="glass-card p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold capitalize">{key}</span>
                      <span className="text-accent font-bold">{value}/100</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div
                        className="bg-accent h-3 rounded-full transition-all"
                        style={{ width: `${value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass-card p-6 rounded-xl">
                <h3 className="font-semibold mb-3">Validator Consensus</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Validators assessed:</span>
                    <span className="text-foreground">5 validators</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average score:</span>
                    <span className="text-accent font-semibold">{dataset.qualityScore}/100</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Score range:</span>
                    <span className="text-foreground">{dataset.qualityScore - 3} - {dataset.qualityScore + 3}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="pricing">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div className="glass-card p-6 rounded-xl">
                <h2 className="text-xl font-bold mb-4">Pricing Details</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Base Price:</span>
                    <span className="text-2xl font-bold text-accent">{dataset.price} SOL</span>
                  </div>
                  <div className="border-t border-border/50 pt-4">
                    <h3 className="font-semibold mb-3">Volume Discounts</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">10+ accesses:</span>
                        <span>10% off</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">50+ accesses:</span>
                        <span>20% off</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">100+ accesses:</span>
                        <span>30% off</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <h2 className="text-xl font-bold mb-4">Revenue Model</h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">You pay:</span>
                    <span className="font-semibold">{dataset.price} SOL</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Contributor receives (90%):</span>
                    <span className="font-semibold">{(dataset.price * 0.9).toFixed(2)} SOL</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Platform fee (10%):</span>
                    <span className="font-semibold">{(dataset.price * 0.1).toFixed(2)} SOL</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* Contributor Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6 rounded-xl mt-8"
        >
          <h2 className="text-xl font-bold mb-4">Contributor</h2>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-mono font-semibold mb-1">{dataset.contributor}</div>
              <div className="text-sm text-muted-foreground">
                {dataset.accessCount} total accesses • {dataset.totalEarned.toFixed(2)} SOL earned
              </div>
            </div>
            <Button variant="outline">View Profile</Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DatasetDetail;
