import axios from "axios";
import { Dispatch } from "react";
import { RootState } from "../../store";
import { toast } from "react-toastify";
import { ActionLanguage } from "./langAInter";
import { Lang } from "../../reducer/langreducer/langRinter";
export const GetLangs = (names?: string) => {
  return async (
    dispatch: Dispatch<ActionLanguage>,
    getState: () => RootState
  ) => {
    try {
      const {
        userSign: { userInfo },
      } = getState();
      dispatch({ type: "REQUEST_GET_LANGUAGE" });
      const { data } = await axios.get<Lang[]>(
        `http://localhost:4010/lang/all?names=${names}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfo ? userInfo.accesstoken : "",
          },
        }
      );
      dispatch({ type: "SUCCESS_GET_LANGUAGE", payload: data });
    } catch (err: any) {
      dispatch({ type: "FAILED_GET_LANGUAGE", payload: err.message });
    }
  };
};
export const CreateLang = (lang: Lang) => {
  return async (
    dispatch: Dispatch<ActionLanguage>,
    getState: () => RootState
  ) => {
    try {
      const {
        userSign: { userInfo },
      } = getState();
      dispatch({ type: "REQUEST_CREATE_LANGUAGE" });
      const { data } = await axios.post(
        `http://localhost:4010/lang/createLang`,
        lang,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfo ? userInfo.accesstoken : "",
          },
        }
      );
      dispatch({ type: "SUCCESS_CREATE_LANGUAGE" });
      toast.success(data.message);
    } catch (err: any) {
      toast.error("Falied to create");
      dispatch({ type: "FAILED_CREATE_LANGUAGE", payload: err.message });
    }
  };
};
export const FillFormat = (id?: string) => {
  return (dispatch: Dispatch<ActionLanguage>) => {
    dispatch({ type: "FILL_FORMATE_DATA", payload: id });
  };
};
