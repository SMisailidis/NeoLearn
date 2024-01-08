<?php
$pageTitle = 'Valuable Information';
require 'layout.php' ?>
<h1 class="d-none">NeoLearn Information</h1>
    
    <h2 class="headerStyle">Information</h2>
    <div class="swiper informationSwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <article class="contentInfoInnerContainer">
                    <h2 class="infoHeaders">About Our Platform</h2>
                    <span>Our e-learning platform is designed to provide an interactive and engaging learning experience for individuals of all ages and backgrounds. Whether you're a student, a professional, or someone eager to learn new skills, we have something for you.</span>
                </article>
            </div>
            <div class="swiper-slide">
                <article class="contentInfoInnerContainer">
                    <h2 class="infoHeaders">How to Get Started</h2>
                    <span>Explore our courses and start your learning journey today. Signing up is easy and free. If you have any questions or need assistance, feel free to contact us.</span>
                </article>
            </div>

            <div class="swiper-slide">
                <article class="contentInfoInnerContainer">
                    <h2 class="infoHeaders">Key Features</h2>
                    <ul class="infoKeyFeatures">
                        <li>Wide range of courses in various subjects</li>
                        <li>Experienced instructors and experts</li>
                        <li>Flexible learning schedules</li>
                        <li>Interactive quizzes and assessments</li>
                    </ul>
                </article>
            </div>
            <div class="swiper-slide">

                <article class="contentInfoInnerContainer">
                    <h2 class="infoHeaders">Contact Us</h2>
                    <span>If you have any questions or inquiries, feel free to reach out to us:</span>
                    <ul class="infoKeyFeatures">
                        <li>Email: <a href="mailto:info@example.com" title="email">info@example.com</a></li>
                        <li>Phone: +1 (123) 456-7890</li>
                        <li>Follow us on <a href="https://www.twitter.com/example" target="_blank" title="Twitter">Twitter</a> for updates.</li>
                        <li>See our work <a href="https://github.com/SMisailidis/NeoLearn" title="github"><i class="fa-brands fa-github"></i></a></li>
                    </ul>
                </article>
            </div>

        </div>

    </div>

    <div class="informationNavWrapper navigation d-flex justify-content-center ">
        <img src="assets/images/swiperArrow.png" class="navigationArrow leftArrow" alt="">
        <img src="assets/images/swiperArrow.png" class="navigationArrow rightArrow" alt="">
    </div>

</main>
</div>

<script>
    const informationSwiper = new Swiper('.informationSwiper', {
        slidesPerView: 1,
        effect: 'coverflow',

        navigation: {
    nextEl: '.informationNavWrapper .rightArrow',
    prevEl: '.informationNavWrapper .leftArrow',
  },

    });
</script>
</body>

</html>