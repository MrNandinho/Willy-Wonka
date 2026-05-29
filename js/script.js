document.addEventListener('DOMContentLoaded', function () {
    const toggler = document.querySelector('.navbar-toggler');
    const offcanvas = document.getElementById('offcanvasNavbar');
    const btnClose = offcanvas.querySelector('.btn-close');

    toggler.addEventListener('click', function () {
        offcanvas.classList.toggle('show');
        document.body.classList.toggle('offcanvas-open');
    });

    btnClose.addEventListener('click', function () {
        offcanvas.classList.remove('show');
        document.body.classList.remove('offcanvas-open');
    });

    document.addEventListener('click', function (event) {
        if (!offcanvas.contains(event.target) && !toggler.contains(event.target) && offcanvas.classList.contains('show')) {
            offcanvas.classList.remove('show');
            document.body.classList.remove('offcanvas-open');
        }
    });
});