let container = document.querySelector(`.album`);

let search = new URLSearchParams(window.location.search);

let i = search.get(`i`);
let album = albums[i];
if (!album){
    container.innerHTML = `Ошибка :/ Перенаправление на главную через 3 секунды.`
    setTimeout(() => {
        window.location.hostname = `index.html`;
    }, 3000);
} else {
    container.innerHTML = `
    <div class="card mb-3">
        <div class="row">
            <div class="col-4">
                <img src="${album.img}" alt="" class="img-fluid rounded-start">
            </div>
        <div class="col-8 lolkek1">
            <div class="card-body">
                <h5 class="card-title">${album.title}</h5>
                    <p class="card-text">${album.description}</p>
                    <p class="card-text"><small class="text-muted">Сборник выпущен в ${album.year} году.</small>
                </p>
            </div>
        </div>
        </div>
    </div>
    `;
    let tracks = album.tracks;
    let playlist = document.querySelector (`.playlist`);
    for (let j = 0; j < tracks.length; j++){
    let track = tracks[j];
    playlist.innerHTML += `
<li class="list-group-item d-flex align-items-center">
<img src="assets/play.png" height="30px" alt="" class="me-3">
<div>
    <div>${track.title}</div>
    <div class="text-secondary">${track.author}</div> 
</div>
<div class="ms-auto">${track.time}</div>
</li>
`;
    }
}