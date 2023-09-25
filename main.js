document.body.style.backgroundColor = "#fff";
document.body.style.opacity = "0";
document.body.children.display = "none";

document.body.style.backgroundImage = "url('./img/sps.jpg')";
document.body.style.backgroundSize = "100% 100%";
setTimeout(() => {
  // document.body.style.opacity = "1";
  document.body.style.backgroundImage = "url('./img/shot.gif')";
  document.body.style.backgroundSize = "40% 40%";

  // document.body.style.backgroundColor = "#003e87";
}, 3000);
setTimeout(() => {
  document.body.style.opacity = "1";
  document.body.style.backgroundImage = "none";
  document.body.style.backgroundColor = "#003e87";
}, 6000);
let load = document.getElementById("load"),
  stress = document.getElementById("stress"),
  sample = document.getElementById("sample"),
  submit = document.getElementById("submit"),
  kgf = document.getElementById("kgf"),
  per = document.getElementById("per"),
  allinp = document.querySelectorAll("input"),
  allout = document.querySelectorAll(".outputs"),
  allbtn = document.querySelectorAll("but");

//function hide footer & header & outputs
for (let i = 0; i < allinp.length; i++) {
  allinp[i].onfocus = function () {
    document.querySelector(".footer").style.display = "none";
    document.querySelector("header").style.display = "none";
    for (let i = 0; i < allout.length; i++) {
      allout[i].style.display = "none";
    }
  };
  for (let i = 0; i < allbtn.length; i++) {
    allbtn[i].addEventListener("click", function () {
      document.querySelector(".footer").style.display = "flex";
      document.querySelector("header").style.display = "flex";
    });
  }
  allinp[i].onblur = function () {
    document.querySelector(".footer").style.display = "flex";
    document.querySelector("header").style.display = "flex";
    for (let i = 0; i < allout.length; i++) {
      allout[i].style.display = "none";
    }
  };
}
//hide all outputs
function disOutputs() {
  for (let i = 0; i < allout.length; i++) {
    allout[i].style.display = "flex";
  }
}

//function calc

submit.onclick = function () {
  disOutputs();

  if (sample.value === "cube1" && load.value !== "" && stress.value !== "") {
    kgf.innerHTML = `${Math.round(load.value * 0.453)} kgf/cm<sup>2</sup>`;
    per.innerHTML = `${Math.round(
      load.value * 0.453 * (1 / stress.value) * 100
    )} %`;
  } else if (
    sample.value === "cube2" &&
    load.value !== "" &&
    stress.value !== ""
  ) {
    kgf.innerHTML = `${Math.round(load.value * 2.08)} kgf/cm<sup>2</sup>`;
    per.innerHTML = `${Math.round(
      load.value * 2.08 * (1 / stress.value) * 100
    )} %`;
  } else if (
    sample.value === "cly" &&
    load.value !== "" &&
    stress.value !== ""
  ) {
    kgf.innerHTML = `${Math.round(load.value * 0.577)} kgf/cm<sup>2</sup>`;
    per.innerHTML = `${Math.round(
      load.value * 0.577 * (1 / stress.value) * 100
    )} %`;
  } else {
    kgf.innerHTML = "....";
    per.innerHTML = "....";
  }
  if (parseInt(per.innerHTML) >= 80) {
    kgf.style.color = "green";
    per.style.color = "green";
  } else {
    kgf.style.color = "red";
    per.style.color = "red";
  }

  load.value = "";
};

//start seiv analysis

//agg2

let wt2 = Array.from(document.querySelectorAll(".wt-2")),
  reserved2 = document.querySelectorAll(".reserved-2"),
  wtsamp2 = document.getElementById("wtsamp-2"),
  pass2 = document.querySelectorAll(".pass-2");
let seiveCalc2 = document.querySelector(".calc-2"),
  seivereset2 = document.querySelector(".reset-2"),
  fm2 = document.querySelector(".fm2");
let myarr = Array.from(document.querySelectorAll(".reserved-2"));

//function calc agg1 :

