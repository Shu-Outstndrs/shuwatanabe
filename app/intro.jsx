export function Intro({ title, childrenClassName, className }) {
  return (
    <div className={className}>
      <li className={childrenClassName}>{title}</li>
    </div>
  );
}
