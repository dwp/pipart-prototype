const radios = document.forms["good-reason-form"].elements["good-reason"];
const om1p0 = document.getElementById("reason-preview-0");
const om1p1 = document.getElementById("reason-preview-1");
const om1p2 = document.getElementById("reason-preview-2");
const om1p3 = document.getElementById("reason-preview-3");
const om1p4 = document.getElementById("reason-preview-4");

for(radio in radios) {
  radios[radio].onclick = function() {
    console.log(this.value)
    if (this.value == "Reason1") {
      om1p0.style.display = 'none';
      om1p1.style.display = 'block';
      om1p2.style.display = 'none';
      om1p3.style.display = 'none';
      om1p4.style.display = 'none';
    } else if (this.value == "Reason2") {
      om1p0.style.display = 'none';
      om1p1.style.display = 'none';
      om1p2.style.display = 'block';
      om1p3.style.display = 'none';
      om1p4.style.display = 'none';
    } else if (this.value == "Reason3") {
      om1p0.style.display = 'none';
      om1p1.style.display = 'none';
      om1p2.style.display = 'none';
      om1p3.style.display = 'block';
      om1p4.style.display = 'none';
    } else {
      om1p0.style.display = 'none';
      om1p1.style.display = 'none';
      om1p2.style.display = 'none';
      om1p3.style.display = 'none';
      om1p4.style.display = 'block';
    }
  }
}