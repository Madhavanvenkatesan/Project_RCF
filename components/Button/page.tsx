
// Define the type for the props
interface ButtonProps {
    label: string; // The text displayed on the button
    bgColor?: string; // Custom background color (default: slate-800)
    hoverBgColor?: string; // Custom hover background color (default: slate-600)
    textColor?: string; // Custom text color (default: white)
    hoverTextColor?: string; // Custom hover text color (default:
    onClick?: () => void; // Optional click handler
    disabled?: boolean; // Optional disabled state for the button
    className?: string; // Optional custom className for additional styling
}

const Button: React.FC<ButtonProps> = ({
    label,
    bgColor = 'bg-slate-800', // Default background color
    hoverBgColor = 'hover:bg-slate-600', // Default hover background color
    textColor = 'text-white', // Default text color
    hoverTextColor = '', // Default hover text color
    onClick,disabled = false,
    className = '', // Default empty className
}) => {
    return (
        <button className={`py-1 px-4 my-4 font-bold rounded-lg ${bgColor} ${hoverBgColor} ${textColor} ${className} ${hoverTextColor}`} onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
};

export default Button;
