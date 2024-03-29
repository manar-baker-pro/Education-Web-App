// import React, { useCallback, useEffect } from "react";
// import { useDispatch } from "react-redux";

function ScrollHoc(props: any) {
  // const dispatch = useDispatch();
  // const isTop = (el: HTMLElement) => {
  //   return el.scrollTop === 0;
  // };
  // const isBottom = (el: HTMLElement) => {
  //   return el.scrollTop + el.clientHeight === el.scrollHeight;
  // };
  // const trackScrolling = useCallback(() => {
  //   const wrappedElement = document.getElementById("listing-container");

  //   if (
  //     props.inverse === true &&
  //     isTop(wrappedElement!) &&
  //     props.loading === false &&
  //     props.pageNumber > 1 &&
  //     props.currentChat?._id
  //   ) {
  //     //GetMessages(currentChat._id, pageNumber)
  //     dispatch(props.fetch);
  //   } else if (
  //     props.inverse === false &&
  //     isBottom(wrappedElement!) &&
  //     props.loading === false &&
  //     props.pageNumber > 1 &&
  //     props.currentChat?._id
  //   ) {
  //     dispatch(props.fetch);
  //   }
  // }, [props.pageNumber, props.loading, dispatch]);

  // useEffect(() => {
  //   const wrappedEleme = document.getElementById(props.htmlElem);
  //   if (props.hasMore === true) {
  //     wrappedEleme?.addEventListener("scroll", trackScrolling);
  //   }
  //   return () => {
  //     wrappedEleme?.removeEventListener("scroll", trackScrolling);
  //   };
  // }, [trackScrolling, props.hasMore]);
  return <></>;
}

export default ScrollHoc;
