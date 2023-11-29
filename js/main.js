
    $(document).ready(function () {
        $('.owl-carousel').owlCarousel({
            items: 2,
            loop: true,
            margin: 10,
            nav: true,
            dots: false,
            
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
    var mainCarousel = $(".main-carousel").owlCarousel({
        items: 2,
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        
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
        }
        // Ваши параметры
    });

    // Инициализация нижнего слайдера с миниатюрами
    // Инициализация нижнего слайдера с миниатюрами
var thumbnailCarousel = $(".thumbnail-carousel").owlCarousel({
    items: 2,
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    navText: [
        "<img src='/img/arrow-prev.png'>",
        "<img src='/img/arrow-next.png'>"
    ],
    
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
});

    
    // Связывание двух слайдеров
    thumbnailCarousel.on('click', '.owl-item', function () {
        var clickedIndex = $(this).index();
        mainCarousel.trigger('to.owl.carousel', clickedIndex);
    });
