getdata();
func2();
async function getdata() {
    const response = await fetch("https://api.github.com/users/AdityaInfinite");
    var data = await response.json();
    $("#repos").html(data.public_repos + " Repositories");

    const responce2 = await fetch("https://api.github.com/search/issues?q=+type:pr+user:AdityaInfinite&sort=created&order=asc");
    data2 = await responce2.json();
    $("#prs").html(data2.total_count + " Pull Requests");
}
async function func2() {
    const response = await fetch("https://api.github.com/users/AdityaInfinite/repos");
    var data = await response.json();

    let tab = "<ul>";
    for (let r of data) {
        tab += `<li><a href=${r.html_url} target="_blank">${r.name}</a></li>`;
    }
    // Setting innerHTML as tab variable 
    tab += "</ul>";
    console.log(tab);

    $("#repoButton").attr("data-content", tab);
}