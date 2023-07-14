const images = [
  "a.jpg",
  "aa.jpg",
  "aaa.jpg",
  "aaaa.jpg",
  "aaaaa.jpg",
];

const currentImageIndex = 0;

function showImage() {
  const image = images[currentImageIndex];
  document.querySelector(".child img").src = image;
}

document.querySelector(".child").addEventListener("mouseover", () => {
  showImage();
});

document.querySelector(".child").addEventListener("mousemove", (event) => {
  currentImageIndex = Math.floor(
    (event.clientX / document.querySelector(".child").clientWidth) *
      images.length
 );
  showImage();
});
