(function () {
    var target = document.getElementById('gafarKey');
    target.innerHTML = `
        <div class="container">
            <div class="card">
                <div class="card-header">
                    Featured
                </div>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary" id="testBtn">Go somewhere</a>
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
