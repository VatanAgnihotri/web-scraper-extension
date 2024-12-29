chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "scrapePage") {
    console.log("Scraping page...");

    // Use chrome.tabs.query to get the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        const tab = tabs[0]; // Get the active tab
        chrome.scripting.executeScript(
          {
            target: { tabId: tab.id },
            function: scrapePage,
          },
          (result) => {
            if (chrome.runtime.lastError) {
              console.error(
                "Error executing script: ",
                chrome.runtime.lastError
              );
              sendResponse({ success: false });
            } else {
              console.log("Script executed successfully.");
              sendResponse({ success: true });
            }
          }
        );
      } else {
        console.error("No active tab found");
        sendResponse({ success: false });
      }
    });

    // Return true to indicate that the response will be asynchronous
    return true;
  }
});

function scrapePage() {
  console.log("Scraping page content...");

  const pageContent = document.documentElement.innerHTML;
  chrome.storage.local.set({ pageContent }, () => {
    console.log("Page content saved to storage.");
  });
}
