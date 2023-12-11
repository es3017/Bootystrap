// Function to initialize Bootstrap Popovers
function initializePopovers(triggerSelector) {
    var triggerList = [].slice.call(document.querySelectorAll(triggerSelector));
    console.log('Popover trigger elements:', triggerList);

    return triggerList.map(function (triggerEl) {
        console.log('Initializing Popover for:', triggerEl);
        return new bootstrap.Popover(triggerEl);
    });
}

// Function to initialize Bootstrap Tooltips
function initializeTooltips(triggerSelector) {
    var triggerList = [].slice.call(document.querySelectorAll(triggerSelector));
    console.log('Tooltip trigger elements:', triggerList);

    return triggerList.map(function (triggerEl) {
        console.log('Initializing Tooltip for:', triggerEl);
        return new bootstrap.Tooltip(triggerEl);
    });
}

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
console.log('Popover trigger elements:', popoverTriggerList);

var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    console.log('Initializing Popover for:', popoverTriggerEl);
    return new bootstrap.Popover(popoverTriggerEl);
});

// Event handler for popover toggle
function togglePopoverState(popoverTriggerEl) {
    var popover = bootstrap.Popover.getInstance(popoverTriggerEl);
    if (popover) {
        popover.toggle();
    }
}

// Event for button click
document.addEventListener('click', function (event) {
    var target = event.target;
    if (target.classList.contains('btn')) {
        handleButtonClick();
    } else if (target.dataset.bsToggle === 'popover') {
        togglePopoverState(target);
    }
});
