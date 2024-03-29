interface IterShow {
  object: Object | string;
}
function IterShowObject({ object }: IterShow) {
  if (typeof object === "object") {
    return (
      <>
        {Object.keys(object).map((ob: string, index: number) => {
          if (typeof ob === "string") {
            return <div key={index}>{ob}</div>;
          } else {
            return <div key={index}></div>;
          }
        })}
      </>
    );
  } else {
    return <div></div>;
  }
}

export default IterShowObject;
