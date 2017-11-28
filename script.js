var firstRequest = new XMLHttpRequest();

firstRequest.open('get', 'https://api.github.com/users/barbbaugher')

firstRequest.send()

function firstResponse() {
  console.log(this.firstResponseText);
}

firstRequest.onload = firstResponse;

function printRepoCount() {
  var firstResponseObj = JSON.parse(this.responseText);
  document.getElementById('github-api').innerHTML = firstResponseObj.name + " has " + firstResponseObj.public_repos + " public repositories!";
}

firstRequest.onload = printRepoCount;