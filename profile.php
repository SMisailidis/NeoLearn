<?php
$pageTitle = 'Profile Information';
require 'layout.php' ?>
<h1 class="header-text">My Profile</h1>
<div class="contentProfileContainer">
    <div class="sectionOuterProfileContainer swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <i class="fa-solid fa-fingerprint"></i>
                <section class="sectionProfileContainer" id="section1">
                    <h4 class="title" id="title1">Personal Information</h4>
                    <button class="changeProfileButton">Edit</button>
                </section>
            </div>
            <div class="swiper-slide">
                <i class="fa-solid fa-graduation-cap"></i>
                <section class="sectionProfileContainer" id="section2">
                    <h4 class="title" id="title2">Academic Information</h4>
                </section>
            </div>
        </div>
    </div>
    <div class="profileNavWrapper navigation d-flex justify-content-center ">
        <img src="assets/images/swiperArrow.png" class="navigationArrow leftArrow" alt="">
        <img src="assets/images/swiperArrow.png" class="navigationArrow rightArrow" alt="">
    </div>
</div>
</main>
</div>
<script type="module" src="assets/js/profile.js"></script>
<script>
    const profileSwiper = new Swiper('.sectionOuterProfileContainer', {
        slidesPerView:1,
        loop: true,
        spaceBetween: 20,
        effect: 'cube',

        navigation: {
    nextEl: '.profileNavWrapper .rightArrow',
    prevEl: '.profileNavWrapper .leftArrow',
  },

});

</script>
</body>

</html>