if (wtsamp2.value !== 0) {
  seiveCalc2.onclick = function () {
    disOutputs();
    for (let i = 0; i < reserved2.length; i++) {
      if (wt2[i].value === "" || wtsamp2.value === "") {
        reserved2[i].innerHTML = "0.0%";
        pass2[i].innerHTML = "0.0%";
      } else {
        reserved2[i].innerHTML = `${(
          (wt2[i].value / wtsamp2.value) *
          100
        ).toFixed(1)}%`;
        pass2[i].innerHTML = `${(
          100 - ((wt2[i].value / wtsamp2.value) * 100).toFixed(1)
        ).toFixed(1)}%`;

        if (Number.parseInt(pass2[0].innerHTML) === 100) {
          pass2[0].style.color = "green";
        } else {
          pass2[0].style.color = "red";
        }
        if (
          Number.parseInt(pass2[1].innerHTML) >= 90 &&
          Number.parseInt(pass2[1].innerHTML) <= 100
        ) {
          pass2[1].style.color = "green";
        } else {
          pass2[1].style.color = "red";
        }
        if (
          Number.parseInt(pass2[2].innerHTML) >= 40 &&
          Number.parseInt(pass2[2].innerHTML) <= 85
        ) {
          2;
          pass2[2].style.color = "green";
        } else {
          pass2[2].style.color = "red";
        }
        if (
          Number.parseInt(pass2[3].innerHTML) >= 10 &&
          Number.parseInt(pass2[3].innerHTML) <= 40
        ) {
          pass2[3].style.color = "green";
        } else {
          pass2[3].style.color = "red";
        }
        if (
          Number.parseInt(pass2[4].innerHTML) >= 0 &&
          Number.parseInt(pass2[4].innerHTML) <= 15
        ) {
          pass2[4].style.color = "green";
        } else {
          pass2[4].style.color = "red";
        }
        if (
          Number.parseInt(pass2[5].innerHTML) >= 0 &&
          Number.parseInt(pass2[5].innerHTML) <= 5
        ) {
          pass2[5].style.color = "green";
        } else {
          pass2[5].style.color = "red";
        }
      }
      fm2.innerHTML = `${(
        (parseFloat(reserved2[0].innerHTML) +
          parseFloat(reserved2[1].innerHTML) +
          parseFloat(reserved2[2].innerHTML) +
          parseFloat(reserved2[3].innerHTML) +
          parseFloat(reserved2[4].innerHTML) +
          parseFloat(reserved2[4].innerHTML)) /
        100
      ).toFixed(1)}`;
    }

    new Chart(document.getElementById("line-chart2"), {
      type: "line",
      data: {
        labels: [4.75, 9.5, 12.5, 19, 25, 37.5],
        datasets: [
          {
            data: [5, 15, 40, 85, 100, 100],
            label: "upper",
            borderColor: "red",
            fill: false,
          },
          {
            data: [
              parseInt(pass2[5].innerHTML),
              parseInt(pass2[4].innerHTML),
              parseInt(pass2[3].innerHTML),
              parseInt(pass2[2].innerHTML),
              parseInt(pass2[1].innerHTML),
              parseInt(pass2[0].innerHTML),
            ],
            label: "sample",
            borderColor: "green",
            fill: false,
          },

          {
            data: [0, 0, 10, 40, 90, 100],
            label: "lower",
            borderColor: "dodgerblue",
            fill: false,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: " منحنى تدرج سن 1",
        },
      },
    });
  };
}

//function reset seive 2

seivereset2.onclick = function () {
  disOutputs();
  for (let i = 0; i < reserved2.length; i++) {
    wt2[i].value = "";
    fm2.innerHTML = "";

    reserved2[i].innerHTML = "0.0%";
    pass2[i].innerHTML = "0.0%";
    pass2[i].style.color = "black";
    reserved2[i].style.color = "black";
  }
  new Chart(document.getElementById("line-chart2"), {
    type: "line",
    data: {
      labels: [4.75, 9.5, 12.5, 19, 25, 37.5],
      datasets: [
        {
          data: [5, 15, 40, 85, 100, 100],
          label: "upper",
          borderColor: "red",
          fill: false,
        },
        {
          data: [],
          label: "sample",
          borderColor: "green",
          fill: false,
        },

        {
          data: [0, 0, 10, 40, 90, 100],
          label: "lower",
          borderColor: "dodgerblue",
          fill: false,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: " منحنى تدرج سن 2",
      },
    },
  });
};

//agg1
let wt1 = Array.from(document.querySelectorAll(".wt-1")),
  reserved1 = document.querySelectorAll(".reserved-1"),
  wtsamp1 = document.getElementById("wtsamp-1"),
  pass1 = document.querySelectorAll(".pass-1");
let seiveCalc1 = document.querySelector(".calc-1"),
  seivereset1 = document.querySelector(".reset-1"),
  fm1 = document.querySelector(".fm1");
//function calc agg1

if (wtsamp1.value !== 0) {
  seiveCalc1.onclick = function () {
    disOutputs();
    // disOutputs()
    for (let i = 0; i < wt1.length; i++) {
      if (wt1[i].value === "" || wtsamp1.value === "") {
        reserved1[i].innerHTML = "0.0%";
        pass1[i].innerHTML = "0.0%";
      } else {
        reserved1[i].innerHTML = `${(
          (wt1[i].value / wtsamp1.value) *
          100
        ).toFixed(1)}%`;
        pass1[i].innerHTML = `${(
          100 - ((wt1[i].value / wtsamp1.value) * 100).toFixed(1)
        ).toFixed(1)}%`;

        if (Number.parseInt(pass1[0].innerHTML) === 100) {
          pass1[0].style.color = "green";
        } else {
          pass1[0].style.color = "red";
        }
        if (
          Number.parseInt(pass1[1].innerHTML) >= 90 &&
          Number.parseInt(pass1[1].innerHTML) <= 100
        ) {
          pass1[1].style.color = "green";
        } else {
          pass1[1].style.color = "red";
        }
        if (
          Number.parseInt(pass1[2].innerHTML) >= 40 &&
          Number.parseInt(pass1[2].innerHTML) <= 70
        ) {
          2;
          pass1[2].style.color = "green";
        } else {
          pass1[2].style.color = "red";
        }
        if (
          Number.parseInt(pass1[3].innerHTML) >= 0 &&
          Number.parseInt(pass1[3].innerHTML) <= 15
        ) {
          pass1[3].style.color = "green";
        } else {
          pass1[3].style.color = "red";
        }
        if (
          Number.parseInt(pass1[4].innerHTML) >= 0 &&
          Number.parseInt(pass1[4].innerHTML) <= 15
        ) {
          pass1[4].style.color = "green";
        } else {
          pass1[4].style.color = "red";
        }
      }
      fm1.innerHTML = `${(
        (parseFloat(reserved1[0].innerHTML) +
          parseFloat(reserved1[1].innerHTML) +
          parseFloat(reserved1[2].innerHTML) +
          parseFloat(reserved1[3].innerHTML) +
          parseFloat(reserved1[4].innerHTML)) /
        100
      ).toFixed(1)}`;
    }

    new Chart(document.getElementById("line-chart1"), {
      type: "line",
      data: {
        labels: [2.36, 4.75, 9.5, 12.5, 19],
        datasets: [
          {
            data: [5, 15, 70, 100, 100],
            label: "upper",
            borderColor: "red",
            fill: false,
          },
          {
            data: [
              parseInt(pass1[4].innerHTML),
              parseInt(pass1[3].innerHTML),
              parseInt(pass1[2].innerHTML),
              parseInt(pass1[1].innerHTML),
              parseInt(pass1[0].innerHTML),
            ],
            label: "sample",
            borderColor: "green",
            fill: false,
          },

          {
            data: [0, 0, 40, 90, 100],
            label: "lower",
            borderColor: "dodgerblue",
            fill: false,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: " منحنى تدرج سن 1",
        },
      },
    });
  };
}

//
//function reset agg1
seivereset1.onclick = function () {
  disOutputs();
  for (let i = 0; i < wt1.length; i++) {
    wt1[i].value = "";
    reserved1[i].innerHTML = "0.0%";
    pass1[i].innerHTML = "0.0%";
    pass1[i].style.color = "black";
    reserved1[i].style.color = "black";
    fm1.innerHTML = "";
  }
  new Chart(document.getElementById("line-chart1"), {
    type: "line",
    data: {
      labels: [2.36, 4.75, 9.5, 12.5, 19],
      datasets: [
        {
          data: [5, 15, 70, 100, 100],
          label: "upper",
          borderColor: "red",
          fill: false,
        },
        {
          data: [],
          label: "sample",
          borderColor: "green",
          fill: false,
        },

        {
          data: [0, 0, 40, 90, 100],
          label: "lower",
          borderColor: "dodgerblue",
          fill: false,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: " منحنى تدرج سن 1",
      },
    },
  });
};

//sand
let wt0 = Array.from(document.querySelectorAll(".wt-0")),
  reserved0 = document.querySelectorAll(".reserved-0"),
  wtsamp0 = document.getElementById("wtsamp-0"),
  pass0 = document.querySelectorAll(".pass-0");
let seiveCalc0 = document.querySelector(".calc-0"),
  seivereset0 = document.querySelector(".reset-0");
let fm0 = document.querySelector(".fm0");
//function calc sand

if (wtsamp0.value !== 0) {
  seiveCalc0.onclick = function () {
    disOutputs();

    console.log("done");
    for (let i = 0; i < wt0.length; i++) {
      if (wt0[i].value === "" || wtsamp0.value === "") {
        reserved0[i].innerHTML = "0.0%";
        pass0[i].innerHTML = "0.0%";
      } else {
        reserved0[i].innerHTML = `${(
          (wt0[i].value / wtsamp0.value) *
          100
        ).toFixed(1)}%`;
        pass0[i].innerHTML = `${(
          100 - ((wt0[i].value / wtsamp0.value) * 100).toFixed(1)
        ).toFixed(1)}%`;

        if (Number.parseInt(pass0[0].innerHTML) === 100) {
          pass0[0].style.color = "green";
        } else {
          pass0[0].style.color = "red";
        }
        if (
          Number.parseInt(pass0[1].innerHTML) >= 95 &&
          Number.parseInt(pass0[1].innerHTML) <= 100
        ) {
          pass0[1].style.color = "green";
        } else {
          pass0[1].style.color = "red";
        }
        if (
          Number.parseInt(pass0[2].innerHTML) >= 80 &&
          Number.parseInt(pass0[2].innerHTML) <= 100
        ) {
          2;
          pass0[2].style.color = "green";
        } else {
          pass0[2].style.color = "red";
        }
        if (
          Number.parseInt(pass0[3].innerHTML) >= 50 &&
          Number.parseInt(pass0[3].innerHTML) <= 85
        ) {
          pass0[3].style.color = "green";
        } else {
          pass0[3].style.color = "red";
        }
        if (
          Number.parseInt(pass0[4].innerHTML) >= 25 &&
          Number.parseInt(pass0[4].innerHTML) <= 60
        ) {
          pass0[4].style.color = "green";
        } else {
          pass0[4].style.color = "red";
        }
        if (
          Number.parseInt(pass0[5].innerHTML) >= 5 &&
          Number.parseInt(pass0[5].innerHTML) <= 30
        ) {
          pass0[5].style.color = "green";
        } else {
          pass0[5].style.color = "red";
        }
        if (
          Number.parseInt(pass0[6].innerHTML) >= 0 &&
          Number.parseInt(pass0[6].innerHTML) <= 10
        ) {
          pass0[6].style.color = "green";
        } else {
          pass0[6].style.color = "red";
        }
      }
      fm0.innerHTML = `${(
        (parseFloat(reserved0[0].innerHTML) +
          parseFloat(reserved0[1].innerHTML) +
          parseFloat(reserved0[2].innerHTML) +
          parseFloat(reserved0[3].innerHTML) +
          parseFloat(reserved0[4].innerHTML) +
          parseFloat(reserved0[5].innerHTML) +
          parseFloat(reserved0[6].innerHTML)) /
        100
      ).toFixed(1)}`;
    }
    new Chart(document.getElementById("line-chart0"), {
      type: "line",
      data: {
        labels: [0.15, 0.3, 0.6, 1.18, 2.36, 4.75, 9.5],
        datasets: [
          {
            data: [10, 30, 60, 85, 100, 100, 100],
            label: "upper",
            borderColor: "red",
            fill: false,
          },
          {
            data: [
              parseInt(pass0[6].innerHTML),
              parseInt(pass0[5].innerHTML),
              parseInt(pass0[4].innerHTML),
              parseInt(pass0[3].innerHTML),
              parseInt(pass0[2].innerHTML),
              parseInt(pass0[1].innerHTML),
              parseInt(pass0[0].innerHTML),
            ],
            label: "sample",
            borderColor: "green",
            fill: false,
          },

          {
            data: [2, 5, 25, 50, 80, 95, 100, 100],
            label: "lower",
            borderColor: "dodgerblue",
            fill: false,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: " منحنى تدرج الرمل",
        },
      },
    });
  };
}

//
//function reset sand
seivereset0.onclick = function () {
  disOutputs();
  for (let i = 0; i < wt0.length; i++) {
    wt0[i].value = "";
    reserved0[i].innerHTML = "0.0%";
    pass0[i].innerHTML = "0.0%";
    pass0[i].style.color = "black";
    reserved0[i].style.color = "black";
    fm0.innerHTML = "";
  }
  new Chart(document.getElementById("line-chart0"), {
    type: "line",
    data: {
      labels: [0.15, 0.3, 0.6, 1.18, 2.36, 4.75, 9.5],
      datasets: [
        {
          data: [10, 30, 60, 85, 100, 100, 100],
          label: "upper",
          borderColor: "red",
          fill: false,
        },
        {
          data: [],
          label: "sample",
          borderColor: "green",
          fill: false,
        },

        {
          data: [2, 5, 25, 50, 80, 95, 100, 100],
          label: "lower",
          borderColor: "dodgerblue",
          fill: false,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: " منحنى تدرج الرمل",
      },
    },
  });
};

//function water content
let wsamp = document.getElementById("wsamp");
let dsamp = document.getElementById("dsamp");
let ssamp = document.getElementById("swt");
let wd = document.getElementById("wd");
let wc = document.getElementById("wc");
let wcCalc = document.getElementById("wcCalc");

wcCalc.onclick = function () {
  disOutputs();
  if (wsamp.value !== "" && dsamp.value !== "") {
    wc.innerHTML = `${(
      ((wsamp.value - dsamp.value) / dsamp.value) *
      100
    ).toFixed(1)} %`;
    wd.innerHTML = `${(
      (((wsamp.value - dsamp.value) / dsamp.value) * 100 * ssamp.value) /
      100
    ).toFixed(1)} L`;
  } else {
    wc.innerHTML = "....";
    wd.innerHTML = "....";
  }
};

//function la
let wt12 = document.getElementById("wt12");
let mainwt = document.getElementById("mainwt");
let lost = document.getElementById("lost");
let laCalc = document.getElementById("laCalc");

laCalc.onclick = function () {
  disOutputs();
  if (wt12.value !== "" && mainwt.value !== "") {
    lost.innerHTML = `${(
      ((mainwt.value - wt12.value) / mainwt.value) *
      100
    ).toFixed(1)} %`;
  } else {
    wc.innerHTML = "....";
    wd.innerHTML = "....";
  }
};

//function spwcific weight
let h = document.getElementById("h"),
  b = document.getElementById("b"),
  g = document.getElementById("g"),
  a = document.getElementById("a"),
  swCalc = document.getElementById("swCalc"),
  allsw = document.getElementById("allsw"),
  apsw = document.getElementById("apsw"),
  dsw = document.getElementById("dsw"),
  abs = document.getElementById("abs"),
  crash = document.getElementById("crash");

swCalc.onclick = function () {
  disOutputs();
  if (h.value !== "" && b.value !== "" && g.value !== "" && a.value !== "") {
    allsw.innerHTML = `${(a.value / (b.value - g.value)).toFixed(2)}`;
    apsw.innerHTML = `${(a.value / (a.value - g.value)).toFixed(2)}`;
    dsw.innerHTML = `${(b.value / (b.value - g.value)).toFixed(2)}`;
    abs.innerHTML = `${(((b.value - a.value) / a.value) * 100).toFixed(2)} %`;
    // crash.innerHTML = `${((h.value - a.value)/(a.value)*100).toFixed(2)}`
  } else {
    allsw.innerHTML = "....";
    apsw.innerHTML = "....";
    dsw.innerHTML = "....";
    abs.innerHTML = "....";
    crash.innerHTML = "....";
  }
};

//function sandcone
let wtbe4 = document.getElementById("wtbe4"),
  wtafter = document.getElementById("wtafter"),
  wtsample = document.getElementById("wtsample"),
  wtsand = document.getElementById("wtsand"),
  waterc = document.getElementById("waterc"),
  maxden = document.getElementById("maxden"),
  sandden = document.getElementById("sandden"),
  sandcone = document.getElementById("sandcone");
  sconecalc = document.getElementById("sconecalc"),
  sconereset = document.getElementById("sconereset"),

  sconecalc.onclick = function () {
    disOutputs();
    if (wtbe4.value !== "" && wtafter.value !== "" && wtsample.value !== "" && wtsand.value !== ""&&waterc!==""&&maxden!==""&&sandden!=="") {
      let sHoleCone = wtbe4.value - wtafter.value,
      shole = sHoleCone - wtsand.value,
      holesize = shole / sandden.value,
      wetdensity = wtsample.value / holesize,
      drydensity = wetdensity / (waterc.value / 100 + 1);
      sandcone.innerHTML = `${((drydensity / maxden.value) * 100).toFixed(2)}%`;
    } else {
      sandcone.innerHTML = '...'
    }
  };
  let allin = document.querySelectorAll('.cone .form-control')
  sconereset.onclick =function(){
   for(let i=0 ;i<allin.length;i++){
     allin[i].value = "";
   }
   sandcone.innerHTML = "..." ;
  }
  


//start sand replacement

let e16 = document.querySelector(".e16"),
  e20 = document.querySelector(".e20"),
  e22 = document.querySelector(".e22"),
  e23 = document.querySelector(".e23"),
  e25 = document.querySelector(".e25"),
  e26 = document.querySelector(".e26"),
  e28 = document.querySelector(".e28"),
  e30 = document.querySelector(".e30"),
  e35 = document.querySelector(".e35");

let sandrepshow = document.getElementById("sandrepshow"),
  resetsrep = document.getElementById("reset-sandrep"),
  calcsrep = document.getElementById("calc-sandrep");

calcsrep.onclick = function () {
  disOutputs();
  if (
    e16.value !== "" &&
    e20.value !== "" &&
    e22.value !== "" &&
    e23.value !== "" &&
    e25.value !== "" &&
    e26.value !== "" &&
    e28.value !== "" &&
    e35.value !== ""
  ) {
    let e17 =
    ((e16.value - (e22.value * 1 + e23.value * 1)) /
      (e22.value * 1 + e23.value * 1)) *
    100,
  e18 = ((e20.value - e22.value) / e22.value) * 100,
  e21 = e16.value - e20.value,
  e19 = ((e21 - e23.value) / e23.value) * 100,
  e27 = e25.value - e26.value,
  e29 = e27 / e28.value,
  e31 = e22.value / e30.value,
  e32 = e29 - e31,
  e34 = e23.value / e32,
  e36 = (e34 / e35.value) * 100;
    sandrepshow.innerHTML = `${e36.toFixed(1)}%`;
  } else {
    sandrepshow.innerHTML = "....";
  }
};

resetsrep.onclick = function () {
  e16.value = "";
  e20.value = "";
  e22.value = "";
  e23.value = "";
  e25.value = "";
  e26.value = "";
  e28.value = "";
  e30.value = "";
  e35.value = "";
  sandrepshow.innerHTML = "....";
  
};

//end sand replacement

//start proctor
let moldweight = document.getElementById("moldweight"),
  moldvolume = document.getElementById("moldvolume"),
  wtsampmold = document.getElementsByClassName("wtsampmold"),
  wtwetsampl = document.getElementsByClassName("wtwetsampl"),
  wetunitwt = document.getElementsByClassName("wetunitwt"),
  dryunitwt = document.getElementsByClassName("dryunitwt"),
  candrysoil = document.getElementsByClassName("candrysoil"),
  canwetsoil = document.getElementsByClassName("canwetsoil"),
  moisture = document.getElementsByClassName("moisture"),
  wtofcan = document.getElementsByClassName("wtofcan"),
  wtofdrysoil = document.getElementsByClassName("wtofdrysoil"),
  moisturecont = document.getElementsByClassName("moisturecont");
let calcproctor = document.querySelector(".calc-proctor"),
  resetproctor = document.querySelector(".reset-proctor");

// for (let i = 0; i < candrysoil.length; i++) {
//   if(candrysoil[i].value!=''||canwetsoil[i].value!=''||wtofcan.value!=''){
// }

calcproctor.onclick = function () {
  disOutputs();

  for (let i = 0; i < candrysoil.length; i++) {
    if ((candrysoil[i].value && canwetsoil[i].value && wtofcan.value) !== "") {
      moisture[i].innerHTML = (
        canwetsoil[i].value - candrysoil[i].value
      ).toFixed(1);
      wtofdrysoil[i].innerHTML = (
        candrysoil[i].value - wtofcan[i].value
      ).toFixed(1);
      moisturecont[i].innerHTML = (
        (+moisture[i].innerHTML / +wtofdrysoil[i].innerHTML) *
        100
      ).toFixed(1);
    } else {
      moisture[i].innerHTML = "...";
      wtofdrysoil[i].innerHTML = "...";
      moisturecont[i].innerHTML = "...";
    }
  }
  for (let i = 0; i < wtsampmold.length; i++) {
    if ((moldvolume.value && moldweight.value && wtsampmold[i].value) !== "") {
      wtwetsampl[i].innerHTML = (
        wtsampmold[i].value - moldweight.value
      ).toFixed(1);
      wetunitwt[i].innerHTML = (
        +wtwetsampl[i].innerHTML / +moldvolume.value
      ).toFixed(3);

      dryunitwt[i].innerHTML = (
        (wetunitwt[i].innerHTML / (100 + +moisturecont[i].innerHTML)) *
        100
      ).toFixed(3);
    } else {
      wtwetsampl[i].innerHTML = "...";
      wetunitwt[i].innerHTML = "...";
      dryunitwt[i].innerHTML = "...";
    }
  }
  let mostarr = [
    moisturecont[0].innerHTML,
    moisturecont[1].innerHTML,
    moisturecont[2].innerHTML,
    moisturecont[3].innerHTML,
    moisturecont[4].innerHTML,
  ];
  let dryarr = [
    dryunitwt[0].innerHTML,
    dryunitwt[1].innerHTML,
    dryunitwt[2].innerHTML,
    dryunitwt[3].innerHTML,
    dryunitwt[4].innerHTML,
  ];
  new Chart(document.getElementById("line-chartpro"), {
    type: "scatter",
    data: {
      datasets: [
        {
          data: [
            {
              x: parseFloat(moisturecont[0].innerHTML),
              y: parseFloat(dryunitwt[0].innerHTML),
            },
            {
              x: parseFloat(moisturecont[1].innerHTML),
              y: parseFloat(dryunitwt[1].innerHTML),
            },
            {
              x: parseFloat(moisturecont[2].innerHTML),
              y: parseFloat(dryunitwt[2].innerHTML),
            },
            {
              x: parseFloat(moisturecont[3].innerHTML),
              y: parseFloat(dryunitwt[3].innerHTML),
            },
            {
              x: parseFloat(moisturecont[4].innerHTML),
              y: parseFloat(dryunitwt[4].innerHTML),
            },
          ],
          label: [],
          borderColor: "red",
          fill: false,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "الكثافة الجافة",
              fontColor: "green",
              fontSize: 12,
            },
          },
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "محتوى الرطوبة",
              fontColor: "green",
              fontSize: 12,
            },
          },
        ],
      },
      title: {
        display: true,
        text: `max dry denisty = ${Math.max(...dryarr)}`,
        position: "bottom",
        fontColor: "red",
      },
    },
  });
};

resetproctor.onclick = function () {
  for (let i = 0; i < candrysoil.length; i++) {
    moisture[i].innerHTML = "...";
    wtofdrysoil[i].innerHTML = "...";
    moisturecont[i].innerHTML = "...";
    candrysoil[i].value = "...";
    canwetsoil[i].value = "...";
    wtofcan[i].value = "...";
  }
  for (let i = 0; i < wtsampmold.length; i++) {
    wetunitwt[i].innerHTML = "...";
    dryunitwt[i].innerHTML = "...";
    wtwetsampl[i].innerHTML = "...";
    moldvolume.value = "...";
    moldweight.value = "...";
    wtsampmold[i].value = "...";
  }
  const my = new Chart(document.getElementById("line-chartpro"), {
    type: "scatter",
    data: {
      datasets: [
        {
          data: [
            {
              x: parseFloat(moisturecont[0].innerHTML),
              y: parseFloat(dryunitwt[0].innerHTML),
            },
            {
              x: parseFloat(moisturecont[1].innerHTML),
              y: parseFloat(dryunitwt[1].innerHTML),
            },
            {
              x: parseFloat(moisturecont[2].innerHTML),
              y: parseFloat(dryunitwt[2].innerHTML),
            },
            {
              x: parseFloat(moisturecont[3].innerHTML),
              y: parseFloat(dryunitwt[3].innerHTML),
            },
            {
              x: parseFloat(moisturecont[4].innerHTML),
              y: parseFloat(dryunitwt[4].innerHTML),
            },
          ],
          label: [],
          borderColor: "red",
          fill: false,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "الكثافة الجافة",
              fontColor: "green",
              fontSize: 12,
            },
          },
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "محتوى الرطوبة",
              fontColor: "green",
              fontSize: 12,
            },
          },
        ],
      },
    },
  });
};

