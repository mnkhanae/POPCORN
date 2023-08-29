$(document).ready(function() {
    var $imagesCarousel = $('.carouselOfImages').flickity({
        contain: true,
        autoPlay: true,
        wrapAround: true,
        friction: 0.3
    });

    function resizeCells() {
        var flkty = $imagesCarousel.data('flickity');
        var $current = flkty.selectedIndex
        var $length = flkty.cells.length
        if ($length <= '5') {
            $imagesCarousel.flickity('destroy');
        }
        $('.carouselOfImages .carouselImage').removeClass("nextToSelected");
        $('.carouselOfImages .carouselImage').eq($current - 1).addClass("nextToSelected");
        if ($current + 1 == $length) {
            var $endCell = "0"
        } else {
            var $endCell = $current + 1
        }
        $('.carouselOfImages .carouselImage').eq($endCell).addClass("nextToSelected");
    };
    resizeCells();

    $imagesCarousel.on('scroll.flickity', function() {
        resizeCells();
    });





    $(".carouselImage img").click(function() {
        var $this = $(this);
        var imageID = $this.attr('data-tab');
        var imageSrc = $this.attr('src');

        $('.' + imageID).removeClass('hide');
        $('.' + imageID + ' .product-detail-image img').attr('src', imageSrc);
    });

    $('.product-detail-close,.product-detail').on('click', function() {
        $('.product-detail').addClass('hide');
    });

    $('.modal-video').on('hidden.bs.modal', function(e) {
        $('.modal-video iframe').attr('src', $('.modal-video iframe').attr('src'));
    });

    autoPlayYouTubeModal();

    function autoPlayYouTubeModal() {
        var trigger = $("body").find('[data-the-video]');
        trigger.click(function() {
            var theModal = $(this).data("target"),
                videoSRC = $(this).attr("data-the-video"),
                videoSRCauto = videoSRC + "&autoplay=1";
            $(theModal + ' iframe').attr('src', videoSRCauto);
            $(theModal + ' button.close').click(function() {
                $(theModal + ' iframe').attr('src', videoSRC);
            });
            $('.modal-video').click(function() {
                $(theModal + ' iframe').attr('src', videoSRC);
            });
        });
    }

    $(window).on('load resize', function() {
        var $window = $(window);
        $('.modal-fill-vert .modal-body > *').height(function() {
            return $window.height() - 60;
        });
    });
});


// The existing images' URLs and data-tab attributes
const imageList = [
    { url: 'http://www.thebrandage.com/assets/image/uploads/haberler/Bright_TUR.jpg', tab: 'bright' },
    { url: 'https://i.pinimg.com/736x/a4/23/f8/a423f86593029b7d2a6d9f1e1fd1e406---movies-movies-to-watch-online.jpg', tab: 'avatar' },
    { url: 'http://www.thebrandage.com/assets/image/uploads/haberler/Bright_TUR.jpg', tab: 'bright' },
    { url: 'https://i.pinimg.com/736x/a4/23/f8/a423f86593029b7d2a6d9f1e1fd1e406---movies-movies-to-watch-online.jpg', tab: 'avatar' },
    { url: 'http://www.thebrandage.com/assets/image/uploads/haberler/Bright_TUR.jpg', tab: 'bright' },
    { url: 'https://i.pinimg.com/736x/a4/23/f8/a423f86593029b7d2a6d9f1e1fd1e406---movies-movies-to-watch-online.jpg', tab: 'avatar' },
    { url: 'http://www.thebrandage.com/assets/image/uploads/haberler/Bright_TUR.jpg', tab: 'bright' },
    { url: 'https://i.pinimg.com/736x/a4/23/f8/a423f86593029b7d2a6d9f1e1fd1e406---movies-movies-to-watch-online.jpg', tab: 'avatar' },
    { url: 'http://www.thebrandage.com/assets/image/uploads/haberler/Bright_TUR.jpg', tab: 'bright' },
    { url: 'https://i.pinimg.com/736x/a4/23/f8/a423f86593029b7d2a6d9f1e1fd1e406---movies-movies-to-watch-online.jpg', tab: 'avatar' },
    // ... Add more items here
];

const carouselOfImages = document.querySelector('.carouselOfImages');

imageList.forEach((imageData) => {
    // Create each carouselImage div
    const carouselImage = document.createElement('div');
    carouselImage.classList.add('carouselImage');
    carouselImage.style.backgroundSize = 'cover';

    // Create each img element
    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', imageData.url);
    imgElement.setAttribute('data-tab', imageData.tab);

    // Append img to carouselImage
    carouselImage.appendChild(imgElement);

    // Append carouselImage to carouselOfImages
    carouselOfImages.appendChild(carouselImage);
});


const productDetails = [{
        className: 'nuh',
        title: 'Nuh',
        description: 'Lorem ipsum ...',
        imgSrc: '',
        videoSrc: 'https://www.youtube.com/embed/fdu10cX3pWA?rel=0&amp;showinfo=0&amp;wmode=opaque&amp;html5=1',
    },
    // ... Add more product details here
];

const container = document.getElementById('dynamicProductDetailContainer');

productDetails.forEach((product) => {
    const section = document.createElement('section');
    section.className = `product-detail ${product.className} hide`;

    const innerDiv = document.createElement('div');
    innerDiv.className = 'product-detail-inner';

    // Close button
    const closeButton = document.createElement('a');
    closeButton.className = 'product-detail-close';
    closeButton.textContent = 'X';

    // Image
    const imageDiv = document.createElement('div');
    imageDiv.className = 'product-detail-image';
    const img = document.createElement('img');
    img.src = product.imgSrc;
    imageDiv.appendChild(img);

    // Text
    const textDiv = document.createElement('div');
    textDiv.className = 'product-detail-text';
    const h3 = document.createElement('h3');
    h3.textContent = product.title;
    const p = document.createElement('p');
    p.textContent = product.description;

    // Video Button
    const videoButton = document.createElement('a');
    videoButton.className = 'btn btn-primary';
    videoButton.dataset.target = '.modal-1';
    videoButton.dataset.toggle = 'modal';
    videoButton.dataset.theVideo = product.videoSrc;
    videoButton.textContent = 'Fragman';

    // Assembling
    textDiv.appendChild(h3);
    textDiv.appendChild(p);
    textDiv.appendChild(videoButton);

    innerDiv.appendChild(closeButton);
    innerDiv.appendChild(imageDiv);
    innerDiv.appendChild(textDiv);

    section.appendChild(innerDiv);

    container.appendChild(section);
});