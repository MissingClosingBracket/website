var offset = 0;
var search = "";

async function getNews(x) {

    var requestOptions = {
        method: 'GET'
      };
      
    fetch("http://api.mediastack.com/v1/news?access_key=4b433178658deb64a15eadfb0c390354" + x, requestOptions)
    .then(response => response.text())
    .then(result => populate_news(result))
    .catch(error => alert(error));

}

function options_submitted() {
       //build this string
       search = "";
       var valid = 1;

       //get the keyword if it exists
       const keyword = new FormData(document.getElementById('keyword'))
       if ((keyword.values().next().value).toLowerCase().includes(' ')) {
              alert("You can have only one (!) keyword. No spaces allowed.")
              valid = 0;
       }
       if (keyword.values().next().value != "") {
              search += "&keyword=" + keyword.values().next().value;
       }

       //get the categories selected
       const categories = new FormData(document.getElementById("categories"))
       var category_counter = 0;
       if (categories.values().next().value != undefined) {
              for (var c of categories.values()) {
                     if (category_counter == 0) {
                            search += "&category=" + c.toLowerCase();
                            category_counter++;
                     } else search += "," + c.toLowerCase();
              }
       }

       //get the sources selected
       const sources = new FormData(document.getElementById("sources"))
       var sources_counter = 0;
       if (sources.values().next().value != undefined) {
              for (var s of sources.values()) {
                     if (sources_counter == 0) {
                            search += "&sources=" + s.toLowerCase();
                            sources_counter++;
                     } else search += "," + s.toLowerCase();
              }
       }

       //get the langauges selected
       const languages = new FormData(document.getElementById("languages"))
       var languages_counter = 0;
       if (languages.values().next().value != undefined) {
              for (var l of languages.values()) {
                     if (languages_counter == 0) {
                            search += "&languages=" + l.toLowerCase();
                            languages_counter++;
                     } else search += "," + l.toLowerCase();
              }
       }

       //get the countries selected
       const countries = new FormData(document.getElementById("countries"))
       var countries_counter = 0;
       if (countries.values().next().value != undefined) {
              for (var c of countries.values()) {
                     if (countries_counter == 0) {
                            search += "&countries=" + c.toLowerCase();
                            countries_counter++;
                     } else search += "," + c.toLowerCase();
              }
       }

       //get the date(s) selected
       const dates = new FormData(document.getElementById("date"));
       var date_start;
       var date_end;
       var date_counter = 0;
       for (var d of dates.values()) {
              if (date_counter == 0) {
                     date_start = d;
                     date_counter++;
              } else date_end = d;
       }
       
       var x = new Date().toLocaleDateString().split('/');
       var mm = x[0].toString();
       var dd = x[1].toString();
       var yyyy = x[2].toString();
       if (dd < 10) {
              dd = '0' + dd;
       }
       if (mm < 10) {
              mm = '0' + mm;
       }
       var today = yyyy + "-" + mm + "-" + dd;

       if (date_start.toString() > today || date_end.toString() > today) {
              alert("You cant search into the future! Please select a decent date range.")
              valid = 0;
       }

       if (date_start > date_end) {
              alert("Start date has to be the same date or be older the end date!")
              valid = 0;
       }

       if (date_start == date_end && date_start != "" && valid) {
              search += "&date=" + date_start;
       }
       else if (date_start == "" && date_end != "" && valid) {
              search += "&date=" + date_end;
       } else if (date_start != "" && date_end == "" && valid) {
              search += "&date=" + date_start;
       } else if ((date_start != "" && date_end != "" && valid)) {
              search += "&date=" + date_start + "," + date_end;
       }

       //Get the sorting option
       const sort_option = new FormData(document.getElementById("sort"));
       var option = sort_option.values().next().value;
       if (option != undefined) {
              search += "&sort=" + option;
       }

       //If valid, then search!
       if (valid) {
              offset = 0;
              console.log(search);
              getNews(search + "&offset=0"); //UNCOMMENT TO CALL!!!
       }
}

function setDate2() {
       document.getElementById("date2").value = document.getElementById("date1").value;
}

function next_page() {
       offset += 25;
       console.log(search);
       getNews(search + "&offset=" + offset.toString()); //UNCOMMENT TO CALL!!!
}

function populate_news(news) {
       var news_json_array = JSON.parse(news).data;

       news_json_array.forEach(element => {
              console.log(element['author'])
              console.log(element['category'])
              console.log(element['country'])
              console.log(element['description'])
              console.log(element['image'])
              console.log(element['language'])
              console.log(element['published_at'])
              console.log(element['source'])
              console.log(element['title'])
              console.log(element['url'])
       });
}


/**
 ** Categories: "&categories=business,sports,-science"
        general - Uncategorized News
        business - Business News
        entertainment - Entertainment News
        health - Health News
        science - Science News
        sports - Sports News
        technology - Technology News

 ** Sources: "&sources=cnn,-bbc"
        no listing available.. will make own? TODO

 ** Countries: "&countries=ar,br,-ro"
        list: ar,au,at,be,br,bg,ca,cn,co,cz,eg,fr,de,gr,hk,hu,in,id,ie,il,it,jp,lv,lt,my,mx,ma,nl,
              nz,ng,no,ph,pl,pt,ro,sa,rs,sg,sk,si,za,kr,se,ch,tw,th,tr,ae,ua,gb,us,ve
 
 ** Languages: "&languages=ar,en,-no"
        ar - Arabic
        de - German
        en - English
        es - Spanish
        fr - French
        he - Hebrew
        it - Italian
        nl - Dutch
        no - Norwegian
        pt - Portuguese
        ru - Russian
        se - Swedish
        zh - Chinese
 
 ** Keywords: "&keywords=tesla" OBS: only supports one keyword atm. Maybe contact mediastack? TODO
 
 ** Date: "&date=2020-01-01" or "&date=2020-01-01,2020-12-31"
 
 ** Sort: "&sort=[option]"
        published_desc (default), published_asc, popularity
  
 * Limit: "&limit=100"
        default is 25
        Currently using deafault, guess its fine.
 
 ** Offset: "&offset=100"
        deafult is 0. Why use an offset..? Might be useful.
              - Oh - if you want a "pager". Useful!
 **/
