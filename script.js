//Getting/targeting our html with DOM
const videoElement = document.getElementById("video");
const button1 = document.getAnimations("button");

//Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    //working with screen capture API to capture live screen content by calling
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream; //Passing mediaStream to video Object as it source object (srcObject)
    videoElement.onloadedmetadata = () => {
      //When the video has loaded its metadata, it's going to call a function that is going to play the video
      videoElement.play();
    };
  } catch (error) {
    //Catch Error Here
    console.log("You entered an error command", error);
  }
}

//Adding Event Listener for the button
button.addEventListener("click", async () => {
  //Disable Button
  button.disabled = true;
  //Start Picture In Picture
  await videoElement.requestPictureInPicture();
  //Reset the Button
  button.disabled = false;
  //this is only going to happen if we successfully request our picture in picture, if not, our button will  remain disable
});

//On Load
selectMediaStream();
