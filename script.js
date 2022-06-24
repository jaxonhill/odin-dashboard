// Find the side_btns and create a NodeList of them
let side_btns = document.querySelectorAll('.side-btn');

// Iterate through the NodeList and find the SVG, path, and text for each one so we can add hovered
side_btns.forEach((side_btn) => {
    let svg = side_btn.querySelector('svg');
    let path_list = svg.querySelectorAll('path');
    let side_text = side_btn.querySelector('.side-text');

    // When you hover, make the SVGs white and the text white and add a blue background color to the div
    side_btn.addEventListener("mouseover", () => {
        // Add conditions because some of them we need to alter stroke and some the fill
        if (side_text.textContent === "Wallet" || side_text.textContent === "Log Out") {
            path_list.forEach((path) => {
                path.style.stroke = '#fff';
            });
        } else {
            path_list.forEach((path) => {
                path.style.fill = '#fff';
            });
        }
        // Change the background color and text color regardless
        side_btn.style.backgroundColor = 'var(--lightblue)';
        side_text.style.color = '#fff';
        side_btn.style.cursor = 'pointer';
    });

    // Also need to remove all of this when the mouse goes off the div and is no longer hovering
    side_btn.addEventListener("mouseout", () => {
        // Add same conditions for either stroke or fill to change
        if (side_text.textContent === "Wallet" || side_text.textContent === "Log Out") {
            path_list.forEach((path) => {
                path.style.stroke = 'var(--logogray)';
            });
        } else {
            path_list.forEach((path) => {
                path.style.fill = 'var(--logogray)';
            });
        }
        // Change the background color and text color back to original
        side_btn.style.backgroundColor = 'transparent';
        side_text.style.color = 'var(--textgray)';
    });
});