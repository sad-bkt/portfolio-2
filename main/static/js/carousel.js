var flkty = new Flickity( '.carousel', {

    imagesLoaded: true,
    // Unloaded images have no size, which can throw off cell
    // positions. To fix this, the imagesLoaded option re-positions
    // cells once their images have loaded.

    percentPosition: false,
    // sets positioning in percent values, rather than pixels
    // Enable if items have percent widths
    // Disable if items have pixel widths, like images

    resize: true,
    // listens to window resize events to adjust size & positions

    freeScroll: true,
    // enables content to be freely scrolled and flicked
    // without aligning cells

    wrapAround: true,
    // at end of cells, wraps-around to first for infinite scrolling
});
