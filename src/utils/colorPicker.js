import ColorThief from "colorthief";

export const getDominantColor = (imageUrl, callback) => {
    const img = document.createElement("IMG");
    const colorThief = new ColorThief();
    img.setAttribute("src", imageUrl);
    img.crossOrigin = "Anonymous";
    if (img.complete) {
      callback(colorThief.getColor(img));
    } else {
      img.addEventListener("load", function () {
        callback(colorThief.getColor(img));
      });
    }
}