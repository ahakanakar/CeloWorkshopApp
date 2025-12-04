# Celo Token Claimer

An example dApp running on the Celo blockchain. It works integrated with Minipay and other Celo wallets. Users can connect their wallets to claim free tokens.

## 🚀 Features

- ✅ Celo Mainnet and Alfajores Testnet support
- ✅ Token Claimer - One-time token claim per wallet
- ✅ Minipay wallet integration
- ✅ Easy wallet connection with RainbowKit
- ✅ Blockchain interaction with Wagmi
- ✅ Modern React application with Next.js 16
- ✅ TypeScript support
- ✅ Modern and responsive UI with Tailwind CSS
- ✅ Network and wallet information display via Header

## Installation

1. Install dependencies:
```bash
npm install
```

2. Set up the WalletConnect Project ID:
   - Change the `YOUR_PROJECT_ID` value in `app/providers.tsx`
   - Get a free Project ID from WalletConnect Cloud: [https://cloud.walletconnect.com](https://cloud.walletconnect.com)

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. Click the "Connect Wallet" button
2. Select Minipay or other supported wallets
3. Connect your wallet
4. Switch to Celo Mainnet or Alfajores Testnet
5. Claim tokens from the "Token Claimer" section (once per wallet)

## Supported Wallets

- Minipay
- Valora
- MetaMask
- All WalletConnect compatible wallets

## Technologies

- **Next.js 16** - React framework
- **Wagmi** - React Hooks for Ethereum
- **RainbowKit** - Wallet connection UI
- **@celo/rainbowkit-celo** - Celo chain support
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling

## Development

To develop the project:

```bash
# Development mode
npm run dev

# Production build
npm run build

# Production server
npm start

# Linting
npm run lint
```

## 📦 Deployment

This project can be deployed to Vercel, Netlify, or other platforms supporting Next.js.

### Deploy with Vercel

1. Log in to your [Vercel](https://vercel.com) account
2. Click the "New Project" button
3. Select your GitHub repository
4. Add environment variables (if necessary)
5. Click the Deploy button

## 🔗 Links

- **GitHub Repository**: [https://github.com/ahakanakar/CeloWorkshopApp](https://github.com/ahakanakar/CeloWorkshopApp)
- **WalletConnect Cloud**: [https://cloud.walletconnect.com](https://cloud.walletconnect.com)

## 📝 Notes

- The Token Claimer feature currently works using localStorage for demo purposes
- It can be integrated with a smart contract in a real application
- A WalletConnect Project ID is required (can be obtained for free)

## License

MIT
