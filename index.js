function tbl() {
fetch("https://api.quotable.io/random")
.then(function (data) {
      return data.json();
    })
    .then(function (data) {
      document.getElementById("quotes").innerHTML = data.content;
 
      document.getElementById("author").innerHTML = data.author;
    })
    .catch(function (eror) {
      console.log(eror);
    });
}
setInterval(tbl(), 1000);
