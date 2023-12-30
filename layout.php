<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="icon" type="image/x-icon" href="./assets/images/logoDark.png">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Elevate your education with Neo Learn. 
        Immerse yourself in a sophisticated learning environment curated for excellence.
        Access expert-led courses, engage with accomplished instructors, and refine your skills through interactive quizes. 
        Navigate a vast repository of educational resources, including meticulously crafted files. 
        Join a distinguished community of students and educators committed to advancing knowledge and fostering academic success.
        Start your educational journey with precision and purpose at Neo Learn.">
    <meta name="keywords" content="Online education, E-learning, Distance learning, Expert-led courses, 
        Academic excellence, Interactive quizes, Educational resources, Professional development, 
        Distinguished instructors, Curriculum diversity, Skill development, Lifelong learning, Academic community, 
        Digital learning, Knowledge advancement, Online classes, Learning platform, Virtual classroom,
        Student engagement, Educational files">
    <meta name="author" content="Neo Learn Developers">
    <meta name="robots" content="index, follow">
    <meta name="theme-color" content="#114054">

    <title><?= $pageTitle ?? 'NeoLearn' ?></title>

    <meta property="og:title" content="Neo Learn">
    <meta property="og:description" content="Discover a world of knowledge with our online education platform. 
        Immerse yourself in expert-led courses, interactive quizzes, and a diverse array of educational resources. 
        Join an academic community dedicated to lifelong learning and skill development. Elevate your education with us!">
    <meta property="og:url" content="http://localhost/NeoLearn">
    <meta property="og:type" content="website">

    <!-- Vendor assets -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <!------------------->

    <!-- CSS assets -->
    <link rel="stylesheet" href="assets/css/profile.css">
    <link rel="stylesheet" href="assets/css/globals.css">
    <link rel="stylesheet" href="assets/css/navbar.css">
    <link rel="stylesheet" href="assets/css/navigationArrows.css">
    <link rel="stylesheet" href="assets/css/userHeader.css">
    <link rel="stylesheet" href="assets/css/portfolio.css">
    <link rel="stylesheet" href="assets/css/availCourses.css">
    <link rel="stylesheet" href="assets/css/addCourse.css">
    <link rel="stylesheet" href="assets/css/expandedPagesContent.css">
    <link rel="stylesheet" href="assets/css/viewTeacherStudents.css">
    <link rel="stylesheet" href="assets/css/profile.css">
    <link rel="stylesheet" href="assets/css/globals.css">
    <link rel="stylesheet" href="assets/css/information.css">
    <link rel="stylesheet" href="assets/css/navbar.css">
    <link rel="stylesheet" href="assets/css/userHeader.css">
    <link rel="stylesheet" href="assets/css/portfolio.css">
    <link rel="stylesheet" href="assets/css/addCourse.css">
    <link rel="stylesheet" href="assets/css/viewStudCourses.css">
    <link rel="stylesheet" href="assets/css/viewCourseNotes.css">
    <link rel="stylesheet" href="assets/css/viewNotesDetails.css">
    <link rel="stylesheet" href="assets/css/addChapter.css">
    <link rel="stylesheet" href="assets/css/editCourse.css">
    <link rel="stylesheet" href="assets/css/viewChapterDetails.css">
    <link rel="stylesheet" href="assets/css/viewCourseChapters.css">
    <link rel="stylesheet" href="assets/css/viewCourses.css">
    <link rel="stylesheet" href="assets/css/quiz.css">
    <link rel="stylesheet" href="assets/css/changePassword.css">
    <link rel="stylesheet" href="assets/css/videoDisplay.css">
    <link rel="stylesheet" href="assets/css/quizLandingPage.css">
    <link rel="stylesheet" href="assets/css/addQuizQuestion.css">
    <!---------------->

    <!-- JS assets -->
    <script src="assets/js/navbarToggle.js"></script>
    <script type="module" src="assets/js/portfolio.js"></script>
    <script src="assets/js/navbar.js"></script>
    <script type="module" src="assets/js/logout.js"></script>
    <!--------------->

</head>

<body>
    <?php require 'assets/partials/modal.php' ?>
    <?php require 'assets/partials/toast.php' ?>
    <?php require 'assets/partials/userHeader.php' ?>
    <div class="nav-and-main d-flex">
        <?php require 'assets/partials/navbar.php' ?>
        <main class="mainContainer col-xl-9 col-12">