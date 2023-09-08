const fadeOut = (element, duration) => {
    element.style.transition = `opacity ${duration / 1000}s ease-in-out`;
    element.style.opacity = 0;
    
    setTimeout(() => {
        element.style.display = 'none';
    }, duration);
}


export const functions = {
    fadeOut
}