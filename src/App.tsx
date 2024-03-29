import "./App.css";
import SignUp from "./components/signcom/Signup";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Maindiv } from "./AppStyle";
import Signin from "./components/signcom/Signin";
import { AuthorizeRout, OnlineRoute, RequireAuth } from "./routes/AuthRoute";
import Home from "./components/home/Home";
import ProLang from "./components/proglang/ProLang";
import Load from "./components/reusable/Load";
import NavBar from "./components/navbar/NavBar";
import AdminBo from "./components/adminDash/AdminBo";
import LectureAd from "./components/adminDash/lectureAd/LectureCom";
import Questions from "./components/adminDash/questionAd/Questions";
import HomeDash from "./components/adminDash/homeDash/HomeDash";
import "react-toastify/dist/ReactToastify.css";
import AccountAd from "./components/adminDash/accountAd/AccountAd";
import ContactAd from "./components/adminDash/contactAd/ContactAd";
import Contact from "./components/chat/Contact";
import QuestionCom from "./components/question/QuestionCom";
import { ApiEnum, ComponentName } from "./routes/Authorize";
import EstablishConn from "./components/socketConn/EstablishConn";
import { ToastContainer } from "react-toastify";
import LangAd from "./components/adminDash/langAd/LangAd";
import ConfirmEmail from "./components/signcom/ConfirmEmail";
function App() {
  return (
    <Maindiv>
      <ToastContainer
        autoClose={false}
        newestOnTop={true}
        closeOnClick={true}
      />
      <Load />

      <EstablishConn />

      <Router>
        <NavBar />
        <Routes>
          <Route
            index
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/signin"
            element={
              <OnlineRoute>
                <Signin />
              </OnlineRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <OnlineRoute>
                <SignUp />
              </OnlineRoute>
            }
          />
          <Route
            path="/confirm"
            element={
              <OnlineRoute conf={true}>
                <ConfirmEmail />
              </OnlineRoute>
            }
          />
          <Route
            path="/lang/:prolang"
            element={
              <AuthorizeRout
                componentNa={ComponentName.Lecture}
                callVerb={ApiEnum.GET}
              >
                <ProLang />
              </AuthorizeRout>
            }
          />

          <Route
            path="/admindash"
            element={
              <AuthorizeRout
                componentNa={ComponentName.AdminDash}
                callVerb={ApiEnum.GET}
              >
                <AdminBo />
              </AuthorizeRout>
            }
          >
            <Route
              path="static"
              element={
                <AuthorizeRout
                  componentNa={ComponentName.User}
                  callVerb={ApiEnum.GET}
                >
                  <HomeDash />
                </AuthorizeRout>
              }
            />
            <Route
              path="language"
              element={
                <AuthorizeRout
                  componentNa={ComponentName.Language}
                  callVerb={ApiEnum.POST}
                >
                  <LangAd />
                </AuthorizeRout>
              }
            />
            <Route
              path="lecture"
              element={
                <AuthorizeRout
                  componentNa={ComponentName.Lecture}
                  callVerb={ApiEnum.POST}
                >
                  <LectureAd />
                </AuthorizeRout>
              }
            />
            <Route
              path="question"
              element={
                <AuthorizeRout
                  componentNa={ComponentName.Question}
                  callVerb={ApiEnum.POST}
                >
                  <Questions />
                </AuthorizeRout>
              }
            />
            <Route
              path="account"
              element={
                <AuthorizeRout
                  componentNa={ComponentName.User}
                  callVerb={ApiEnum.POST}
                >
                  <AccountAd />
                </AuthorizeRout>
              }
            />
            <Route
              path="conver"
              element={
                <AuthorizeRout
                  componentNa={ComponentName.Conversation}
                  callVerb={ApiEnum.POST}
                >
                  <ContactAd />
                </AuthorizeRout>
              }
            />
          </Route>

          <Route
            path="chating"
            element={
              <AuthorizeRout
                componentNa={ComponentName.Conversation}
                callVerb={ApiEnum.GET}
              >
                <Contact />
              </AuthorizeRout>
            }
          />
          <Route
            path="chating/:langId"
            element={
              <AuthorizeRout
                componentNa={ComponentName.Conversation}
                callVerb={ApiEnum.GET}
              >
                <Contact />
              </AuthorizeRout>
            }
          />

          <Route
            path="question/:idlang"
            element={
              <AuthorizeRout
                componentNa={ComponentName.Question}
                callVerb={ApiEnum.GET}
              >
                <QuestionCom />
              </AuthorizeRout>
            }
          />

          <Route
            path="*"
            element={
              <RequireAuth>
                <Navigate replace to={"/"} />
              </RequireAuth>
            }
          />
        </Routes>
      </Router>
    </Maindiv>
  );
}

export default App;
