import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  href?: string;
  onClick?: () => void;
}

const Button = ({ children, variant = 'primary', href, onClick }: ButtonProps) => {
  const className = `btn btn-${variant}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
