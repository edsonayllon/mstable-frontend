/* eslint-disable @typescript-eslint/no-explicit-any */
import type { HexAddress } from '@frontend/shared-utils';
import type { SvgIconProps } from '@mui/material';
import type { ComponentType } from 'react';

export type ContractType =
  | 'stable'
  | 'save'
  | 'pool'
  | 'vault'
  | 'legacypool'
  | 'metavault';

export type Contract = {
  address: HexAddress;
  type: ContractType;
  name: string;
  abi: any;
  chain: number;
  icon: ComponentType<SvgIconProps>;
  balanceFn?: string;
  stakingTokenAddress?: HexAddress;
  vaultAddress?: HexAddress;
};