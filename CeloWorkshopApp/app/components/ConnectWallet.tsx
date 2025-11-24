'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount, useBalance } from 'wagmi'

export function ConnectWallet() {
  const { address, isConnected } = useAccount()
  const { data: balance } = useBalance({
    address: address,
  })

  return (
    <div className="flex flex-col items-center gap-4">
      <ConnectButton />
      {isConnected && address && (
        <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <strong>Address:</strong> {address}
          </p>
          {balance && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              <strong>Balance:</strong> {balance.formatted} {balance.symbol}
            </p>
          )}
        </div>
      )}
    </div>
  )
}

