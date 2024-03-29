import { ShowError } from "../reusableStyle";
interface ErrorHand {
  error: any;
  field: string;
}
function ErrorShow({ field, error }: ErrorHand) {
  if (
    typeof error === "object" &&
    error[field] &&
    Array.isArray(error[field])
  ) {
    return (
      <>
        {error[field].map((mes: string, index: number) => {
          return <ShowError key={index}>{mes}</ShowError>;
        })}
      </>
    );
  } else if (typeof error === "object" && typeof error[field] === "string") {
    return <ShowError>{error[field]}</ShowError>;
  } else {
    return <></>;
  }
}

export default ErrorShow;
