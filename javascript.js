
var searchTerm = "";
var numberRecords;
var startYear;
var endYear;



$("#searchButton").on("click", function () {
  searchTerm = $("#searchTerm").val();
  numberRecords = $("#numberRecords").val();
  startYear = $("#startYear").val();
  endYear = $("#endYear").val();

  var queryURL = "http://developer.nytimes.com/proxy/https/api.nytimes.com/svc/search/v2/articlesearch.json?api-key=8bcf9cc14588480da94b4e7b37f44aa6&q=" + searchTerm + "&begin_date=" + startYear + "0101&end_date=" + endYear + "1231";

  $.ajax({
    type: "GET",
    url: "queryURL",
    dataType: "JSON",
    success: function (response) {
      console.log(response);
      var articleArray = response.docs;

      for (var i = 0; i < numberRecords; i++) {
        var articleCount = 1;
        var article = $("<div>");
        var articleNum = $("<div>"); // let front-end take care of styling
        articleNum.text(articleCount); 
      }


    }
  });
});