const d = document,
w = window;

export default function responsiveMedia(mq, logo) {
let breakpoint = w.matchMedia(mq);
const $logo = d.querySelector(logo);

const responsive = (e) => {
    if (e.matches) {
        $logo.setAttribute("width", "50");
    } else {
        $logo.setAttribute("width", "80");
    }
    };
    breakpoint.addListener(responsive);
    responsive(breakpoint);
}
