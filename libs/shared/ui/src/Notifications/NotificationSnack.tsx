import { isNilOrEmpty } from '@frontend/shared-utils';
import { Alert, AlertTitle, Typography } from '@mui/material';
import { useInterval } from 'react-use';

import { SeverityIcon } from '../SeverityIcon';

import type { AlertProps, AlertTitleProps } from '@mui/material';
import type { Dispatch } from 'react';

import type { Notification } from './types';

export type NotificationSnackProps = {
  notification: Notification;
  onClose?: Dispatch<Notification>;
  onAutoHide?: Dispatch<Notification>;
  AlertProps?: Omit<AlertProps, 'severity'>;
  AlertTitleProps?: Omit<AlertTitleProps, 'children' | 'title'>;
};

export const NotificationSnack = ({
  notification,
  onClose,
  onAutoHide,
  AlertProps,
  AlertTitleProps,
}: NotificationSnackProps) => {
  const { severity, title, message, content } = notification;

  useInterval(() => {
    if (onAutoHide) {
      onAutoHide(notification);
    }
  }, notification.hideDuration);

  const handleCloseClick = () => {
    if (onClose) {
      onClose(notification);
    }
  };

  return (
    <Alert
      {...AlertProps}
      severity={severity}
      icon={<SeverityIcon severity={severity} />}
      sx={{
        border: 1,
        borderRadius: 1,
        minWidth: { sm: 300, md: 400, lg: 500, xl: 600 },
        maxWidth: { sm: 400, md: 500, lg: 600, xl: 700 },
        ...AlertProps?.sx,
      }}
      onClose={handleCloseClick}
    >
      {!isNilOrEmpty(title) && (
        <AlertTitle {...AlertTitleProps}>{title}</AlertTitle>
      )}
      {!isNilOrEmpty(message) && <Typography>{message}</Typography>}
      {!isNilOrEmpty(content) && content}
    </Alert>
  );
};
