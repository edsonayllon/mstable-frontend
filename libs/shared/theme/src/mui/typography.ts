import '@fontsource/plus-jakarta-sans';
import '@fontsource/plus-jakarta-sans/variable.css';
import '@fontsource/red-hat-mono';
import '@fontsource/red-hat-mono/variable.css';

import {
  fontFamilies,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
} from '../constants';

import type { ThemeOptions } from '@mui/material';

export const getTypographyOptions = (base?: ThemeOptions): ThemeOptions => ({
  typography: {
    fontFamily: fontFamilies.main,

    fontWeightLight: fontWeights.regular,
    fontWeightRegular: fontWeights.medium,
    fontWeightMedium: fontWeights.semibold,
    fontWeightBold: fontWeights.bold,

    fontSizes,
    fontFamilies,
    lineHeights,
    letterSpacings,

    h1: {
      fontFamily: fontFamilies.main,
      fontSize: 40,
      lineHeight: '50px',
      fontWeight: fontWeights.extrabold,
    },
    h2: {
      fontFamily: fontFamilies.main,
      fontSize: 33,
      lineHeight: '41px',
      fontWeight: fontWeights.extrabold,
    },
    h3: {
      fontFamily: fontFamilies.main,
      fontSize: 28,
      lineHeight: '35px',
      fontWeight: fontWeights.extrabold,
    },
    h4: {
      fontFamily: fontFamilies.main,
      fontSize: 23,
      lineHeight: '29px',
      fontWeight: fontWeights.bold,
    },
    h5: {
      fontFamily: fontFamilies.main,
      fontSize: 19,
      lineHeight: '24px',
      fontWeight: fontWeights.bold,
    },
    body1: {
      fontFamily: fontFamilies.main,
      fontSize: 16,
      lineHeight: '26px',
      fontWeight: fontWeights.medium,
    },
    body2: {
      fontFamily: fontFamilies.main,
      fontSize: 14,
      lineHeight: '22px',
      fontWeight: fontWeights.medium,
    },
    buttonSmall: {
      fontFamily: fontFamilies.main,
      fontSize: 12,
      lineHeight: '12px',
      textTransform: 'none',
      fontWeight: fontWeights.bold,
    },
    buttonMedium: {
      fontFamily: fontFamilies.main,
      fontSize: 14,
      lineHeight: '14px',
      textTransform: 'none',
      fontWeight: fontWeights.bold,
    },
    buttonLarge: {
      fontFamily: fontFamilies.main,
      fontSize: 16,
      lineHeight: '16px',
      textTransform: 'none',
      fontWeight: fontWeights.bold,
    },
    label1: {
      fontFamily: fontFamilies.main,
      fontSize: 14,
      lineHeight: '14px',
      fontWeight: fontWeights.bold,
      textTransform: 'uppercase',
      letterSpacing: '5%',
    },
    label2: {
      fontFamily: fontFamilies.main,
      fontSize: 14,
      lineHeight: '14px',
      fontWeight: fontWeights.bold,
      letterSpacing: '5%',
    },
    placeholder: {
      fontFamily: fontFamilies.main,
      fontSize: 14,
      lineHeight: '14px',
      fontWeight: fontWeights.regular,
    },
    hint: {
      fontFamily: fontFamilies.main,
      fontSize: 12,
      lineHeight: '12px',
      fontWeight: fontWeights.semibold,
    },
    value1: {
      fontFamily: fontFamilies.code,
      fontSize: 28,
      letterSpacing: '-4%',
      fontWeight: fontWeights.semibold,
    },
    value2: {
      fontFamily: fontFamilies.code,
      fontSize: 23,
      letterSpacing: '-4%',
      fontWeight: fontWeights.semibold,
    },
    value3: {
      fontFamily: fontFamilies.code,
      fontSize: 16,
      letterSpacing: '-4%',
      fontWeight: fontWeights.semibold,
    },
    value4: {
      fontFamily: fontFamilies.code,
      fontSize: 16,
      letterSpacing: '-4%',
      fontWeight: fontWeights.semibold,
    },
    value5: {
      fontFamily: fontFamilies.code,
      fontSize: 14,
      letterSpacing: '-4%',
      fontWeight: fontWeights.semibold,
    },
    value6: {
      fontFamily: fontFamilies.code,
      fontSize: 12,
      letterSpacing: '-4%',
      fontWeight: fontWeights.semibold,
    },

    // disabled
    h6: undefined,
    subtitle1: undefined,
    subtitle2: undefined,
    button: undefined,
    caption: undefined,
    overline: undefined,
  },
});
