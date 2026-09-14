import React from 'react';
import { FloralVineDivider } from './FloralMotifs';

/**
 * FloralDivider
 * Replaces plain dividers with an authentic Indian Hindu wedding floral vine divider.
 */
export default function FloralDivider({
  variant = 'gold',
  className = ''
}) {
  return (
    <FloralVineDivider variant={variant} className={className} />
  );
}
