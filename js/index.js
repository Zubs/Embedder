function loadStyles () {
    let head = document.querySelector('head');
    head.innerHTML += `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Zubs/Embedder/css/main.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Zubs/Embedder/css/modal.css">
    `;
}

function loadScripts () {
    const head = document.querySelector('head');
    head.innerHTML += `
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    `;
}

function loadContent () {
    var target = document.getElementById('gafarKey');
    target.innerHTML = `
        <section class="container">
            <div class="row">
                <article class="card fl-left">
                    <section class="date">
                        <time datetime="23rd dec">
                            <span>23</span><span>Dec</span>
                        </time>
                    </section>
                    <section class="card-cont">
                        <small>Burna Boy</small>
                        <h3>Live In Accra</h3>
                        <div class="even-date">
                            <i class="fa fa-calendar"></i>
                            <time>
                                <span>Thursday, 23 december, 2021</span>
                                <span>09:00pm to 5:00am</span>
                            </time>
                        </div>
                        <div class="even-info">
                            <i class="fa fa-map-marker"></i>
                            <p>Ghana National Stadium</p>
                        </div>
                        <a id="#pay" href="" onclick="event.preventDefault(); pay()">Book now</a>
                    </section>
                </article>
            </div>
        </section>
        
        <section class="modal-parent">
            <div class="modal" id="the-modal" >
                <div class="modal-content">
                    <iframe src = "https://goal.com" title = "PayStack" frameborder = "0"></iframe>
                    <span class="modal-close-btn">
                        &times;
                    </span>
                </div>         
            </div>
        </section>
    `;
}

function pay () {
    const modal = document.querySelector('.modal-parent')
    modal.style.display = 'block'
}

window.addEventListener('load', async function () {
    await loadStyles();
    await loadContent();
    await loadScripts();
})
