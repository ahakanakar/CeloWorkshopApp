'use client'

import { useAccount, useChainId } from 'wagmi'
import { useState, useEffect } from 'react'
import { Celo, Alfajores } from '@celo/rainbowkit-celo/chains'

const CLAIM_AMOUNT = '10' // Fixed claim amount
const STORAGE_KEY = 'celo_claimed_wallets'

export function TokenClaimer() {
  const { address, isConnected } = useAccount()
  const chainId = useChainId()
  const [hasClaimed, setHasClaimed] = useState(false)
  const [isChecking, setIsChecking] = useState(true)
  const [isClaiming, setIsClaiming] = useState(false)
  
  // For demo: track claimed tokens in localStorage
  const [claimBalance, setClaimBalance] = useState('0.00')

  useEffect(() => {
    if (address) {
      checkClaimStatus()
      loadClaimBalance()
    }
  }, [address])

  const loadClaimBalance = () => {
    if (address) {
      try {
        const balanceKey = `claim_balance_${address.toLowerCase()}`
        const balance = localStorage.getItem(balanceKey) || '0.00'
        setClaimBalance(balance)
      } catch (e) {
        setClaimBalance('0.00')
      }
    }
  }

  const checkClaimStatus = () => {
    setIsChecking(true)
    try {
      const claimedWallets = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
      const hasClaimedBefore = claimedWallets.includes(address?.toLowerCase())
      setHasClaimed(hasClaimedBefore)
    } catch (e) {
      setHasClaimed(false)
    } finally {
      setIsChecking(false)
    }
  }

  const handleClaim = async () => {
    if (!address || !isConnected || isClaiming) return

    // For demo purposes, we'll use localStorage to track claims
    // In a real app, this would interact with a smart contract
    setIsClaiming(true)
    try {
      const claimedWallets = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
      
      if (!claimedWallets.includes(address.toLowerCase())) {
        // Simulate async operation
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        claimedWallets.push(address.toLowerCase())
        localStorage.setItem(STORAGE_KEY, JSON.stringify(claimedWallets))
        setHasClaimed(true)
        
        // Update claim balance
        const balanceKey = `claim_balance_${address.toLowerCase()}`
        localStorage.setItem(balanceKey, CLAIM_AMOUNT)
        setClaimBalance(CLAIM_AMOUNT)
      }
    } catch (e) {
      console.error('Claim error:', e)
    } finally {
      setIsClaiming(false)
    }
  }

  if (!isConnected) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600 dark:text-gray-400">
          Please connect your wallet to claim tokens
        </p>
      </div>
    )
  }

  if (chainId !== Alfajores.id && chainId !== Celo.id) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600 dark:text-red-400">
          Please switch to Celo Mainnet or Alfajores testnet to claim tokens
        </p>
      </div>
    )
  }

  if (isChecking) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600 dark:text-gray-400">Checking claim status...</p>
      </div>
    )
  }

  const displayAddress = address ? `${address.slice(0, 4)}...${address.slice(-4)}` : ''

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Claim your free tokens once per wallet.
        </p>
        <p className="text-sm font-medium text-gray-900 dark:text-white">
          Wallet: {displayAddress}
        </p>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Your Token Balance
        </label>
        <div className="text-2xl font-bold text-gray-900 dark:text-white">
          {parseFloat(claimBalance).toFixed(2)} CLAIM
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Claim Amount
        </label>
        <input
          type="text"
          value={CLAIM_AMOUNT}
          readOnly
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
        />
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Fixed amount per claim
        </p>
      </div>

      {hasClaimed ? (
        <div className="bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-400 px-4 py-3 rounded-lg">
          You have already claimed your tokens!
        </div>
      ) : (
        <button
          onClick={handleClaim}
          disabled={isClaiming}
          className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          {isClaiming ? 'Processing...' : 'Claim Tokens'}
        </button>
      )}
    </div>
  )
}

