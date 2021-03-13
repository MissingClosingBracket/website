

async function getNews() {

    var requestOptions = {
        method: 'GET'
      };
      
    fetch("http://api.mediastack.com/v1/news?access_key=4b433178658deb64a15eadfb0c390354&keywords=corona", requestOptions)
    .then(response => response.text())
    .then(result => console.log(JSON.parse(result)))
    .catch(error => alert(error));
    

}


/**
 * Categories: "&categories=business,sports,-science"
        general - Uncategorized News
        business - Business News
        entertainment - Entertainment News
        health - Health News
        science - Science News
        sports - Sports News
        technology - Technology News

 * Sources: "&sources=cnn,-bbc"
        no listing available.. will make own? TODO

 * Countires: "&countries=ar,br,-ro"
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
 
 * Keywords: "&keywords=tesla" OBS: only supports one keyword atm. Maybe contact mediastack? TODO
 
 * Date: "&date=2020-01-01" or "&date=2020-01-01,2020-12-31"
 
 * Sort: "&sort=[option]"
        published_desc (default), published_asc, popularity
  
 * Limit: "&limit=100"
        default is 25
 
 * Offset: "&offset=100"
        deafult is 0. Why use an offset..? Might be useful.
 **/
