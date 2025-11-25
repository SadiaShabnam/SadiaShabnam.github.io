function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
  
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active2");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector(".image-overlay");
  const fullImage = overlay.querySelector(".full-image");
  const closeBtn = overlay.querySelector(".close-btn");

  document.body.addEventListener("click", function (e) {
    if (e.target.classList.contains("enlargeable")) {
      fullImage.src = e.target.src;
      overlay.classList.add("show");
    }
  });

  closeBtn.onclick = () => overlay.classList.remove("show");

  overlay.onclick = (e) => {
    if (e.target === overlay) overlay.classList.remove("show");
  };

  document.onkeydown = (e) => {
    if (e.key === "Escape") overlay.classList.remove("show");
  };
});
