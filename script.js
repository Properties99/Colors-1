function changeBackground() {
    const select = document.getElementById('backgroundSelect');
    const selectedValue = select.value;
    
    let backgroundImage;

    switch (selectedValue) {
        case 'beach':
            backgroundImage = 'url(beach.jpg)';
            break;
        case 'mountain':
            backgroundImage = 'url(mountain.jpg)';
            break;
        case 'forest':
            backgroundImage = 'url(forest.jpg)';
            break;
        default:
            backgroundImage = 'none';
    }
    
    document.body.style.backgroundImage = backgroundImage;
}