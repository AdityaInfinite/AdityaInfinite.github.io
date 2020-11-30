console.log("start");
getInfo();


async function getInfo() {
    const response = await fetch("https://api.github.com/users/AdityaInfinite/repos");
    var data = await response.json();
    if (response) {
        document.getElementById('loading').style.display = 'none';
        console.log("loader hidden")
    }
    show(data);
}
async function show(data) {
    let tab = "";
    for (let r of data) {
        const response2 = await fetch(`https://raw.githubusercontent.com/AdityaInfinite/${r.name}/${r.default_branch}/description.json`);
        console.log(response2.status);
        if (response2.status != 404) {
            var data2 = await response2.json();
            if (data2.isProject == true) {
                img = `https://github-readme-stats.vercel.app/api/pin/?username=AdityaInfinite&theme=dark&repo=${r.name}`;

                tab +=
                    `<div class="col-sm-4.5" style="margin: 10px">
                        <div class="card">
                        <img src="${img}" class="card-img-top" alt="repoImage"></img>
                        <div class="card-body">
                            <h5 class="card-title">${r.name}</h5>
                            <p class="card-text">${data2.description}</p>
                            <a href="${r.html_url}" target="_blank" class="btn btn-primary">More info</a>
                        </div>
                        </div>
                    </div>`;
            }
        }
        $("#projectsDiv").html(tab);
    }
}