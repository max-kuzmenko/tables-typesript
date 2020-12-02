import React from 'react';
import classSet from 'classnames';

import { ReactComponent as CompassBaseIcon } from 'assets/svg/compass.svg';
import { getRems } from 'utils/css';

import styles from './Icon.module.scss';

const ICONS = {
  compass: CompassBaseIcon,
};

interface IconProps extends React.HtmlHTMLAttributes<any> {
  type: keyof typeof ICONS;
  size?: number;
  sizeRem?: number;
  color?: string;
}

const FONT_SIZE = '1em';

const getIconSize = (
  size?: number,
  sizeRem?: number,
): number | string => {
  if (size) return size;
  if (sizeRem) return getRems(sizeRem);
  return FONT_SIZE;
};

const Icon = ({
  type,
  size,
  sizeRem,
  color,
  ...props
}: IconProps) => {
  const Icon = ICONS[type];

  const iconColor = color || 'currentColor';
  const iconSize = getIconSize(size, sizeRem);

  return (
    <div
      {...props}
      className={classSet(props.className, styles.IconWrapper)}
      style={{
        ...props.style,
        color: iconColor,
        height: iconSize,
        width: iconSize,
      }}
    >
      <Icon />
    </div>
  );
};

export default Icon;
