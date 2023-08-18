type introType = {
  title: string;
  childrenClassName: string;
  className: string;
};

export function Intro({ title, childrenClassName, className }: introType) {
  return (
    <div className={className}>
      <li className={childrenClassName}>{title}</li>
    </div>
  );
}
