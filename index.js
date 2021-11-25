(function () {
    var target = document.getElementById('gafarKey');
    target.innerHTML = `
        <div class="container">
            <div class="card">
                <div class="card-header">
                    Featured
                </div>
                <div class="card-body">
                    <h5 class="card-title">Hi, It's Olaniyan.Gafar</h5>
                    <p class="card-text">This code is to demonstrate how our embed code for some parts of the website work. This part should contain your ticket level and prices.</p>
                    <a href="#" class="btn btn-primary" id="testBtn">Buy Tickets</a>
                </div>
            </div>
        </div>
    `

    var button = document.getElementById('testBtn')

    if (button) {
        button.addEventListener('click', () => {
            alert('clicked');
        })
    }
})();
