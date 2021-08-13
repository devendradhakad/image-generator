/******/ (() => { // webpackBootstrap
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[1].use[1]!./node_modules/babel-loader/lib/index.js!./src/ImageWorker.worker.js ***!
  \*************************************************************************************************************************************************/
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

onmessage = function onmessage(e) {
  var _e$data = _slicedToArray(e.data, 4),
      width = _e$data[0],
      height = _e$data[1],
      pixels = _e$data[2],
      id = _e$data[3];

  var counter = 1;

  for (var r = 8; r <= 256; r += 8) {
    for (var g = 8; g <= 256; g += 8) {
      for (var b = 8; b <= 256; b += 8) {
        var x = Math.floor(Math.random() * width);
        var y = Math.floor(Math.random() * height);
        var off = (y * id.width + x) * 4;
        pixels[off] = r;
        pixels[off + 1] = g;
        pixels[off + 2] = b;
        pixels[off + 3] = 255;

        if (x > width / 2) {
          pixels[off + 3] = 255 * (1 - x / 10);
        }

        console.log("R, G, B values for each pixel ".concat(counter), r, g, b, "\n");
        counter += 1;
      }
    }
  }

  postMessage([pixels]);
};
/******/ })()
;
//# sourceMappingURL=main.worker.js.map