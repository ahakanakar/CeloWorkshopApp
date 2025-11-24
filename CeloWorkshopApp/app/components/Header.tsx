'use client'

import { useAccount, useChainId } from 'wagmi'
import { Celo, Alfajores } from '@celo/rainbowkit-celo/chains'
import Link from 'next/link'

export function Header() {
  const { address, isConnected } = useAccount()
  const chainId = useChainId()

  const getNetworkName = () => {
    if (chainId === Celo.id) return 'Celo Mainnet'
    if (chainId === Alfajores.id) return 'Celo Alfajores'
    return 'Unknown Network'
  }

  const displayAddress = address ? `${address.slice(0, 4)}...${address.slice(-4)}` : ''

  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-green-600 dark:text-green-400">CELO</span>
            </Link>
            <Link 
              href="/" 
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Home
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            {isConnected && (
              <>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {getNetworkName()}
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {displayAddress}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

