

async function getNews() {

    var requestOptions = {
        method: 'GET'
      };
      
    fetch("http://api.mediastack.com/v1/news?access_key=4b433178658deb64a15eadfb0c390354&keywords=corona", requestOptions)
    .then(response => response.text())
    .then(result => console.log(JSON.parse(result)))
    .catch(error => alert(error));
}

function options_submitted() {
       //build this string
       var search = "";

       //get the keyword if it exists
       const keyword = new FormData(document.getElementById('keyword'))
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

       console.log("search: " + search)



}

function getNews1() {
       console.log("getNews1")
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

 * Countries: "&countries=ar,br,-ro"
        list: ar,au,at,be,br,bg,ca,cn,co,cz,eg,fr,de,gr,hk,hu,in,id,ie,il,it,jp,lv,lt,my,mx,ma,nl,
              nz,ng,no,ph,pl,pt,ro,sa,rs,sg,sk,si,za,kr,se,ch,tw,th,tr,ae,ua,gb,us,ve
 
 * Languages: "&languages=ar,en,-no"
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
 
 * Date: "&date=2020-01-01" or "&date=2020-01-01,2020-12-31"
 
 * Sort: "&sort=[option]"
        published_desc (default), published_asc, popularity
  
 * Limit: "&limit=100"
        default is 25
 
 * Offset: "&offset=100"
        deafult is 0. Why use an offset..? Might be useful.
 **/
