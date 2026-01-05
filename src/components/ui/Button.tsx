import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export default function Button({ children, type = "button", variant = "primary", onClick }: ButtonProps) {
  const base = "px-8 py-3 rounded-lg font-medium transition transform hover:scale-105";
 
// ... existing Button
const variants = {
  primary: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-xl shadow-blue-900/30",
  secondary: "bg-transparent border-2 border-blue-500/60 text-blue-300 hover:bg-blue-950/40 backdrop-blur-sm",
  outline: "border-2 border-blue-500/60 text-blue-300 hover:bg-blue-950/40 backdrop-blur-sm",
};
  return (
    <button type={type} onClick={onClick} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}