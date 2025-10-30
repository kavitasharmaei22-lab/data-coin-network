import { Link } from 'react-router-dom';
import { MessageSquare, FileText, Code, Database, Folder, TrendingUp } from 'lucide-react';
import { Dataset } from '@/lib/types';
import { QualityBadge } from './QualityBadge';
import { motion } from 'framer-motion';

const dataTypeIcons = {
  conversation: MessageSquare,
  document: FileText,
  code: Code,
  structured: Database,
  custom: Folder,
};

interface DatasetCardProps {
  dataset: Dataset;
}

export const DatasetCard = ({ dataset }: DatasetCardProps) => {
  const Icon = dataTypeIcons[dataset.dataType];

  const formatSize = (bytes: number) => {
    if (bytes >= 1073741824) return `${(bytes / 1073741824).toFixed(1)} GB`;
    if (bytes >= 1048576) return `${(bytes / 1048576).toFixed(1)} MB`;
    return `${(bytes / 1024).toFixed(1)} KB`;
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    if (days < 7) return `${days} days ago`;
    if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
    return `${Math.floor(days / 30)} months ago`;
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Link to={`/marketplace/${dataset.id}`}>
        <div className="glass-card p-5 rounded-xl hover:neural-glow transition-all duration-300 group h-full flex flex-col">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <QualityBadge score={dataset.qualityScore} />
          </div>

          <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {dataset.title}
          </h3>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
            {dataset.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {dataset.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-muted rounded text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
            {dataset.tags.length > 3 && (
              <span className="px-2 py-0.5 bg-muted rounded text-xs text-muted-foreground">
                +{dataset.tags.length - 3}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-border/50">
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>{formatSize(dataset.totalSize)}</span>
              <span className="flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                {dataset.accessCount}
              </span>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-accent">
                {dataset.price} SOL
              </div>
              <div className="text-xs text-muted-foreground">
                {formatDate(dataset.uploadedAt)}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
