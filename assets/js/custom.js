function removeHttp(url){
  return url.replace(/http(s)?:\/\//, "");
}

$(function(){
  $.get("contents/info.json", function(data){
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

  }, "json");

  $.get("contents/educations.json", function(data){
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

  }, "json");

  $.get("contents/languages.json", function(data){
    var dataLength = data.length;
    var languageJQuery = $("div.languages-container > ul")
    for(var i = 0; i < dataLength; i++){
      languageJQuery
        .append(`<li>${data[i].language}: <span class="lang-desc">${data[i].level}</span></li>`);
    }

  }, "json");

  $.get("contents/interests.json", function(data){
    var dataLength = data.length;
    var interestJQuery = $("div.interests-container > ul")
    for(var i = 0; i < dataLength; i++){
      interestJQuery
        .append(`<li>${data[i]}</li>`);
    }

  }, "json");

  $.get("contents/work-experiences.json", function(data){
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

  }, "json");

  $.get("contents/relevant-experiences.json", function(data){
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

  }, "json");

  $.get("contents/honors.json", function(data){
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

  }, "json");

  $.get("contents/skills.json", function(data){
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

  }, "json");
});
