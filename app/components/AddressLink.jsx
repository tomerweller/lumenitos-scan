'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  shortenAddressSmall,
  getAddressPath,
} from '@/utils/scan/helpers';

/**
 * Smart address link that routes based on address type
 * - G... addresses -> /account/
 * - C... addresses -> /contract/
 * - L... addresses -> /lp/ (liquidity pools)
 * - B... addresses -> not linked (claimable balance IDs)
 *
 * @param {Object} props
 * @param {string} props.address - The full address
 * @param {string} [props.display] - Optional custom display text
 * @param {boolean} [props.short] - Use shorter format (4..4 vs 6....6)
 * @param {boolean} [props.nested] - Render as span with click navigation (for use inside Link cards)
 */
export default function AddressLink({ address, display, short = true, nested = false }) {
  const router = useRouter();

  if (!address) return <span>?</span>;

  const displayText = display || (short ? shortenAddressSmall(address) : address);

  // B... addresses are claimable balance IDs, not linkable accounts
  if (address.startsWith('B')) {
    return <span className="text-secondary">{displayText}</span>;
  }

  const href = getAddressPath(address);

  // When nested inside a Link, render as span to avoid invalid nested <a> tags
  // Use programmatic navigation with stopPropagation to prevent parent card click
  if (nested) {
    return (
      <span
        className="nested-link"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          router.push(href);
        }}
      >
        {displayText}
      </span>
    );
  }

  // Standard Link for non-nested usage
  return (
    <Link href={href}>
      {displayText}
    </Link>
  );
}