//end proctor

// start crud
//creat product

//save local storage
//cleer inputs
//read
//delete
//update
//search
//clean data
//get elements
//creat product

//save local storage
//cleer inputs
//read
//delete
//update
//search
//clean data
//get elements
let namee = document.getElementById("name");
let date = document.getElementById("date");
// let mydate = new Date(date.value.split('-').join(' '));
let site1 = document.getElementById("site1");
let force = document.getElementById("force");
let cubes = document.getElementById("cubes");
let submitc = document.getElementById("add");
let vol = document.getElementById("vol");
let water = document.getElementById("water");
let str = document.getElementById("str");

let mood = "create";
let tmp;
//creat Elements
let dataele;
if (localStorage.product != null) {
  dataele = JSON.parse(localStorage.product);
} else {
  dataele = [];
}
submitc.onclick = function () {
  let newele = {
    namee: namee.value.toLowerCase(),
    date: date.value,
    site1: site1.value.toLowerCase(),
    cubes: cubes.value,
    str: str.value,
    vol: vol.value,
  };
  if (mood === "create") {
    dataele.push(newele);
  } else {
    dataele[tmp] = newele;
    mood = "create";
    submitc.innerHTML = "اضافة";
  }
  localStorage.setItem("product", JSON.stringify(dataele));
  clearInputs();
  showData();
};

