$(document).ready(function(){



    $(document).on({

        
        mouseenter: function() {
            $(this).closest('.viewCourse').css('width', '100%');
            $(this).children('.viewCourseImage').css('transform', 'rotate(-180deg)');   
            setTimeout(() => {
                $(this).siblings('.courseTitle').css("color", "#fff");
            }, 300)
        },
        mouseleave: function() {
            $(this).closest('.viewCourse').css('width', '50px');
            $(this).children('.viewCourseImage').css('transform', 'rotate(0)');
            setTimeout(() => {
                $(this).siblings('.courseTitle').css("color", "#114054");
            }, 300);
        }
    }, '.viewCourse');

});

