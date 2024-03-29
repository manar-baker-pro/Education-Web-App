import { FC } from "react";
import { TypeSlide } from "../../adminDash/lectureAd/KindEnum";
import { ChapterImage, ChapterText } from "./ChapterStyle";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
const ChapterKind: FC<{
  slideKind: string;
  slideContent: string;
  lang?: any;
  color:string;
}> = ({ slideKind, slideContent, lang,color }) => {
  if (
    slideKind === TypeSlide.Code &&
    lang &&
    lang.state &&
    lang.state.lan.format
  ) {
    return (
      <SyntaxHighlighter
        language={color}
        style={atomDark}
        customStyle={{
          overflowX: "auto",
          overflowY: "auto",
          maxHeight: "300px",
          width: "auto",
        }}
      >
        {slideContent}
      </SyntaxHighlighter>
    );
  } else if (slideKind === TypeSlide.Image) {
    return <ChapterImage src={slideContent} />;
  } else if (slideKind === TypeSlide.Text) {
    return <ChapterText>{slideContent}</ChapterText>;
  } else if (slideKind === TypeSlide.Video) {
    return (
      <div style={{ display: "flex", justifyContent: "center", width: "100%",
  marginTop:"20px",
}}>
        <iframe
          src={slideContent}
          frameBorder="0"
          height={"300px"}
          width={"500px"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="video"
        ></iframe>
      </div>
    );
  }
  return null;
};

export default ChapterKind;
