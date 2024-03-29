import { UserSearchPage } from "../../../reduxstore/reducer/usereducer/authreducer/userRinter";
// import prog from "../../../images/blog-item-02.png";
import "./ContactAdStyle.css";
interface Cust {
  us: UserSearchPage;
  setItem: any;
  myMap: any;
}
function IteratUser({ us, setItem, myMap }: Cust) {
  return (
    <div
      className="usershowdet"
      onClick={() => setItem(us)}
      style={{
       
        backgroundColor: myMap.get(us._id) ? "#7e7bb9a9" : "transparent",
      }}
    >
      <img className="userPicDet" src={us.profilePic} alt="user pic" />
      <div className="userInfoDet">
        <p className="usersubrow" style={{ textTransform: "capitalize" }}>
          {us.name} : {us.role}
        </p>
        <p className="usersubrow">{us.email}</p>
      </div>
    </div>
  );
}

export default IteratUser;

//const dispatch = useDispatch();
// const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
//   if (e.target.checked) {
//     setconversation((prev) => {
//       let members = [...prev.members, us._id];
//       return { ...prev, members };
//     });
//     setselected((prev) => [...prev, { name: us.name, _id: us._id }]);
//   } else {
//     setconversation((prev) => {
//       let pre = [...prev.members];
//       let members = pre.filter((mem) => {
//         return mem !== us._id;
//       });
//       return { ...prev, members };
//     });
//     setselected((prev) => {
//       let pre = [...prev];
//       let members = pre.filter((mem) => {
//         return mem._id !== us._id;
//       });
//       return members;
//     });
//   }
// };
