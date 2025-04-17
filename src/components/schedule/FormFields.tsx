
import { Input } from "@/components/ui/input";

interface FormFieldsProps {
  name: string;
  email: string;
  onNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
}

const FormFields = ({
  name,
  email,
  onNameChange,
  onEmailChange,
}: FormFieldsProps) => {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="name" className="font-medium text-black mb-2 block">
          Your Name
        </label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="font-medium text-black mb-2 block">
          Email Address
        </label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
      </div>
    </div>
  );
};

export default FormFields;
