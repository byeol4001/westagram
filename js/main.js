const commentValue = document.getElementById("comments_input");
const commentButton = document.getElementById("comments_button");
const commentsList = document.getElementsByClassName("comments_list")[0];



commentButton.addEventListener('click', function() {
    var li = document.createElement('li');
    var span = document.createElement('span');
    // var text = document.createTextNode(commentValue.value);
    // li.appendChild(text);
    commentsList.appendChild(li);
    li.innerHTML = `<span><span class="comments_name">WECODE</span>${commentValue.value}</span>`
    li.className = "comments_list_li";
    commentValue.value = '';
})


commentValue.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        var li = document.createElement('li');
        var span = document.createElement('span');
        //var text = document.createTextNode(commentValue.value);
        //li.appendChild(text);
        commentsList.appendChild(li);
        li.innerHTML = `<span><span class="comments_name">WECODE</span>${commentValue.value}</span>`
        li.className = "comments_list_li";
        commentValue.value = '';
    }
  });
