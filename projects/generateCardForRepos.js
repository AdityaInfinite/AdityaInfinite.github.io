getInfo();

async function getInfo(){
    const response = await fetch("https://api.github.com/users/AdityaInfinite/repos");
    var data = await response.json();
    let tab = "<div class = 'row'>";
    for (let r of data) {
        img = `https://github-readme-stats.vercel.app/api/pin/?username=AdityaInfinite&theme=dark&repo=${r.name}`;
        console.log(img);
        tab += 
        `<div class="col-sm-4.5" style="margin: 10px">
            <div class="card">
            <img src="${img}" class="card-img-top" alt="repoImage"></img>
            <div class="card-body">
                <h5 class="card-title">${r.name}</h5>
                <p class="card-text">Lorem Ipsum Dolor Sit Amet</p>
                <a href="${r.html_url}" target="_blank" class="btn btn-primary">More info</a>
            </div>
            </div>
        </div>`
    }
    tab += "</div>";
    $("#projectsDiv").html(tab);
}