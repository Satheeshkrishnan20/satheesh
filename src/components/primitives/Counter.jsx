import { useCountUp } from '../../hooks/useCountUp'

/**
 * Renders a metric that counts up from zero when it scrolls into view.
 * Wraps any tag via `as` (default span) and forwards className.
 */
export default function Counter({ value, as: Tag = 'span', className }) {
  const [ref, display] = useCountUp(value)
  return (
    <Tag ref={ref} className={className}>
      {display}
    </Tag>
  )
}
