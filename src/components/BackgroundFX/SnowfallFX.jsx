import Snowfall from 'react-snowfall';
import { useTheme } from '../../context/ThemeContext';

/**
 * Purely decorative snow layer. Only rendered when `enabled` is true, so it can be
 * wired to a toggle (e.g. a snowflake icon in the Navbar) or a seasonal flag.
 */
export default function SnowfallFX({ enabled = false }) {
  const { theme } = useTheme();
  if (!enabled) return null;

  return (
    <div className="fixed inset-0 -z-[5] pointer-events-none" aria-hidden="true">
      <Snowfall
        color={theme === 'dark' ? '#F5F5F5' : '#D946EF'}
        snowflakeCount={70}
        radius={[0.6, 2.2]}
        speed={[0.3, 1.2]}
        wind={[-0.3, 0.5]}
      />
    </div>
  );
}
