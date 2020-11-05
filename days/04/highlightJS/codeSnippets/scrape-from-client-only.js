// use Proxy to avoid CORS error
const targetUrl = "https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris";
const corsProxy = "https://cors-anywhere.herokuapp.com/";

// fetch
fetch(corsProxy + targetUrl)
  .then(response => response.text())
  .then(text => {
    // replace all links to prevent images from loading
    text = text.replace(/href=["|'](.*?)["|']/g, "");
    text = text.replace(/src=["|'](.*?)["|']/g, "");
    text = text.replace(/srcset=["|'](.*?)["|']/g, "");

    // inject as innerHTML
    // hidden element needs styling: "display:none; visibility:collapse"
    // hidden element needs id="hiddenElement"
    const hiddenElement = document.getElementById("hiddenElement");
    hiddenElement.innerHTML = text;

    // inject your JS scraping code here:
    // document.querySelectorAll("my-selector");
    const cities = Array.from(document.querySelectorAll(".mw-category a")).map(el => el.text);
    alert(cities.join(", "));

    // remove element
    hiddenElement.remove();
  })
