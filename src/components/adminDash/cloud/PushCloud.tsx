import { LinearProgress } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { CloudInput } from "../lectureAd/LectureStyle";
import { ChangeUserPic } from "../../reusable/reusableStyle";

function PushCloud(props: any) {
  const [progress, setprog] = useState<number>(0);
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);
  const handleClick = (e: any) => {
    hiddenFileInput?.current?.click();
  };
  const handlesetuploaded = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      let type = e.target.files[0].type.substr(0, 5);

      if (type === "image") {
        const content = e.target.files[0];
        const formData = new FormData();

        formData.append("file", content);

        formData.append("upload_preset", "jjguu4fo");

        axios
          .request({
            method: "post",

            url: `http://api.cloudinary.com/v1_1/donnhmpwd/${type}/upload`,

            data: formData,

            onUploadProgress: (p) => {
              setprog((p.loaded / p.total) * 100);
            },
          })

          .then((res: any) => {
            props.change(e, "file", res.data.secure_url);
            toast.success(`${type} Added Successfully`);
            setprog(0);
          })

          .catch((err) => {
            toast.error(`NetWork Error`);
          });
      }
    }
  };
  return (
    <>
      {progress ? (
        <LinearProgress
          variant="determinate"
          value={progress}
          style={{ margin: "15px", width: "200px" }}
        />
      ) : (
        ""
      )}
      <ChangeUserPic onClick={handleClick} style={{width:"220px",marginTop:"20px",padding:"10px",marginLeft:"14px"}}>{props.desc} </ChangeUserPic>
      <CloudInput
        type="file"
        name={props.name}
        onChange={(e) => handlesetuploaded(e)}
        ref={hiddenFileInput}
      />
    </>
  );
}

export default PushCloud;
