buttonText();
popoverText();
async function buttonText() {
    const response = await fetch("https://api.github.com/users/AdityaInfinite");
    var data = await response.json();
    $("#repos").html(data.public_repos + " Repositories");

    const responce2 = await fetch("https://api.github.com/search/issues?q=+type:pr+user:AdityaInfinite&sort=created&order=asc");
    data2 = await responce2.json();
    if (data2.total_count != undefined) {
        $("#prs").html(data2.total_count + " Pull Requests");
    }else{
        $("#prs").html("2 Pull Requests");
        console.log("api timeout");
    }

}
async function popoverText() {
    const response = await fetch("https://api.github.com/users/AdityaInfinite/repos");
    var data = await response.json();
    let tab = "<ul>";
    for (let r of data) {
        tab += `<li><a href=${r.html_url} target="_blank">${r.name}</a></li>`;
    }
    tab += "</ul>";
    $("#repoButton").attr("data-content", tab);

    const response2 = await fetch("https://api.github.com/search/issues?q=+type:pr+user:AdityaInfinite&sort=created&order=asc");
    data = await response2.json();
    let tab2 = "<ul>";
    for (let r2 of data.items) {
        tab2 += `<li><a href=${r2.html_url} target="_blank">${r2.title}</a></li>`;
    }
    tab2 += "</ul>";
    $("#prButton").attr("data-content", tab2);
}