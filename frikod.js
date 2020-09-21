(function () {
  const info = document.querySelector(".info");
  const status = document.querySelector(".answerStatus");

  //Navigator
  async function getClipboardContents() {
    try {
      const clipboard = await navigator.clipboard.readText();
      info.innerText = "Current clipboard: \n" + clipboard;
    } catch (err) {
      info.innerText = "Failed to read clipboard contets";
    }
  }

  function getPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let geolocation =
      "Geolocation: \nLatitude: " + latitude + "\nLongitude: " + longitude;
    info.innerText = geolocation;
  }

  function getAppName() {
    let appName = "App name: \n" + navigator.appName;
    info.innerText = appName;
  }

  document.getElementById("appNameCheck").addEventListener("click", getAppName);

  document.getElementById("geoCheck").addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(getPosition);
  });

  document
    .getElementById("clipboardCheck")
    .addEventListener("click", getClipboardContents);

  //Promise
  let currentAnswer;
  let answer = "Yes";
  let statusMessage;

  function promiseFunc() {
    return new Promise((resolve, reject) => {
      if (currentAnswer == answer) {
        resolve("promise resolved");
      } else {
        reject("promise rejected");
      }
    })
      .then((message) => {
        statusMessage = "Your answer is correct, " + message;
      })
      .catch((message) => {
        statusMessage = "Your answer is wrong, " + message;
      });
  }

  async function checkAnswer() {
    await promiseFunc();
    status.innerText = await statusMessage;
  }

  document.getElementById("answerA").addEventListener("click", () => {
    currentAnswer = "Yes";
    checkAnswer();
  });

  document.getElementById("answerB").addEventListener("click", () => {
    currentAnswer = "No";
    checkAnswer();
  });
})();
