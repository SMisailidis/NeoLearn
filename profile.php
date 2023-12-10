<?php require 'layout.php' ?>
<div class="mainScreenProfileContainer">
    <h1 class="header-text">My Profile</h1>
    <main class="contentProfileContainer">
        <img src="assets/images/userCircled.png" alt="image">
        <div class="sectionOuterProfileContainer">
            <section class="sectionProfileContainer">
                <h4 class="title">Personal Information</h4>
                <article class="mainProfileContent">
                    <label for="Ifullname">Full Name: </label>
                    <input type="text" name="Ifullname" value="Boutsiadis Pavlos" readonly>
                </article>
                <article class="mainProfileContent">
                    <label for="Icontact">Contact Email:</label>
                    <input type="text" name="Icontact" value="personalemail@gmail.com" readonly>
                </article>
                <article class="mainProfileContent">
                    <label for="Inumber">Phone Number: </label>
                    <input type="text" name="Inumber" value="6969696969" readonly>
                </article>
                <article class="mainProfileContent">
                    <label for="Ibirth">Date of Birth</label>
                    <input type="text" name="Ibirth" value="12/09/2002" readonly>
                </article>
                <button class="changeProfileButton">Edit</button>
            </section>
            <section class="sectionProfileContainer">
                <h4 class="title">Academic Information</h4>
                <article class="mainProfileContent">
                    <label for="Iusername">Username: </label>
                    <input type="text" name="Iusername" value="ics21010" readonly>
                </article>
                <article class="mainProfileContent">
                    <label for="IacadEmail">Academic Email: </label>
                    <input type="text" name="IacadEmail" value="personalemail@neolearn.edu.com" readonly>
                </article>
                <article class="mainProfileContent button">
                    <div class="wrapper">
                        <label for="Ipass">Password: </label>
                        <input type="password" name="Ipass" value="ics21010" readonly>
                    </div>
                    <button class="button">Change</button>
                </article>
                <article class="mainProfileContent button">
                    <div class="wrapper">
                        <label for="Icours">Courses Taken: </label>
                        <input type="text" name="Icours" value="" readonly>
                    </div>
                    <button class="button">Full List</button>
                </article>
            </section>
        </div>
    </main>
</div>