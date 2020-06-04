const commentValue = document.getElementById("comments_input");
const commentButton = document.getElementById("comments_button");
const commentsList = document.getElementsByClassName("comments_list")[0];

function change(){
    var li = document.createElement('li');
    var span = document.createElement('span');
    commentsList.appendChild(li);
    li.innerHTML = `<span><span class="comments_name">byeol21_</span>${commentValue.value}</span>`
    li.className = "comments_list_li";
    commentValue.value = '';
}

commentButton.addEventListener('click', function() {
    change();
})


commentValue.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        change();
    }
  });
