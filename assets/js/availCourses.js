import { fetchData } from "./eventHandler.js";

$(document).ready(function () {
  let currentPage = 1;
  const itemsPerPage = 4;
  let totalCourses = 0;
  let courses = [];
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

  const renderTable = (data, totalCourses) => {
    $(".tableBody").empty();

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = data.slice(startIndex, endIndex);

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
      $(".tableBody").append(tr);
    });
    checkEnrolledCourses();
  };

  const updatePaginationLinks = (currentPage) => {
    const totalPages = Math.ceil(totalCourses / itemsPerPage);

    $(".pagination").empty();

    const prevImg = $("<img>")
      .addClass("paginationImg")
      .attr("src", "assets/images/logo.png");

    const prevLI = $("<li>").addClass("page-item disabled").attr("id", "prev");
    const prevA = $("<a>").addClass("page-link").attr("href", "#");

    prevA.append(prevImg);
    prevLI.append(prevA);

    const nextLI = $("<li>").addClass("page-item disabled").attr("id", "next");
    const nextA = $("<a>").addClass("page-link").attr("href", "#");
    const nextImg = $("<img>")
      .addClass("paginationImg")
      .attr("src", "assets/images/logo.png");
    nextA.append(nextImg);
    nextLI.append(nextA);

    $(".pagination").append(prevLI);

    for (let i = 1; i <= totalPages; i++) {
      const li = $("<li>").addClass("page-item");
      const button = $("<button>")
        .attr("type", "button")
        .addClass("page-link")
        .text(i);
      if (i === currentPage) {
        button.addClass("customActive");
      }
      li.append(button);
      $(".pagination").append(li);
    }

    $(".pagination").append(nextLI);
  };

  const fetchCourses = () => {
    fetchData(
      jQuery,
      "assets/Back-End/retrieveAllCourses.php",
      "POST",
      undefined
    )
      .then((data) => {
        totalCourses = data.length;
        courses = data;
        renderTable(data, totalCourses);
        updatePaginationLinks(currentPage);
        initCheckedCourses();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onCloseModal = () => {
    const input = $(`input[id=${selectedCourse}]`);
    const state = input.is(":checked");
    input.prop("checked", !state);
    $("#exampleModalCenter").modal("hide");
  };

  $(".btn-secondary").on("click", onCloseModal);

  $(".btn-close").on("click", onCloseModal);

  $("#save").on("click", function () {
    fetchData(
      jQuery,
      "assets/Back-End/updateEnrolledCourses.php",
      "POST",
      selectedCourseData
    )
      .then((success) => {
        if (success) {
          $("#exampleModalCenter").modal("hide");
          $("#liveToast").removeClass("hide").addClass("show");

          setTimeout(function () {
            $("#liveToast").removeClass("show").addClass("hide");
          }, 3000);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  });

  $(".pagination").on("click", "button.page-link", function (e) {
    e.preventDefault();
    const page = parseInt($(this).text(), 10);
    if (!isNaN(page) && page !== currentPage) {
      currentPage = page;

      $(".pagination button.page-link").removeClass("active");

      $(this).closest("li.page-item").addClass("active");

      renderTable(courses, totalCourses);
      updatePaginationLinks(currentPage);
    }
  });

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

    $("#exampleModalCenter").modal("show");

    $(".modal-body").text(text);
  });

  fetchCourses();
});
