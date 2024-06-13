chrome.action.onClicked.addListener((tab) => {
  if (tab.id) {
    executeScript(tab.id);
  }
});

function executeScript(tabId) {
  try {
    chrome.scripting.executeScript({
      target: {tabId: tabId},
      function: executeInPage
    }, () => {
      if (chrome.runtime.lastError) {
        console.error("Error executing script:", chrome.runtime.lastError);
      }
    });
  } catch (error) {
    console.error("Error in executeScript function:", error);
  }
}

function executeInPage() {
  try {
    console.log("Script is running...");

    // Menghapus elemen <img> dengan atribut height="79px"
    document.querySelectorAll('img[height="79px"]').forEach(function(img) {
      console.log("Removing img with height=79px:", img);
      img.remove();
    });

    // Web Drive Bluray script
    document.querySelectorAll('img[title="Ads"]').forEach(function(img) {
      console.log("Removing img with title=Ads:", img);
      img.remove();
    });
    document.querySelectorAll('a').forEach(function(anchor) {
      if (anchor.textContent.trim() === "Download Game Nintendo Switch") {
        console.log("Removing anchor with text=Download Game Nintendo Switch:", anchor);
        anchor.remove();
      }
    });

    // Web Ngefilm 21
    document.querySelectorAll('a[rel="nofollow noopener"]').forEach(function(anchor) {
      console.log("Removing anchor with rel=nofollow noopener:", anchor);
      anchor.remove();
    });

    // Samehadaku
    document.querySelectorAll('a[data-wpel-link="external"]').forEach(function(anchor) {
      console.log("Removing anchor with data-wpel-link=external:", anchor);
      anchor.remove();
    });
    document.querySelectorAll('a[rel="noopener ”nofollow”"]').forEach(function(anchor) {
      console.log("Removing anchor with rel=noopener ”nofollow”:", anchor);
      anchor.remove();
    });

  } catch (error) {
    console.error("Error executing script in content page:", error);
  }
}
