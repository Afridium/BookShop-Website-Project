const getStoredBookfromWishlist = () => {
    const storedBookstr = localStorage.getItem("wishList");

    if(storedBookstr){
        const storeBookData = JSON.parse(storedBookstr);
        return storeBookData;
    }else{
        return [];
    }
}

const addToStoredDBasWishlist = (id) => {
    const storeBookData = getStoredBookfromWishlist(id);

    if(storeBookData.includes(id)){
        alert('this book already exists');
    }else{
        storeBookData.push(id);
        const data = JSON.stringify(storeBookData);
        localStorage.setItem("wishList", data);
    }
}

export {addToStoredDBasWishlist, getStoredBookfromWishlist};