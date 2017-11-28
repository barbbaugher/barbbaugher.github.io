var request = new XMLHttpRequest();

request.open('get', 'https://api.github.com/users/barbbaugher')

request.send()

function dumpResponse() {
  console.log(this.responseText);
}

request.onload = dumpResponse;

function printRepoCount() {
  var responseObj = JSON.parse(this.responseText);
  console.log(responseObj.name + " has " + responseObj.public_repos + " public repositories!");
}

request.onload = printRepoCount;