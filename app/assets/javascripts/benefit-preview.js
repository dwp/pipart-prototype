const radios = document.forms["second-benefit"].elements["benefit-answer"];
const benefitp0 = document.getElementById("benefit-preview-0");
const benefitp1 = document.getElementById("benefit-preview-1");
const benefitp2 = document.getElementById("benefit-preview-2");
const benefitp3 = document.getElementById("benefit-preview-3");
const benefitp4 = document.getElementById("benefit-preview-4");
const benefitp5 = document.getElementById("benefit-preview-5");
const benefitp6 = document.getElementById("benefit-preview-6");
const benefitp7 = document.getElementById("benefit-preview-7");
const benefitp8 = document.getElementById("benefit-preview-8");
const benefitp9 = document.getElementById("benefit-preview-9");
const benefitp10 = document.getElementById("benefit-preview-10");
const benefitp11 = document.getElementById("benefit-preview-11");

for(radio in radios) {
  radios[radio].onclick = function() {
    if (this.value == "Carers") {
      benefitp0.style.display = 'none';
      benefitp1.style.display = 'block';
      benefitp2.style.display = 'none';
      benefitp3.style.display = 'none';
      benefitp4.style.display = 'none';
      benefitp5.style.display = 'none';
      benefitp6.style.display = 'none';
      benefitp7.style.display = 'none';
      benefitp8.style.display = 'none';
      benefitp9.style.display = 'none';
      benefitp10.style.display = 'none';
      benefitp11.style.display = 'none';
    } else if (this.value == "Carers - no print out") {
      benefitp0.style.display = 'none';
      benefitp1.style.display = 'none';
      benefitp2.style.display = 'block';
      benefitp3.style.display = 'none';
      benefitp4.style.display = 'none';
      benefitp5.style.display = 'none';
      benefitp6.style.display = 'none';
      benefitp7.style.display = 'none';
      benefitp8.style.display = 'none';
      benefitp9.style.display = 'none';
      benefitp10.style.display = 'none';
      benefitp11.style.display = 'none';
    } else if (this.value == "Carers - benefit and rate details") {
      benefitp0.style.display = 'none';
      benefitp1.style.display = 'none';
      benefitp2.style.display = 'none';
      benefitp3.style.display = 'block';
      benefitp4.style.display = 'none';
      benefitp5.style.display = 'none';
      benefitp6.style.display = 'none';
      benefitp7.style.display = 'none';
      benefitp8.style.display = 'none';
      benefitp9.style.display = 'none';
      benefitp10.style.display = 'none';
      benefitp11.style.display = 'none';
    }
     else if (this.value == "ESA") {
      benefitp0.style.display = 'none';
      benefitp1.style.display = 'none';
      benefitp2.style.display = 'none';
      benefitp3.style.display = 'none';
      benefitp4.style.display = 'block';
      benefitp5.style.display = 'none';
      benefitp6.style.display = 'none';
      benefitp7.style.display = 'none';
      benefitp8.style.display = 'none';
      benefitp9.style.display = 'none';
      benefitp10.style.display = 'none';
      benefitp11.style.display = 'none';
    }
     else if (this.value == "ESA old evidence") {
      benefitp0.style.display = 'none';
      benefitp1.style.display = 'none';
      benefitp2.style.display = 'none';
      benefitp3.style.display = 'none';
      benefitp4.style.display = 'none';
      benefitp5.style.display = 'block';
      benefitp6.style.display = 'none';
      benefitp7.style.display = 'none';
      benefitp8.style.display = 'none';
      benefitp9.style.display = 'none';
      benefitp10.style.display = 'none';
      benefitp11.style.display = 'none';
    } else if (this.value == "ESA report used - 3") {
      benefitp0.style.display = 'none';
      benefitp1.style.display = 'none';
      benefitp2.style.display = 'none';
      benefitp3.style.display = 'none';
      benefitp4.style.display = 'none';
      benefitp5.style.display = 'none';
      benefitp6.style.display = 'block';
      benefitp7.style.display = 'none';
      benefitp8.style.display = 'none';
      benefitp9.style.display = 'none';
      benefitp10.style.display = 'none';
      benefitp11.style.display = 'none';
    } else if (this.value == "ESA Work Related Activity") {
      benefitp0.style.display = 'none';
      benefitp1.style.display = 'none';
      benefitp2.style.display = 'none';
      benefitp3.style.display = 'none';
      benefitp4.style.display = 'none';
      benefitp5.style.display = 'none';
      benefitp6.style.display = 'none';
      benefitp7.style.display = 'block';
      benefitp8.style.display = 'none';
      benefitp9.style.display = 'none';
      benefitp10.style.display = 'none';
      benefitp11.style.display = 'none';
    } else if (this.value == "UC") {
      benefitp0.style.display = 'none';
      benefitp1.style.display = 'none';
      benefitp2.style.display = 'none';
      benefitp3.style.display = 'none';
      benefitp4.style.display = 'none';
      benefitp5.style.display = 'none';
      benefitp6.style.display = 'none';
      benefitp7.style.display = 'none';
      benefitp8.style.display = 'block';
      benefitp9.style.display = 'none';
      benefitp10.style.display = 'none';
      benefitp11.style.display = 'none';
    } else if (this.value == "UC old evidence") {
      benefitp0.style.display = 'none';
      benefitp1.style.display = 'none';
      benefitp2.style.display = 'none';
      benefitp3.style.display = 'none';
      benefitp4.style.display = 'none';
      benefitp5.style.display = 'none';
      benefitp6.style.display = 'none';
      benefitp7.style.display = 'none';
      benefitp8.style.display = 'none';
      benefitp9.style.display = 'block';
      benefitp10.style.display = 'none';
      benefitp11.style.display = 'none';
    } else if (this.value == "UC report used - 3") {
      benefitp0.style.display = 'none';
      benefitp1.style.display = 'none';
      benefitp2.style.display = 'none';
      benefitp3.style.display = 'none';
      benefitp4.style.display = 'none';
      benefitp5.style.display = 'none';
      benefitp6.style.display = 'none';
      benefitp7.style.display = 'none';
      benefitp8.style.display = 'none';
      benefitp9.style.display = 'none';
      benefitp10.style.display = 'block';
      benefitp11.style.display = 'none';
    } else {
      benefitp0.style.display = 'none';
      benefitp1.style.display = 'none';
      benefitp2.style.display = 'none';
      benefitp3.style.display = 'none';
      benefitp4.style.display = 'none';
      benefitp5.style.display = 'none';
      benefitp6.style.display = 'none';
      benefitp7.style.display = 'none';
      benefitp8.style.display = 'none';
      benefitp9.style.display = 'none';
      benefitp10.style.display = 'none';
      benefitp11.style.display = 'block';
    }
  }
}