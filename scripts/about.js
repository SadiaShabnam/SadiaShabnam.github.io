const themeChk = document.getElementById('theme');
const bd = document.getElementById('bd');
const casualElements = document.getElementsByClassName('casual');
const formalSTElements = document.getElementsByClassName('formalConst');
const CHFormalElements = document.getElementsByClassName('formalComp');

if (themeChk){
    themeChk.addEventListener("change", function() {
        if(this.checked){
            bd.classList.add("act");
            // display casual elements
            for (const ele of casualElements ) {
                ele.classList.add('UnhideThis')
            };
            // change formal elements styling
            for (const ele of formalSTElements ) {
                ele.classList.add('striking')
            };
            for (const ele of CHFormalElements) {
                ele.classList.add('HideThis')
            }
        }
        else{
            bd.classList.remove("act");
            // hide casual elements
            for (const ele of casualElements ) {
                ele.classList.remove('UnhideThis')
            };
            // change formal elements styling to initial
            for (const ele of formalSTElements ) {
                ele.classList.remove('striking')
            };
            for (const ele of CHFormalElements) {
                ele.classList.remove('HideThis')
            }
        }
    });
}