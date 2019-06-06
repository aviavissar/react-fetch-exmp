export default (pics, text) => {
    if (text) {
        return pics.filter((pic) => {
            const textMatch = pic.author.toLowerCase().includes(text.toLowerCase()) || pic.id.includes(text);
            return textMatch;
        })
    } else return pics;

};
