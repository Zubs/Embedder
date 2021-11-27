function loadStyles () {
    var head = document.querySelector('head');
    head.innerHTML += `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <style>
            @import url('https://fonts.googleapis.com/css?family=Oswald');
            * {
                margin: 0;
                padding: 0;
                border: 0;
                box-sizing: border-box
            }

            body {
                background-color: #dadde6;
                font-family: arial
            }

            .fl-left {
                float: left
            }

            h1 {
                text-transform: uppercase;
                font-weight: 900;
                border-left: 10px solid #fec500;
                padding-left: 10px;
                margin-bottom: 30px
            }

            .row {
                overflow: hidden
            }

            .card {
                display: table-row;
                width: 49%;
                background-color: #fff;
                color: #989898;
                margin-bottom: 10px;
                font-family: 'Oswald', sans-serif;
                text-transform: uppercase;
                border-radius: 4px;
                position: relative
            }

            .card+.card {
                margin-left: 2%
            }

            .date {
                display: table-cell;
                width: 25%;
                position: relative;
                text-align: center;
                border-right: 2px dashed #dadde6
            }

            .date:before,
            .date:after {
                content: "";
                display: block;
                width: 30px;
                height: 30px;
                background-color: #DADDE6;
                position: absolute;
                top: -15px;
                right: -15px;
                z-index: 1;
                border-radius: 50%
            }

            .date:after {
                top: auto;
                bottom: -15px
            }

            .date time {
                display: block;
                position: absolute;
                top: 50%;
                left: 50%;
                -webkit-transform: translate(-50%, -50%);
                -ms-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%)
            }

            .date time span {
                display: block
            }

            .date time span:first-child {
                color: #2b2b2b;
                font-weight: 600;
                font-size: 250%
            }

            .date time span:last-child {
                text-transform: uppercase;
                font-weight: 600;
                margin-top: -10px
            }

            .card-cont {
                display: table-cell;
                width: 75%;
                font-size: 85%;
                padding: 10px 10px 30px 50px
            }

            .card-cont h3 {
                color: #3C3C3C;
                font-size: 130%
            }

            .card-cont>div {
                display: table-row
            }

            .card-cont .even-date i,
            .card-cont .even-info i,
            .card-cont .even-date time,
            .card-cont .even-info p {
                display: table-cell
            }

            .card-cont .even-date i,
            .card-cont .even-info i {
                padding: 5% 5% 0 0
            }

            .card-cont .even-info p {
                padding: 30px 50px 0 0
            }

            .card-cont .even-date time span {
                display: block
            }

            .card-cont a {
                display: block;
                text-decoration: none;
                width: 80px;
                height: 30px;
                background-color: green;
                color: #fff;
                text-align: center;
                line-height: 30px;
                border-radius: 2px;
                position: absolute;
                right: 10px;
                bottom: 10px
            }

            .row:last-child .card:last-child .card-cont a {
                background-color: green;
            }

            @media screen and (max-width: 860px) {
                .card {
                    display: block;
                    float: none;
                    width: 100%;
                    margin-bottom: 10px
                }
                .card+.card {
                    margin-left: 0
                }
                .card-cont .even-date,
                .card-cont .even-info {
                    font-size: 75%
                }
            }
        </style>
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
                        <a id="#pay" href="" onclick="preventDefault(); pay()">Book now</a>
                    </section>
                </article>
            </div>
        </section>
    `;
}

function pay () {
    alert('payment button clicked');
}

window.addEventListener('load', async function () {
    await loadStyles();
    await loadContent();
})

// (function () {
//     var target = document.getElementById('gafarKey');
//     target.innerHTML = `
//         <div class="container">
//             <div class="card">
//                 <div class="card-header">
//                     Featured
//                 </div>
//                 <div class="card-body">
//                     <h5 class="card-title">Special title treatment</h5>
//                     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
//                     <a href="#" class="btn btn-primary" id="testBtn">Go somewhere</a>
//                 </div>
//             </div>
//         </div>
//     `
//
//     var button = document.getElementById('testBtn')
//
//     if (button) {
//         button.addEventListener('click', () => {
//             alert('clicked');
//         })
//     }
// })();
