function removeHttp(url){
  return url.replace(/http(s)?:\/\//, "");
}

$(document).ready(function(){
  $.ajax({
    url: "contents/info.json",
    dataType: "json",
    async: false,
    success: function(data){
      // Header
      $("title").text(data.title);
      $("h1.name").text(data.name);
      $("h3.tagline").text(data.tagline);

      // Contact
      $("li.email > a").attr("href", "mailto: " + data.email).text(data.email);
      $("li.phone > a").attr("href", "tel: " + data.phone).text(data.phone);
      $("li.website > a")
        .attr("href", data.website)
        .text(removeHttp(data.website));
      $("li.linkedin > a")
        .attr("href", data.linkedin)
        .text(removeHttp(data.linkedin));
      $("li.github > a")
        .attr("href", data.github)
        .text(removeHttp(data.github));
    }
  });

  $.ajax({
    url: "contents/educations.json",
    dataType: "json",
    async: false,
    success: function(data){
      var dataLength = data.length;
      var educationJQuery = $("div.education-container")
      for(var i = 0; i < dataLength; i++){
        educationJQuery
          .append(`
            <div class="item">
              <h4 class="degree">${data[i].degree}</h4>
              <h5 class="meta">${data[i].meta}</h5>
              <h5 class="meta">${data[i].gpa}</h5>
              <div class="time">${data[i].time}</div>
            </div>`);
      }
    }
  });

  $.ajax({
    url: "contents/languages.json",
    dataType: "json",
    async: false,
    success: function(data){
      var dataLength = data.length;
      var languageJQuery = $("div.languages-container > ul")
      for(var i = 0; i < dataLength; i++){
        languageJQuery
          .append(`<li>${data[i].language}: <span class="lang-desc">${data[i].level}</span></li>`);
      }
    }
  });

  $.ajax({
    url: "contents/interests.json",
    dataType: "json",
    async: false,
    success: function(data){
      var dataLength = data.length;
      var interestJQuery = $("div.interests-container > ul")
      for(var i = 0; i < dataLength; i++){
        interestJQuery
          .append(`<li>${data[i]}</li>`);
      }
    }
  });

  $.ajax({
    url: "contents/work-experiences.json",
    dataType: "json",
    async: false,
    success: function(data){
      var dataLength = data.length;
      var experienceJQuery = $(".experiences-section#work")
      for(var i = 0; i < dataLength; i++){
        // Get details list
        var details = data[i].details;
        var detailsLength = details.length;
        var detailsHTML = "";
        for(var j = 0; j < detailsLength; j++){
          detailsHTML += '<li>' + details[j] + '</li>';
        }

        experienceJQuery
          .append(`
            <div class="item">
              <div class="meta">
                <div class="upper-row">
                  <h3 class="job-title">${data[i].title}</h3>
                    <div class="time">${data[i].time}</div>
                </div>
                <div class="company">${data[i].description}</div>
              </div>
              <div class="details">
                <ul>${detailsHTML}</ul>
              </div>
            </div>`);
      }
    }
  });

  $.ajax({
    url: "contents/relevant-experiences.json",
    dataType: "json",
    async: false,
    success: function(data){
      var dataLength = data.length;
      var experienceJQuery = $(".experiences-section#relevant")
      for(var i = 0; i < dataLength; i++){
        // Get details list
        var details = data[i].details;
        var detailsLength = details.length;
        var detailsHTML = "";
        for(var j = 0; j < detailsLength; j++){
          detailsHTML += '<li>' + details[j] + '</li>';
        }

        experienceJQuery
          .append(`
            <div class="item">
              <div class="meta">
                <div class="upper-row">
                  <h3 class="job-title">${data[i].title}</h3>
                    <div class="time">${data[i].time}</div>
                </div>
                <div class="company">${data[i].description}</div>
              </div>
              <div class="details">
                <ul>${detailsHTML}</ul>
              </div>
            </div>`);
      }
    }
  });

  $.ajax({
    url: "contents/honors.json",
    dataType: "json",
    async: false,
    success: function(data){
      var dataLength = data.length;
      var honorJQuery = $(".experiences-section#honors")
      for(var i = 0; i < dataLength; i++){
        honorJQuery
          .append(`
            <div class="item">
              <div class="meta">
                <div class="upper-row">
                  <h3 class="job-title">${data[i].title}</h3>
                    <div class="time">${data[i].time}</div>
                </div>
              </div>
            </div>`);
      }
    }
  });

  $.ajax({
    url: "contents/skills.json",
    dataType: "json",
    async: false,
    success: function(data){
      var dataLength = data.length;
      var experienceJQuery = $(".skills-section > div.skillset")
      for(var i = 0; i < dataLength; i++){
        // Limit level to between 0 - 100
        var level = data[i].level;
        level = level < 0 ? 0 : level;
        level = level > 100 ? 100 : level;

        experienceJQuery
          .append(`
            <div class="item">
                <h3 class="level-title">${data[i].title}</h3>
                <div class="level-bar">
                    <div class="level-bar-inner" data-level="${level}%">
                    </div>
                </div>
            </div>`);
      }
    }
  });
});

$(window).load(function(){
  $(".wrapper").fadeIn("slow");
  $("#loading").fadeOut("slow");
});
