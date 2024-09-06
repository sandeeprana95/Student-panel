$(document).ready(function() {
    // Drag start event
    $(".task-card").on("dragstart", function(event) {
        event.originalEvent.dataTransfer.setData("text/plain", event.target.id);
    });

    // Allow drop on panels
    $(".panel-body").on("dragover", function(event) {
        event.preventDefault();
        

    });

    // Drop event
    $(".panel-body").on("drop", function(event) {
        event.preventDefault();
        let data = event.originalEvent.dataTransfer.getData("text");
        let task = $("#" + data);
        $(this).append(task);

        // Add green color for resolved tasks
        if ($(this).attr("id") === "resolved") {
            task.addClass("resolved");
        } else {
            task.removeClass("resolved");
        }
    });
});
