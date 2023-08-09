import {
  optimism,
  SUSD_OPTIMISM,
  USDC_OPTIMISM,
  WETH_OPTIMISM,
} from '@dhedge/core-ui-kit/const';

import type { PoolConfig } from '@dhedge/core-ui-kit/types';

import type { VaultConfig } from '../../types';

export const ETHY_OPTIMISM: PoolConfig = {
  chainId: optimism.id,
  symbol: 'ETHy',
  address: '0xb2cfb909e8657c0ec44d3dd898c1053b87804755',
  depositParams: {
    customTokens: [SUSD_OPTIMISM],
  },
  withdrawParams: {
    customTokens: [
      WETH_OPTIMISM,
      {
        ...SUSD_OPTIMISM,
        intermediateToken: USDC_OPTIMISM,
        method: 'withdrawSUSD',
      },
    ],
  },
};

export const ETHY_OPTIMISM_VAULT: VaultConfig = {
  ...ETHY_OPTIMISM,
  primaryColor: '#2775CA',
  description:
    'This automated strategy earns yield on ETH by providing liquidity directly or borrowing other assets and generating a profit on them.',
  strategies: [
    {
      description: 'ETHy generates yield on Ethereum using DeFi tools.',
    },
    {
      description:
        'Depending on the opportunities, different strategies will be used to generate yield.',
    },
    {
      description:
        'In one strategy, the yield on ETH is generated by providing liquidity on exchanges with a pair pegged to ETH.',
    },
    {
      description:
        'In a second strategy, the yield on ETH is generated by borrowing any crypto asset and depositing it into liquidity that produces more profit than the cost to borrow.',
    },
  ],
};