//clear inputs
function clearInputs() {
  namee.value = "";
  site1.value = "";
  date, (value = "");
  // force.value =''
  cubes.value = "";
  vol.value = "";
  str.value = "";
}
// read
function showData() {
  let table = "";
  for (let i = 0; i < dataele.length; i++) {
    //   function gtndate(x){
    //     let date2 =document.getElementById('date')
    //     let date1 = new Date(x)
    //     date1.setDate(date1.getDate()+10)
    //     console.log(dataele.date)
    //     return date1.toDateString()

    // }
    let date7 = new Date(dataele[i].date);
    date7.setDate(date7.getDate() + 7);
    let date28 = new Date(dataele[i].date);
    let mydate = new Date(dataele[i].date);
    date28.setDate(date28.getDate() + 28);
    const options = { year: "numeric", month: "numeric", day: "numeric" };

    table += `
    
            <tr style="border-bottom: 2px solid grey; ">
              <td>${mydate.toLocaleDateString("ar-EG", options)}</td>
              <td>${dataele[i].namee}</td>
              <td>${dataele[i].site1}</td>
              <td>${dataele[i].cubes}</td>
              <td>${dataele[i].str}</td>
              <td>${dataele[i].vol}m3</td> 
              <td><button class="update" id="up" style="background-color: #76c10a;" onclick='upData(${i}) '><i class="fa fa-pencil fa-lg" aria-hidden="true"></i></button></td>
              <td><button class="remove" id="del" style="background-color: #e93447;"onclick ='delData(${i}) '><i class="fa fa-trash-o fa-lg"></button></td>
              <td>${date7.toLocaleDateString("ar-EG", options)}</td>
              <td>${date28.toLocaleDateString("ar-EG", options)}</td>
            </tr>
    `;
  }
  document.getElementById("tbody").innerHTML = table;
  let btndellall = document.getElementById("delall");
  if (dataele.length > 0) {
    btndellall.innerHTML = `
  <button class="w-100" onclick='deleteall()'> حذف الكل </button> 
  `;
  } else {
    btndellall.innerHTML = "";
  }
}
showData();

