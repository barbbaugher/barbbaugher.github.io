var firstRequest = new XMLHttpRequest();

firstRequest.open('get', 'https://api.github.com/users/barbbaugher')

firstRequest.send()

function response() {
  console.log(this.responseText);
}

firstRequest.onload = response;

function printRepoCount() {
  var firstResponseObj = JSON.parse(this.responseText);
  document.getElementById('github-api').innerHTML = firstResponseObj.name + " has " + firstResponseObj.public_repos + " public repositories!";
}

firstRequest.onload = printRepoCount;