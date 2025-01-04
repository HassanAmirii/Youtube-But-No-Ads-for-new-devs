// Select all elements with the class "overlayThumbnail" (thumbnails to be clicked)
const playVideo = document.querySelectorAll(".overlayThumbnail");

// Select all elements with the class "YoutubeVideo" (corresponding YouTube videos)
const YoutubeVideo = document.querySelectorAll(".YoutubeVideo");

// Iterate over each thumbnail element
playVideo.forEach((playVideo, index) => {
  // Add a "click" event listener to each thumbnail

  playVideo.addEventListener("click", () => {
    // Hide the clicked thumbnail by setting its display to "none"
    playVideo.style.display = "none";

    // Show the corresponding YouTube video by setting its display to "block"
    YoutubeVideo[index].style.display = "block";
    YoutubeVideo[index].style.borderRadius = "0";

    // Get the current "src" attribute of the corresponding YouTube video
    const VideoSrc = YoutubeVideo[index].getAttribute("src");

    // Check if the "autoplay=1" parameter is not already in the video URL
    if (!VideoSrc.includes("autoplay=1")) {
      // Append "autoplay=1" to the video URL to enable autoplay
      YoutubeVideo[index].setAttribute("src", `${VideoSrc}?autoplay=1`);
    }
  });
});
