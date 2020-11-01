getdata();
async function getdata(){
    const response = await fetch("https://api.github.com/users/AdityaInfinite");
    var data = await response.json();
    $("#repos").html(data.public_repos + " Repositories");

    const responce2 = await fetch("https://api.github.com/search/issues?q=+type:pr+user:AdityaInfinite&sort=created&order=asc");
    data2 = await responce2.json();
    $("#prs").html(data2.total_count + " Pull Requests");
}