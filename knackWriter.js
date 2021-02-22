

async function logIn(pass,mail) {
    email = mail
    password = await sha256(pass)
    var dataInc;
    console.log(password)
    api_url = "https://api.knack.com/v1/objects/object_1/records"
    var filters = [
        {
          "field":"field_2",
          "value":email
        },
        {
          "field":"field_1",
          "value":password  
        }
      ];
    api_url += '?filters=' + encodeURIComponent(JSON.stringify(filters));


    await fetch(api_url, {
        headers: {
        "Content-Type": "application/json",
        "X-Knack-Application-Id": "60339d90af85e9001b0066cf",
        "X-Knack-Rest-Api-Key": "909dea0c-9dae-4392-b10b-5389735b4e28"
        },
        method: "GET"
    }).then(response => response.json())
    .then(data => {
      dataInc = data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    if (dataInc.total_records == 0) {
        console.log("no email in system")
    } else {
        console.log("email found in system")
    }
}


function knack(email,pass) {
    fetch("https://api.knack.com/v1/objects/object_1/records", {
        body: JSON.stringify({"field_1":"password_secret","field_2":"email_@.dk"}),
        headers: {
        "Content-Type": "application/json",
        "X-Knack-Application-Id": "60339d90af85e9001b0066cf",
        "X-Knack-Rest-Api-Key": "909dea0c-9dae-4392-b10b-5389735b4e28"
        },
        method: "POST"
    }).then(response => response.json())
    .then(data => {
      console.log('Success1:', JSON.stringify(data));
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

async function sha256(message) {
  // encode as UTF-8
  const msgBuffer = new TextEncoder().encode(message);                    

  // hash the message
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

  // convert ArrayBuffer to Array
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  // convert bytes to hex string                  
  const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
  return hashHex;
}
