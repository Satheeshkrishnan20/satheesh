/** Generic surface used by most grid items. Props-driven, no bespoke markup. */
export default function Card({ children, className = '', as: Tag = 'article', ...rest }) {
  return (
    <Tag className={`card ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
