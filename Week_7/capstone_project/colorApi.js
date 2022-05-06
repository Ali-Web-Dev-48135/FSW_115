// https://x-colors.herokuapp.com/api/random?number=10

export function getRandomColor() {
    console.log("Color Function");
    const response = axios.get("https://x-colors.herokuapp.com/api/random?number=10");
    return response;
};



