
    $(document).ready(function () {
        $('.owl-carousel').owlCarousel({
            items: 2,
            loop: true,
            margin: 10,
            nav: true,
            dots: false,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
                // Добавьте другие размеры экрана и количество отображаемых элементов по вашему выбору
            }
        });
    });
    
    <script>
    $(document).ready(function () {
        // Инициализация большого слайдера
        $('.main-carousel').owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            nav: false,
            dots: false,
            URLhashListener: true,
            autoplayHoverPause: true,
            startPosition: 'URLHash'
        });

        // Инициализация миниатюрного слайдера
        $('.thumbnail-carousel').owlCarousel({
            items: 4,
            loop: false,
            margin: 10,
            nav: true,
            dots: false,
            URLhashListener: true,
            startPosition: 'URLHash'
        });
    });
</script>