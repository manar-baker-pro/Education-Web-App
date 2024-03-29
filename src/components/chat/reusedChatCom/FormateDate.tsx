const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function FormateDate(props: any) {
  const date = new Date(props.createdAt);
  const prev = new Date(props.prev);
  // console.log(prev.getDate() + "  " + date.getDate());
  if (props.check) {
    const previ = `${monthNames[prev.getMonth()]} ${prev.getDate()}`;
    const pp = `${monthNames[date.getMonth()]} ${date.getDate()}`;
    if (previ !== pp) {
      return <div style={{width:"max-content", backgroundColor: "#776ef7b5",padding:"2px 8px",borderRadius:"10px"}}>{pp}</div>;
    } else if (props.isfirst) {
      return <div style={{width:"max-content", backgroundColor: "#776ef7b5",padding:"2px 8px",borderRadius:"10px"}}>{pp}</div>;
    } else {
      return null;
    }
  } else {
    const min = date.getMinutes();
    const hours = date.getHours();
    const time = `${hours >= 10 ? hours : `0${hours}`}:${
      min >= 10 ? min : `0${min}`
    }${date.getHours() > 13 ? ` PM` : ` AM`}`;
    return (
      <p
        style={{
          display: "flex",
          justifyContent: "flex-end",                
          color:"gray",
          fontSize:`${props.fontSize}`
      
        }}
      >
        {time}
      </p>
    );
  }
}

export default FormateDate;
