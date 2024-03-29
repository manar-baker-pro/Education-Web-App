import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./ScrollerStyle.css";
interface ScrollerInter {
  inverse: boolean;
  loading: boolean;
  pageNumber: number;
  fetch: any;
  htmlElem: any;
  hasMore: boolean;
}
function ScrollerCom(props: ScrollerInter) {
  const dispatch = useDispatch();
  const isTop = (el: HTMLElement) => {
    return el.scrollTop === 0;
  };
  const isBottom = (el: HTMLElement) => {
    if (el.scrollTop + el.clientHeight === el.scrollHeight)
      return el.scrollTop + el.clientHeight === el.scrollHeight;
  };
  const trackScrolling = useCallback(() => {
    const wrappedEleme = document.getElementById(props.htmlElem);
    if (
      props.pageNumber > 1 &&
      props.inverse === true &&
      props.hasMore === true &&
      props.loading === false &&
      isTop(wrappedEleme!)
    ) {
      dispatch(props.fetch);
    } else if (
      props.pageNumber > 1 &&
      props.inverse === false &&
      props.hasMore === true &&
      props.loading === false &&
      isBottom(wrappedEleme!)
    ) {
      dispatch(props.fetch);
    }
  }, [
    props.pageNumber,
    props.hasMore,
    props.loading,
    props.inverse,
    props.fetch,
    props.htmlElem,
    dispatch,
  ]);
  useEffect(() => {
    const wrappedElement = document.getElementById(props.htmlElem);
    if (wrappedElement && props.hasMore === true) {
      wrappedElement?.addEventListener("scroll", trackScrolling);
    }
    return () => {
      wrappedElement?.removeEventListener("scroll", trackScrolling);
    };
  }, [props.hasMore, props.htmlElem, trackScrolling]);
  return <></>;
}

export default ScrollerCom;
