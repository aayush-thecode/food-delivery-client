// components/ui/button/Button.tsx

import React from 'react';

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'danger';
  className?: string;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  size = 'md',
  color = 'primary',
  className,
  disabled = false,
}) => {
  const baseStyles = 'px-4 py-2 font-bold rounded-md focus:outline-none transition-all';
  const sizeStyles = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };
  const colorStyles = {
    primary: 'bg-orange-500 hover:bg-orange-600 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${colorStyles[color]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
