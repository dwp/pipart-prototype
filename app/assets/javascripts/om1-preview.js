const radios = document.forms["om1-reason-form"].elements["om-reason"];
const om1p0 = document.getElementById("reason-preview-0");
const om1p1 = document.getElementById("reason-preview-1");
const om1p2 = document.getElementById("reason-preview-2");
const om1p3 = document.getElementById("reason-preview-3");

for(radio in radios) {
  radios[radio].onclick = function() {
    if (this.value == "om-reason-1") {
      om1p0.style.display = 'none';
      om1p2.style.display = 'none';
      om1p3.style.display = 'none';
      om1p1.style.display = 'block';
    } else if (this.value == "om-reason-2") {
      om1p0.style.display = 'none';
      om1p2.style.display = 'block';
      om1p3.style.display = 'none';
      om1p1.style.display = 'none';
    } else {
      om1p0.style.display = 'none';
      om1p2.style.display = 'none';
      om1p3.style.display = 'block';
      om1p1.style.display = 'none';
    }
  }
}