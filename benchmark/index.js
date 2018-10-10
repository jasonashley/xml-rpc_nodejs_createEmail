var BenchmarkAPI = require("benchmarkemail").BenchmarkAPI;
if (process.env.NODE_ENV !== "production") {
    require("dotenv").load();
  }
var apiKey = `${process.env.benchmark_email_api_token}`

try {
  var api = new BenchmarkAPI(apiKey);
} catch (error) {
  console.log("test1 ");

  console.log(error.message);
}

// api.emailGet({ filter: '', pageNumber: '1', pageSize: '10', orderBy:'', sortOrder:'' }, function (error, data) {
//     if (error)
//         console.log(error.message);
//     else
//         console.log(JSON.stringify(data)); // Do something with your data
// });
emailName = Date();
api.emailCreate(
  {
    emailDetails: {
      fromName: "Los Alamitos",
      fromEmail: "jason@tradingbills.net",
      emailName: `${emailName}`,
      replyEmail: "jason@tradingbills.net",
      subject: "New Email Subject",
      templateContent: "Hello, <br> Welcome!",
      toListID: "15981783"
    }
  },
  function(error, data) {
    if (error) {
      console.log("test 2");
      console.log(error.message);
    } else {
      console.log(JSON.stringify(data));
      // Do something with your data!
    }
  }
);
