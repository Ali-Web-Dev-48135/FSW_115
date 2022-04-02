

class ArrayList{
    constructor() {
        this.arrayToLoop = [
            "http://cdn.shibe.online/shibes/c26674f66ec75352d35d4c47f4402c3ff57669ad.jpg",
            "http://cdn.shibe.online/shibes/076bc996fec3ddc0d7aee52d2150ad8749a95b31.jpg",
            "http://cdn.shibe.online/shibes/a86bcbb1b472431590e6f6b324365249.jpg",
            "http://cdn.shibe.online/shibes/da0a488731d560e0c252333363f16b35e7a7f97c.jpg",
            "http://cdn.shibe.online/shibes/26b3fabf275d111e2f1d6953ede6bf196e0986ac.jpg",
            "http://cdn.shibe.online/shibes/809327795e969f1fc35cce92d6eab1269b99d5a0.jpg",
            "http://cdn.shibe.online/shibes/7cd61e4a2ca2360460bcd17c831ca0af17ab61c0.jpg",
            "http://cdn.shibe.online/shibes/e514eecbf0012fdd56f9c6b631fe26537b71198d.jpg",
            "http://cdn.shibe.online/shibes/88faeecc6e4e227d29630b3d07f78b6822637f80.jpg",
            "http://cdn.shibe.online/shibes/89253f885d6af3b180f1196b3a2ba1f34ab418a5.jpg",
        ]
       return this.arrayToLoop;
    }

}

class DomELement {
    constructor() {
        this.arrayOne = new ArrayList();
        this.bringToLife(this.arrayOne);
    }

    bringToLife(arrayToLoop) {
            const targetElement = document.getElementById("ulApp");
            arrayToLoop.forEach( imgToParse => {
                const createLi = document.createElement("li");
                createLi.innerHTML = `
                    <h3>${arrayToLoop.indexOf(imgToParse) + 1}</h3>
                    <img src=${imgToParse}></img>
                `;
                targetElement.append(createLi);
            })
        }
}
const startApp = new DomELement();



