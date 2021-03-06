console.log("%cLoading Script", "font-weight: bold; text-align: center;");
console.time("Script Loading Time");
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
var log = console.log;
var temp = function() {};
var style = "rgb";
var undoElement;
var draggable;
var doc = {
    gebi: function(p) {
      return document.getElementById(p);
    }
  },
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
var featureIDs = [
  "Red",
  "Green",
  "Blue",
  "RedR",
  "GreenR",
  "BlueR",
  "Height",
  "Depth",
  "Width",
  "Diameter",
  "Radius",
  "Color",
  "Fill",
  "Stroke",
  "FrontFace",
  "RearFace",
  "LeftFace",
  "RightFace",
  "TopFace",
  "BottomFace",
  "Quarters",
  "CornerRadius",
  "Sides",
  "BackFace",
  "Text",
  "FontSize",
  "Line"
];
var elementDataHide = {
  rect: [7, 9, 10, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
  roundedrect: [7, 9, 10, 14, 15, 16, 17, 18, 19, 20, 22, 23, 24, 25, 26],
  ellipse: [7, 9, 10, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26],
  circle: [6, 7, 8, 9, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26],
  torus: [6, 7, 8, 9, 12, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26],
  polygon: [7, 9, 10, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
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
  hemisphere: [6, 7, 8, 9, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26],
  cone: [6, 8, 9, 10, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26],
  cylinder: [6, 8, 9, 10, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26],
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
var elementDataType = "nnnnnnnnnnnsbnssssssnnnssn?b";
var cameraCanvas = doc.camera.getContext("2d");
var eC, eF, eT; //element.camera, element.finished
var mode = { mouse: false, move: false, rotate: false };
var dimension = { red: false, green: false, blue: false };
var iconS = "/zdog-house/icons/";
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
  console.log(p);
};

//ui functions
var subModes = function(p) {
  if (mode.move) {
    doc.redIcon.src = dimension.red
      ? iconS + style + "/redH.svg"
      : iconS + style + "/red.svg";
    doc.greenIcon.src = dimension.green
      ? iconS + style + "/greenH.svg"
      : iconS + style + "/green.svg";
    doc.blueIcon.src = dimension.blue
      ? iconS + style + "/blueH.svg"
      : iconS + style + "/blue.svg";
  }
  if (mode.rotate) {
    doc.redIcon.src = dimension.red
      ? iconS + style + "/redRH.svg"
      : iconS + style + "/redR.svg";
    doc.greenIcon.src = dimension.green
      ? iconS + style + "/greenRH.svg"
      : iconS + style + "/greenR.svg";
    doc.blueIcon.src = dimension.blue
      ? iconS + style + "/blueRH.svg"
      : iconS + style + "/blueR.svg";
  }
  if (mode.size) {
    doc.redIcon.src = dimension.red
      ? iconS + style + "/heightH.svg"
      : iconS + style + "/height.svg";
    doc.greenIcon.src = dimension.green
      ? iconS + style + "/depthH.svg"
      : iconS + style + "/depth.svg";
    doc.blueIcon.src = dimension.blue
      ? iconS + style + "/widthH.svg"
      : iconS + style + "/width.svg";
  }
};
var clickMode = function(p) {
  mode = { size: false, move: false, rotate: false };
  mode[p] = true;
  doc.moveIcon.src = mode.move
    ? iconS + style + "/moveH.svg"
    : iconS + style + "/move.svg";
  doc.rotateIcon.src = mode.rotate
    ? iconS + style + "/rotateH.svg"
    : iconS + style + "/rotate.svg";
  doc.sizeIcon.src = mode.size
    ? iconS + style + "/sizeH.svg"
    : iconS + style + "/size.svg";
  subModes();
};
var click3D = function(p) {
  dimension = { red: false, green: false, blue: false };
  dimension[p] = true;
  subModes();
};
var ectf = function() {
  eT = elements[highlightedElement].type;
  eC = elements[highlightedElement].camera;
  eF = elements[highlightedElement].finished;
};

//call functions above
clickMode("move");
click3D("red");

//fonts
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
      type: "illo",
      name: "",
      camera: camera,
      finished: finished
    },
    {
      type: "folder",
      name: "Group",
      camera: new Zdog.Group({ addTo: camera }),
      finished: new Zdog.Group({ addTo: finished })
    }
  ]
};
//elements
var elements = [
  {
    type: "camera",
    name: "Camera",
    group: "",
    translate: { x: 0, y: 0, z: 0 },
    rotate: { x: 0, y: 0, z: 0 }
  },
  {
    type: "ellipse",
    name: "Ellipse",
    group: "Group",
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
    group: "Group",
    camera: new Zdog.Rect({
      addTo: fileData.groups[1].camera,
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
      addTo: fileData.groups[1].finished,
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
    stroke: 12
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
    stroke: 12,
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
    stroke: 12,
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
    stroke: 12,
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
    scale: { x: 80, y: 80, z: 0 },
    diameter: 20,
    color: "#EE6622",
    fill: false,
    stroke: 20,
    radius: 80,
    quarters: 4
  },
  hemisphere: {
    translate: { x: 0, y: 0, z: 0 },
    rotate: { x: 0, y: 0, z: 0 },
    width: 1,
    height: 1,
    depth: 1,
    scale: { x: 80, y: 80, z: 80 },
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
    color: "#CC2255",
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
    updateSort: true,
    translate: { x: 0, y: 0, z: 0 },
    rotate: { x: 0, y: 0, z: 0 }
  }
};
var highlightedElement = 1;
//elements
var loadElements = function() {
  Bb = 0 === highlightedElement ? 'id="highlightedElement"' : "";
  Aa =
    '<div class="elementName" ' +
    Bb +
    ' onclick="loadElementData(' +
    0 +
    ')"><img src="/zdog-house/icons/elements/camera.svg"><span class="element-name">Camera</span></div>' +
    "</div>";

  var renderFolder = function(n) {
    Aa = Aa.concat(
      '<div class="elementName"><img src="/zdog-house/icons/elements/' +
        fileData.groups[n].type +
        '.svg"><div class="moreDropdown"><span class="element-name">' +
        fileData.groups[n].name +
        '</span><img class="moreIcon" src="/zdog-house/icons/elements/more.svg">' +
        '<img class="more-content" onclick="nameGroup(' +
        n +
        ')"src="/zdog-house/icons/file/name.svg"><img class="more-content" onclick="duplicateGroup(' +
        n +
        ')"src="/zdog-house/icons/file/duplicate.svg"><img class="more-content" onclick="deleteGroup(' +
        n +
        ')" src="/zdog-house/icons/file/delete.svg"></div></div>'
    );
  };
  var renderElement = function(n) {
    Dd = elements[n].group === "" ? "" : "> ";
    Bb = n === highlightedElement ? 'id="highlightedElement"' : "";
    Aa = Aa.concat(
      '<div class="elementName" ' +
        Bb +
        ' onclick="loadElementData(' +
        n +
        ')">' +
        Dd +
        '<img src="/zdog-house/icons/elements/' +
        elements[n].type +
        '.svg"><div class="moreDropdown"><span class="element-name">' +
        elements[n].name +
        '</span><img class="moreIcon" src="/zdog-house/icons/elements/more.svg">' +
        '<img class="more-content" onclick="duplicateElement(' +
        n +
        ')"src="/zdog-house/icons/file/duplicate.svg"><img class="more-content" onclick="deleteElement(' +
        n +
        ')" src="/zdog-house/icons/file/delete.svg">' +
        '<img class="more-content" onclick="moveElement(' +
        n +
        ')"src="/zdog-house/icons/file/move.svg">' +
        "</div></div>"
    );
  };

  Cc = {};
  for (i of fileData.groups) {
    Cc[i.name] = [];
  }

  for (i = 1; i < elements.length; i++) {
    Cc[elements[i].group].push({
      name: elements[i].name,
      type: elements[i].type,
      num: i
    });
  }

  for (i = 0; i < fileData.groups.length; i++) {
    if (fileData.groups[i].name === "") {
    } else {
      renderFolder(i);
    }
    for (j of Cc[fileData.groups[i].name]) {
      if (j.num === 0) {
        continue;
      }
      renderElement(j.num);
    }
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
    case "object":
      Aa = new Zdog.Group(Aa);
      temp();
      Bb = new Zdog.Group(Bb);
  }
};
var addElement = function(p) {
  if (p === "polygon") {
    let sides = prompt(
      "How many sides for the polygon? (SIDES CANNOT BE CHANGED LATER DUE TO A BUG)",
      ""
    );
    if (sides === null) {
      return;
    } else {
      templateElements.polygon.sides = sides;
    }
  }
  if (p === "cylinder") {
    let length = prompt(
      "How long should the cylinder be corresponding to the size? (eg: 1 = the size, 2 = twice the size, etc.) LENGTH CANNOT BE CHANGED LATER DUE TO A BUG",
      ""
    );
    if (length === null) {
      return;
    } else {
      templateElements.cylinder.length = length * 1;
    }
  }
  Bb = "testasgasgdsa";
  temp = function() {
    Bb = templateElements[p];
    Bb.addTo = finished;
  };
  Aa = templateElements[p];
  Aa.addTo = camera;
  elementSwitch(p);
  if (p === "folder" || p == "object") {
    fileData.groups.push({
      name: p,
      type: p,
      camera: Aa,
      finished: Bb
    });
  } else {
    elements.push({
      name: p,
      type: p,
      camera: Aa,
      finished: Bb,
      group: ""
    });
  }
  highlightedElement = elements.length - 1;
  loadElements();
  loadElementData(highlightedElement);
};
var duplicateElement = function(p) {
  if (elements[p].type === "cylinder") {
    let length = prompt(
      "How long should the duplicated cylinder be corresponding to the size? (eg: 1 = the size, 2 = twice the size, etc.) LENGTH CANNOT BE CHANGED LATER DUE TO A BUG",
      elements[p].camera.length
    );
    elements[p].camera.length = length * 1;
    elements[p].finished.length = length * 1;
  }
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
    finished: Bb,
    group: elements[p].group
  });
  //elements[p+1].camera.color = elements[p].camera.color;
  loadElements();
  //elements[p+1].camera.color = elements[p].camera.color;
  //loadElementData(p + 1);
};
var duplicateElementS = function(p) {
  temp = function() {
    Bb = elements[p].finished;
    Bb.addTo = finished;
  };
  Aa = elements[p].camera;
  Aa.addTo = camera;
  elementSwitch(elements[p].type);
  elements.push({
    type: elements[p].type,
    name: elements[p].name,
    camera: Aa,
    finished: Bb,
    group: elements[p].group
  });
};
var deleteElement = function(p) {
  if (!confirm('Delete "' + elements[p].name + '"?')) {
    return;
  }
  camera.removeChild(elements[p].camera);
  finished.removeChild(elements[p].finished);
  elements.splice(p, 1);
  if (p === elements.length) {
    highlightedElement = p - 1;
  }
};
var deleteElementS = function(p) {
  camera.removeChild(elements[p].camera);
  finished.removeChild(elements[p].finished);
  elements.splice(p, 1);
};
var moveElement = function(p) {
  let group = prompt(
    'The group to move element "' +
      elements[p].name +
      '" to: (leave blank for no group)',
    ""
  );
  //find out which group is called "group"
  for (i = 0; i < fileData.groups.length; i++) {
    if (fileData.groups[i].name === group) {
      group = fileData.groups[i];
      break;
    }
  }
  log(group);
  if (i === fileData.groups.length) {
    alert("No such group detected! Perhaps a typo?");
    return;
  }
  //add child
  group.camera.addChild(elements[p].camera);
  group.finished.addChild(elements[p].finished);
  elements[p].group = group.name;
  //end
  loadElements();
  loadElementData(p);
};
var moveElementS = function(p, group) {
  //find out which group is called "group"
  for (i = 0; i < fileData.groups.length; i++) {
    if (fileData.groups[i].name === group) {
      group = fileData.groups[i];
      break;
    }
  }
  if (i === fileData.groups.length) {
    group = fileData.groups[0];
  }
  //add child
  group.camera.addChild(elements[p].camera);
  group.finished.addChild(elements[p].finished);
  elements[p].group = group.name;
};
//groups
var nameGroup = function(p) {
  let name = prompt('Rename "' + fileData.groups[p].name + '" to:', ""),
    i;
  if (name === null) {
    return;
  } else if (name === "") {
    alert("The name cannot be blank, silly!");
    return;
  }
  for (i = 0; i < elements.length; i++) {
    if (elements[i].group === fileData.groups[p].name) {
      elements[i].group = name;
    }
  }
  fileData.groups[p].name = name;
  //done!
  loadElements();
};
var duplicateGroup = function(p) {
  if (
    !confirm(
      'Duplicate "' + fileData.groups[p].name + '" and everything in it?'
    )
  ) {
    return;
  }
  Aa = { addTo: camera };
  Aa = new Zdog.Group(Aa);
  Bb = { addTo: finished };
  Bb = new Zdog.Group(Bb);
  fileData.groups.push({
    name: fileData.groups[p].name + "2",
    type: fileData.groups[p].type,
    camera: Aa,
    finished: Bb
  });
  //duplicate elements
  Dd = elements.length;
  log(Dd);
  for (j = 0; j < Dd; j++) {
    log("Testing element" + j);
    if (elements[j].group === fileData.groups[p].name) {
      log(elements[elements.length - 1]);
      duplicateElementS(j);
      log(elements[elements.length - 1]);
      moveElementS(elements.length - 1, fileData.groups[p].name + "2");
    }
  }
  //done!
  loadElements();
};
var deleteGroup = function(p) {
  if (
    !confirm('Delete "' + fileData.groups[p].name + '" and everything in it?')
  ) {
    return;
  }
  Dd = elements.length;
  for (j = 0; j < Dd; j++) {
    log("Testing element" + j);
    if (elements[j].group === fileData.groups[p].name) {
      deleteElementS(j);
      Dd--;
      j--;
    }
  }
  camera.removeChild(fileData.groups[p].camera);
  finished.removeChild(fileData.groups[p].finished);
  fileData.groups.splice(p, 1);
  //done!
  highlightedElement = 0;
  loadElements();
};
loadElements();

