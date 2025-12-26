/**
 * Configuration utility for Lumenitos Scan
 * Uses NEXT_PUBLIC_ prefixed environment variables for client-side access
 */

const config = {
  stellar: {
    network: process.env.NEXT_PUBLIC_STELLAR_NETWORK || 'testnet',
    sorobanRpcUrl: process.env.NEXT_PUBLIC_STELLAR_SOROBAN_RPC_URL || 'https://soroban-testnet.stellar.org',
    explorerUrl: process.env.NEXT_PUBLIC_STELLAR_EXPLORER_URL || 'https://stellar.expert/explorer/testnet',
  },
  get networkPassphrase() {
    return this.stellar.network === 'mainnet'
      ? 'Public Global Stellar Network ; September 2015'
      : 'Test SDF Network ; September 2015';
  },
  get isTestnet() {
    return this.stellar.network !== 'mainnet';
  },
};

export default config;
