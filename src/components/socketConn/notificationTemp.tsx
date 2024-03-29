import React from "react";
export const Msg = (props: any) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      color: "white",
    }}
  >
    <img
      src={props.msg.convInfo.picture}
      style={{
        height: "50px",
        width: "50px",
        borderRadius: "100%",
        marginRight: "10px",
        objectFit: "cover",
      }}
      alt=""
    />
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>{props.msg.convInfo.title}</h2>
      <h4>{props.msg.author.name}</h4>
      <p
        style={{
          wordBreak: "break-all",
          textOverflow: "ellipsis",
          width: "90px",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        {props.msg.content}
      </p>
    </div>
  </div>
);
export const Conv = (props: any) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      color: "white",
    }}
  >
    <img
      src={props.msg.picture}
      style={{
        height: "50px",
        width: "50px",
        borderRadius: "100%",
        marginRight: "10px",
        objectFit: "cover",
      }}
      alt=""
    />
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>{props.msg.title}</h2>
      <p
        style={{
          wordBreak: "break-word",
          textOverflow: "ellipsis",
          width: "180px",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        you just added to this group
      </p>
    </div>
  </div>
);
