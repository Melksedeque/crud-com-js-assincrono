const fadeOut = (element, duration) => {
    element.classList.add('fadeOut');

    setTimeout(() => {
        element.style.display = 'none'
        element.remove()
    }, duration)
}

export const functions = {
    fadeOut
}
