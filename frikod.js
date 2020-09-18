(function () {
  const info = document.querySelector(".info");
  const status = document.querySelector(".status");
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
})();
