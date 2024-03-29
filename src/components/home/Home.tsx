import {
  ImgeHeader,
  Homediv,
  InfoHeader,
  HeaderButton,
  ParaHeader,
  SlideImg,
  SlideHead,
  CardCon,
  Card,
  CardContent,
  ParaSlide,
  SpanButton,
} from "./HomeStyle";
import { useRef } from "react";
import lec from "../../images/lec.png";
import exer from "../../images/exer.png";
import ch from "../../images/ch.png";
import Footer from "./Footer/Footer";
import LangShower from "./LangShower";
import { AuthorizeRout } from "../../routes/AuthRoute";
import { ComponentName, ApiEnum } from "../../routes/Authorize";
function Home() {
  const scroll = useRef<HTMLDivElement>(null);
  return (
    <>
      <Homediv>
        <ImgeHeader>
          <InfoHeader>
            <ParaHeader lineHight="45px" width="60%">
              We provide the best road map to grow up your programming skills
            </ParaHeader>
            <HeaderButton
              onClick={() => {
                scroll?.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <SpanButton>Get Started</SpanButton>
            </HeaderButton>
          </InfoHeader>
        </ImgeHeader>
        <CardCon>
          <Card>
            <CardContent>
              <SlideImg backgroundImage={ch} />
              <SlideHead>Discussions groups</SlideHead>
              <ParaSlide color={"black"} width="100%">
                You can make discussion with others in Certain programming
                language
              </ParaSlide>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <SlideImg backgroundImage={lec} />
              <SlideHead>Lectures And Videos</SlideHead>
              <ParaSlide color={"black"} width="100%">
                Learn about any programming language by reading lectures and
                watching videos
              </ParaSlide>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <SlideImg backgroundImage={exer} />
              <SlideHead>Exercies</SlideHead>
              <ParaSlide color={"black"} width="100%">
                You can test what did you learned by implmenting a small quiz
                after each lecture
              </ParaSlide>
            </CardContent>
          </Card>
        </CardCon>
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 400"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
          style={{ position: "absolute", bottom: "-160px" }}
        >
          <path
            d="M 0,600 C 0,600 0,300 0,300 C 186.40000000000003,290.5333333333333 372.80000000000007,281.06666666666666 527,299 C 681.1999999999999,316.93333333333334 803.2,362.26666666666665 950,367 C 1096.8,371.73333333333335 1268.4,335.8666666666667 1440,300 C 1440,300 1440,600 1440,600 Z"
            fill="#e6dbf4"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
        </svg>
      </Homediv>
      <AuthorizeRout
        componentNa={ComponentName.Language}
        callVerb={ApiEnum.GET}
      >
        <LangShower scroll={scroll} />
      </AuthorizeRout>
      <Footer />
    </>
  );
}

export default Home;
