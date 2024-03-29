import { Lang } from "../../reducer/langreducer/langRinter";

interface LanguageActionPending {
  type:
    | "REQUEST_CREATE_LANGUAGE"
    | "REQUEST_GET_LANGUAGE"
    | "SUCCESS_CREATE_LANGUAGE";
}

interface LanguageActionSuccess {
  type: "SUCCESS_GET_LANGUAGE";
  payload: Lang[];
}

interface LanguageActionFail {
  type: "FAILED_CREATE_LANGUAGE" | "FAILED_GET_LANGUAGE";
  payload: any;
}
interface LanguageFillFormate {
  type: "FILL_FORMATE_DATA";
  payload?: string;
}
export type ActionLanguage =
  | LanguageActionPending
  | LanguageActionSuccess
  | LanguageFillFormate
  | LanguageActionFail;
