function loadStyles () {
    let head = document.querySelector('head');
    head.innerHTML += `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="../css/main.css">
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
    `;
}

function makeModal (text) {
    return `
    <div id="myModal" class="modal fade" role="dialog" style="display: none">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Modal Header</h4>
                </div>
                <div class="modal-body">
                    <p>${text}</p>
                <div class="card-body">
                    <h5 class="card-title">Hi, It's Olaniyan.Gafar</h5>
                    <p class="card-text">This code is to demonstrate how our embed code for some parts of the website work. This part should contain your ticket level and prices.</p>
                    <a href="#" class="btn btn-primary" id="testBtn">Buy Tickets</a>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>   
          </div>
    </div>
    `;
}

function pay () {
    const target = document.getElementById('gafarKey');
    if (!target) {
        alert("Reload to continue");
    }

    trigger = document.getElementById('trigger');
    if (!trigger) {
        let trigger = document.createElement('button');
        trigger.innerText = 'Click me and die';
        trigger.id = 'trigger';
        target.append(trigger);
    }

    trigger.addEventListener('click', () => {
        let m1 = makeModal('Testing this here');
        m1.modal('show');
    });

    trigger.click();

    alert('payment button clicked');
}

window.addEventListener('load', async function () {
    await loadStyles();
    await loadContent();
    await loadScripts();
})
