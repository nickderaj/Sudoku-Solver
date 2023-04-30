export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'red' | 'green';
}

// Reusable styled button with a primary and secondary variant, could add others like 'error' and 'warning' if needed
const Button: React.FC<IButton> = ({ title, variant = 'primary', className, ...props }) => {
  const buttonClasses = () => {
    const commonClasses = 'border hover:shadow-md px-4 py-1 text-center rounded-xl duration-300 transition-all font-cairo';

    switch (variant) {
      case 'primary':
        return `bg-indigo-500 text-white hover:brightness-125 border-indigo-500 
          disabled:bg-neutral-500 disabled:border-neutral-500 ${commonClasses} ${className}`;
      case 'secondary':
        return `border-indigo-500 text-indigo-500 disabled:border-neutral-500
          disabled:text-neutral-500 ${commonClasses} ${className}`;
      case 'red':
        return `bg-rose-500 text-white hover:brightness-125 border-rose-500 
        disabled:bg-neutral-500 disabled:border-neutral-500 ${commonClasses} ${className}`;
      case 'green':
        return `bg-emerald-500 text-white hover:brightness-125 border-emerald-500 
          disabled:bg-neutral-500 disabled:border-neutral-500 ${commonClasses} ${className}`;
    }
  };

  return (
    <button {...props} className={buttonClasses()}>
      {title}
    </button>
  );
};

export default Button;
