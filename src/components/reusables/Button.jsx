export function Button({ children, className, onClick, ...props }) {
  return (
    <button
      className={`text-white cursor-pointer rounded-full font-semibold text-[1.2rem] bg-[var(--color-red)] py-[8px]! px-[3rem]! hover:bg-[#8b290b] active:bg-[#8b290b] capitalize ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
