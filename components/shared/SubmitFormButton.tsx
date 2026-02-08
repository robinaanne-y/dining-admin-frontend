
import Button from "@/components/ui/Button";


interface SubmitFormButtonProps {
  isLoading: boolean;
  label: string;
  loadingLabel: string;
  onClick?: () => void;
}

const SubmitFormButton: React.FC<SubmitFormButtonProps> = ({
    isLoading,
    label,
    loadingLabel,
}) => {
  return (
    <Button
        type="submit"
        isLoading={isLoading}
        loadingLabel={loadingLabel}
        children={label}
    />
  );
}

export default SubmitFormButton;