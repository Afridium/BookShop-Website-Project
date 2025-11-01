const getStoredBook = () => {
    const storedBookstr = localStorage.getItem("readList");

    if(storedBookstr){
        const storeBookData = JSON.parse(storedBookstr);
        return storeBookData;
    }else{
        return [];
    }
}

const addToStoredDB = (id) => {
    const storeBookData = getStoredBook(id);

    if(storeBookData.includes(id)){
        alert('this book already exists');
    }else{
        storeBookData.push(id);
        const data = JSON.stringify(storeBookData);
        localStorage.setItem("readList", data);
    }
}

export {addToStoredDB, getStoredBook};