let slider = document.getElementById("slider");
let thumbnails = document.querySelectorAll(".thumbnail");
let nextBtn = document.getElementById("slide-right");
let prevBtn = document.getElementById("slide-left");

nextBtn.addEventListener("click", () => {
  let scrollAmount = 0;

  let slideTimer = setInterval(() => {
    slider.scrollLeft += 20;
    scrollAmount += 10;

    if(scrollAmount >= 100) {
      clearInterval(slideTimer);
    }
  }, 25);
});

prevBtn.addEventListener("click", () => {
  let scrollAmount = 0;

  let slideTimer = setInterval(() => {
    slider.scrollLeft -= 32;
    scrollAmount += 10;
    
    if(scrollAmount >= 100) {
      clearInterval(slideTimer);
    }
  }, 25);
});

// Auto Play
function autoPlay() {
  if(slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth) - 1) {
    slider.scrollLeft = 0;
  }
  else {
    slider.scrollLeft += 1;
  }
}

let play = setInterval(autoPlay, 10);

// Pause the slide on hover
thumbnails.forEach((thumb) => {
  thumb.addEventListener("mouseover", () => {
    clearInterval(play);
  });

  thumb.addEventListener("mouseout", () => {
    play = setInterval(autoPlay, 10);
  });
});