//delete element
function delData(i) {
  dataele.splice(i, 1);
  localStorage.product = JSON.stringify(dataele);
  showData();
}
function deleteall() {
  localStorage.clear();
  dataele.splice(0);
  showData();
}
//update element
function upData(i) {
  namee.value = dataele[i].namee;
  date.value = dataele[i].date;
  site1.value = dataele[i].site1;
  cubes.value = dataele[i].cubes;
  str.value = dataele[i].str;
  vol.value = dataele[i].vol;
  submitc.innerHTML = "تعديل";
  mood = "update";
  tmp = i;
}

//function search
let searchMood = "name";
function getSearchMood(id) {
  let search = document.getElementById("search");
  if (id === "searchName") {
    searchMood = "name";
  } else {
    searchMood = "site";
  }
  search.placeholder = `بحث  ${searchMood === "name" ? "بالاسم" : "بالموقع"} `;
  search.focus();
  search.value = "";
  showData();
}

function searchData(value) {
  let table = "";
  if (searchMood == "name") {
    for (let i = 0; i < dataele.length; i++) {
      let date7 = new Date(dataele[i].date);
      date7.setDate(date7.getDate() + 7);
      let mydate = new Date(dataele[i].date);
      let date28 = new Date(dataele[i].date);
      date28.setDate(date28.getDate() + 28);
      const options = { year: "numeric", month: "numeric", day: "numeric" };
      if (dataele[i].namee.toLowerCase().includes(value)) {
        table += `
                    <tr style="border-bottom: 2px solid grey; ">
                      <td>${mydate.toLocaleDateString("ar-EG", options)}</td>
                      <td>${dataele[i].namee}</td>
                      <td>${dataele[i].site1}</td>
                      <td>${dataele[i].cubes}</td>
                      <td>${dataele[i].str}</td>
                      <td>${dataele[i].vol}m3</td> 
                      <td><button class="update" id="up" style="background-color: #76c10a" onclick='upData(${i}) '><i class="fa fa-pencil fa-lg" aria-hidden="true"></i></button></td>
                      <td><button class="remove" id="del" style="background-color: #e93447;"onclick ='delData(${i}) '><i class="fa fa-trash-o fa-lg"></button></td>
                      <td>${date7.toLocaleDateString("ar-EG", options)}</td>
              <td>${date28.toLocaleDateString("ar-EG", options)}</td>
                    </tr>
            `;
      } else {
      }

      document.getElementById("tbody").innerHTML = table;
    }
  } else {
    for (let i = 0; i < dataele.length; i++) {
      let date7 = new Date(dataele[i].date);
      date7.setDate(date7.getDate() + 7);
      let date28 = new Date(dataele[i].date);
      date28.setDate(date28.getDate() + 28);
      const options = { year: "numeric", month: "numeric", day: "numeric" };
      let mydate = new Date(dataele[i].date);
      if (dataele[i].site1.toLowerCase().includes(value)) {
        table += `
                    <tr style="border-bottom: 2px solid grey; ">
                      <td>${mydate.toLocaleDateString("ar-EG", options)}</td>
                      <td>${dataele[i].namee}</td>
                      <td>${dataele[i].site1}</td>
                      <td>${dataele[i].cubes}</td>
                      <td>${dataele[i].str}</td>
                      <td>${dataele[i].vol}m3</td> 
                      <td><button class="update" id="up" style="background-color: #76c10a;" onclick='upData(${i}) '><i class="fa fa-pencil fa-lg" aria-hidden="true"></i></button></td>
              <td><button class="remove" id="del" style="background-color: #e93447;"onclick ='delData(${i}) '><i class="fa fa-trash-o fa-lg"></button></td>
              
              <td>${date7.toLocaleDateString("ar-EG", options)}</td>
              <td>${date28.toLocaleDateString("ar-EG", options)}</td>
                    </tr>
                   
            `;
      }
    }
  }

  document.getElementById("tbody").innerHTML = table;
}
//function display specific tap and hide
function openPage(PageName) {
  let i, seive;
  seive = document.getElementsByClassName("seive");
  for (i = 0; i < seive.length; i++) {
    seive[i].style.display = "none";
  }
  document.getElementById(PageName).style.display = "flex";
}
document.getElementById("defOpen").click();
