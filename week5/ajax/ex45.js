async function searchGif() {
  const searchTerm = document.getElementById("search-input").value;
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(searchTerm)}&api_key=${API_KEY}&limit=1`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    const embedUrl = data.data[0]?.embed_url;

    const container = document.getElementById("gif-container");
    container.innerHTML = ""; // clear old gif

    if (embedUrl) {
      const iframe = document.createElement("iframe");
      iframe.src = embedUrl;
      iframe.width = "480";
      iframe.height = "270";
      // iframe.frameBorder = "0";
      container.appendChild(iframe);
    } else {
      container.innerText = "No results found.";
    }
  } catch (err) {
    console.error("Error fetching gif:", err);
  }
}
