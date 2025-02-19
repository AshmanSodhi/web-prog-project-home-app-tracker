document.addEventListener("dragstart", function(event) {
    if (event.target.tagName === 'TR') {
        event.dataTransfer.setData("Text", event.target.id);
        event.target.style.opacity = "0.4";
    }
});

document.addEventListener("drag", function(event) {
    if (event.target.tagName === 'TR') {
        document.getElementById("demo").style.color = "red";
    }
});

document.addEventListener("dragend", function(event) {
    if (event.target.tagName === 'TR') {
        event.target.style.opacity = "1";
    }
});

document.addEventListener("dragenter", function(event) {
    if (event.target.closest('.droppable-row')) {
        event.target.closest('.droppable-row').classList.add('drag-over');
    }
});

document.addEventListener("dragover", function(event) {
    event.preventDefault();
});

document.addEventListener("dragleave", function(event) {
    if (event.target.closest('.droppable-row')) {
        event.target.closest('.droppable-row').classList.remove('drag-over');
    }
});

document.addEventListener("drop", function(event) {
    event.preventDefault();
    const dropTarget = event.target.closest('.droppable-row');
    
    if (dropTarget) {
        document.getElementById("demo").style.color = "";
        dropTarget.classList.remove('drag-over');
        
        const data = event.dataTransfer.getData("Text");
        const draggedElement = document.getElementById(data);
        
        if (draggedElement !== dropTarget) {
            // Get reference to the tbody
            const tbody = document.getElementById('applianceTableBody');
            
            // Get the positions of both elements
            const allRows = [...tbody.querySelectorAll('tr')];
            const draggedPos = allRows.indexOf(draggedElement);
            const droppedPos = allRows.indexOf(dropTarget);
            
            // Insert the dragged element in the right position
            if (draggedPos < droppedPos) {
                dropTarget.parentNode.insertBefore(draggedElement, dropTarget.nextSibling);
            } else {
                dropTarget.parentNode.insertBefore(draggedElement, dropTarget);
            }
        }
    }
});

// Add draggable attribute to all table rows
/* document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.getElementById("applianceTableBody");
    
    // Add event listeners to rows
    document.querySelectorAll(".droppable-row").forEach(row => {
        row.addEventListener("dragstart", dragStart);
        row.addEventListener("dragover", dragOver);
        row.addEventListener("drop", drop);
        row.addEventListener("dragenter", dragEnter);
        row.addEventListener("dragleave", dragLeave);
    });
    
    function dragStart(event) {
        event.dataTransfer.setData("text/plain", event.target.id);
        event.target.classList.add("dragging");
    }
    
    function dragOver(event) {
        event.preventDefault();
        event.target.classList.add("drag-over");
    }
    
    function dragEnter(event) {
        event.preventDefault();
        event.target.classList.add("drag-over");
    }
    
    function dragLeave(event) {
        event.target.classList.remove("drag-over");
    }
    
    function drop(event) {
        event.preventDefault();
        const draggedRowId = event.dataTransfer.getData("text/plain");
        const draggedRow = document.getElementById(draggedRowId);
        const dropTarget = event.target.closest(".droppable-row");
        
        if (draggedRow && dropTarget && draggedRow !== dropTarget) {
            const tbody = document.getElementById("applianceTableBody");
            tbody.insertBefore(draggedRow, dropTarget.nextSibling);
        }
        
        document.querySelectorAll(".drag-over").forEach(row => {
            row.classList.remove("drag-over");
        });
        draggedRow.classList.remove("dragging");
    }
});
 */