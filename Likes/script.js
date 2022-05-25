var userlikescount = [
    document.querySelector("#user1"), 
    document.querySelector("#user2"),
    document.querySelector("#user3")
]


function liked(index){
    userlikescount[index].innerText++;
}
