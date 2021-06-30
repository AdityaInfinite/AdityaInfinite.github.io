console.log("start");
show()
data = ''
async function show(data) {
	let tab = "";
	let projects = ["adityainfinite.github.io", "mastermind","schoolschedule","adidrive"];
	// name array vals = project names on github
	for (i = 0; i <= projects.length - 1; i++) {
		console.log(i);

		img = `https://github-readme-stats.vercel.app/api/pin/?username=AdityaInfinite&theme=dark&repo=${projects[i]}`;

		tab +=
		`<div class="col-sm-4.5" style="margin: 10px">
            <div class="card">
            	<img src="${img}" class="card-img-top" alt="repoImage"></img>
            	<div class="card-body">
            	    <h5 class="card-title">${projects[i]}</h5>
            	    <a href="https://www.github.com/AdityaInfinite/${projects[i]}" target="_blank" class="btn btn-primary">More info</a>
            	</div>
            </div>
        </div>`;

	}
	$("#projectsDiv").html(tab);
}