//elementData
loadElementData = function(p) {
  highlightedElement = p;
  loadElements();
  Aa = elements[p].type === "camera" ? true : false;
  var element = Aa ? elements[p] : elements[p].camera;
  document.getElementById("edcHeader").value =
    elements[highlightedElement].name;
  log(element.color);
  let edI = [
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
  for (i = 0; i < featureIDs.length - 1; i++) {
    log("checking" + i);
    document.getElementById("edb" + featureIDs[i]).style.display = "block";
    if (!elementDataHide[elements[highlightedElement].type].includes(i)) {
      if (elementDataType.charAt(i) === "b") {
        document.getElementById("edc" + featureIDs[i]).checked = edI[i];
      } else {
        document.getElementById("edc" + featureIDs[i]).value = edI[i];
      }
    }
  }
  var hide = function(p) {
    for (i = 0; i < p.length; i++) {
      document.getElementById("edb" + featureIDs[p[i]]).style.display = "none";
    }
  };
  hide(elementDataHide[elements[highlightedElement].type]);
  if (!elementDataHide[elements[highlightedElement].type].includes(26)) {
    console.log("in");
    document.getElementById("edb" + featureIDs[26]).style.display = "block";

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

  let z = [];
  for (i = 0; i < 6; i++) {
    z[i] = doc.gebi("edc" + featureIDs[i]).value * 1;
  }

  if (eT === "camera") {
    elements[highlightedElement].rotate.x = finished.rotate.x = rad(z[3]);
    elements[highlightedElement].rotate.z = finished.rotate.z = rad(z[4]);
    elements[highlightedElement].rotate.y = finished.rotate.y = rad(z[5]);
  } else {
    if (elementDataHide[eT].includes(0)) {
      eC.translate.y = eF.translate.y = z[0];
      eC.translate.z = eF.translate.z = z[1];
      eC.translate.x = eF.translate.x = z[2];
      eC.rotate.x = eF.rotate.x = rad(z[3]);
      eC.rotate.z = eF.rotate.z = rad(z[4]);
      eC.rotate.y = eF.rotate.y = rad(z[5]);
    }
    elementDataHide[eT].includes(6) ||
      ((eC.scale.y = 1 * doc.gebi("edcHeight").value),
      (eF.scale.y = 1 * doc.gebi("edcHeight").value)),
      elementDataHide[eT].includes(7) ||
        ((eC.scale.z = 1 * doc.gebi("edcDepth").value),
        (eF.scale.z = 1 * doc.gebi("edcDepth").value)),
      elementDataHide[eT].includes(8) ||
        ((eC.scale.x = 1 * doc.gebi("edcWidth").value),
        (eF.scale.x = 1 * doc.gebi("edcWidth").value));
    for (i = 9; i < featureIDs.length - 1; i++) {
      if (!elementDataHide[eT].includes(i)) {
        Cc = doc.gebi("edc" + featureIDs[i]);
        if (elementDataType.charAt(i) === "n") {
          eC[edI.string[i]] = eF[edI.string[i]] = Cc.value * 1;
        } else if (elementDataType.charAt(i) === "b") {
          eC[edI.string[i]] = eF[edI.string[i]] = Cc.checked;
        } else {
          eC[edI.string[i]] = eF[edI.string[i]] = Cc.value;
        }
      }
    }
    if (eT === "hemisphere") {
      eC.scale.x = eF.scale.x = eC.radius;
      eC.scale.y = eF.scale.y = eC.radius;
      eC.scale.z = eF.scale.z = eC.radius;
    }
    if (eT === "circle" || eT === "torus") {
      eC.scale.x = eF.scale.x = eC.radius;
      eC.scale.y = eF.scale.y = eC.radius;
    }
    if (eT === "cone" || eT === "cylinder") {
      eC.scale.x = eF.scale.x = eC.scale.z;
      eC.scale.y = eF.scale.y = eC.scale.z;
    }
    if (eT === "cylinder") {
      eC.frontBase.backface = eF.frontBase.backface = eC.backface;
      eC.rearBase.backface = eF.rearBase.backface = eC.backface;
    }
    //path stuff
    if (!elementDataHide[eT].includes(26)) {
      Bb = [];
      for (i = 1; i < 10; i++) {
        Aa = doc.gebi("line-check-" + i).checked ? "visible" : "hidden";
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
//export
var exportMenu = function() {
  if(doc.gebi("export").style.visibility==="hidden"){
  doc.gebi("export").style.visibility = "visible";
  }else{
  doc.gebi("export").style.visibility = "hidden";
  }
};
var exportJS = function() {
  log("%cStarting Export", "font-weight: bold;");
  console.time("Export Time");
  let e = "";
  let eID = [];
  let element;
  let gDIR = {};
  let min = doc.gebi("ex-min").checked ? false : true;
  let justJS = doc.gebi("ex-jjs").checked;
  let cssID = doc.gebi("ex-css").value;
  let widthID = doc.gebi("ex-wh").value * 1;
  let heightID = doc.gebi("ex-ht").value * 1;
  let drag = doc.gebi("ex-dr").checked;
  let dragresume = doc.gebi("ex-dro").checked;
  let illoID = doc.gebi("ex-iid").value;
  let txt = {
    a: "addTo",
    t: "translate",
    r: "rotate",
    w: "width",
    h: "height",
    d: "depth",
    c: "color",
    s: "stroke",
    di: "diameter",
    rad: "radius",
    crad: "cornerRadius",
    f: "fill",
    p: "path",
    bf: "backface",
    topF: "topFace",
    bottomF: "bottomFace",
    frontF: "frontFace",
    rearF: "rearFace",
    leftF: "leftFace",
    rightF: "rightFace",
    q: "quarters",
    sd: "sides"
  };
  let tr = function(p, x) {
    return element[x][p] === 0 ? "" : p + ":" + element[x][p] + ",";
  };
  let mn = function() {
    return min ? "\n" : "";
  };
  let mnt = function() {
    return min ? "\n\t" : "";
  };
  let rt = function(p, x) {
    return element[p] === x ? "" : p + ":" + element[p] + "," + mnt();
  };
  let ft = function(p, z) {
    switch (p) {
      case "a":
        return (
          txt.a +
          ":" +
          (eID[z] === 0 ? illoID + "," : "groups[" + eID[z] + "],") +
          mnt()
        );
        break;
      case "t":
        return (
          txt.t +
          ":{" +
          tr("x", txt.t) +
          tr("y", txt.t) +
          tr("z", txt.t) +
          "}," +
          mnt()
        );
        break;
      case "r":
        return (
          txt.r +
          ":{" +
          tr("x", txt.r) +
          tr("y", txt.r) +
          tr("z", txt.r) +
          "}," +
          mnt()
        );
        break;
      case "w":
        return element.scale.x === 1
          ? ""
          : txt.w + ":" + element.scale.x + "," + mnt();
        break;
      case "h":
        return element.scale.y === 1
          ? ""
          : txt.h + ":" + element.scale.y + "," + mnt();
        break;
      case "d":
        return element.scale.z === 1
          ? ""
          : txt.d + ":" + element.scale.z + "," + mnt();
        break;
      case "c":
        return element[txt.c] === "#333"
          ? ""
          : txt.c + ':"' + element[txt.c] + '",' + mnt();
        break;
      case "s":
        return rt(txt.s, "0");
        break;
      case "f":
        return rt(txt.f, null);
        break;
      case "di":
        return rt(txt.di, 1);
        break;
      case "rad":
        return rt(txt.rad, 1);
        break;
      case "crad":
        return rt(txt.crad, true);
        break;
      case "p":
        return txt.p + ":" + element[txt.p] + "," + mn();
        break;
      case "bf":
        return rt(txt.bf, null);
        break;
      case "topF":
        return rt(txt.topF, null);
        break;
      case "bottomF":
        return rt(txt.bottomF, null);
        break;
      case "frontF":
        return rt(txt.frontF, null);
        break;
      case "rearF":
        return rt(txt.rearF, null);
        break;
      case "leftF":
        return rt(txt.leftF, null);
        break;
      case "rightF":
        return rt(txt.rightF, null);
        break;
      case "q":
        return rt(txt.q, 4);
        break;
      case "sd":
        return rt(txt.sd, 3);
        break;
    }
  };
  //check
  if (!cssID.indexOf(" ") === -1) {
    alert("The css ID can not have a space in it.");
    return;
  }
  if (!illoID.indexOf(" ") === -1) {
    alert("The illustration ID can not have a space in it.");
    return;
  }
  if (!justJS) {
    e += "<script>";
  }
  e += min ? "\n" : "";
  //dragrotate
  e += min
    ? drag
      ? "var generatedBy='Zdog-house';\nvar is=!0;"
      : "var generatedBy='Zdog-house';var title = \"" + fileData.name + '"'
    : drag
    ? "var generatedBy='Zdog-house',is=!0,"
    : "var generatedBy='Zdog-house',title=\"" + fileData.name + '"';
  //illo
  eID = elements[0].rotate;
  e += min ? "\nvar " : "";
  e +=
    illoID +
    "= new Zdog.Illustration({" +
    mnt() +
    "element:'#" +
    cssID +
    "',"+mnt()+"rotate:{" +
    (eID.x === 0 ? "" : "x:" + eID.x + ",") +
    (eID.y === 0 ? "" : "x:" + eID.y + ",") +
    (eID.z === 0 ? "" : "x:" + eID.z + ",") +
    "}" +
    (drag
      ? "," +
        mnt() +
        "dragRotate:!0," +
        mnt() +
        "onDragStart:function(){is = !1}," +
        (dragresume ? mnt() + "onDragEnd:function(){is = !0}" + mn() : mn())
      : "") +
    "})";
  //groups
  eID = [];
  if (fileData.groups.length > 0) {
    e += min ? ";\nvar groups=[\n\t" : ",groups=[";
    //make directory
    for (i = 0; i < fileData.groups.length; i++) {
      gDIR[fileData.groups[i].name] = i;
    }
    log(gDIR);
    //make element group ID
    for (i = 0; i < elements.length; i++) {
      eID.push(gDIR[elements[i].group]);
    }
    log(eID);
    //write
    for (i = 0; i < fileData.groups.length; i++) {
      e +=
        "new Zdog.Group({addTo:" +
        illoID +
        ",updateSort:!0})," +
        (min ? " //" + fileData.groups[i].name + "\n\t" : "");
    }
    e += "];" + mn();
  } else {
    e += ";" + mn();
  }
  log(e);
  //elements
  for (i = 0; i < elements.length; i++) {
    log(e);
    e += elements[i].type === "camera" ? "" : "new Zdog.";
    element = elements[i].camera;
    log(e);
    switch (elements[i].type) {
      case "rect":
        e +=
          "Rect({" +
          mnt() +
          ft("a", i) +
          ft("t") +
          ft("r") +
          ft("w") +
          ft("h") +
          ft("c") +
          ft("f") +
          ft("s") +
          "});";
        break;
      case "roundedrect":
        e +=
          "RoundedRect({" +
          mnt() +
          ft("a", i) +
          ft("t") +
          ft("r") +
          ft("w") +
          ft("h") +
          ft("c") +
          ft("f") +
          ft("s") +
          ft("crad") +
          "});";
        break;
      case "circle":
        e +=
          "Circle({" +
          mnt() +
          ft("a", i) +
          ft("t") +
          ft("r") +
          ft("w") +
          ft("h") +
          ft("c") +
          ft("f") +
          ft("s") +
          ft("q") +
          "});";
        break;
      case "ellipse":
        e +=
          "Ellipse({" +
          mnt() +
          ft("a", i) +
          ft("t") +
          ft("r") +
          ft("w") +
          ft("h") +
          ft("c") +
          ft("f") +
          ft("s") +
          ft("q") +
          "});";
        break;
      case "polygon":
        e +=
          "Polygon({" +
          mnt() +
          ft("a", i) +
          ft("t") +
          ft("r") +
          ft("w") +
          ft("h") +
          ft("c") +
          ft("f") +
          ft("s") +
          ft("sd") +
          "});";
        break;
      case "line":
        e +=
          "Line({" +
          mnt() +
          ft("a", i) +
          ft("p") +
          ft("c") +
          ft("s") +
          "fill:false,closed:false,});";
        break;
      case "text":
        e +=
          "Text({" +
          mnt() +
          ft("a", i) +
          ft("t") +
          ft("r") +
          ft("c") +
          "value:" +
          element.value +
          ",fontSize:" +
          element.fontSize +
          "," +
          "fill:false,closed:false,});";
        break;
      case "shape":
        e +=
          "Shape({" +
          mnt() +
          ft("a", i) +
          ft("p") +
          ft("c") +
          ft("s") +
          "fill:true,closed:true,});";
        break;
      case "torus":
        e +=
          "Ellipse({" +
          mnt() +
          ft("a", i) +
          ft("t") +
          ft("r") +
          ft("rad") +
          ft("c") +
          ft("s") +
          ft("q") +
          "});";
        break;
      case "hemisphere":
        e +=
          "Hemisphere({" +
          mnt() +
          ft("a", i) +
          ft("t") +
          ft("r") +
          ft("rad") +
          ft("c") +
          ft("f") +
          ft("s") +
          ft("bf") +
          "});";
        break;
      case "cylinder":
        e +=
          "Cylinder({" +
          mnt() +
          ft("a", i) +
          ft("t") +
          ft("r") +
          ft("w") +
          ft("h") +
          ft("d") +
          ft("di") +
          ft("c") +
          ft("f") +
          ft("s") +
          ft("bf") +
          "});";
        break;
      case "cone":
        e +=
          "Cone({" +
          mnt() +
          ft("a", i) +
          ft("t") +
          ft("r") +
          ft("d") +
          ft("c") +
          ft("f") +
          ft("s") +
          ft("bf") +
          "});";
        break;
      case "cube":
        e +=
          "Cube({" +
          mnt() +
          ft("a", i) +
          ft("t") +
          ft("r") +
          ft("w") +
          ft("h") +
          ft("d") +
          ft("c") +
          ft("f") +
          ft("s") +
          ft("topF") +
          ft("bottomF") +
          ft("frontF") +
          ft("rearF") +
          ft("leftF") +
          ft("rightF") +
          "});";
        break;
      case "camera":
        e += "";
        break;
      default:
        e += "//error\n";
        break;
    }
    e += mn();
  }
  //animate
  e +=
    "function animate(){" +
    mn() +
    (fileData.animate.red === 0
      ? ""
      : illoID + ".rotate.x+=is?" + rad(fileData.animate.red) + ":0;" + mn()) +
    (fileData.animate.blue === 0
      ? ""
      : illoID + ".rotate.y+=is?" + rad(fileData.animate.blue) + ":0;" + mn()) +
    (fileData.animate.green === 0
      ? ""
      : illoID +
        ".rotate.z+=is?" +
        rad(fileData.animate.green) +
        ":0;" +
        mn()) +
    illoID +
    ".updateRenderGraph();" +
    mn() +
    "requestAnimationFrame(animate);" +
    mn() +
    "}" +
    mn();
  //done!
  e += "animate();" + mn();
  //finishing touch,
  if (!justJS) {
    e += "</script>";
  }
  //finished!
  doc.gebi("export-re-canvas").value =
    '<canvas id="' +
    cssID +
    '" width="' +
    widthID +
    '" height="' +
    heightID +
    '" style="background:' +
    fileData.background +
    '"></canvas>';
  
  doc.gebi("export-results").value = e;
  console.timeEnd("Export Time");
  log("%cExport Finished", "font-weight: bold;");
  doc.gebi("export-results-div").style.visibility = "visible";
};
//sidebar data
var changeSidebarData = function() {
  fileData.name = doc.gebi("sidebar-name").value;
  fileData.background = doc.gebi("sidebar-background").value;
  doc.camera.style.background = doc.gebi("sidebar-background").value;
  doc.finished.style.background = doc.gebi("sidebar-background").value;
  fileData.zoom = doc.gebi("sidebar-zoom").value;
  camera.zoom = doc.gebi("sidebar-zoom").value;
  finished.zoom = doc.gebi("sidebar-zoom").value;
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
  doc.gebi("edIRed").src = iconS + style + "/red.svg";
  doc.gebi("edIGreen").src = iconS + style + "/green.svg";
  doc.gebi("edIBlue").src = iconS + style + "/blue.svg";
  doc.gebi("edIRedR").src = iconS + style + "/redR.svg";
  doc.gebi("edIGreenR").src = iconS + style + "/greenR.svg";
  doc.gebi("edIBlueR").src = iconS + style + "/blueR.svg";
  doc.gebi("edIHeight").src = iconS + style + "/height.svg";
  doc.gebi("edIDepth").src = iconS + style + "/depth.svg";
  doc.gebi("edIWidth").src = iconS + style + "/width.svg";
  doc.gebi("sidebar-RedR").src = iconS + style + "/redR.svg";
  doc.gebi("sidebar-GreenR").src = iconS + style + "/greenR.svg";
  doc.gebi("sidebar-BlueR").src = iconS + style + "/blueR.svg";
  doc.moveIcon.src = mode.move
    ? iconS + style + "/moveH.svg"
    : iconS + style + "/move.svg";
  doc.rotateIcon.src = mode.rotate
    ? iconS + style + "/rotate.svg"
    : iconS + style + "/rotate.svg";
  doc.sizeIcon.src = mode.size
    ? iconS + style + "/sizeH.svg"
    : iconS + style + "/size.svg";
  doc.redIcon.src = dimension.red
    ? iconS + style + "/redH.svg"
    : iconS + style + "/red.svg";
  doc.greenIcon.src = dimension.green
    ? iconS + style + "/greenH.svg"
    : iconS + style + "/green.svg";
  doc.blueIcon.src = dimension.blue
    ? iconS + style + "/blueH.svg"
    : iconS + style + "/blue.svg";
};

//camera mode and controls
var cameraMove = function() {
  alert(1);
};
var cameraDragger = new Zdog.Dragger({
  startElement: camera.element,
  onDragStart: function() {
    undoElement = elements[highlightedElement].camera;
    pastMoveX = 0;
    pastMoveY = 0;
  },
  onDragMove: function(pointer, moveX, moveY) {
    ectf();
    if (eT === "camera") {
      return;
    }
    if (dimension.red) {
      Aa = Math.cos(camera.rotate.x);
      Bb = Math.sin(camera.rotate.y) * Math.cos(camera.rotate.x);
      Cc = Aa < 0.2 && Aa > -0.2 ? 0 : Aa;
      //Dd = Bb > 300 ? 0 : Bb;
      Dd = 0;
      if (mode.move) {
        eC.translate.y += (moveY - pastMoveY) / Cc + (moveX - pastMoveX) * Dd;
        eF.translate.y += (moveY - pastMoveY) / Cc + (moveX - pastMoveX) * Dd;
      }
      if (mode.rotate) {
        eC.rotate.x +=
          ((moveY - pastMoveY) / Cc + (moveX - pastMoveX) * Dd) / TAU;
        eF.rotate.x +=
          ((moveY - pastMoveY) / Cc + (moveX - pastMoveX) * Dd) / TAU;
      }
      if (mode.size) {
        eC.scale.y -= (moveY - pastMoveY) / Cc + ((moveX - pastMoveX) * Dd) / 2;
        eF.scale.y -= (moveY - pastMoveY) / Cc + ((moveX - pastMoveX) * Dd) / 2;
      }
    }
    if (dimension.green) {
      Aa = Math.sin(camera.rotate.y);
      Bb = Math.sin(camera.rotate.x);
      Cc = Aa < 0.2 && Aa > -0.2 ? 1 : Aa;
      Dd = Bb < 0.2 && Bb > -0.2 ? 1 : Bb;
      if (mode.move) {
        eC.translate.z += (moveX - pastMoveX) * -Aa + (moveY - pastMoveY) * -Bb;
        eF.translate.z += (moveX - pastMoveX) * -Aa + (moveY - pastMoveY) * -Bb;
      }
      if (mode.rotate) {
        eC.rotate.z +=
          ((moveX - pastMoveX) / -Cc + (moveY - pastMoveY) / Dd) / TAU;
        eF.rotate.z +=
          ((moveX - pastMoveX) / -Cc + (moveY - pastMoveY) / Dd) / TAU;
      }
      if (mode.size) {
        eC.scale.z += (moveX - pastMoveX) / -Cc + (moveY - pastMoveY) / Dd / 2;
        eF.scale.z += (moveX - pastMoveX) / -Cc + (moveY - pastMoveY) / Dd / 2;
      }
    }
    if (dimension.blue) {
      Aa = Math.cos(camera.rotate.y);
      Bb = Math.sin(camera.rotate.x) * Math.cos(camera.rotate.y);
      Cc = Aa < 0.2 && Aa > -0.2 ? 1 : Aa;
      Dd = Bb > 300 ? 0 : Bb;
      if (mode.move) {
        eC.translate.x += (moveX - pastMoveX) / Cc + (moveY - pastMoveY) * Dd;
        eF.translate.x += (moveX - pastMoveX) / Cc + (moveY - pastMoveY) * Dd;
      }
      if (mode.rotate) {
        eC.rotate.y +=
          ((moveX - pastMoveX) / Cc + (moveY - pastMoveY) * Dd) / TAU;
        eF.rotate.y +=
          ((moveX - pastMoveX) / Cc + (moveY - pastMoveY) * Dd) / TAU;
      }
      if (mode.size) {
        eC.scale.x += (moveX - pastMoveX) / Cc + ((moveY - pastMoveY) * Dd) / 2;
        eF.scale.x += (moveX - pastMoveX) / Cc + ((moveY - pastMoveY) * Dd) / 2;
      }
    }
    pastMoveX = moveX;
    pastMoveY = moveY;
  }, //pointer.pageX and pointer.pageY
  onDragEnd: function() {
    loadElementData(highlightedElement);
  }
});
var finishedDragger = new Zdog.Dragger({
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
loadElementData(0);
doc.cover.style.visibility = "hidden";
log("%cScript Loaded", "font-weight: bold; text-align: center;");
console.timeEnd("Script Loading Time");
log(
  "Made by %cGem Games",
  "font-weight: bold; color: #3a67fb; text-align: center;"
);
log(
  "Hi! If you're seeing this, it means you're looking at the code/console. Please note this code isn't wrapped up with a bow, as I feel there is no purpose of doing so."
);
log("Github: %chttps://github.com/gemgames/zdoghouse", "color: #3a67fb;");
