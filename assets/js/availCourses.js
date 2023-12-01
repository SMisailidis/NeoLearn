import { fetchData } from "./eventHandler.js";

import modal from "./modal.js"
import toast from "./toast.js";
import pagination from "./pagination.js";

$(document).ready(function () {
  let selectedCourse;
  let enrolledInCourses = [];
  let selectedCourseData = {};

  const stud_ID = JSON.parse(sessionStorage.getItem("userData"))[0].ID;
  
  const checkEnrolledCourses = () => {
    $.each(enrolledInCourses, function (index, row) {
      $("#" + row.Course_ID)
        .prop("checked", true)
        .attr("title", "Already enrolled!");
    });
  };

  const initCheckedCourses = () => {
    fetchData(jQuery, "assets/Back-End/checkEnrolledCourses.php", "POST", {
      ID: stud_ID,
    })
      .then((data) => {
        enrolledInCourses = data;
        checkEnrolledCourses();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const renderTable = () => {
    pagination.renderContent(() => {
      pagination.renderElement.empty();

      const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
      const endIndex = startIndex + pagination.itemsPerPage;
      const pageData = pagination.data.slice(startIndex, endIndex);

      $.each(pageData, function (index, row) {
        const tr = $("<tr>").addClass("tableRowData");
        const td1 = $("<td>").addClass("tableData");
        const td2 = $("<td>").addClass("tableData");
        const td3 = $("<td>").addClass("tableData");
        const td4 = $("<td>").addClass("tableData");
        const checkbox = $("<input>")
          .attr("type", "checkbox")
          .attr("id", row.ID)
          .attr("value", row.Title);
        td1.append(row.Title);
        td2.append(row.ID);
        td3.append(row.First_Name + " " + row.Last_Name);
        td4.append(checkbox);
        tr.append(td1).append(td2).append(td3).append(td4);
        pagination.renderElement.append(tr);
      });
      checkEnrolledCourses();
    })
  };

  const fetchCourses = () => {
    fetchData(
      jQuery,
      "assets/Back-End/retrieveAllCourses.php",
      "POST",
      undefined
    )
      .then((data) => {
        pagination.setData(data);
        renderTable();
        pagination.updatePaginationLinks();

      })
      .catch((error) => {
        console.error(error);
      });
  };

  modal.onClickCloseHandler(() => {
    const input = $(`input[id=${selectedCourse}]`);
    const state = input.is(":checked");
    input.prop("checked", !state);
  })

  modal.onClickSaveHandler(() => {
    fetchData(
      jQuery,
      "assets/Back-End/updateEnrolledCourses.php",
      "POST",
      selectedCourseData
    )
      .then((success) => {
        if (success) {
          modal.closeModal();
          toast.showToast();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  })

  $(".tableBody").on("change", ":checkbox", function () {
    let course_ID = this.id;
    let course_Title = this.value;
    let state = $(this).is(":checked");
    selectedCourse = course_ID;

    const text = !state
      ? `Are you sure you want to unregister from: ${course_Title} (${course_ID})?`
      : `Are you sure you want to enroll in:
    ${course_Title} (${course_ID})?`;


    selectedCourseData = {
      state: state,
      Course_ID: course_ID,
      Stud_ID: stud_ID,
    };

    modal.openModal();

    modal.setContent(text);
  });

  modal.setTitle("Course Enrolment")
  modal.setButtonsText("No", "Yes")
  toast.setContent("The changes have been applied successfully!")
  pagination.setPaginationElement($(".tableBody"))
  
  fetchCourses();
  pagination.onClickHandler(renderTable)
  initCheckedCourses();
});
