const validateUrl = (url) => {
    let userSpecifiedUrl;
    try {
        userSpecifiedUrl = new URL(url);
    } catch (error) {
        return false;
    }
    return true;
}

export { validateUrl }
