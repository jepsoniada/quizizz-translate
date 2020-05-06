let bakane = new XMLHttpRequest()
bakane.onreadystatechange = function() {
  	if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(this.responseText)
        console.log(JSON.parse(this.responseText))
        if (response.q.original != `*image*`) {
            document.querySelector(".question-container-inner p").innerText = response.q.translated
        }
        document.querySelector(`.question-container-inner`).title = response.q.original
        document.querySelectorAll('.option-inner p').forEach((e, i) => {
            if (response.answers[i].original != `*image*`) {
                e.innerText = response.answers[i].translated
            }
            document.querySelectorAll('.option-inner')[i].title = response.answers[i].original
        })
  	}
};
let a = document.createElement(`div`)
a.setAttribute(`style`, `position: absolute; display: flex; flex-direction: column; background: #fafeff; z-index: 102; left: 0; top: 0; width: 40px; height: 60px; border-radius: 7px; overflow: hidden;`)
let b = document.createElement(`div`)
b.setAttribute(`style`, `height: calc(100%/3 - 1px); background: #E9EFF1; width: 100%; display: flex; justify-content: center; border: solid #E1E1E1; border-width: 0 0 1px 0; align-items: center; cursor: grab;`)
let f = document.createElement(`div`)
f.setAttribute(`style` , `height: 2px; width: 20px; background: #c6c6c6; border-radius: 3px;`)
let c = document.createElementNS("http://www.w3.org/2000/svg", "svg");
c.addEventListener(`click`, () => {
    bakane.open(`POST`, `http://localhost:8080/translate`, true)
    bakane.setRequestHeader(`Content-Type`, `application/json`)
    let a = () => {
        const answers = []
        document.querySelectorAll('.option-inner').forEach(e => answers.push(e.innerText ? e.innerText : `*image*`))
        const question = document.querySelector(`.question-container-inner`).innerText ? document.querySelector(`.question-container-inner`).innerText : `*image*`
        return {
            answers: answers,
            q: question
        }
    }
    let b = JSON.stringify(a())
    bakane.send(b)
})
c.setAttribute(`viewBox`, `-2 -2 28 28`)
c.setAttribute(`style`, `fill: #02C4EE; width: 40px; height: 40px; cursor: pointer`)
let d = document.createElementNS("http://www.w3.org/2000/svg", 'path')
d.setAttribute(`d`, `M12.65 15.67c.14-.36.05-.77-.23-1.05l-2.09-2.06.03-.03c1.74-1.94 2.98-4.17 3.71-6.53h1.94c.54 0 .99-.45.99-.99v-.02c0-.54-.45-.99-.99-.99H10V3c0-.55-.45-1-1-1s-1 .45-1 1v1H1.99c-.54 0-.99.45-.99.99 0 .55.45.99.99.99h10.18C11.5 7.92 10.44 9.75 9 11.35c-.81-.89-1.49-1.86-2.06-2.88-.16-.29-.45-.47-.78-.47-.69 0-1.13.75-.79 1.35.63 1.13 1.4 2.21 2.3 3.21L3.3 16.87c-.4.39-.4 1.03 0 1.42.39.39 1.02.39 1.42 0L9 14l2.02 2.02c.51.51 1.38.32 1.63-.35zM17.5 10c-.6 0-1.14.37-1.35.94l-3.67 9.8c-.24.61.22 1.26.87 1.26.39 0 .74-.24.88-.61l.89-2.39h4.75l.9 2.39c.14.36.49.61.88.61.65 0 1.11-.65.88-1.26l-3.67-9.8c-.22-.57-.76-.94-1.36-.94zm-1.62 7l1.62-4.33L19.12 17h-3.24z`)
d.setAttribute(`style` , `stroke: "#000";strokeWidth: "0";`)
let e = document.createElementNS("http://www.w3.org/2000/svg", 'path')
e.setAttribute(`d` , `M0 0h24v24H0V0z`)
e.setAttribute(`style` , `fill: none`)
b.append(f)
c.appendChild(e)
c.appendChild(d)
a.append(b)
a.append(c)
document.body.append(a)
dragElement(a);
function dragElement(qwe) {
    let pos12 = {x: 0, y: 0}
    let pos34 = {x: 0, y: 0}
    qwe.onmousedown = dragMouseDown;
    function dragMouseDown(e) {
        e.preventDefault();
        pos34.x = e.clientX;
        pos34.y = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
        e.preventDefault();
        pos12.x = pos34.x - e.clientX;
        pos12.y = pos34.y - e.clientY;
        pos34.x = e.clientX;
        pos34.y = e.clientY;
        qwe.style.left = (qwe.offsetLeft - pos12.x) + "px";
        qwe.style.top = (qwe.offsetTop - pos12.y) + "px";
    }
    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}