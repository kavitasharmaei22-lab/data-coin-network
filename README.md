# MemoryChain - Decentralized AI Training Data Marketplace

![MemoryChain](https://img.shields.io/badge/Powered%20by-Solana-blueviolet)
![Built with Lovable](https://img.shields.io/badge/Built%20with-Lovable-ff69b4)

## 🧠 Overview

MemoryChain is a revolutionary decentralized marketplace where users monetize their data and AI companies access high-quality training datasets. Built on Solana with zero-knowledge encryption, MemoryChain ensures privacy while enabling fair compensation for data contributors.

**Your Data. Your Revenue. Your Control.**

## ✨ Features

- **🔒 Privacy-First**: Zero-knowledge proofs keep data encrypted while allowing secure access
- **💰 Fair Compensation**: Contributors earn SOL based on data usage and quality
- **🤖 AI-Powered Validation**: Automated quality scoring by decentralized validators
- **📊 Full Marketplace**: Browse, purchase, and monetize datasets
- **📈 Analytics Dashboard**: Track earnings, datasets, and performance
- **🔗 Solana Integration**: Fast, low-cost transactions on Solana blockchain
- **🎨 Beautiful UI**: Cyber-themed design with smooth animations

## 🚀 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS with custom neural network theme
- **Blockchain**: Solana Web3.js with Wallet Adapter
- **Animations**: Framer Motion
- **UI Components**: Shadcn UI with Radix primitives
- **Form Handling**: React Hook Form with Zod validation
- **Charts**: Recharts
- **File Uploads**: React Dropzone
- **State Management**: TanStack Query

## 🎨 Design System

### Colors
- **Primary (Neural Purple)**: `#8B5CF6` - AI/ML theme
- **Secondary (Data Cyan)**: `#06B6D4` - Data streams
- **Accent (Earn Green)**: `#10B981` - Success/earnings
- **Background**: Dark gradient `#0F172A` to `#1E293B`

### Animations
- Float animations for hero elements
- Pulse glow effects for interactive cards
- Smooth fade-in transitions
- Neural network particle background

## 📦 Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project
cd memorychain

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔧 Configuration

### Wallet Setup
The app supports Phantom and Solflare wallets on Solana Devnet by default. To use mainnet, update the network in `src/components/WalletProvider.tsx`.

### Environment Variables
No environment variables required for demo mode. All data is mocked for demonstration purposes.

## 📱 Pages

- **Home** (`/`): Landing page with value propositions and how-it-works
- **Marketplace** (`/marketplace`): Browse and search datasets
- **Dataset Detail** (`/marketplace/:id`): Full dataset information with tabs
- **Upload** (`/upload`): Multi-step wizard to upload and configure datasets
- **Dashboard** (`/dashboard`): View earnings, manage datasets, track activity
- **Validators** (`/validators`): Information about the validator network

## 🧪 Mock Data

The application includes comprehensive mock data:
- 6 sample datasets across different categories
- Transaction history
- Validator network statistics
- User profiles and analytics

All mock data is located in `src/lib/mockData.ts` and can be easily extended.

## 🎯 Key Components

### Core Components
- `WalletProvider`: Solana wallet integration wrapper
- `Navbar`: Responsive navigation with wallet connection
- `DatasetCard`: Dataset display with quality metrics
- `QualityBadge`: Color-coded quality score indicator
- `StatsCard`: Dashboard statistics display

### Pages
All pages use Framer Motion for smooth animations and follow the neural network design theme.

## 🔐 Privacy & Security

- **Zero-Knowledge Proofs**: Data remains encrypted
- **Decentralized Storage**: No centralized data repositories
- **Smart Contract Access Control**: Blockchain-enforced permissions
- **PII Detection**: Automated scanning for personally identifiable information

## 🤝 Contributing

This is a demo/hackathon project. For production use:
1. Replace mock data with real Solana program calls
2. Implement actual zero-knowledge proof encryption
3. Add comprehensive error handling
4. Set up proper authentication and authorization
5. Deploy Solana smart contracts for escrow and payments

## 📄 License

This project is for demonstration purposes. Customize licensing based on your needs.

## 🙏 Acknowledgments

- Built with [Lovable](https://lovable.dev)
- Powered by [Solana](https://solana.com)
- UI components from [Shadcn UI](https://ui.shadcn.com)
- Icons from [Lucide React](https://lucide.dev)

## 🚀 Deployment

Deploy instantly using Lovable's one-click publish feature or deploy to:
- Vercel
- Netlify
- Any static hosting platform

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📞 Support

For questions or issues, please open an issue on GitHub or contact the development team.

---

**Built with ❤️ for the future of ethical AI training**
