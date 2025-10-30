import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import { Upload as UploadIcon, FileText, MessageSquare, Code, Database, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

const dataTypes = [
  { id: 'conversation', name: 'Conversations', icon: MessageSquare, desc: 'Chat logs, Discord, Slack' },
  { id: 'document', name: 'Documents', icon: FileText, desc: 'PDF, DOCX, TXT files' },
  { id: 'code', name: 'Code', icon: Code, desc: 'GitHub repos, source files' },
  { id: 'structured', name: 'Structured Data', icon: Database, desc: 'CSV, JSON, databases' },
];

const Upload = () => {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [validating, setValidating] = useState(false);
  const [qualityScore, setQualityScore] = useState(0);
  const navigate = useNavigate();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles);
      if (acceptedFiles.length > 0) {
        setStep(3);
      }
    },
  });

  const handleValidate = async () => {
    setValidating(true);
    setStep(4);
    // Simulate AI validation
    await new Promise(resolve => setTimeout(resolve, 2000));
    setQualityScore(Math.floor(Math.random() * 20) + 80);
    setValidating(false);
  };

  const handlePublish = async () => {
    toast.success('Dataset published successfully!');
    setTimeout(() => {
      navigate('/marketplace');
    }, 2000);
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4, 5].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                    s <= step
                      ? 'bg-primary text-white neural-glow'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {s < step ? <Check className="h-5 w-5" /> : s}
                </div>
                {s < 5 && (
                  <div
                    className={`w-12 md:w-24 h-1 mx-2 transition-all ${
                      s < step ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span>Type</span>
            <span>Upload</span>
            <span>Configure</span>
            <span>Validate</span>
            <span>Publish</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* Step 1: Select Data Type */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-3xl font-bold mb-6">Select Data Type</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {dataTypes.map((type) => (
                  <motion.button
                    key={type.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setSelectedType(type.id);
                      setStep(2);
                    }}
                    className={`glass-card p-6 rounded-xl text-left hover:neural-glow transition-all ${
                      selectedType === type.id ? 'border-2 border-primary' : ''
                    }`}
                  >
                    <type.icon className="h-8 w-8 text-primary mb-3" />
                    <h3 className="text-xl font-bold mb-2">{type.name}</h3>
                    <p className="text-sm text-muted-foreground">{type.desc}</p>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: File Upload */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-3xl font-bold mb-6">Upload Files</h2>
              <div
                {...getRootProps()}
                className={`glass-card border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all ${
                  isDragActive ? 'border-primary bg-primary/10' : 'border-border/50 hover:border-primary/50'
                }`}
              >
                <input {...getInputProps()} />
                <UploadIcon className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  {isDragActive ? 'Drop files here' : 'Drag & drop files here'}
                </h3>
                <p className="text-muted-foreground mb-4">or click to browse</p>
                <p className="text-sm text-muted-foreground">
                  Max 100MB per file, 1GB total
                </p>
              </div>

              {files.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-semibold mb-3">Selected Files:</h3>
                  <div className="space-y-2">
                    {files.map((file, index) => (
                      <div key={index} className="glass-card p-3 rounded-lg flex items-center justify-between">
                        <span className="text-sm">{file.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* Step 3: Configuration */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-3xl font-bold mb-6">Configure Dataset</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Title *</label>
                  <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g., Customer Support Conversations"
                    className="glass-card"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <Textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe your dataset..."
                    className="glass-card min-h-[120px]"
                  />
                </div>
                <Button
                  onClick={handleValidate}
                  disabled={!title}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Continue to Validation
                </Button>
              </div>
            </motion.div>
          )}

          {/* Step 4: Validation */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-3xl font-bold mb-6">Quality Analysis</h2>
              {validating ? (
                <div className="glass-card p-12 rounded-xl text-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent mx-auto mb-4" />
                  <p className="text-lg">Analyzing your data...</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="glass-card p-8 rounded-xl text-center">
                    <div className="text-6xl font-bold text-accent mb-2">{qualityScore}/100</div>
                    <p className="text-lg text-muted-foreground">Overall Quality Score</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {['Completeness', 'Diversity', 'Formatting', 'Uniqueness'].map((metric) => (
                      <div key={metric} className="glass-card p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">{metric}</span>
                          <span className="text-sm text-accent">{Math.floor(Math.random() * 10) + 85}/100</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-accent h-2 rounded-full transition-all"
                            style={{ width: `${Math.floor(Math.random() * 20) + 80}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button
                    onClick={() => setStep(5)}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Continue to Publish
                  </Button>
                </div>
              )}
            </motion.div>
          )}

          {/* Step 5: Publish */}
          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-3xl font-bold mb-6">Publish Dataset</h2>
              <div className="glass-card p-8 rounded-xl space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Dataset Summary</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Title:</span>
                      <span className="text-foreground">{title || 'Untitled'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Files:</span>
                      <span className="text-foreground">{files.length} files</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Quality Score:</span>
                      <span className="text-accent font-semibold">{qualityScore}/100</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated Price:</span>
                      <span className="text-accent font-semibold">1.5 - 3.0 SOL</span>
                    </div>
                  </div>
                </div>
                <Button
                  onClick={handlePublish}
                  className="w-full bg-primary hover:bg-primary/90 h-12 text-lg"
                >
                  Publish to Marketplace
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Upload;
