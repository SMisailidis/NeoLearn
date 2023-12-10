import { fetchData } from './EventHandler.js';
import pagination from './pagination.js'

$(document).ready(function () {

    function renderCourses() {
        pagination.renderContent(()=>{
            pagination.renderElement.empty();

            const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
            const endIndex = startIndex + pagination.itemsPerPage;
            const pageData = pagination.data.slice(startIndex, endIndex);

            $.each(pageData, function (index, curriculum) {
                const chapterRectangle = $("<div>").addClass("chapterRectangle");
                const chapterTitle = $("<a>")
                    .addClass("chapterTitle")
                    .attr("href", "viewChapterDetails.php?courseTitle=" + encodeURIComponent(courseTitle) + "&courseId=" + encodeURIComponent(courseId) + "&curID=" + encodeURIComponent(curriculum.ID))
                    .text(curriculum.Title);

                chapterRectangle.append(chapterTitle);
                pagination.renderElement.append(chapterRectangle);

            });
        })
    }

    let urlParams = new URLSearchParams(window.location.search);
    let courseId = urlParams.get('courseId');
    let courseTitle = urlParams.get('courseTitle');

    $('#cTitle').text(courseTitle + "-(" + courseId + ")");

    const updateNotesList = () => {

        fetchData($, "assets/Back-End/getCurriculumTitle.php", "POST", { course_id: courseId })
            .then((response) => {

                pagination.setData(response);
                renderCourses();
                pagination.updatePaginationLinks();

            })
            .catch((error) => {
                console.log(error);
            });
    };

    pagination.setPaginationElement($(".Rectangles"));
    pagination.onClickHandler(renderCourses);
    
    updateNotesList();


    
    $('#addBtn_href').on('click', function (event) {
        event.preventDefault();

        const addChapterUrl = 'addChapter.php?courseId=' + encodeURIComponent(courseId);

        window.location.href = addChapterUrl;
    });

});
