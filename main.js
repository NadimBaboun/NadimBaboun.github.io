function downloadVideo() {
        // Get the video URL from the input field
        var videoUrl = document.getElementById("video-url").value;

        // Use the pytube library to download the video
        var pytube = require("pytube");
        var yt = pytube(videoUrl);
        var stream = yt.streams.filter(file_extension='mp4',resolution='720p').first()
        stream.download("C:\Users\thebe\Downloads");

        // Update the UI to show that the video has been downloaded
        document.getElementById("download-status").innerHTML = "Downloaded";
        document.getElementById("download-status").style.color = "green";
      }
