/*
    The `pagination` object manages dynamic rendering and interaction of a pagination component. 
    It includes functions to set data, current page, and pagination element, as well as an event handler for page clicks. 
    The object updates pagination links and renders content based on provided callback functions.
*/

const pagination = {
    renderElement: "",
    paginationRef: $(".pagination"),
    currentPage: 1,
    itemsPerPage: 4,
    data: [],
    totalData: 0,
    setData: (contentData) => {
        pagination.data = contentData
        pagination.totalData = pagination.data.length
    },
    setCurPage: (page) => {
        pagination.currentPage = page;
    },
    setPaginationElement: (refElem) => {
        pagination.renderElement = refElem;
    },
    renderContent: (callback) => {
        if (typeof callback === "function") {
            callback();
        }
    },

    onClickHandler: (callback) => {

        pagination.paginationRef.on("click", "button.page-link", function (e) {
            const page = parseInt($(this).text(), 10);
            if (!isNaN(page) && page !== pagination.currentPage) {
                pagination.currentPage = page;
                $(".pagination button.page-link").removeClass("active");
                
                $(this).addClass("active");
                
                if(typeof callback === "function") {
                    pagination.renderContent(callback);
                }

                pagination.updatePaginationLinks(pagination.currentPage);
            }
        })
        
    },

    updatePaginationLinks: () => {
        const totalPages = Math.ceil(pagination.totalData / pagination.itemsPerPage);

        pagination.paginationRef.empty();

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

        pagination.paginationRef.append(prevLI);

        for (let i = 1; i <= totalPages; i++) {
        const li = $("<li>").addClass("page-item");
        const button = $("<button>")
            .attr("type", "button")
            .addClass("page-link")
            .text(i);
        if (i === pagination.currentPage) {
            button.addClass("customActive");
        }
        li.append(button);
            pagination.paginationRef.append(li);
        }

        pagination.paginationRef.append(nextLI);
    },
};

export default pagination;