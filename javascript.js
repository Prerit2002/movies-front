
    fetch("movies.json")
        .then(function(resp) {
            return resp.json();
        })
        .then(function(data){
            for (var i = 0;i <document.querySelectorAll(".mov").length ; i++){
                document.querySelectorAll(".nam")[i].innerHTML = data.movies[i].title;
                document.querySelectorAll(".gen")[i].innerHTML = data.movies[i].year;
                document.querySelectorAll(".year")[i].innerHTML = data.movies[i].year;
            }
        });