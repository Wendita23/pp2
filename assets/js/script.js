document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'AIzaSyA8oXBCCRMY_REPjCuf3LlVOfMeSqF4ZeQ';
    const channelId = 'UC7vp-pdw1XpBIiSCH0HtyKw'; 
    const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${apiKey}`;
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        displayChannelInfo(data);
      })
      .catch(error => {
        console.error('Error fetching channel info:', error);
      });
  
    function displayChannelInfo(data) {
      const channelInfoElement = document.getElementById('channel-info');
      const channel = data.items[0];
  
      if (channel) {
        const channelTitle = channel.snippet.title;
        const channelDescription = channel.snippet.description;
        const channelThumbnailUrl = channel.snippet.thumbnails.medium.url;
  
        const channelInfoHTML = `
          <h2>${channelTitle}</h2>
          <img src="${channelThumbnailUrl}" alt="${channelTitle}">
          <p>${channelDescription}</p>
        `;
  
        channelInfoElement.innerHTML = channelInfoHTML;
      } else {
        channelInfoElement.textContent = 'Channel not found';
      }
    }
  });
  
  

$(document).ready(function(){
    $('#myCarousel').on('slide.bs.carousel', function (event) {
      var currentIndex = $(this).find('.carousel-item.active').index(1);
      var totalSlides = $(this).find('.carousel-item').length;
      console.log("Current Slide: " + (currentIndex + 1) + " / Total Slides: " + totalSlides);
    });
  });
  