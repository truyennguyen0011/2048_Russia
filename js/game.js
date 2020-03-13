function createAndAppend({ className, parentElement, value }, tag = 'div') {
    let element = document.createElement(tag);
    element.className = className;
    if (value) {
        element.innerHTML = value;
    }
    parentElement.appendChild(element);

    return element;
}
class Game {
    constructor(parentElement, size) {
        let gameFieldElement = createAndAppend({
            className: 'game',
            parentElement: parentElement
        });

        let headerElement = createAndAppend({
            className: 'header',
            parentElement: gameFieldElement
        });

        this.score = 0;
        headerElement.innerHTML = 'Score: ' + this.score;

        let fieldElement = createAndAppend({
            className: 'field',
            parentElement: gameFieldElement
        });

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                let cellElement = createAndAppend({
                    className: 'cell',
                    parentElement: fieldElement
                });

                if (Math.random() > 0.8) {
                    cellElement.innerHTML = Math.random() > 0.5 ? 4 : 2;
                }
            }
        }
    }
}