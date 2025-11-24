import { ConnectWallet } from "./components/ConnectWallet";
import { TokenClaimer } from "./components/TokenClaimer";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header />
      <main className="flex min-h-screen w-full max-w-4xl mx-auto flex-col items-center justify-center py-16 px-8">
        <div className="w-full max-w-2xl space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Celo Token Claimer
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Connect your wallet and claim your free tokens on the Celo Alfajores testnet.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Cüzdanınızı Bağlayın
            </h2>
            <ConnectWallet />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Token Claimer
            </h2>
            <TokenClaimer />
          </div>
        </div>
      </main>
    </div>
  );
}
