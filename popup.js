document.getElementById("scrapeButton").addEventListener("click", function () {
  console.log("Scrape button clicked.");

  document.getElementById("scrapeButton").addEventListener("click", () => {
    // Send a message to the background script to scrape the page
    chrome.runtime.sendMessage({ action: "scrapePage" }, (response) => {
      if (response.success) {
        // Ensure storage API is available
        if (chrome.storage && chrome.storage.local) {
          ("pageContent", function (result) {
            const contentDiv = document.getElementById("content");

            if (result.pageContent) {
              console.log("Scraped content retrieved.");
              contentDiv.textContent = result.pageContent; // Display the scraped content
            } else {
              console.log("No content found.");
              contentDiv.textContent =
                "No content found. Please scrape a page first.";
            }
          });
        } else {
          console.log("Chrome storage API is not available.");
        }
      } else {
        document.getElementById("content").textContent =
          "Error: Scraping failed.";
      }
    });
  });
});
