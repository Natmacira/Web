document.addEventListener('DOMContentLoaded', function () {

    const burgerMenuBtn = document.querySelector("#burger-menu-toggler")

    const menuItems = document.querySelectorAll(".menu-item")

    function navResponsive() {

        burgerMenuBtn.addEventListener('click', function () {
            document.body.classList.toggle('mobile-menu-active');
        });

        menuItems.forEach(function (menuItem) {
            menuItem.addEventListener('click', function () {
                document.body.classList.remove('mobile-menu-active');

                let currentItem = document.querySelector('.active');
                currentItem.classList.remove('active');
                this.classList.add('active');

            })
        })

    }

    navResponsive();
});