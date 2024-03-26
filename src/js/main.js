import  React, { useEffect } from 'react';

// Spinner
const spinner = () => {
    setTimeout(() => {
        const spinnerElement = document.getElementById('spinner');
        if (spinnerElement) {
            spinnerElement.classList.remove('show');
        }
    }, 1);
};
spinner(0);

// Fixed Navbar
const handleScroll = () => {
    if (window.innerWidth < 992) {
        if (window.scrollY > 55) {
            document.querySelector('.fixed-top').classList.add('shadow');
        } else {
            document.querySelector('.fixed-top').classList.remove('shadow');
        }
    } else {
        if (window.scrollY > 55) {
            const fixedTop = document.querySelector('.fixed-top');
            fixedTop.classList.add('shadow');
            fixedTop.style.top = '-55px';
        } else {
            const fixedTop = document.querySelector('.fixed-top');
            fixedTop.classList.remove('shadow');
            fixedTop.style.top = '0';
        }
    }
};
useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

// Back to top button
const handleBackToTop = () => {
    document.querySelector('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
};
const handleScrollToShowButton = () => {
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
};
useEffect(() => {
    window.addEventListener('scroll', handleScrollToShowButton);
    return () => {
        window.removeEventListener('scroll', handleScrollToShowButton);
    };
}, []);
  
// Testimonial carousel
// Assume you're using a React Carousel component, such as react-owl-carousel
import OwlCarousel from 'react-owl-carousel';
const testimonialCarouselOptions = {
    autoplay: true,
    smartSpeed: 2000,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
    responsiveClass: true,
    responsive: {
        0: { items: 1 },
        576: { items: 1 },
        768: { items: 1 },
        992: { items: 2 },
        1200: { items: 2 }
    }
};

// Vegetable carousel
const vegetableCarouselOptions = {
    autoplay: true,
    smartSpeed: 1500,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
    responsiveClass: true,
    responsive: {
        0: { items: 1 },
        576: { items: 1 },
        768: { items: 2 },
        992: { items: 3 },
        1200: { items: 4 }
    }
};

// Modal Video
const handlePlayVideo = (videoSrc) => {
    const videoModal = document.getElementById('videoModal');
    const videoElement = document.getElementById('video');
    videoElement.src = `${videoSrc}?autoplay=1&amp;modestbranding=1&amp;showinfo=0`;
    $(videoModal).modal('show');
};
const handleCloseVideoModal = () => {
    const videoElement = document.getElementById('video');
    videoElement.src = '';
};
  
// Product Quantity
const handleQuantityButtonClick = (type) => {
    const inputElement = document.querySelector('.quantity input');
    let oldValue = parseFloat(inputElement.value);
    if (type === 'plus') {
        inputElement.value = oldValue + 1;
    } else if (type === 'minus') {
        if (oldValue > 0) {
            inputElement.value = oldValue - 1;
        } else {
            inputElement.value = 0;
        }
    }
};

const App = () => {
    return (
        <div>
            <button className="back-to-top" onClick={handleBackToTop} style={{ display: 'none' }}>
                Back to Top
            </button>
            <OwlCarousel className="testimonial-carousel" {...testimonialCarouselOptions}>
                {/* Testimonial carousel items */}
            </OwlCarousel>
            <OwlCarousel className="vegetable-carousel" {...vegetableCarouselOptions}>
                {/* Vegetable carousel items */}
            </OwlCarousel>
            <div id="videoModal" className="modal fade" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleCloseVideoModal}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe id="video" className="embed-responsive-item" allowFullScreen title="video"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;