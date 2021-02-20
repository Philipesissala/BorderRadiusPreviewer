const App = {
    box: document.querySelector(".box"),
    inputUp: document.querySelector(".input-group #up"),
    inputRight: document.querySelector(".input-group #right"),
    inputLeft: document.querySelector(".input-group #left"),
    inputDown: document.querySelector(".input-group #down"),
    btnApply: document.querySelector(".btnApply"),
    inputGenerateCss: document.querySelector(".cssGenerator .getCss"),
    btnCopy: document.querySelector(".cssGenerator .btnCopy"),

    getValues() {
        return {
            inputUp: App.inputUp.value,
            inputRight: App.inputRight.value,
            inputLeft: App.inputLeft.value,
            inputDown: App.inputDown.value,
        }
    },
    init() {
        let { inputUp, inputRight, inputLeft, inputDown } = App.getValues();
        App.box.style.borderTopLeftRadius = `${inputUp}px`;
        App.box.style.borderTopRightRadius = `${inputRight}px`;
        App.box.style.borderBottomLeftRadius = `${inputLeft}px`;
        App.box.style.borderBottomRightRadius = `${inputDown}px`;

        App.inputGenerateCss.value = `border-radius: ${inputUp.trim() == 0 ? 0 : inputUp}px ${inputRight.trim() == 0 ? 0 : inputRight}px ${inputLeft.trim() == 0 ? 0 : inputLeft}px ${inputDown.trim() == 0 ? 0 : inputDown}px;`;
    },
}
App.btnApply.addEventListener("click", () => {
    App.init()
});