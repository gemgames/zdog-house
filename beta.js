//variables
var i, j, k;
var Aa, Bb, Cc, Dd;
var pastMoveX = 0,
  pastMoveY = 0;

//init Zdog and Zfont
Zfont.init(Zdog);
var Zdog, Zfont;

//Zdog variables
var TAU = Zdog.TAU;

//math variables
var round = function(p) {
  return Math.round(p);
};
var power = function(p) {
  return Math.pow(p);
};
var sqrt = function(p) {
  return Math.sqrt(p);
};
var abs = function(p) {
  return Math.abs(p);
};
var floor = function(p) {
  return Math.floor(p);
};
var rad = function(p) {
  return (p / 360) * TAU;
}; //deg to rad
var deg = function(p) {
  return (p / TAU) * 360;
};
var sin = function(p) {
  return Math.sin((p / 360) * TAU);
}; //deg
var cos = function(p) {
  return Math.cos((p / 360) * TAU);
}; //deg
var pos = function(p) {
  return p % TAU >= 0 ? 1 : -1;
};

//get and Illustrations
var temp = function() {};
var style = "rgb";
var undoElement;
var draggable;
var doc = {
  gebi: function(p) {
    return document.getElementById(p);
  }
};
doc = {
  gebi: function(p) {
    return document.getElementById(p);
  },
  cover: doc.gebi("cover"),
  debug: doc.gebi("debug"),
  camera: doc.gebi("camera"),
  finished: doc.gebi("finished"),
  elements: doc.gebi("elements"),
  elementsP: doc.gebi("elementsP"),
  elementData: doc.gebi("elementsData"),
  addElements: doc.gebi("addElements"),
  elementDataTable: doc.gebi("elementsDataTable"),
  cameraDiv: doc.gebi("cameraDiv"),
  finishedDiv: doc.gebi("finishedDiv"),
  sidebar: doc.gebi("sidebar"),
  moveIcon: doc.gebi("moveIcon"),
  rotateIcon: doc.gebi("rotateIcon"),
  sizeIcon: doc.gebi("sizeIcon"),
  redIcon: doc.gebi("redIcon"),
  greenIcon: doc.gebi("greenIcon"),
  blueIcon: doc.gebi("blueIcon")
};
var edc = [
  "edcRed",
  "edcGreen",
  "edcBlue",
  "edcRedR",
  "edcGreenR",
  "edcBlueR",
  "edcHeight",
  "edcDepth",
  "edcWidth",
  "edcDiameter",
  "edcRadius",
  "edcColor",
  "edcFill",
  "edcStroke",
  "edcFrontFace",
  "edcRearFace",
  "edcLeftFace",
  "edcRightFace",
  "edcTopFace",
  "edcBottomFace",
  "edcQuarters",
  "edcCornerRadius",
  "edcSides",
  "edcBackFace",
  "edcText",
  "edcFontSize",
  "edcLine"
];
var edb = [
  "edbRed",
  "edbGreen",
  "edbBlue",
  "edbRedR",
  "edbGreenR",
  "edbBlueR",
  "edbHeight",
  "edbDepth",
  "edbWidth",
  "edbDiameter",
  "edbRadius",
  "edbColor",
  "edbFill",
  "edbStroke",
  "edbFrontFace",
  "edbRearFace",
  "edbLeftFace",
  "edbRightFace",
  "edbTopFace",
  "edbBottomFace",
  "edbQuarters",
  "edbCornerRadius",
  "edbSides",
  "edbBackFace",
  "edbText",
  "edbFontSize",
  "edbLine"
];
var edH = {
  rect: [7, 9, 10, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
  roundedrect: [7, 9, 10, 14, 15, 16, 17, 18, 19, 20, 22, 23, 24, 25, 26],
  ellipse: [7, 9, 10, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26],
  circle: [6, 7, 8, 9, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26],
  polygon: [7, 9, 10, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26],
  line: [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    12,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25
  ],
  shape: [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    12,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25
  ],
  hemisphere: [6, 7, 8, 10, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26],
  cone: [10, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26],
  cylinder: [10, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26],
  box: [9, 10, 20, 21, 22, 23, 24, 25, 26],
  text: [6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 26],
  camera: [
    0,
    1,
    2,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26
  ],
  folder: [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    12,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26
  ]
};
var edI = {
  string: [
    "translate.y",
    "translate.z",
    "translate.x",
    "rotate.x",
    "rotate.z",
    "rotate.y",
    "scale.y",
    "scale.z",
    "scale.x",
    "diameter",
    "radius",
    "color",
    "fill",
    "stroke",
    "frontFace",
    "rearFace",
    "leftFace",
    "rightFace",
    "topFace",
    "bottomFace",
    "quarters",
    "cornerRadius",
    "sides",
    "backface",
    "value",
    "fontSize",
    "path"
  ],
  array: []
};
var edT = [
  "n",
  "n",
  "n",
  "n",
  "n",
  "n",
  "n",
  "n",
  "n",
  "n",
  "n",
  "s",
  "b",
  "n",
  "s",
  "s",
  "s",
  "s",
  "s",
  "s",
  "n",
  "n",
  "n",
  "s",
  "s",
  "n",
  "?",
  "b"
];
var cameraCanvas = doc.camera.getContext("2d");
var eC, eF, eT; //element.camera, element.finished
var mode = { mouse: false, move: false, rotate: false };
var dimension = { red: false, green: false, blue: false };
var finished = new Zdog.Illustration({
  element: "#finished",
  resize: true,
  dragRotate: true
});
var camera = new Zdog.Illustration({
  element: "#camera",
  resize: true
});
var cube = new Zdog.Illustration({
  element: "#cube",
  dragRotate: true
});

//functions
var debug = function(p) {
  doc.debug.innerHTML = p;
};

//ui functions
var subModes = function(p) {
  if (mode.move) {
    doc.redIcon.src = dimension.red
      ? "/icons/" + style + "/redH.svg"
      : "/icons/" + style + "/red.svg";
    doc.greenIcon.src = dimension.green
      ? "/icons/" + style + "/greenH.svg"
      : "/icons/" + style + "/green.svg";
    doc.blueIcon.src = dimension.blue
      ? "/icons/" + style + "/blueH.svg"
      : "/icons/" + style + "/blue.svg";
  }
  if (mode.rotate) {
    doc.redIcon.src = dimension.red
      ? "/icons/" + style + "/redRH.svg"
      : "/icons/" + style + "/redR.svg";
    doc.greenIcon.src = dimension.green
      ? "/icons/" + style + "/greenRH.svg"
      : "/icons/" + style + "/greenR.svg";
    doc.blueIcon.src = dimension.blue
      ? "/icons/" + style + "/blueRH.svg"
      : "/icons/" + style + "/blueR.svg";
  }
  if (mode.size) {
    doc.redIcon.src = dimension.red
      ? "/icons/" + style + "/heightH.svg"
      : "/icons/" + style + "/height.svg";
    doc.greenIcon.src = dimension.green
      ? "/icons/" + style + "/depthH.svg"
      : "/icons/" + style + "/depth.svg";
    doc.blueIcon.src = dimension.blue
      ? "/icons/" + style + "/widthH.svg"
      : "/icons/" + style + "/width.svg";
  }
};
var clickMode = function(p) {
  mode = { size: false, move: false, rotate: false };
  mode[p] = true;
  doc.moveIcon.src = mode.move
    ? "/icons/" + style + "/moveH.svg"
    : "/icons/" + style + "/move.svg";
  doc.rotateIcon.src = mode.rotate
    ? "/icons/" + style + "/rotateH.svg"
    : "/icons/" + style + "/rotate.svg";
  doc.sizeIcon.src = mode.size
    ? "/icons/" + style + "/sizeH.svg"
    : "/icons/" + style + "/size.svg";
  subModes();
};
var click3D = function(p) {
  dimension = { red: false, green: false, blue: false };
  dimension[p] = true;
  subModes();
};
var ectf = function(){
  eT = elements[highlightedElement].type;
  eC = elements[highlightedElement].camera;
  eF = elements[highlightedElement].finished;
};

//call functions above
clickMode("move");
click3D("green");

//fonts
var noto = new Zdog.Font({
  src:
    "https://cdn.glitch.com/ddcae6e8-a8ce-49f0-af72-87dbb1d6a609%2FNotoSans-Regular.ttf?v=1591379137765"
});
var lato = new Zdog.Font({
  src:
    "https://cdn.glitch.com/ddcae6e8-a8ce-49f0-af72-87dbb1d6a609%2FLato-Regular.ttf?v=1591372213037"
});

//cube elements
var directionalCubeElement;
var cubeElements = function() {
  directionalCubeElement = new Zdog.Box({
    addTo: cube,
    width: 40,
    height: 40,
    depth: 40,
    color: "#C00",
    leftFace: "#00F",
    rightFace: "#00F",
    frontFace: "#080",
    rearFace: "#080"
  });
  var directionalText = new Zdog.Text({
    addTo: cube,
    translate: { z: 30, x: -17, y: 3 },
    color: "#FFF",
    fill: true,
    fontSize: 10,
    font: lato,
    value: ["FRONT"]
  });
  directionalText.copy({
    translate: { z: -30, x: 13, y: 3 },
    rotate: { y: TAU / 2 },
    value: ["BACK"]
  });
  directionalText.copy({
    translate: { z: 14, x: 30, y: 3 },
    rotate: { y: -TAU / 4 },
    value: ["RIGHT"]
  });
  directionalText.copy({
    translate: { z: -12, x: -30, y: 3 },
    rotate: { y: TAU / 4 },
    value: ["LEFT"]
  });
  directionalText.copy({
    translate: { z: 3, x: -9, y: -30 },
    rotate: { x: -TAU / 4, z: TAU / 2, y: TAU / 2 },
    value: ["TOP"]
  });
  directionalText.copy({
    translate: { z: -2, x: -17, y: 30 },
    rotate: { x: -TAU / 4 },
    fontSize: 8,
    value: ["BOTTOM"]
  });
};
cubeElements();

//predeclare
var loadElementData = function() {};

//fileData
var fileData = {
  name: "My Model",
  background: "#FFFFFF",
  animate: {
    red: 0,
    green: 0,
    blue: 3
  },
  groups: [
    {
      name: "Camera",
      path: elements,
    }
  ],
};
//elements
var elements = [
  {
    type: "camera",
    name: "Camera",
    translate: { x: 0, y: 0, z: 0 },
    rotate: { x: 0, y: 0, z: 0 }
  },
  {
    type: "ellipse",
    name: "Ellipse",
    camera: new Zdog.Ellipse({
      addTo: camera,
      width: 1,
      height: 1,
      depth: 1,
      scale: { x: 80, y: 80, z: 0 },
      diameter: 80,
      translate: { z: 40, x: 0, y: 0 },
      stroke: 20,
      color: "#663366"
    }),
    finished: new Zdog.Ellipse({
      addTo: finished,
      width: 1,
      height: 1,
      depth: 1,
      scale: { x: 80, y: 80, z: 0 },
      diameter: 80,
      translate: { z: 40, x: 0, y: 0 },
      stroke: 20,
      color: "#663366"
    })
  },
  {
    type: "rect",
    name: "Rectangle",
    camera: new Zdog.Rect({
      addTo: camera,
      width: 1,
      height: 1,
      depth: 1,
      scale: { x: 80, y: 80, z: 0 },
      translate: { z: -40, x: 0, y: 0 },
      stroke: 12,
      color: "#EE6622",
      fill: true
    }),
    finished: new Zdog.Rect({
      addTo: finished,
      width: 1,
      height: 1,
      depth: 1,
      scale: { x: 80, y: 80, z: 0 },
      translate: { z: -40, x: 0, y: 0 },
      stroke: 12,
      color: "#EE6622",
      fill: true
    })
  }
];
var templateElements = {
  rect: {
    translate: { x: 0, y: 0, z: 0 },
    rotate: { x: 0, y: 0, z: 0 },
    width: 1,
    height: 1,
    depth: 1,
    scale: { x: 0, y: 0, z: 0 },
    scale: { y: 80, x: 80 },
    color: "#EE6622",
    fill: true,
    stroke: 0
  },
  roundedrect: {
    translate: { x: 0, y: 0, z: 0 },
    rotate: { x: 0, y: 0, z: 0 },
    width: 1,
    height: 1,
    depth: 1,
    scale: { x: 80, y: 80, z: 0 },
    color: "#EEAA00",
    fill: true,
    stroke: 0,
    cornerRadius: 20
  },
  ellipse: {
    translate: { x: 0, y: 0, z: 0 },
    rotate: { x: 0, y: 0, z: 0 },
    width: 1,
    height: 1,
    depth: 1,
    scale: { x: 80, y: 60, z: 0 },
    diameter: 1,
    color: "#CC2255",
    fill: true,
    stroke: 0,
    quarters: 4
  },
  circle: {
    translate: { x: 0, y: 0, z: 0 },
    rotate: { x: 0, y: 0, z: 0 },
    width: 1,
    height: 1,
    depth: 1,
    scale: { x: 80, y: 80, z: 0 },
    diameter: 20,
    color: "#EE6622",
    fill: true,
    stroke: 0,
    quarters: 4
  },
  polygon: {
    translate: { x: 0, y: 0, z: 0 },
    rotate: { x: 0, y: 0, z: 0 },
    width: 1,
    height: 1,
    depth: 1,
    scale: { x: 80, y: 80, z: 0 },
    color: "#EEAA00",
    backface: "#EEAA00",
    fill: false,
    stroke: 20,
    sides: 5
  },
  line: {
    color: "#EE6622",
    path: [{ x: -40, y: -40, z: 0 }, { x: 40, y: 40, z: 0 }],
    stroke: 10,
    closed: false
  },
  text: {
    translate: { x: 0, y: 0, z: 0 },
    rotate: { x: 0, y: 0, z: 0 },
    color: "#663366",
    font: lato,
    fill: true,
    value: ["Aa"],
    fontSize: 60,
    stroke: 0
  },
  torus: {
    translate: { x: 0, y: 0, z: 0 },
    rotate: { x: 0, y: 0, z: 0 },
    width: 1,
    height: 1,
    depth: 1,
    scale: { x: 0, y: 0, z: 0 },
    diameter: 20,
    color: "#EE6622",
    fill: false,
    stroke: 0,
    quarters: 4
  },
  hemisphere: {
    translate: { x: 0, y: 0, z: 0 },
    rotate: { x: 0, y: 0, z: 0 },
    width: 1,
    height: 1,
    depth: 1,
    scale: { x: 0, y: 0, z: 0 },
    diameter: 1,
    color: "#CC2255",
    fill: true,
    stroke: 0,
    backface: "#EEAA00"
  },
  cone: {
    translate: { x: 0, y: 0, z: 0 },
    rotate: { x: 0, y: 0, z: 0 },
    width: 1,
    height: 1,
    depth: 1,
    diameter: 1,
    scale: { x: 0, y: 0, z: 0 },
    length: 1,
    color: "#663366",
    fill: true,
    stroke: 0,
    backface: "#CC2255"
  },
  cylinder: {
    translate: { x: 0, y: 0, z: 0 },
    rotate: { x: 0, y: 0, z: 0 },
    width: 1,
    height: 1,
    depth: 1,
    scale: { x: 0, y: 0, z: 0 },
    diameter: 1,
    length: 1,
    color: "#C25",
    fill: true,
    stroke: 0,
    backface: "#EE6622"
  },
  box: {
    translate: { x: 0, y: 0, z: 0 },
    rotate: { x: 0, y: 0, z: 0 },
    width: 1,
    height: 1,
    depth: 1,
    scale: { x: 80, y: 80, z: 80 },
    length: 80,
    color: "#CC2255",
    fill: true,
    stroke: 0,
    frontFace: "#EE6622",
    rearFace: "#EE6622",
    leftFace: "#EEAA00",
    rightFace: "#EEAA00",
    topFace: "#CC2255",
    bottomFace: "#CC2255",
    backFace: false
  },
  shape: {
    path: [
      { x: -40, y: -40, z: 0 },
      { x: 40, y: -40, z: 0 },
      { x: -40, y: 40, z: 0 },
      { x: 40, y: 40, z: 0 }
    ],
    color: "#663366",
    fill: true
  },
  folder: {
    updateSort: true
  },
  object: {
    translate: { x: 0, y: 0, z: 0 },
    rotate: { x: 0, y: 0, z: 0 }
  }
};
var highlightedElement = 0;
var loadElements = function() {
  Aa = "";
  for (i = 0; i < elements.length; i++) {
    Bb = i === highlightedElement ? 'id="highlightedElement"' : "";
    Cc =
      elements[i].type === "camera"
        ? ""
        : '<div class="moreDropdown"><img class="moreIcon" src="/icons/elements/more.svg">' +
          '<img class="more-content" onclick="duplicateElement(' +
          i +
          ')"src="/icons/file/duplicate.svg"><img class="more-content" onclick="deleteElement(' +
          i +
          ')" src="/icons/file/delete.svg"></div>';
    Aa = Aa.concat(
      '<div class="elementName" ' +
        Bb +
        ' onclick="loadElementData(' +
        i +
        ')"><img src="/icons/elements/' +
        elements[i].type +
        '.svg">' +
        elements[i].name +
        Cc +
        "</div>"
    );
  }
  doc.elementsP.innerHTML = Aa;
};
var elementSwitch = function(p) {
  switch (p) {
    case "box":
      Aa = new Zdog.Box(Aa);
      temp();
      Bb = new Zdog.Box(Bb);
      break;
    case "circle":
      Aa = new Zdog.Ellipse(Aa);
      temp();
      Bb = new Zdog.Ellipse(Bb);
      break;
    case "cone":
      Aa = new Zdog.Cone(Aa);
      temp();
      Bb = new Zdog.Cone(Bb);
      break;
    case "cylinder":
      Aa = new Zdog.Cylinder(Aa);
      temp();
      Bb = new Zdog.Cylinder(Bb);
      break;
    case "ellipse":
      Aa = new Zdog.Ellipse(Aa);
      temp();
      Bb = new Zdog.Ellipse(Bb);
      break;
    case "hemisphere":
      Aa = new Zdog.Hemisphere(Aa);
      temp();
      Bb = new Zdog.Hemisphere(Bb);
      break;
    case "line":
      Aa = new Zdog.Shape(Aa);
      temp();
      Bb = new Zdog.Shape(Bb);
      break;
    case "polygon":
      Aa = new Zdog.Polygon(Aa);
      temp();
      Bb = new Zdog.Polygon(Bb);
      break;
    case "rect":
      console.log(Aa);
      Aa = new Zdog.Rect(Aa);
      temp();
      console.log(Aa);
      Bb = new Zdog.Rect(Bb);
      break;
    case "roundedrect":
      Aa = new Zdog.RoundedRect(Aa);
      temp();
      Bb = new Zdog.RoundedRect(Bb);
      break;
    case "shape":
      Aa = new Zdog.Shape(Aa);
      temp();
      Bb = new Zdog.Shape(Bb);
      break;
    case "text":
      Aa = new Zdog.Text(Aa);
      temp();
      Bb = new Zdog.Text(Bb);
      break;
    case "torus":
      Aa = new Zdog.Ellipse(Aa);
      temp();
      Bb = new Zdog.Ellipse(Bb);
      break;
    case "folder":
      Aa = new Zdog.Group(Aa);
      temp();
      Bb = new Zdog.Group(Bb);
      break;
  }
};
var addElement = function(p) {
  temp = function() {
    Bb = templateElements[p];
    Bb.addTo = finished;
  };
  Aa = templateElements[p];
  Aa.addTo = camera;
  elementSwitch(p);
  if (p === "folder" || p == "object") {
    elements.splice(1, 0, {
      name: p,
      type: p,
      root: elements[elements.length],
      camera: Aa,
      finished: Bb,
      data: []
    });
  } else {
    elements.push({
      name: p,
      type: p,
      camera: Aa,
      finished: Bb
    });
  }
  highlightedElement = elements.length - 1;
  loadElements();
  loadElementData(highlightedElement);
};
var duplicateElement = function(p) {
  temp = function() {
    Bb = elements[p].finished;
    Bb.addTo = finished;
  };
  Aa = elements[p].camera;
  Aa.addTo = camera;
  elementSwitch(elements[p].type);
  elements.splice(p, 0, {
    type: elements[p].type,
    name: elements[p].name,
    camera: Aa,
    finished: Bb
  });
  loadElements();
  loadElementData(p + 1);
};
var deleteElement = function(p) {
  elements[p].camera.visible = false;
  elements[p].finished.visible = false;
  elements.splice(p, 1);
  if (p === elements.length) {
    highlightedElement = p - 1;
  }
};

loadElements();

//elementData
loadElementData = function(p) {
  highlightedElement = p;
  loadElements();
  Aa = elements[p].type === "camera";
  var element = Aa ? elements[p] : elements[p].camera;
  document.getElementById("edcHeader").value =
    elements[highlightedElement].name;
  edI.array = [
    element.translate.y,
    element.translate.z,
    element.translate.x,
    deg(element.rotate.x),
    deg(element.rotate.z),
    deg(element.rotate.y),
    !Aa ? element.scale.y : 0,
    !Aa ? element.scale.z : 0,
    !Aa ? element.scale.x : 0,
    element.diameter,
    element.radius,
    element.color,
    element.fill,
    element.stroke,
    element.frontFace,
    element.rearFace,
    element.leftFace,
    element.rightFace,
    element.topFace,
    element.bottomFace,
    element.quarters,
    element.cornerRadius,
    element.sides,
    element.backface,
    element.value,
    element.fontSize,
    element.path
  ];
  for (i = 0; i < edb.length - 1; i++) {
    document.getElementById(edb[i]).style.display = "block";
    if (!edH[elements[highlightedElement].type].includes(i)) {
      console.log(i + " " + edb[i]);
      if (edT[i] === "b") {
        document.getElementById(edc[i]).checked = edI.array[i];
      } else {
        document.getElementById(edc[i]).value = edI.array[i];
      }
    }
  }
  var hide = function(p) {
    for (i = 0; i < p.length; i++) {
      document.getElementById(edb[p[i]]).style.display = "none";
    }
  };
  hide(edH[elements[highlightedElement].type]);
  if (!edH[elements[highlightedElement].type].includes(26)) {
    console.log("in");
    document.getElementById(edb[26]).style.display = "block";

    for (i = 1; i < elements[highlightedElement].camera.path.length + 1; i++) {
      doc.gebi("line-check-" + i).checked = true;
      doc.gebi("line-red-" + i).value =
        elements[highlightedElement].camera.path[i - 1].y;
      doc.gebi("line-green-" + i).value =
        elements[highlightedElement].camera.path[i - 1].z;
      doc.gebi("line-blue-" + i).value =
        elements[highlightedElement].camera.path[i - 1].x;
    }
    Bb = [];
    for (i = 1; i < 10; i++) {
      Aa = doc.gebi("line-check-" + i).checked ? "visible" : "hidden";
      doc.gebi("line-red-" + i).style.visibility = Aa;
      doc.gebi("line-green-" + i).style.visibility = Aa;
      doc.gebi("line-blue-" + i).style.visibility = Aa;
    }
  }
};
var changeElementData = function() {
  elements[highlightedElement].name = document.getElementById(
    "edcHeader"
  ).value;
  ectf();

  if (eT === "camera") {
    elements[highlightedElement].rotate.x = doc.gebi(edc[3]).value;
    elements[highlightedElement].rotate.z = doc.gebi(edc[4]).value;
    elements[highlightedElement].rotate.y = doc.gebi(edc[5]).value;
    finished.rotate.x = doc.gebi(edc[3]).value * 1;
    finished.rotate.z = doc.gebi(edc[4]).value * 1;
    finished.rotate.y = doc.gebi(edc[5]).value * 1;
  } else {
    if (edH[eT].includes(0)) {
    } else {
      eC.translate.y = doc.gebi(edc[0]).value * 1;
      eC.translate.z = doc.gebi(edc[1]).value * 1;
      eC.translate.x = doc.gebi(edc[2]).value * 1;
      eC.rotate.x = rad(doc.gebi(edc[3]).value * 1);
      eC.rotate.z = rad(doc.gebi(edc[4]).value * 1);
      eC.rotate.y = rad(doc.gebi(edc[5]).value * 1);
      eF.translate.y = doc.gebi(edc[0]).value * 1;
      eF.translate.z = doc.gebi(edc[1]).value * 1;
      eF.translate.x = doc.gebi(edc[2]).value * 1;
      eF.rotate.x = rad(doc.gebi(edc[3]).value * 1);
      eF.rotate.z = rad(doc.gebi(edc[4]).value * 1);
      eF.rotate.y = rad(doc.gebi(edc[5]).value * 1);
    }
    if (!edH[eT].includes(6)) {
      eC.scale.y = doc.gebi(edc[6]).value * 1;
      eF.scale.y = doc.gebi(edc[6]).value * 1;
    }
    if (!edH[eT].includes(7)) {
      eC.scale.z = doc.gebi(edc[7]).value * 1;
      eF.scale.z = doc.gebi(edc[7]).value * 1;
    }
    if (!edH[eT].includes(8)) {
      eC.scale.x = doc.gebi(edc[8]).value * 1;
      eF.scale.x = doc.gebi(edc[8]).value * 1;
    }
    for (i = 9; i < edb.length - 1; i++) {
      if (!edH[eT].includes(i)) {
        Cc = doc.gebi(edc[i]).value;
        if (edT[i] === "n") {
          eC[edI.string[i]] = Cc * 1;
          eF[edI.string[i]] = Cc * 1;
        } else if (edT[i] === "b") {
          eC[edI.string[i]] = doc.gebi(edc[i]).checked;
          eF[edI.string[i]] = doc.gebi(edc[i]).checked;
        } else {
          eC[edI.string[i]] = Cc;
          eF[edI.string[i]] = Cc;
        }
      }
    }
    if (eT === "hemisphere") {
      eC.scale.x = eC.diameter;
      eC.scale.y = eC.diameter;
      eC.scale.z = eC.diameter;
      eF.scale.x = eF.diameter;
      eF.scale.y = eF.diameter;
      eF.scale.z = eF.diameter;
      eC.diameter = 1;
      eF.diameter = 1;
    }
    if (eT === "cone" || eT === "cylinder") {
      eC.scale.x = eC.scale.z;
      eC.scale.y = eC.scale.z;
      eC.scale.z = eC.scale.z;
      eF.scale.x = eF.scale.z;
      eF.scale.y = eF.scale.z;
      eF.scale.z = eF.scale.z;
    }
    if (!edH[eT].includes(26)) {
      Bb = [];
      for (i = 1; i < 10; i++) {
        Aa = doc.gebi("line-check-" + i).checked ? "visible" : "hidden";
        console.log(Aa, "#232425");
        doc.gebi("line-red-" + i).style.visibility = Aa;
        doc.gebi("line-green-" + i).style.visibility = Aa;
        doc.gebi("line-blue-" + i).style.visibility = Aa;
        if (Aa === "visible") {
          Bb.push({
            x: doc.gebi("line-blue-" + i).value,
            y: doc.gebi("line-red-" + i).value,
            z: doc.gebi("line-green-" + i).value
          });
        }
      }
      elements[highlightedElement].camera.path = Bb;
      elements[highlightedElement].finished.path = Bb;
      elements[highlightedElement].camera.updatePath();
      elements[highlightedElement].finished.updatePath();
    }
  }
};

//sidebar data
var changeSidebarData = function() {
  fileData.name = doc.gebi("sidebar-name").value;
  fileData.background = doc.gebi("sidebar-background").value;
  doc.camera.style.background = doc.gebi("sidebar-background").value;
  doc.finished.style.background = doc.gebi("sidebar-background").value;
  fileData.animate.red = doc.gebi("sidebar-red").value;
  fileData.animate.green = doc.gebi("sidebar-green").value;
  fileData.animate.blue = doc.gebi("sidebar-blue").value;
};

//styles
var updateStyle = function() {
  style = style === "rgb" ? "roy" : "rgb";
  if (style === "rgb") {
    directionalCubeElement.color = "#C00";
    directionalCubeElement.leftFace = "#00F";
    directionalCubeElement.rightFace = "#00F";
    directionalCubeElement.frontFace = "#080";
    directionalCubeElement.rearFace = "#080";
  }
  if (style === "roy") {
    directionalCubeElement.color = "#C25";
    directionalCubeElement.leftFace = "#EA0";
    directionalCubeElement.rightFace = "#EA0";
    directionalCubeElement.frontFace = "#E62";
    directionalCubeElement.rearFace = "#E62";
  }
  doc.gebi("edIRed").src = "/icons/" + style + "/red.svg";
  doc.gebi("edIGreen").src = "/icons/" + style + "/green.svg";
  doc.gebi("edIBlue").src = "/icons/" + style + "/blue.svg";
  doc.gebi("edIRedR").src = "/icons/" + style + "/redR.svg";
  doc.gebi("edIGreenR").src = "/icons/" + style + "/greenR.svg";
  doc.gebi("edIBlueR").src = "/icons/" + style + "/blueR.svg";
  doc.gebi("edIHeight").src = "/icons/" + style + "/height.svg";
  doc.gebi("edIDepth").src = "/icons/" + style + "/depth.svg";
  doc.gebi("edIWidth").src = "/icons/" + style + "/width.svg";
  doc.gebi("sidebar-RedR").src = "/icons/" + style + "/redR.svg";
  doc.gebi("sidebar-GreenR").src = "/icons/" + style + "/greenR.svg";
  doc.gebi("sidebar-BlueR").src = "/icons/" + style + "/blueR.svg";
  doc.moveIcon.src = mode.move
    ? "/icons/" + style + "/moveH.svg"
    : "/icons/" + style + "/move.svg";
  doc.rotateIcon.src = mode.rotate
    ? "/icons/" + style + "/rotate.svg"
    : "/icons/" + style + "/rotate.svg";
  doc.sizeIcon.src = mode.size
    ? "/icons/" + style + "/sizeH.svg"
    : "/icons/" + style + "/size.svg";
  doc.redIcon.src = dimension.red
    ? "/icons/" + style + "/redH.svg"
    : "/icons/" + style + "/red.svg";
  doc.greenIcon.src = dimension.green
    ? "/icons/" + style + "/greenH.svg"
    : "/icons/" + style + "/green.svg";
  doc.blueIcon.src = dimension.blue
    ? "/icons/" + style + "/blueH.svg"
    : "/icons/" + style + "/blue.svg";
};

//camera mode and controls
var cameraMove = function() {
  alert(1);
};
new Zdog.Dragger({
  startElement: camera.element,
  onDragStart: function() {
    undoElement = elements[highlightedElement].camera;
    pastMoveX = 0;
    pastMoveY = 0;
  },
  onDragMove: function(pointer, moveX, moveY) {
    ectf();
    if(eT==="camera"){return;}
    if (dimension.red) {
      Aa = Math.cos(camera.rotate.x);
      Bb = Math.sin(camera.rotate.y) * Math.cos(camera.rotate.x);
      Cc = Aa < 0.2 && Aa > -0.2 ? 0 : Aa;
      //Dd = Bb > 300 ? 0 : Bb;
      Dd = 0;
      if (mode.move) {
        eC.translate.y +=
          (moveY - pastMoveY) / Cc + (moveX - pastMoveX) * Dd;
        eF.translate.y +=
          (moveY - pastMoveY) / Cc + (moveX - pastMoveX) * Dd;
      }
      if (mode.rotate) {
        eC.rotate.x +=
          ((moveY - pastMoveY) / Cc + (moveX - pastMoveX) * Dd) / TAU;
        eF.rotate.x +=
          ((moveY - pastMoveY) / Cc + (moveX - pastMoveX) * Dd) / TAU;
      }
      if (mode.size) {
        eC.scale.y -=
          (moveY - pastMoveY) / Cc + ((moveX - pastMoveX) * Dd) / 2;
        eF.scale.y -=
          (moveY - pastMoveY) / Cc + ((moveX - pastMoveX) * Dd) / 2;
      }
    }
    if (dimension.green) {
      Aa = Math.sin(camera.rotate.y);
      Bb = Math.sin(camera.rotate.x);
      Cc = Aa < 0.2 && Aa > -0.2 ? 1 : Aa;
      Dd = Bb < 0.2 && Bb > -0.2 ? 1 : Bb;
      if (mode.move) {
        eC.translate.z +=
          (moveX - pastMoveX) * -Aa + (moveY - pastMoveY) * -Bb;
        eF.translate.z +=
          (moveX - pastMoveX) * -Aa + (moveY - pastMoveY) * -Bb;
      }
      if (mode.rotate) {
        eC.rotate.z +=
          ((moveX - pastMoveX) / -Cc + (moveY - pastMoveY) / Dd) / TAU;
        eF.rotate.z +=
          ((moveX - pastMoveX) / -Cc + (moveY - pastMoveY) / Dd) / TAU;
      }
      if (mode.size) {
        eC.scale.z +=
          (moveX - pastMoveX) / -Cc + (moveY - pastMoveY) / Dd / 2;
        eF.scale.z +=
          (moveX - pastMoveX) / -Cc + (moveY - pastMoveY) / Dd / 2;
      }
    }
    if (dimension.blue) {
      Aa = Math.cos(camera.rotate.y);
      Bb = Math.sin(camera.rotate.x) * Math.cos(camera.rotate.y);
      Cc = Aa < 0.2 && Aa > -0.2 ? 1 : Aa;
      Dd = Bb > 300 ? 0 : Bb;
      if (mode.move) {
        eC.translate.x +=
          (moveX - pastMoveX) / Cc + (moveY - pastMoveY) * Dd;
        eF.translate.x +=
          (moveX - pastMoveX) / Cc + (moveY - pastMoveY) * Dd;
      }
      if (mode.rotate) {
        eC.rotate.y +=
          ((moveX - pastMoveX) / Cc + (moveY - pastMoveY) * Dd) / TAU;
        eF.rotate.y +=
          ((moveX - pastMoveX) / Cc + (moveY - pastMoveY) * Dd) / TAU;
      }
      if (mode.size) {
        eC.scale.x +=
          (moveX - pastMoveX) / Cc + ((moveY - pastMoveY) * Dd) / 2;
        eF.scale.x +=
          (moveX - pastMoveX) / Cc + ((moveY - pastMoveY) * Dd) / 2;
      }
    }
    pastMoveX = moveX;
    pastMoveY = moveY;
  }, //pointer.pageX and pointer.pageY
  onDragEnd: function() {
    console.log("Rx: "+camera.rotate.y);
    console.log("Ry: "+camera.rotate.x);
    console.log("x : "+Cc);
    console.log("y : "+Dd);
    //loadElementData(highlightedElement);
  }
});
new Zdog.Dragger({
  startElement: finished.element,
  onDragStart: function() {
    draggable = !0;
  },
  onDragEnd: function() {
    draggable = !1;
  }
});
function animate() {
  // finished animation
  if (!draggable) {
    finished.rotate.x += rad(fileData.animate.red);
    finished.rotate.z += rad(fileData.animate.green);
    finished.rotate.y += rad(fileData.animate.blue);
  }
  finished.updateRenderGraph();
  //camera
  camera.rotate = cube.rotate;
  camera.updateRenderGraph();

  //copy camera rotation
  cube.updateRenderGraph();
  // animate next frame
  requestAnimationFrame(animate);
}
// start animation
animate();
loadElementData(1);
doc.cover.style.visibility = "hidden";
