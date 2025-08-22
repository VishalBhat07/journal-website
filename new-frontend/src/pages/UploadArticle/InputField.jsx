import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

function InputField({ id, label, value, onChange, placeholder }) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id} className="text-sm md:text-base">
        {label}
      </Label>
      <Input
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="text-sm md:text-base"
      />
    </div>
  );
}

export default InputField;
