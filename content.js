function executeInPage() {
  try {
    // Menghapus dari extensi gambar .gif
    document.querySelectorAll('img').forEach(function(img) {
        if (img.src.endsWith('.gif')) {
            console.log("Removing img with GIF:", img);
            img.remove();
        }
    });
    console.log("Script is running...");

    // Menghapus elemen <img> dengan atribut height="79px"
    // document.querySelectorAll('img[height="79px"]').forEach(function(img) {
    //   console.log("Removing img with height=79px:", img);
    //   img.remove();
    // });

    // // Web Drive Bluray script
    // document.querySelectorAll('img[title="Ads"]').forEach(function(img) {
    //   console.log("Removing img with title=Ads:", img);
    //   img.remove();
    // });
    document.querySelectorAll('a').forEach(function(anchor) {
      if (anchor.textContent.trim() === "Download Game Nintendo Switch") {
        console.log("Removing anchor with text=Download Game Nintendo Switch:", anchor);
        anchor.remove();
      }
    });

    // // Web Ngefilm 21
    // document.querySelectorAll('a[rel="nofollow noopener"]').forEach(function(anchor) {
    //   console.log("Removing anchor with rel=nofollow noopener:", anchor);
    //   anchor.remove();
    // });

    // // Samehadaku
    // document.querySelectorAll('a[data-wpel-link="external"]').forEach(function(anchor) {
    //   console.log("Removing anchor with data-wpel-link=external:", anchor);
    //   anchor.remove();
    // });
    // document.querySelectorAll('a[rel="noopener ”nofollow”"]').forEach(function(anchor) {
    //   console.log("Removing anchor with rel=noopener ”nofollow”:", anchor);
    //   anchor.remove();
    // });

  } catch (error) {
    console.error("Error executing script:", error);
  }
}

// Jalankan script saat halaman dimuat
executeInPage();
