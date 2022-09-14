export const getPagesCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit);
}

export const getPagesArray = (totalPages) => {
    let pagesArray = [];
    for (let index = 0; index < totalPages; index++) {
        pagesArray.push(index + 1);
    }
    return pagesArray;
}