import { motion } from 'framer-motion';

interface BlurBlobProps {
  color: 'terracotta' | 'teal' | 'lightblue';
  className?: string;
}

const colors = {
  terracotta: '#d86a3e',
  teal: '#1cb1a1',
  lightblue: '#a7d8f2',
};

const BlurBlob: React.FC<BlurBlobProps> = ({ color, className = '' }) => (
  <motion.div
    className={`absolute w-96 h-96 rounded-full opacity-20 blur-3xl -z-10 ${className}`}
    style={{ backgroundColor: colors[color] }}
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 0.2 }}
    transition={{
      duration: 2,
      repeat: Infinity,
      repeatType: 'reverse',
    }}
  />
);

export default BlurBlob;
