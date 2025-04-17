
import FormFields from "./FormFields";
import FormActions from "./FormActions";

interface ScheduleFormProps {
  name: string;
  email: string;
  onNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onCancel: () => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitDisabled: boolean;
}

const ScheduleForm = ({
  name,
  email,
  onNameChange,
  onEmailChange,
  onCancel,
  onSubmit,
  isSubmitDisabled
}: ScheduleFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <FormFields
        name={name}
        email={email}
        onNameChange={onNameChange}
        onEmailChange={onEmailChange}
      />
      <FormActions
        onCancel={onCancel}
        isSubmitDisabled={isSubmitDisabled}
      />
    </form>
  );
};

export default ScheduleForm;
