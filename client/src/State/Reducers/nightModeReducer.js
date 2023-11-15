const reducer = (
    state = {
        bgNavbar: "#F48C41",
            bgCard: "#F48C41",
            colorNavbar: "#000000",
            colorCard: "#000000",
    },
    action
) => {
    if (action.payload === true) {
        return {
            bgNavbar: "#F48C41",
            bgCard: "#F48C41",
            colorNavbar: "#000000",
            colorCard: "#000000",
        };
    } else if (action.payload === false) {
        return {
            bgNavbar: "#F48C41",
            bgCard: "#F48C41",
            colorNavbar: "#000000",
            colorCard: "#000000",
        };
    } else {
        return state;
    }
};

//#2484ED  gears blue
//#F48C41 gears g


export default reducer;