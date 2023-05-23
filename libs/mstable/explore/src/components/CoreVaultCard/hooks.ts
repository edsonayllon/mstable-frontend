import { useCallback, useMemo } from 'react';

import { formatToUsd } from '@dhedge/core-ui-kit/utils';
import { useFundQuery } from '@frontend/mstable-vault';
import { useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from '@tanstack/react-location';
import { useIntl } from 'react-intl';

import type { TypographyProps } from '@mui/material';

import type { CoreVaultCardProps } from './types';

export const useCoreVaultCardProps = ({ config, to }: CoreVaultCardProps) => {
  const intl = useIntl();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const { data, isLoading } = useFundQuery({ address: config.address });

  const handleClick = useCallback(() => {
    if (to) {
      navigate({ to });
    }
  }, [navigate, to]);

  const tokenPriceLabel = useMemo(
    () => intl.formatMessage({ defaultMessage: 'Token Price', id: 'ehxGBh' }),
    [intl],
  );
  const tokenPriceHint = useMemo(
    () =>
      intl.formatMessage({
        defaultMessage:
          'The current price of 1 token. Return is represented as a increase in token price value.',
        id: 'w4UBPL',
      }),
    [intl],
  );
  const tokenPrice = useMemo(
    () =>
      formatToUsd({
        value: data?.fund.tokenPrice ? +data.fund.tokenPrice : 0,
        normalize: true,
        maximumFractionDigits: 4,
      }),
    [data?.fund.tokenPrice],
  );
  const apyLabel = useMemo(
    () => intl.formatMessage({ defaultMessage: 'APY', id: 'MLTKb6' }),
    [intl],
  );
  const apyHint = useMemo(
    () =>
      intl.formatMessage({
        defaultMessage: 'Annual percentage yield.',
        id: 'IB0eky',
      }),
    [intl],
  );
  const apy = useMemo(() => {
    const monthlyApy = data?.fund.apy?.monthly;
    return monthlyApy
      ? `${Math.max(0, monthlyApy).toFixed(monthlyApy > 0 ? 2 : 0)}%`
      : '-';
  }, [data?.fund.apy?.monthly]);

  const tvlLabel = useMemo(
    () => intl.formatMessage({ defaultMessage: 'TVL', id: 'SKB/G9' }),
    [intl],
  );
  const tvlHint = useMemo(
    () =>
      intl.formatMessage({
        defaultMessage: 'Total Value Locked in vault',
        id: 'PxG1Yq',
      }),
    [intl],
  );
  const tvl = useMemo(
    () =>
      formatToUsd({
        value: data?.fund?.totalValue ? +data.fund.totalValue : 0,
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
        normalize: true,
      }),
    [data?.fund?.totalValue],
  );

  const tagProps: TypographyProps = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'medium',
    fontSize: 12,
    px: 1,
    height: 20,
    noWrap: true,
    bgcolor: (theme) => theme.palette.background.highlight,
    borderRadius: 2,
  };

  return {
    intl,
    isMobile,
    isLoading,
    handleClick,
    tokenPriceLabel,
    tokenPriceHint,
    tokenPrice,
    apyLabel,
    apyHint,
    apy,
    tvlLabel,
    tvlHint,
    tvl,
    name: data?.fund.name,
    tagProps,
  };
};
