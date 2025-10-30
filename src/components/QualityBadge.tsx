import { motion } from 'framer-motion';

interface QualityBadgeProps {
  score: number;
}

export const QualityBadge = ({ score }: QualityBadgeProps) => {
  const getColor = (score: number) => {
    if (score >= 85) return 'text-accent border-accent/50 bg-accent/10';
    if (score >= 70) return 'text-secondary border-secondary/50 bg-secondary/10';
    return 'text-destructive border-destructive/50 bg-destructive/10';
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 500, damping: 25 }}
      className={`px-2.5 py-1 rounded-full border text-xs font-semibold ${getColor(score)}`}
    >
      {score}/100
    </motion.div>
  );
};
