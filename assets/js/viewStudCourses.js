import { fetchData } from './EventHandler.js';
import modal from './modal.js';
import toast from './toast.js';
 

$(document).ready(function () {

    function updateEnrolledCourseList(studentId) {
        const coursesContainer = $(".left-child");

        fetchData($, "assets/Back-End/getEnrolledCourses.php", "POST", { student_id: studentId })
            .then((response) => {
                $.each(response, function (index, course) {

                    const courseDiv = $("<div>")
                    .addClass("rectangle");

                    const courseTitle = $("<a>")
                        .addClass("courseTitle")
                        .attr("href", `./viewCourseNotes.php?courseTitle=${course.Title}&courseID=${course.ID}`)  
                        .attr("id", course.ID)
                        .text(course.Title);

                    const viewCourse = $("<a>")
                        .addClass("viewCourse")
                        .attr("href", `./viewCourseNotes.php?courseTitle=${course.Title}&courseID=${course.ID}`)  
                        .attr("id", course.ID)
                        .append($("<img>").attr("src", "./assets/images/whiteRightarrow.png").attr("alt", "arrow").addClass('viewCourseImage'));

                    const checkBoxCont = $("<div>")
                    .addClass("checkBoxCont");

                    const rmvCheckBox = $('<input type="checkbox">').val(course.ID);

                    checkBoxCont.append(rmvCheckBox);


                    courseDiv.append(courseTitle).append(viewCourse).append(checkBoxCont);
                    coursesContainer.append(courseDiv);


                    rmvCheckBox.hide();
                    
                });
            })
            .catch((error) => {
                console.log("Error fetching enrolled courses: " + error);
            });

            $("#confirmBtn").hide();
            $("#cancelBtn").hide();


            $("#removeBtn").on("click", function () {
                
                $("#removeBtn").hide();
                $("#cancelBtn").toggle();
                $("#addBtn").hide();
                $(".viewCourse").toggle();
                $("#confirmBtn").toggle();
                $(".checkBoxCont input[type='checkbox']").toggle();

            });

            $("#cancelBtn").on("click", function () {
                
                $("#confirmBtn").toggle();
                $("#cancelBtn").toggle();
                $("#addBtn").toggle();
                $("#removeBtn").toggle();
                $(".viewCourse").toggle();
                $(".checkBoxCont input[type='checkbox']").toggle();
                $(".checkBoxCont input[type='checkbox']").prop("checked", false);


            });

            $("#confirmBtn").on("click", function () {
                
                modal.openModal();
                toast.setContent("Courses deleted succesfully!");

            });

            




            modal.setTitle("Remove courses");
            modal.setContent("Are you sure you want to remove the selected courses?");
            modal.setButtonsText("Cancel", "Confirm");
            modal.onClickSaveHandler(function saveClick (){

                const checkedEnrolledCoursesIDs = $(".checkBoxCont input[type='checkbox']:checked").map(function () {
                    return $(this).val(); 
                }).get();
                console.log(checkedEnrolledCoursesIDs);
                 fetchData(jQuery, 'assets/Back-End/deleteEnrolledCourse.php', "POST", { EnrolledCourses_ids: checkedEnrolledCoursesIDs })
                .then((data) => {
                    console.log("Courses deleted successfully!");
                }).catch((error) => {
                    console.error(error)
                })
                

                $("#confirmBtn").toggle();
                $("#cancelBtn").toggle();
                $("#addBtn").toggle();
                $("#removeBtn").toggle();
                $(".viewCourse").toggle();
                $(".checkBoxCont input[type='checkbox']").toggle();
                $(".checkBoxCont input[type='checkbox']").prop("checked", false);
                modal.closeModal();
               
            });


            modal.onClickCloseHandler(function removeClick (){

                $("#confirmBtn").toggle();
                $("#cancelBtn").toggle();
                $("#addBtn").toggle();
                $("#removeBtn").toggle();
                $(".viewCourse").toggle();
                $(".checkBoxCont input[type='checkbox']").toggle();
                $(".checkBoxCont input[type='checkbox']").prop("checked", false);

            });


           
    }

    const studentID = JSON.parse(sessionStorage.getItem("userData"))[0].ID;
    updateEnrolledCourseList(studentID);
});





