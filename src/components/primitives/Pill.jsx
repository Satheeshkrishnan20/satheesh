/** Small inline tag used for skills and project tech. Optionally shows a logo. */
export default function Pill({ children, logo }) {
  const base = import.meta.env.BASE_URL
  return (
    <span className="pill">
      {logo && (
        <img
          className="pill__logo"
          src={`${base}logos/${logo}.svg`}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width="18"
          height="18"
        />
      )}
      {children}
    </span>
  )
}
