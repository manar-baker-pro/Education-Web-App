export interface Slide {
  _id?: string;
  content: string;
  kind: string;
  format: string;
}
export interface Lecture {
  _id?: string;
  slides: Slide[];
  language?: string;
  title: string;
}
export interface LectureState {
  lecload: boolean;
  lecDa: Lecture[];
  slidDa: Slide[];
  currentSlides: Slide[];
  pageSizeSlide: number;
  lecerr: any;
}
