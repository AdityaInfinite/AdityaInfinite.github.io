console.log("start");
getInfo();


async function getInfo() {
    let tab = "<div class = 'row'>";
    const response = await fetch("https://api.github.com/users/AdityaInfinite/repos");
    var data = await response.json();

    for (let r of data) {
        if (r.name != "AdityaInfinite.github.io") {
            await fetch(`https://raw.githubusercontent.com/AdityaInfinite/${r.name}/main/description.json`)
                .then(function (resp) {
                    return resp.json();
                })
                .then(function (data2) {
                    if (data2.isProject == true) {
                        console.log(r.name);
                        img = `https://github-readme-stats.vercel.app/api/pin/?username=AdityaInfinite&theme=dark&repo=${r.name}`;

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
                        </div>`;

                        console.log("final" + tab)
                    }
                })
                ;

        }
        if (r.name == "AdityaInfinite.github.io") {
            await fetch(`https://raw.githubusercontent.com/AdityaInfinite/AdityaInfinite.github.io/master/description.json`)
                .then(function (resp) {
                    return resp.json();
                })
                .then(function (data2) {
                    img = `https://github-readme-stats.vercel.app/api/pin/?username=AdityaInfinite&theme=dark&repo=${r.name}`;
                    console.log("0" + tab);
                    tab +=
                        `<div class="col-sm-4.5" style="margin: 10px">
                    <div class="card">
                    <img src="https://github-readme-stats.vercel.app/api/pin/?username=AdityaInfinite&theme=dark&repo=AdityaInfinite.github.io" class="card-img-top" alt="repoImage"></img>
                    <div class="card-body">
                        <h5 class="card-title">AdityaInfinite.github.io</h5>
                        <p class="card-text">${data2.description}</p>
                        <a href="${r.html_url}" target="_blank" class="btn btn-primary">More info</a>
                    </div>
                    </div>
                </div>`;
                    console.log("1" + tab);
                });
        }
        console.log("2" + tab);
        console.log("r: "+ data[r])
    }

    tab += "</div>";
    console.log("3" + tab);
    $("#projectsDiv").html(tab);
    console.log("end");
}




