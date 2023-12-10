//Imports
import { fetchData } from './EventHandler.js';
import modal from './modal.js';
import toast from './toast.js';
import pagination from "./pagination.js";


$(document).ready(function () {

    // Function to render courses on the page
    function renderCourses() {
        pagination.renderContent(() => {
            pagination.renderElement.empty();
            const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
            const endIndex = startIndex + pagination.itemsPerPage;
            const pageData = pagination.data.slice(startIndex, endIndex);

            $.each(pageData, function (index, course) {
                // Creating course elements dynamically
                const courseDiv = $("<div>").addClass("rectangle");
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
                const checkBoxCont = $("<div>").addClass("checkBoxCont");
                const rmvCheckBox = $('<input type="checkbox">').val(course.ID);

                checkBoxCont.append(rmvCheckBox);
                courseDiv.append(courseTitle).append(viewCourse).append(checkBoxCont);
                pagination.renderElement.append(courseDiv);

                rmvCheckBox.hide();
            });
        });
    }

    // Function to update the list of enrolled courses
    function updateEnrolledCourseList(studentId) {
        fetchData($, "assets/Back-End/getEnrolledCourses.php", "POST", { student_id: studentId })
            .then((response) => {
                // Update pagination data and render courses
                pagination.setData(response);
                renderCourses();
                pagination.updatePaginationLinks();
            })
            .catch((error) => {
                console.log("Error fetching enrolled courses: " + error);
            });

        // Hiding and toggling buttons and checkboxes
        $("#confirmBtn").hide();
        $("#cancelBtn").hide();

        // Handling remove button click
        $("#removeBtn").on("click", function () {
            $("#removeBtn").hide();
            $("#cancelBtn").toggle();
            $("#addBtn").hide();
            $(".viewCourse").toggle();
            $("#confirmBtn").toggle();
            $(".checkBoxCont input[type='checkbox']").toggle();
        });

        // Handling cancel button click
        $("#cancelBtn").on("click", function () {
            $("#confirmBtn").toggle();
            $("#cancelBtn").toggle();
            $("#addBtn").toggle();
            $("#removeBtn").toggle();
            $(".viewCourse").toggle();
            $(".checkBoxCont input[type='checkbox']").toggle();
            $(".checkBoxCont input[type='checkbox']").prop("checked", false);
        });

        // Handling confirm button click
        $("#confirmBtn").on("click", function () {
            modal.openModal();
        });

        // Handling pagination
        pagination.setPaginationElement($(".left-child"));
        pagination.onClickHandler(renderCourses);

        // Setting up toast and modal properties
        toast.setContent("Courses deleted successfully!");
        modal.setTitle("Remove courses");
        modal.setContent("Are you sure you want to remove the selected courses?");
        modal.setButtonsText("Cancel", "Confirm");

        // Handling save button click in modal
        modal.onClickSaveHandler(function saveClick() {
            const checkedEnrolledCoursesIDs = $(".checkBoxCont input[type='checkbox']:checked").map(function () {
                return $(this).val();
            }).get();

            // Logging checked course IDs and triggering deletion
            console.log(checkedEnrolledCoursesIDs);
            fetchData(jQuery, 'assets/Back-End/deleteEnrolledCourse.php', "POST", { EnrolledCourses_ids: checkedEnrolledCoursesIDs })
                .then((data) => {
                    console.log("Courses deleted successfully!");
                }).catch((error) => {
                    console.error(error);
                });

            // Removing deleted courses from the page
            checkedEnrolledCoursesIDs.forEach(courseID => {
                $(`.checkBoxCont input[type='checkbox'][value='${courseID}']`).closest('.rectangle').remove();
            });

            // Toggling and resetting elements, closing modal, and showing toast
            $("#confirmBtn").toggle();
            $("#cancelBtn").toggle();
            $("#addBtn").toggle();
            $("#removeBtn").toggle();
            $(".viewCourse").toggle();
            $(".checkBoxCont input[type='checkbox']").toggle();
            $(".checkBoxCont input[type='checkbox']").prop("checked", false);
            modal.closeModal();
            toast.showToast();
        });

        // Handling close button click in modal
        modal.onClickCloseHandler(function removeClick() {
            $("#confirmBtn").toggle();
            $("#cancelBtn").toggle();
            $("#addBtn").toggle();
            $("#removeBtn").toggle();
            $(".viewCourse").toggle();
            $(".checkBoxCont input[type='checkbox']").toggle();
            $(".checkBoxCont input[type='checkbox']").prop("checked", false);
        });
    }

    // Fetching student ID from session storage and updating enrolled courses
    const studentID = JSON.parse(sessionStorage.getItem("userData"))[0].ID;
    updateEnrolledCourseList(studentID);
});





