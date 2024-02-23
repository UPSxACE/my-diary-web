import { Alert } from "@mantine/core";
import { IoInformationCircleOutline } from "react-icons/io5";

interface ErrorAlertProps {
  visible: boolean;
  title: string;
}

export default function ErrorAlert(props: ErrorAlertProps) {
  const { visible, title } = props;

  if (!visible) {
    return null;
  }

  return (
    <Alert
      variant={"light"}
      color="red.9"
      title={title}
      icon={<IoInformationCircleOutline className="text-xl" />}
    />
  );
}
