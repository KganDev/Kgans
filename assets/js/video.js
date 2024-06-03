/*const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const ani = entry.target.querySelector('.ani');

    if (entry.isIntersecting) {
      ani.classList.add('video-animation');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    ani.classList.remove('video-animation');
  });
});

observer.observe(document.querySelector('.vid-wrapper'));*/

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    let aniClass;
    if (entry.target.classList.contains("vid-wrapper")) {
      aniClass = ".ani";
    } else if (entry.target.classList.contains("vid-wrapper2")) {
      aniClass = ".ani2";
    }

    const ani = entry.target.querySelector(aniClass);

    if (entry.isIntersecting) {
      ani.classList.add("video-animation");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    ani.classList.remove("video-animation");
  });
});

observer.observe(document.querySelector(".vid-wrapper"));
observer.observe(document.querySelector(".vid-wrapper2"));
