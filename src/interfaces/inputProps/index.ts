export interface InputProps {
  value: number;
  onChange: (value: number) => void;
  label?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  maxLength?: number;
}
