import { Link } from 'react-router-dom';
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
    // Check if it's an internal link (starts with /)
    if (href.startsWith('/')) {
      return (
        <Link to={href} className={className}>
          {children}
        </Link>
      );
    }
    // External link
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
