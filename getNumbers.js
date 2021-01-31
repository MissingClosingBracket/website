
var GLOBAL = new Map();
var DENMARK = new Map();
var SWEDEN = new Map();
var NORWAY = new Map();
var GERMANY = new Map();
var USA = new Map();



function loadSummary () 
{
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      //https://documenter.getpostman.com/view/10808728/SzS8rjbc
      
      fetch("https://api.covid19api.com/summary", requestOptions)
        .then(response => response.text())
        .then(result => organizeSummary(result))
        .catch(error => alert(error));
    

    //console.log(result)    
        
   

}

function organizeSummary(jsonObject)
{
    var data = JSON.parse(jsonObject);

    //GLOBAL STATS:
    console.log("GLOBAL STATS:");
    GLOBAL.set('TotalRecovered', data.Global.TotalRecovered);
    GLOBAL.set('NewRecovered', data.Global.NewRecovered);
    GLOBAL.set('NewDeaths', data.Global.NewDeaths);
    GLOBAL.set('NewConfirmed', data.Global.NewConfirmed);
    GLOBAL.set('TotalConfirmed', data.Global.TotalConfirmed);
    GLOBAL.set('TotalDeaths', data.Global.TotalDeaths);

    //print:
    console.log("   Global total confirmed:    " + GLOBAL.get('TotalConfirmed'));
    console.log("   Global total deaths:       " + GLOBAL.get('TotalDeaths'));


    //STATS DENMARK:
    console.log("DENMARK STATS:");
    DENMARK.set('TotalRecovered', data.Countries[45].TotalRecovered);
    DENMARK.set('NewRecovered', data.Countries[45].NewRecovered);
    DENMARK.set('NewDeaths', data.Countries[45].NewDeaths);
    DENMARK.set('NewConfirmed', data.Countries[45].NewConfirmed);
    DENMARK.set('TotalConfirmed', data.Countries[45].TotalConfirmed);
    DENMARK.set('TotalDeaths', data.Countries[45].TotalDeaths);
    //print:
    console.log("   Denmark total confirmed:   " + DENMARK.get('TotalConfirmed'));
    console.log("   Denmark total deaths:      " + DENMARK.get('TotalDeaths'));


    //STATS SWEDEN:
    console.log("SWEDEN STATS:");
    SWEDEN.set('TotalRecovered', data.Countries[164].TotalRecovered);
    SWEDEN.set('NewRecovered', data.Countries[164].NewRecovered);
    SWEDEN.set('NewDeaths', data.Countries[164].NewDeaths);
    SWEDEN.set('NewConfirmed', data.Countries[164].NewConfirmed);
    SWEDEN.set('TotalConfirmed', data.Countries[164].TotalConfirmed);
    SWEDEN.set('TotalDeaths', data.Countries[164].TotalDeaths);
    //print:
    console.log("   Sweden total confirmed:    " + SWEDEN.get('TotalConfirmed'));
    console.log("   Sweden total deaths:       " + SWEDEN.get('TotalDeaths'));


    //STATS NORWAY:
    console.log("NORWAY STATS:");
    NORWAY.set('TotalRecovered', data.Countries[125].TotalRecovered);
    NORWAY.set('NewRecovered', data.Countries[125].NewRecovered);
    NORWAY.set('NewDeaths', data.Countries[125].NewDeaths);
    NORWAY.set('NewConfirmed', data.Countries[125].NewConfirmed);
    NORWAY.set('TotalConfirmed', data.Countries[125].TotalConfirmed);
    NORWAY.set('TotalDeaths', data.Countries[125].TotalDeaths);
    //print:
    console.log("   Norway total confirmed:    " + NORWAY.get('TotalConfirmed'));
    console.log("   Norway total deaths:       " + NORWAY.get('TotalDeaths'));


    //STATS GERMANY:
    console.log("GERMANY STATS:");
    GERMANY.set('TotalRecovered', data.Countries[62].TotalRecovered);
    GERMANY.set('NewRecovered', data.Countries[62].NewRecovered);
    GERMANY.set('NewDeaths', data.Countries[62].NewDeaths);
    GERMANY.set('NewConfirmed', data.Countries[62].NewConfirmed);
    GERMANY.set('TotalConfirmed', data.Countries[62].TotalConfirmed);
    GERMANY.set('TotalDeaths', data.Countries[62].TotalDeaths);
    //print:
    console.log("   Germany total confirmed:   " + GERMANY.get('TotalConfirmed'));
    console.log("   Germany total deaths:      " + GERMANY.get('TotalDeaths'));  

    //STATS GERMANY:
    console.log("USA STATS:");
    USA.set('TotalRecovered', data.Countries[180].TotalRecovered);
    USA.set('NewRecovered', data.Countries[180].NewRecovered);
    USA.set('NewDeaths', data.Countries[180].NewDeaths);
    USA.set('NewConfirmed', data.Countries[180].NewConfirmed);
    USA.set('TotalConfirmed', data.Countries[180].TotalConfirmed);
    USA.set('TotalDeaths', data.Countries[180].TotalDeaths);
    //print:
    console.log("   USA total confirmed:       " + USA.get('TotalConfirmed'));
    console.log("   USA total deaths:          " + USA.get('TotalDeaths'));


    document.getElementById("global").innerHTML  = "Total confirmed: <br>" + GLOBAL.get('TotalConfirmed')  + '<br> <br>' + "Total deaths: <br>" + GLOBAL.get('TotalDeaths');
    document.getElementById("denmark").innerHTML = "Total confirmed: <br>" + DENMARK.get('TotalConfirmed') + '<br> <br>' + "Total deaths: <br>" + DENMARK.get('TotalDeaths');
    document.getElementById("sweden").innerHTML  = "Total confirmed: <br>" + SWEDEN.get('TotalConfirmed')  + '<br> <br>' + "Total deaths: <br>" + SWEDEN.get('TotalDeaths');
    document.getElementById("norway").innerHTML  = "Total confirmed: <br>" + NORWAY.get('TotalConfirmed')  + '<br> <br>' + "Total deaths: <br>" + NORWAY.get('TotalDeaths');
    document.getElementById("germany").innerHTML = "Total confirmed: <br>" + GERMANY.get('TotalConfirmed') + '<br> <br>' + "Total deaths: <br>" + GERMANY.get('TotalDeaths');
    document.getElementById("usa").innerHTML     = "Total confirmed: <br>" + USA.get('TotalConfirmed')     + '<br> <br>' + "Total deaths: <br>" + USA.get('TotalDeaths');
}


