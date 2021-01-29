
function loadSummary () 
{
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
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
    console.log("   New confirmed:      " + data.Global.NewConfirmed);
    console.log("   New deaths:         " + data.Global.NewDeaths);
    console.log("   New recovered:      " + data.Global.NewRecovered);
    console.log("   Total confirmed:    " + data.Global.TotalConfirmed);
    console.log("   Total deaths:       " + data.Global.TotalDeaths);
    console.log("   Total recovered:    " + data.Global.TotalRecovered);

    //STATS DENMARK:
    console.log("DENMARK STATS:");
    console.log("   New confirmed:      " + data.Countries[45].NewConfirmed);
    console.log("   New deaths:         " + data.Countries[45].NewDeaths);
    console.log("   New recovered:      " + data.Countries[45].NewRecovered);
    console.log("   Total confirmed:    " + data.Countries[45].TotalConfirmed);
    console.log("   Total deaths:       " + data.Countries[45].TotalDeaths);
    console.log("   Total recovered:    " + data.Countries[45].TotalRecovered);

    //STATS SWEDEN:
    console.log("SWEDEN STATS:");
    console.log("   New confirmed:      " + data.Countries[164].NewConfirmed);
    console.log("   New deaths:         " + data.Countries[164].NewDeaths);
    console.log("   New recovered:      " + data.Countries[164].NewRecovered);
    console.log("   Total confirmed:    " + data.Countries[164].TotalConfirmed);
    console.log("   Total deaths:       " + data.Countries[164].TotalDeaths);
    console.log("   Total recovered:    " + data.Countries[164].TotalRecovered);


    //STATS NORWAY:
    console.log("NORWAY STATS:");
    console.log("   New confirmed:      " + data.Countries[125].NewConfirmed);
    console.log("   New deaths:         " + data.Countries[125].NewDeaths);
    console.log("   New recovered:      " + data.Countries[125].NewRecovered);
    console.log("   Total confirmed:    " + data.Countries[125].TotalConfirmed);
    console.log("   Total deaths:       " + data.Countries[125].TotalDeaths);
    console.log("   Total recovered:    " + data.Countries[125].TotalRecovered);

    //STATS GERMANY:
    console.log("GERMANY STATS:");
    console.log("   New confirmed:      " + data.Countries[62].NewConfirmed);
    console.log("   New deaths:         " + data.Countries[62].NewDeaths);
    console.log("   New recovered:      " + data.Countries[62].NewRecovered);
    console.log("   Total confirmed:    " + data.Countries[62].TotalConfirmed);
    console.log("   Total deaths:       " + data.Countries[62].TotalDeaths);
    console.log("   Total recovered:    " + data.Countries[62].TotalRecovered);    

    //STATS USA:
    console.log("USA STATS:");
    console.log("   New confirmed:      " + data.Countries[180].NewConfirmed);
    console.log("   New deaths:         " + data.Countries[180].NewDeaths);
    console.log("   New recovered:      " + data.Countries[180].NewRecovered);
    console.log("   Total confirmed:    " + data.Countries[180].TotalConfirmed);
    console.log("   Total deaths:       " + data.Countries[180].TotalDeaths);
    console.log("   Total recovered:    " + data.Countries[180].TotalRecovered);        
    console.log(data);
}
