const addToLocal = id => {
    let bookmarkedBlog = getBookmarkedBlog();
    localStorage.setItem('bookmarked-blog', JSON.stringify(bookmarkedBlog));
}
const getBookmarkedBlog = () => {
    let bookmarkedBlog = {};

    //get the shopping cart from local storage
    const storedBlog = localStorage.getItem('bookmarked-blog');
    if (storedBlog) {
        bookmarkedBlog = JSON.parse(storedBlog);
    }
    return bookmarkedBlog;
}
export {addToLocal, getBookmarkedBlog}