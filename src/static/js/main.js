(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewMessage = void 0;

var _sockets = require("./sockets");

var messages = document.getElementById("jsMessages"),
    sendMsg = document.getElementById("jsSendMsg");

var appendMsg = function appendMsg(text, nickname) {
  var li = document.createElement("li");
  li.innerHTML = "\n        <span class=\"author ".concat(nickname ? "out" : "self", "\">").concat(nickname ? nickname : "You", ":</span> ").concat(text, "\n    ");
  messages.appendChild(li);
};

var handleSendMsg = function handleSendMsg(event) {
  event.preventDefault();
  var input = sendMsg.querySelector("input");
  var value = input.value;
  (0, _sockets.getSocket)().emit(window.events.sendMsg, {
    message: value
  });
  input.value = "";
  appendMsg(value);
};

var handleNewMessage = function handleNewMessage(_ref) {
  var message = _ref.message,
      nickname = _ref.nickname;
  return appendMsg(message, nickname);
};

exports.handleNewMessage = handleNewMessage;

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibWVzc2FnZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VuZE1zZyIsImFwcGVuZE1zZyIsInRleHQiLCJuaWNrbmFtZSIsImxpIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiaGFuZGxlU2VuZE1zZyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImVtaXQiLCJ3aW5kb3ciLCJldmVudHMiLCJtZXNzYWdlIiwiaGFuZGxlTmV3TWVzc2FnZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFqQjtBQUFBLElBQ0VDLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBRFo7O0FBR0EsSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRCxFQUFPQyxRQUFQLEVBQW9CO0FBQ3BDLE1BQU1DLEVBQUUsR0FBR04sUUFBUSxDQUFDTyxhQUFULENBQXVCLElBQXZCLENBQVg7QUFDQUQsRUFBQUEsRUFBRSxDQUFDRSxTQUFILDRDQUM0QkgsUUFBUSxHQUFHLEtBQUgsR0FBVyxNQUQvQyxnQkFFRUEsUUFBUSxHQUFHQSxRQUFILEdBQWMsS0FGeEIsc0JBR1lELElBSFo7QUFLQUwsRUFBQUEsUUFBUSxDQUFDVSxXQUFULENBQXFCSCxFQUFyQjtBQUNELENBUkQ7O0FBVUEsSUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxLQUFLLEVBQUk7QUFDN0JBLEVBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUNBLE1BQU1DLEtBQUssR0FBR1gsT0FBTyxDQUFDWSxhQUFSLENBQXNCLE9BQXRCLENBQWQ7QUFGNkIsTUFHckJDLEtBSHFCLEdBR1hGLEtBSFcsQ0FHckJFLEtBSHFCO0FBSTdCLDRCQUFZQyxJQUFaLENBQWlCQyxNQUFNLENBQUNDLE1BQVAsQ0FBY2hCLE9BQS9CLEVBQXdDO0FBQUVpQixJQUFBQSxPQUFPLEVBQUVKO0FBQVgsR0FBeEM7QUFDQUYsRUFBQUEsS0FBSyxDQUFDRSxLQUFOLEdBQWMsRUFBZDtBQUNBWixFQUFBQSxTQUFTLENBQUNZLEtBQUQsQ0FBVDtBQUNELENBUEQ7O0FBU08sSUFBTUssZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLE1BQUdELE9BQUgsUUFBR0EsT0FBSDtBQUFBLE1BQVlkLFFBQVosUUFBWUEsUUFBWjtBQUFBLFNBQzlCRixTQUFTLENBQUNnQixPQUFELEVBQVVkLFFBQVYsQ0FEcUI7QUFBQSxDQUF6Qjs7OztBQUdQLElBQUlILE9BQUosRUFBYTtBQUNYQSxFQUFBQSxPQUFPLENBQUNtQixnQkFBUixDQUF5QixRQUF6QixFQUFtQ1gsYUFBbkM7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNvY2tldCB9IGZyb20gXCIuL3NvY2tldHNcIjtcclxuXHJcbmNvbnN0IG1lc3NhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc01lc3NhZ2VzXCIpLFxyXG4gIHNlbmRNc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzU2VuZE1zZ1wiKTtcclxuXHJcbmNvbnN0IGFwcGVuZE1zZyA9ICh0ZXh0LCBuaWNrbmFtZSkgPT4ge1xyXG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gIGxpLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImF1dGhvciAke25pY2tuYW1lID8gXCJvdXRcIiA6IFwic2VsZlwifVwiPiR7XHJcbiAgICBuaWNrbmFtZSA/IG5pY2tuYW1lIDogXCJZb3VcIlxyXG4gIH06PC9zcGFuPiAke3RleHR9XHJcbiAgICBgO1xyXG4gIG1lc3NhZ2VzLmFwcGVuZENoaWxkKGxpKTtcclxufTtcclxuXHJcbmNvbnN0IGhhbmRsZVNlbmRNc2cgPSBldmVudCA9PiB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCBpbnB1dCA9IHNlbmRNc2cucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xyXG4gIGNvbnN0IHsgdmFsdWUgfSA9IGlucHV0O1xyXG4gIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5zZW5kTXNnLCB7IG1lc3NhZ2U6IHZhbHVlIH0pO1xyXG4gIGlucHV0LnZhbHVlID0gXCJcIjtcclxuICBhcHBlbmRNc2codmFsdWUpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZU5ld01lc3NhZ2UgPSAoeyBtZXNzYWdlLCBuaWNrbmFtZSB9KSA9PlxyXG4gIGFwcGVuZE1zZyhtZXNzYWdlLCBuaWNrbmFtZSk7XHJcblxyXG5pZiAoc2VuZE1zZykge1xyXG4gIHNlbmRNc2cuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVTZW5kTXNnKTtcclxufVxyXG4iXX0=
},{"./sockets":7}],2:[function(require,module,exports){
"use strict";

require("./sockets");

require("./login");

require("./chat");

require("./paint");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfN2JlNTU0M2EuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0c1wiO1xyXG5pbXBvcnQgXCIuL2xvZ2luXCI7XHJcbmltcG9ydCBcIi4vY2hhdFwiO1xyXG5pbXBvcnQgXCIuL3BhaW50XCI7XHJcbiJdfQ==
},{"./chat":1,"./login":3,"./paint":5,"./sockets":7}],3:[function(require,module,exports){
"use strict";

var _sockets = require("./sockets");

var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin");
var NICKNAME = "nickname";
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";
var nickname = localStorage.getItem(NICKNAME);

var logIn = function logIn(nickname) {
  // eslint-disable-next-line no-undef
  var socket = io("/");
  socket.emit(window.events.setNickname, {
    nickname: nickname
  });
  (0, _sockets.initSockets)(socket);
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  logIn(nickname);
}

var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  var input = loginForm.querySelector("input");
  var value = input.value;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  body.className = LOGGED_IN;
  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsIk5JQ0tOQU1FIiwiTE9HR0VEX09VVCIsIkxPR0dFRF9JTiIsIm5pY2tuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ0luIiwic29ja2V0IiwiaW8iLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwic2V0Tmlja25hbWUiLCJjbGFzc05hbWUiLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ2YWx1ZSIsInNldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQU1BLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQSxJQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixTQUF4QixDQUFsQjtBQUVBLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxXQUFuQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxVQUFsQjtBQUVBLElBQU1DLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCTCxRQUFyQixDQUFqQjs7QUFFQSxJQUFNTSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFBSCxRQUFRLEVBQUk7QUFDeEI7QUFDQSxNQUFNSSxNQUFNLEdBQUdDLEVBQUUsQ0FBQyxHQUFELENBQWpCO0FBQ0FELEVBQUFBLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsV0FBMUIsRUFBdUM7QUFBRVQsSUFBQUEsUUFBUSxFQUFSQTtBQUFGLEdBQXZDO0FBQ0EsNEJBQVlJLE1BQVo7QUFDRCxDQUxEOztBQU9BLElBQUlKLFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUNyQlIsRUFBQUEsSUFBSSxDQUFDa0IsU0FBTCxHQUFpQlosVUFBakI7QUFDRCxDQUZELE1BRU87QUFDTE4sRUFBQUEsSUFBSSxDQUFDa0IsU0FBTCxHQUFpQlgsU0FBakI7QUFDQUksRUFBQUEsS0FBSyxDQUFDSCxRQUFELENBQUw7QUFDRDs7QUFFRCxJQUFNVyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUFDLENBQUMsRUFBSTtBQUM1QkEsRUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0EsTUFBTUMsS0FBSyxHQUFHbkIsU0FBUyxDQUFDRCxhQUFWLENBQXdCLE9BQXhCLENBQWQ7QUFGNEIsTUFHcEJxQixLQUhvQixHQUdWRCxLQUhVLENBR3BCQyxLQUhvQjtBQUk1QkQsRUFBQUEsS0FBSyxDQUFDQyxLQUFOLEdBQWMsRUFBZDtBQUNBZCxFQUFBQSxZQUFZLENBQUNlLE9BQWIsQ0FBcUJuQixRQUFyQixFQUErQmtCLEtBQS9CO0FBQ0F2QixFQUFBQSxJQUFJLENBQUNrQixTQUFMLEdBQWlCWCxTQUFqQjtBQUNBSSxFQUFBQSxLQUFLLENBQUNZLEtBQUQsQ0FBTDtBQUNELENBUkQ7O0FBVUEsSUFBSXBCLFNBQUosRUFBZTtBQUNiQSxFQUFBQSxTQUFTLENBQUNzQixnQkFBVixDQUEyQixRQUEzQixFQUFxQ04sZ0JBQXJDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0U29ja2V0cyB9IGZyb20gXCIuL3NvY2tldHNcIjtcclxuXHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0xvZ2luXCIpO1xyXG5cclxuY29uc3QgTklDS05BTUUgPSBcIm5pY2tuYW1lXCI7XHJcbmNvbnN0IExPR0dFRF9PVVQgPSBcImxvZ2dlZE91dFwiO1xyXG5jb25zdCBMT0dHRURfSU4gPSBcImxvZ2dlZEluXCI7XHJcblxyXG5jb25zdCBuaWNrbmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKE5JQ0tOQU1FKTtcclxuXHJcbmNvbnN0IGxvZ0luID0gbmlja25hbWUgPT4ge1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxyXG4gIGNvbnN0IHNvY2tldCA9IGlvKFwiL1wiKTtcclxuICBzb2NrZXQuZW1pdCh3aW5kb3cuZXZlbnRzLnNldE5pY2tuYW1lLCB7IG5pY2tuYW1lIH0pO1xyXG4gIGluaXRTb2NrZXRzKHNvY2tldCk7XHJcbn07XHJcblxyXG5pZiAobmlja25hbWUgPT09IG51bGwpIHtcclxuICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9PVVQ7XHJcbn0gZWxzZSB7XHJcbiAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfSU47XHJcbiAgbG9nSW4obmlja25hbWUpO1xyXG59XHJcblxyXG5jb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gZSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IGlucHV0ID0gbG9naW5Gb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcclxuICBjb25zdCB7IHZhbHVlIH0gPSBpbnB1dDtcclxuICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTklDS05BTUUsIHZhbHVlKTtcclxuICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9JTjtcclxuICBsb2dJbih2YWx1ZSk7XHJcbn07XHJcblxyXG5pZiAobG9naW5Gb3JtKSB7XHJcbiAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybVN1Ym1pdCk7XHJcbn1cclxuIl19
},{"./sockets":7}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDisconnected = exports.handleNewUser = void 0;
var body = document.querySelector("body");

var fireNotification = function fireNotification(text, color) {
  var notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  body.appendChild(notification);
};

var handleNewUser = function handleNewUser(_ref) {
  var nickname = _ref.nickname;
  fireNotification("".concat(nickname, " just logined!"), "rgb(0, 122, 255)");
};

exports.handleNewUser = handleNewUser;

var handleDisconnected = function handleDisconnected(_ref2) {
  var nickname = _ref2.nickname;
  return fireNotification("".concat(nickname, " just left!"), "rgb(255, 204, 0)");
};

exports.handleDisconnected = handleDisconnected;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZpcmVOb3RpZmljYXRpb24iLCJ0ZXh0IiwiY29sb3IiLCJub3RpZmljYXRpb24iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImhhbmRsZU5ld1VzZXIiLCJuaWNrbmFtZSIsImhhbmRsZURpc2Nvbm5lY3RlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjs7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUN4QyxNQUFNQyxZQUFZLEdBQUdMLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixLQUF2QixDQUFyQjtBQUNBRCxFQUFBQSxZQUFZLENBQUNFLFNBQWIsR0FBeUJKLElBQXpCO0FBQ0FFLEVBQUFBLFlBQVksQ0FBQ0csS0FBYixDQUFtQkMsZUFBbkIsR0FBcUNMLEtBQXJDO0FBQ0FDLEVBQUFBLFlBQVksQ0FBQ0ssU0FBYixHQUF5QixjQUF6QjtBQUNBWCxFQUFBQSxJQUFJLENBQUNZLFdBQUwsQ0FBaUJOLFlBQWpCO0FBQ0QsQ0FORDs7QUFRTyxJQUFNTyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQzdDWCxFQUFBQSxnQkFBZ0IsV0FBSVcsUUFBSixxQkFBOEIsa0JBQTlCLENBQWhCO0FBQ0QsQ0FGTTs7OztBQUlBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQSxNQUFHRCxRQUFILFNBQUdBLFFBQUg7QUFBQSxTQUNoQ1gsZ0JBQWdCLFdBQUlXLFFBQUosa0JBQTJCLGtCQUEzQixDQURnQjtBQUFBLENBQTNCIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5cclxuY29uc3QgZmlyZU5vdGlmaWNhdGlvbiA9ICh0ZXh0LCBjb2xvcikgPT4ge1xyXG4gIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbm90aWZpY2F0aW9uLmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgbm90aWZpY2F0aW9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG4gIG5vdGlmaWNhdGlvbi5jbGFzc05hbWUgPSBcIm5vdGlmaWNhdGlvblwiO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVOZXdVc2VyID0gKHsgbmlja25hbWUgfSkgPT4ge1xyXG4gIGZpcmVOb3RpZmljYXRpb24oYCR7bmlja25hbWV9IGp1c3QgbG9naW5lZCFgLCBcInJnYigwLCAxMjIsIDI1NSlcIik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlRGlzY29ubmVjdGVkID0gKHsgbmlja25hbWUgfSkgPT5cclxuICBmaXJlTm90aWZpY2F0aW9uKGAke25pY2tuYW1lfSBqdXN0IGxlZnQhYCwgXCJyZ2IoMjU1LCAyMDQsIDApXCIpO1xyXG4iXX0=
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleFilled = exports.handleStrokedPath = exports.handleBeganPath = void 0;

var _sockets = require("./sockets");

var canvas = document.getElementById("jsCanvas");
var ctx = canvas.getContext("2d");
var colors = document.getElementsByClassName("jsColor");
var range = document.getElementById("jsRange");
var mode = document.getElementById("jsMode");
var saveBtn = document.getElementById("jsSave");
var INITIAL_COLOR = "#2c2c2c";
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;
var painting = false;
var filling = false;

var stopPainting = function stopPainting() {
  painting = false;
};

var startPainting = function startPainting() {
  painting = true;
};

var beginPath = function beginPath(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
};

var strokePath = function strokePath(x, y) {
  var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var size = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var currentColor = ctx.strokeStyle;
  var currentLineWeight = ctx.lineWidth;

  if (color !== null) {
    ctx.strokeStyle = color;
  }

  if (size !== null) {
    ctx.lineWidth = size;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.strokeStyle = currentColor;
  ctx.lineWidth = currentLineWeight;
};

var onMouseMove = function onMouseMove(event) {
  var x = event.offsetX;
  var y = event.offsetY;

  if (!filling) {
    if (!painting) {
      beginPath(x, y);
      (0, _sockets.getSocket)().emit(window.events.beginPath, {
        x: x,
        y: y
      });
    } else {
      strokePath(x, y);
      (0, _sockets.getSocket)().emit(window.events.strokePath, {
        x: x,
        y: y,
        color: ctx.strokeStyle,
        size: ctx.lineWidth
      });
    }
  }
};

var handleColorClick = function handleColorClick(event) {
  var color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
};

var handleRangeChange = function handleRangeChange(event) {
  var size = event.target.value;
  ctx.lineWidth = size;
};

var handleModeClick = function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
};

var fill = function fill() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var currentColor = ctx.fillStyle;

  if (color !== null) {
    ctx.fillStyle = color;
  }

  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = currentColor;
};

var handleCanvasClick = function handleCanvasClick() {
  if (filling) {
    fill();
    (0, _sockets.getSocket)().emit(window.events.fill, {
      color: ctx.fillStyle
    });
  }
};

var handleCM = function handleCM(event) {
  event.preventDefault();
};

var handleSaveClick = function handleSaveClick() {
  canvas.toBlob(function (blob) {
    var link = document.createElement("a");
    link.download = "PaintJS[🎨]";
    link.href = URL.createObjectURL(blob);
    link.click();
  });
};

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors, function (color) {
  color.addEventListener("click", handleColorClick);
});

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

if (saveBtn) {
  saveBtn.addEventListener("click", handleSaveClick);
}

var handleBeganPath = function handleBeganPath(_ref) {
  var x = _ref.x,
      y = _ref.y;
  return beginPath(x, y);
};

exports.handleBeganPath = handleBeganPath;

var handleStrokedPath = function handleStrokedPath(_ref2) {
  var x = _ref2.x,
      y = _ref2.y,
      color = _ref2.color,
      size = _ref2.size;
  return strokePath(x, y, color, size);
};

exports.handleStrokedPath = handleStrokedPath;

var handleFilled = function handleFilled(_ref3) {
  var color = _ref3.color;
  return fill(color);
};

exports.handleFilled = handleFilled;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW50LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiY29sb3JzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInJhbmdlIiwibW9kZSIsInNhdmVCdG4iLCJJTklUSUFMX0NPTE9SIiwic3Ryb2tlU3R5bGUiLCJmaWxsU3R5bGUiLCJsaW5lV2lkdGgiLCJwYWludGluZyIsImZpbGxpbmciLCJzdG9wUGFpbnRpbmciLCJzdGFydFBhaW50aW5nIiwiYmVnaW5QYXRoIiwieCIsInkiLCJtb3ZlVG8iLCJzdHJva2VQYXRoIiwiY29sb3IiLCJzaXplIiwiY3VycmVudENvbG9yIiwiY3VycmVudExpbmVXZWlnaHQiLCJsaW5lVG8iLCJzdHJva2UiLCJvbk1vdXNlTW92ZSIsImV2ZW50Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwiaGFuZGxlQ29sb3JDbGljayIsInRhcmdldCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiaGFuZGxlUmFuZ2VDaGFuZ2UiLCJ2YWx1ZSIsImhhbmRsZU1vZGVDbGljayIsImlubmVyVGV4dCIsImZpbGwiLCJmaWxsUmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiaGFuZGxlQ2FudmFzQ2xpY2siLCJoYW5kbGVDTSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlU2F2ZUNsaWNrIiwidG9CbG9iIiwiYmxvYiIsImxpbmsiLCJjcmVhdGVFbGVtZW50IiwiZG93bmxvYWQiLCJocmVmIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiY2xpY2siLCJhZGRFdmVudExpc3RlbmVyIiwiQXJyYXkiLCJmcm9tIiwiaGFuZGxlQmVnYW5QYXRoIiwiaGFuZGxlU3Ryb2tlZFBhdGgiLCJoYW5kbGVGaWxsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFmO0FBQ0EsSUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBLElBQU1DLE1BQU0sR0FBR0osUUFBUSxDQUFDSyxzQkFBVCxDQUFnQyxTQUFoQyxDQUFmO0FBQ0EsSUFBTUMsS0FBSyxHQUFHTixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBZDtBQUNBLElBQU1NLElBQUksR0FBR1AsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQWI7QUFDQSxJQUFNTyxPQUFPLEdBQUdSLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUFoQjtBQUVBLElBQU1RLGFBQWEsR0FBRyxTQUF0QjtBQUVBUCxHQUFHLENBQUNRLFdBQUosR0FBa0JELGFBQWxCO0FBQ0FQLEdBQUcsQ0FBQ1MsU0FBSixHQUFnQkYsYUFBaEI7QUFDQVAsR0FBRyxDQUFDVSxTQUFKLEdBQWdCLEdBQWhCO0FBRUEsSUFBSUMsUUFBUSxHQUFHLEtBQWY7QUFDQSxJQUFJQyxPQUFPLEdBQUcsS0FBZDs7QUFFQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCRixFQUFBQSxRQUFRLEdBQUcsS0FBWDtBQUNELENBRkQ7O0FBSUEsSUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCSCxFQUFBQSxRQUFRLEdBQUcsSUFBWDtBQUNELENBRkQ7O0FBSUEsSUFBTUksU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDMUJqQixFQUFBQSxHQUFHLENBQUNlLFNBQUo7QUFDQWYsRUFBQUEsR0FBRyxDQUFDa0IsTUFBSixDQUFXRixDQUFYLEVBQWNDLENBQWQ7QUFDRCxDQUhEOztBQUtBLElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNILENBQUQsRUFBSUMsQ0FBSixFQUFxQztBQUFBLE1BQTlCRyxLQUE4Qix1RUFBdEIsSUFBc0I7QUFBQSxNQUFoQkMsSUFBZ0IsdUVBQVQsSUFBUztBQUN0RCxNQUFJQyxZQUFZLEdBQUd0QixHQUFHLENBQUNRLFdBQXZCO0FBQ0EsTUFBSWUsaUJBQWlCLEdBQUd2QixHQUFHLENBQUNVLFNBQTVCOztBQUNBLE1BQUlVLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2xCcEIsSUFBQUEsR0FBRyxDQUFDUSxXQUFKLEdBQWtCWSxLQUFsQjtBQUNEOztBQUNELE1BQUlDLElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ2pCckIsSUFBQUEsR0FBRyxDQUFDVSxTQUFKLEdBQWdCVyxJQUFoQjtBQUNEOztBQUNEckIsRUFBQUEsR0FBRyxDQUFDd0IsTUFBSixDQUFXUixDQUFYLEVBQWNDLENBQWQ7QUFDQWpCLEVBQUFBLEdBQUcsQ0FBQ3lCLE1BQUo7QUFDQXpCLEVBQUFBLEdBQUcsQ0FBQ1EsV0FBSixHQUFrQmMsWUFBbEI7QUFDQXRCLEVBQUFBLEdBQUcsQ0FBQ1UsU0FBSixHQUFnQmEsaUJBQWhCO0FBQ0QsQ0FiRDs7QUFlQSxJQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBQyxLQUFLLEVBQUk7QUFDM0IsTUFBTVgsQ0FBQyxHQUFHVyxLQUFLLENBQUNDLE9BQWhCO0FBQ0EsTUFBTVgsQ0FBQyxHQUFHVSxLQUFLLENBQUNFLE9BQWhCOztBQUNBLE1BQUksQ0FBQ2pCLE9BQUwsRUFBYztBQUNaLFFBQUksQ0FBQ0QsUUFBTCxFQUFlO0FBQ2JJLE1BQUFBLFNBQVMsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLENBQVQ7QUFDQSxnQ0FBWWEsSUFBWixDQUFpQkMsTUFBTSxDQUFDQyxNQUFQLENBQWNqQixTQUEvQixFQUEwQztBQUFFQyxRQUFBQSxDQUFDLEVBQURBLENBQUY7QUFBS0MsUUFBQUEsQ0FBQyxFQUFEQTtBQUFMLE9BQTFDO0FBQ0QsS0FIRCxNQUdPO0FBQ0xFLE1BQUFBLFVBQVUsQ0FBQ0gsQ0FBRCxFQUFJQyxDQUFKLENBQVY7QUFDQSxnQ0FBWWEsSUFBWixDQUFpQkMsTUFBTSxDQUFDQyxNQUFQLENBQWNiLFVBQS9CLEVBQTJDO0FBQ3pDSCxRQUFBQSxDQUFDLEVBQURBLENBRHlDO0FBRXpDQyxRQUFBQSxDQUFDLEVBQURBLENBRnlDO0FBR3pDRyxRQUFBQSxLQUFLLEVBQUVwQixHQUFHLENBQUNRLFdBSDhCO0FBSXpDYSxRQUFBQSxJQUFJLEVBQUVyQixHQUFHLENBQUNVO0FBSitCLE9BQTNDO0FBTUQ7QUFDRjtBQUNGLENBakJEOztBQW1CQSxJQUFNdUIsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFBTixLQUFLLEVBQUk7QUFDaEMsTUFBTVAsS0FBSyxHQUFHTyxLQUFLLENBQUNPLE1BQU4sQ0FBYUMsS0FBYixDQUFtQkMsZUFBakM7QUFDQXBDLEVBQUFBLEdBQUcsQ0FBQ1EsV0FBSixHQUFrQlksS0FBbEI7QUFDQXBCLEVBQUFBLEdBQUcsQ0FBQ1MsU0FBSixHQUFnQlcsS0FBaEI7QUFDRCxDQUpEOztBQU1BLElBQU1pQixpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFWLEtBQUssRUFBSTtBQUNqQyxNQUFNTixJQUFJLEdBQUdNLEtBQUssQ0FBQ08sTUFBTixDQUFhSSxLQUExQjtBQUNBdEMsRUFBQUEsR0FBRyxDQUFDVSxTQUFKLEdBQWdCVyxJQUFoQjtBQUNELENBSEQ7O0FBS0EsSUFBTWtCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QixNQUFJM0IsT0FBTyxLQUFLLElBQWhCLEVBQXNCO0FBQ3BCQSxJQUFBQSxPQUFPLEdBQUcsS0FBVjtBQUNBUCxJQUFBQSxJQUFJLENBQUNtQyxTQUFMLEdBQWlCLE1BQWpCO0FBQ0QsR0FIRCxNQUdPO0FBQ0w1QixJQUFBQSxPQUFPLEdBQUcsSUFBVjtBQUNBUCxJQUFBQSxJQUFJLENBQUNtQyxTQUFMLEdBQWlCLE9BQWpCO0FBQ0Q7QUFDRixDQVJEOztBQVVBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQWtCO0FBQUEsTUFBakJyQixLQUFpQix1RUFBVCxJQUFTO0FBQzdCLE1BQUlFLFlBQVksR0FBR3RCLEdBQUcsQ0FBQ1MsU0FBdkI7O0FBQ0EsTUFBSVcsS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDbEJwQixJQUFBQSxHQUFHLENBQUNTLFNBQUosR0FBZ0JXLEtBQWhCO0FBQ0Q7O0FBQ0RwQixFQUFBQSxHQUFHLENBQUMwQyxRQUFKLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQjdDLE1BQU0sQ0FBQzhDLEtBQTFCLEVBQWlDOUMsTUFBTSxDQUFDK0MsTUFBeEM7QUFDQTVDLEVBQUFBLEdBQUcsQ0FBQ1MsU0FBSixHQUFnQmEsWUFBaEI7QUFDRCxDQVBEOztBQVNBLElBQU11QixpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDOUIsTUFBSWpDLE9BQUosRUFBYTtBQUNYNkIsSUFBQUEsSUFBSTtBQUNKLDhCQUFZWCxJQUFaLENBQWlCQyxNQUFNLENBQUNDLE1BQVAsQ0FBY1MsSUFBL0IsRUFBcUM7QUFBRXJCLE1BQUFBLEtBQUssRUFBRXBCLEdBQUcsQ0FBQ1M7QUFBYixLQUFyQztBQUNEO0FBQ0YsQ0FMRDs7QUFPQSxJQUFNcUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQW5CLEtBQUssRUFBSTtBQUN4QkEsRUFBQUEsS0FBSyxDQUFDb0IsY0FBTjtBQUNELENBRkQ7O0FBSUEsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCbkQsRUFBQUEsTUFBTSxDQUFDb0QsTUFBUCxDQUFjLFVBQVNDLElBQVQsRUFBZTtBQUMzQixRQUFNQyxJQUFJLEdBQUdyRCxRQUFRLENBQUNzRCxhQUFULENBQXVCLEdBQXZCLENBQWI7QUFDQUQsSUFBQUEsSUFBSSxDQUFDRSxRQUFMLEdBQWdCLGFBQWhCO0FBQ0FGLElBQUFBLElBQUksQ0FBQ0csSUFBTCxHQUFZQyxHQUFHLENBQUNDLGVBQUosQ0FBb0JOLElBQXBCLENBQVo7QUFDQUMsSUFBQUEsSUFBSSxDQUFDTSxLQUFMO0FBQ0QsR0FMRDtBQU1ELENBUEQ7O0FBU0EsSUFBSTVELE1BQUosRUFBWTtBQUNWQSxFQUFBQSxNQUFNLENBQUM2RCxnQkFBUCxDQUF3QixXQUF4QixFQUFxQ2hDLFdBQXJDO0FBQ0E3QixFQUFBQSxNQUFNLENBQUM2RCxnQkFBUCxDQUF3QixXQUF4QixFQUFxQzVDLGFBQXJDO0FBQ0FqQixFQUFBQSxNQUFNLENBQUM2RCxnQkFBUCxDQUF3QixTQUF4QixFQUFtQzdDLFlBQW5DO0FBQ0FoQixFQUFBQSxNQUFNLENBQUM2RCxnQkFBUCxDQUF3QixZQUF4QixFQUFzQzdDLFlBQXRDO0FBQ0FoQixFQUFBQSxNQUFNLENBQUM2RCxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ2IsaUJBQWpDO0FBQ0FoRCxFQUFBQSxNQUFNLENBQUM2RCxnQkFBUCxDQUF3QixhQUF4QixFQUF1Q1osUUFBdkM7QUFDRDs7QUFFRGEsS0FBSyxDQUFDQyxJQUFOLENBQVcxRCxNQUFYLEVBQW1CLFVBQUFrQixLQUFLLEVBQUk7QUFDMUJBLEVBQUFBLEtBQUssQ0FBQ3NDLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDekIsZ0JBQWhDO0FBQ0QsQ0FGRDs7QUFJQSxJQUFJN0IsS0FBSixFQUFXO0FBQ1RBLEVBQUFBLEtBQUssQ0FBQ3NELGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDckIsaUJBQWhDO0FBQ0Q7O0FBRUQsSUFBSWhDLElBQUosRUFBVTtBQUNSQSxFQUFBQSxJQUFJLENBQUNxRCxnQkFBTCxDQUFzQixPQUF0QixFQUErQm5CLGVBQS9CO0FBQ0Q7O0FBRUQsSUFBSWpDLE9BQUosRUFBYTtBQUNYQSxFQUFBQSxPQUFPLENBQUNvRCxnQkFBUixDQUF5QixPQUF6QixFQUFrQ1YsZUFBbEM7QUFDRDs7QUFFTSxJQUFNYSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsTUFBRzdDLENBQUgsUUFBR0EsQ0FBSDtBQUFBLE1BQU1DLENBQU4sUUFBTUEsQ0FBTjtBQUFBLFNBQWNGLFNBQVMsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLENBQXZCO0FBQUEsQ0FBeEI7Ozs7QUFDQSxJQUFNNkMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLE1BQUc5QyxDQUFILFNBQUdBLENBQUg7QUFBQSxNQUFNQyxDQUFOLFNBQU1BLENBQU47QUFBQSxNQUFTRyxLQUFULFNBQVNBLEtBQVQ7QUFBQSxNQUFnQkMsSUFBaEIsU0FBZ0JBLElBQWhCO0FBQUEsU0FDL0JGLFVBQVUsQ0FBQ0gsQ0FBRCxFQUFJQyxDQUFKLEVBQU9HLEtBQVAsRUFBY0MsSUFBZCxDQURxQjtBQUFBLENBQTFCOzs7O0FBRUEsSUFBTTBDLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsTUFBRzNDLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVxQixJQUFJLENBQUNyQixLQUFELENBQW5CO0FBQUEsQ0FBckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XHJcblxyXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzQ2FudmFzXCIpO1xyXG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5jb25zdCBjb2xvcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwianNDb2xvclwiKTtcclxuY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzUmFuZ2VcIik7XHJcbmNvbnN0IG1vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTW9kZVwiKTtcclxuY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNTYXZlXCIpO1xyXG5cclxuY29uc3QgSU5JVElBTF9DT0xPUiA9IFwiIzJjMmMyY1wiO1xyXG5cclxuY3R4LnN0cm9rZVN0eWxlID0gSU5JVElBTF9DT0xPUjtcclxuY3R4LmZpbGxTdHlsZSA9IElOSVRJQUxfQ09MT1I7XHJcbmN0eC5saW5lV2lkdGggPSAyLjU7XHJcblxyXG5sZXQgcGFpbnRpbmcgPSBmYWxzZTtcclxubGV0IGZpbGxpbmcgPSBmYWxzZTtcclxuXHJcbmNvbnN0IHN0b3BQYWludGluZyA9ICgpID0+IHtcclxuICBwYWludGluZyA9IGZhbHNlO1xyXG59O1xyXG5cclxuY29uc3Qgc3RhcnRQYWludGluZyA9ICgpID0+IHtcclxuICBwYWludGluZyA9IHRydWU7XHJcbn07XHJcblxyXG5jb25zdCBiZWdpblBhdGggPSAoeCwgeSkgPT4ge1xyXG4gIGN0eC5iZWdpblBhdGgoKTtcclxuICBjdHgubW92ZVRvKHgsIHkpO1xyXG59O1xyXG5cclxuY29uc3Qgc3Ryb2tlUGF0aCA9ICh4LCB5LCBjb2xvciA9IG51bGwsIHNpemUgPSBudWxsKSA9PiB7XHJcbiAgbGV0IGN1cnJlbnRDb2xvciA9IGN0eC5zdHJva2VTdHlsZTtcclxuICBsZXQgY3VycmVudExpbmVXZWlnaHQgPSBjdHgubGluZVdpZHRoO1xyXG4gIGlmIChjb2xvciAhPT0gbnVsbCkge1xyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XHJcbiAgfVxyXG4gIGlmIChzaXplICE9PSBudWxsKSB7XHJcbiAgICBjdHgubGluZVdpZHRoID0gc2l6ZTtcclxuICB9XHJcbiAgY3R4LmxpbmVUbyh4LCB5KTtcclxuICBjdHguc3Ryb2tlKCk7XHJcbiAgY3R4LnN0cm9rZVN0eWxlID0gY3VycmVudENvbG9yO1xyXG4gIGN0eC5saW5lV2lkdGggPSBjdXJyZW50TGluZVdlaWdodDtcclxufTtcclxuXHJcbmNvbnN0IG9uTW91c2VNb3ZlID0gZXZlbnQgPT4ge1xyXG4gIGNvbnN0IHggPSBldmVudC5vZmZzZXRYO1xyXG4gIGNvbnN0IHkgPSBldmVudC5vZmZzZXRZO1xyXG4gIGlmICghZmlsbGluZykge1xyXG4gICAgaWYgKCFwYWludGluZykge1xyXG4gICAgICBiZWdpblBhdGgoeCwgeSk7XHJcbiAgICAgIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5iZWdpblBhdGgsIHsgeCwgeSB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0cm9rZVBhdGgoeCwgeSk7XHJcbiAgICAgIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5zdHJva2VQYXRoLCB7XHJcbiAgICAgICAgeCxcclxuICAgICAgICB5LFxyXG4gICAgICAgIGNvbG9yOiBjdHguc3Ryb2tlU3R5bGUsXHJcbiAgICAgICAgc2l6ZTogY3R4LmxpbmVXaWR0aFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBoYW5kbGVDb2xvckNsaWNrID0gZXZlbnQgPT4ge1xyXG4gIGNvbnN0IGNvbG9yID0gZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvcjtcclxuICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuICBjdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbn07XHJcblxyXG5jb25zdCBoYW5kbGVSYW5nZUNoYW5nZSA9IGV2ZW50ID0+IHtcclxuICBjb25zdCBzaXplID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gIGN0eC5saW5lV2lkdGggPSBzaXplO1xyXG59O1xyXG5cclxuY29uc3QgaGFuZGxlTW9kZUNsaWNrID0gKCkgPT4ge1xyXG4gIGlmIChmaWxsaW5nID09PSB0cnVlKSB7XHJcbiAgICBmaWxsaW5nID0gZmFsc2U7XHJcbiAgICBtb2RlLmlubmVyVGV4dCA9IFwiRmlsbFwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBmaWxsaW5nID0gdHJ1ZTtcclxuICAgIG1vZGUuaW5uZXJUZXh0ID0gXCJQYWludFwiO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGZpbGwgPSAoY29sb3IgPSBudWxsKSA9PiB7XHJcbiAgbGV0IGN1cnJlbnRDb2xvciA9IGN0eC5maWxsU3R5bGU7XHJcbiAgaWYgKGNvbG9yICE9PSBudWxsKSB7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgfVxyXG4gIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gIGN0eC5maWxsU3R5bGUgPSBjdXJyZW50Q29sb3I7XHJcbn07XHJcblxyXG5jb25zdCBoYW5kbGVDYW52YXNDbGljayA9ICgpID0+IHtcclxuICBpZiAoZmlsbGluZykge1xyXG4gICAgZmlsbCgpO1xyXG4gICAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLmZpbGwsIHsgY29sb3I6IGN0eC5maWxsU3R5bGUgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgaGFuZGxlQ00gPSBldmVudCA9PiB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxufTtcclxuXHJcbmNvbnN0IGhhbmRsZVNhdmVDbGljayA9ICgpID0+IHtcclxuICBjYW52YXMudG9CbG9iKGZ1bmN0aW9uKGJsb2IpIHtcclxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIGxpbmsuZG93bmxvYWQgPSBcIlBhaW50SlNb8J+OqF1cIjtcclxuICAgIGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICBsaW5rLmNsaWNrKCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5pZiAoY2FudmFzKSB7XHJcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xyXG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHN0YXJ0UGFpbnRpbmcpO1xyXG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wUGFpbnRpbmcpO1xyXG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBzdG9wUGFpbnRpbmcpO1xyXG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2FudmFzQ2xpY2spO1xyXG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgaGFuZGxlQ00pO1xyXG59XHJcblxyXG5BcnJheS5mcm9tKGNvbG9ycywgY29sb3IgPT4ge1xyXG4gIGNvbG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDb2xvckNsaWNrKTtcclxufSk7XHJcblxyXG5pZiAocmFuZ2UpIHtcclxuICByYW5nZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgaGFuZGxlUmFuZ2VDaGFuZ2UpO1xyXG59XHJcblxyXG5pZiAobW9kZSkge1xyXG4gIG1vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZU1vZGVDbGljayk7XHJcbn1cclxuXHJcbmlmIChzYXZlQnRuKSB7XHJcbiAgc2F2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlU2F2ZUNsaWNrKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZUJlZ2FuUGF0aCA9ICh7IHgsIHkgfSkgPT4gYmVnaW5QYXRoKHgsIHkpO1xyXG5leHBvcnQgY29uc3QgaGFuZGxlU3Ryb2tlZFBhdGggPSAoeyB4LCB5LCBjb2xvciwgc2l6ZSB9KSA9PlxyXG4gIHN0cm9rZVBhdGgoeCwgeSwgY29sb3IsIHNpemUpO1xyXG5leHBvcnQgY29uc3QgaGFuZGxlRmlsbGVkID0gKHsgY29sb3IgfSkgPT4gZmlsbChjb2xvcik7XHJcbiJdfQ==
},{"./sockets":7}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handlePlayerUpdate = void 0;
var board = document.getElementById("jsPBoard");

var addPlayers = function addPlayers(players) {
  board.innerHTML = "";
  players.forEach(function (player) {
    var playerElement = document.createElement("span");
    playerElement.innerText = "".concat(player.nickname, ": ").concat(player.points);
    board.appendChild(playerElement);
  });
};

var handlePlayerUpdate = function handlePlayerUpdate(_ref) {
  var sockets = _ref.sockets;
  return addPlayers(sockets);
};

exports.handlePlayerUpdate = handlePlayerUpdate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllcnMuanMiXSwibmFtZXMiOlsiYm9hcmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkUGxheWVycyIsInBsYXllcnMiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwicGxheWVyIiwicGxheWVyRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJuaWNrbmFtZSIsInBvaW50cyIsImFwcGVuZENoaWxkIiwiaGFuZGxlUGxheWVyVXBkYXRlIiwic29ja2V0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZDs7QUFFQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBQyxPQUFPLEVBQUk7QUFDNUJKLEVBQUFBLEtBQUssQ0FBQ0ssU0FBTixHQUFrQixFQUFsQjtBQUNBRCxFQUFBQSxPQUFPLENBQUNFLE9BQVIsQ0FBZ0IsVUFBQUMsTUFBTSxFQUFJO0FBQ3hCLFFBQU1DLGFBQWEsR0FBR1AsUUFBUSxDQUFDUSxhQUFULENBQXVCLE1BQXZCLENBQXRCO0FBQ0FELElBQUFBLGFBQWEsQ0FBQ0UsU0FBZCxhQUE2QkgsTUFBTSxDQUFDSSxRQUFwQyxlQUFpREosTUFBTSxDQUFDSyxNQUF4RDtBQUNBWixJQUFBQSxLQUFLLENBQUNhLFdBQU4sQ0FBa0JMLGFBQWxCO0FBQ0QsR0FKRDtBQUtELENBUEQ7O0FBU08sSUFBTU0sa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtBQUFBLE1BQUdDLE9BQUgsUUFBR0EsT0FBSDtBQUFBLFNBQWlCWixVQUFVLENBQUNZLE9BQUQsQ0FBM0I7QUFBQSxDQUEzQiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc1BCb2FyZFwiKTtcclxuXHJcbmNvbnN0IGFkZFBsYXllcnMgPSBwbGF5ZXJzID0+IHtcclxuICBib2FyZC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIHBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xyXG4gICAgY29uc3QgcGxheWVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgcGxheWVyRWxlbWVudC5pbm5lclRleHQgPSBgJHtwbGF5ZXIubmlja25hbWV9OiAke3BsYXllci5wb2ludHN9YDtcclxuICAgIGJvYXJkLmFwcGVuZENoaWxkKHBsYXllckVsZW1lbnQpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZVBsYXllclVwZGF0ZSA9ICh7IHNvY2tldHMgfSkgPT4gYWRkUGxheWVycyhzb2NrZXRzKTtcclxuIl19
},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSockets = exports.updateSocket = exports.getSocket = void 0;

var _notifications = require("./notifications");

var _chat = require("./chat");

var _paint = require("./paint");

var _players = require("./players");

var socket = null;

var getSocket = function getSocket() {
  return socket;
};

exports.getSocket = getSocket;

var updateSocket = function updateSocket(aSocket) {
  return socket = aSocket;
};

exports.updateSocket = updateSocket;

var initSockets = function initSockets(aSocket) {
  var _window = window,
      events = _window.events;
  updateSocket(aSocket);
  socket.on(events.newUser, _notifications.handleNewUser);
  socket.on(events.disconnected, _notifications.handleDisconnected);
  socket.on(events.newMsg, _chat.handleNewMessage);
  socket.on(events.beganPath, _paint.handleBeganPath);
  socket.on(events.strokedPath, _paint.handleStrokedPath);
  socket.on(events.filled, _paint.handleFilled);
  socket.on(events.changeLineWidth, _paint.handleLineWeight);
  socket.on(events.playerUpdate, _players.handlePlayerUpdate);
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwidXBkYXRlU29ja2V0IiwiYVNvY2tldCIsImluaXRTb2NrZXRzIiwid2luZG93IiwiZXZlbnRzIiwib24iLCJuZXdVc2VyIiwiaGFuZGxlTmV3VXNlciIsImRpc2Nvbm5lY3RlZCIsImhhbmRsZURpc2Nvbm5lY3RlZCIsIm5ld01zZyIsImhhbmRsZU5ld01lc3NhZ2UiLCJiZWdhblBhdGgiLCJoYW5kbGVCZWdhblBhdGgiLCJzdHJva2VkUGF0aCIsImhhbmRsZVN0cm9rZWRQYXRoIiwiZmlsbGVkIiwiaGFuZGxlRmlsbGVkIiwiY2hhbmdlTGluZVdpZHRoIiwiaGFuZGxlTGluZVdlaWdodCIsInBsYXllclVwZGF0ZSIsImhhbmRsZVBsYXllclVwZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQU1BOztBQUVBLElBQUlBLE1BQU0sR0FBRyxJQUFiOztBQUVPLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsU0FBTUQsTUFBTjtBQUFBLENBQWxCOzs7O0FBRUEsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsT0FBTztBQUFBLFNBQUtILE1BQU0sR0FBR0csT0FBZDtBQUFBLENBQTVCOzs7O0FBRUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUQsT0FBTyxFQUFJO0FBQUEsZ0JBQ2pCRSxNQURpQjtBQUFBLE1BQzVCQyxNQUQ0QixXQUM1QkEsTUFENEI7QUFFcENKLEVBQUFBLFlBQVksQ0FBQ0MsT0FBRCxDQUFaO0FBQ0FILEVBQUFBLE1BQU0sQ0FBQ08sRUFBUCxDQUFVRCxNQUFNLENBQUNFLE9BQWpCLEVBQTBCQyw0QkFBMUI7QUFDQVQsRUFBQUEsTUFBTSxDQUFDTyxFQUFQLENBQVVELE1BQU0sQ0FBQ0ksWUFBakIsRUFBK0JDLGlDQUEvQjtBQUNBWCxFQUFBQSxNQUFNLENBQUNPLEVBQVAsQ0FBVUQsTUFBTSxDQUFDTSxNQUFqQixFQUF5QkMsc0JBQXpCO0FBQ0FiLEVBQUFBLE1BQU0sQ0FBQ08sRUFBUCxDQUFVRCxNQUFNLENBQUNRLFNBQWpCLEVBQTRCQyxzQkFBNUI7QUFDQWYsRUFBQUEsTUFBTSxDQUFDTyxFQUFQLENBQVVELE1BQU0sQ0FBQ1UsV0FBakIsRUFBOEJDLHdCQUE5QjtBQUNBakIsRUFBQUEsTUFBTSxDQUFDTyxFQUFQLENBQVVELE1BQU0sQ0FBQ1ksTUFBakIsRUFBeUJDLG1CQUF6QjtBQUNBbkIsRUFBQUEsTUFBTSxDQUFDTyxFQUFQLENBQVVELE1BQU0sQ0FBQ2MsZUFBakIsRUFBa0NDLHVCQUFsQztBQUNBckIsRUFBQUEsTUFBTSxDQUFDTyxFQUFQLENBQVVELE1BQU0sQ0FBQ2dCLFlBQWpCLEVBQStCQywyQkFBL0I7QUFDRCxDQVhNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlTmV3VXNlciwgaGFuZGxlRGlzY29ubmVjdGVkIH0gZnJvbSBcIi4vbm90aWZpY2F0aW9uc1wiO1xyXG5pbXBvcnQgeyBoYW5kbGVOZXdNZXNzYWdlIH0gZnJvbSBcIi4vY2hhdFwiO1xyXG5pbXBvcnQge1xyXG4gIGhhbmRsZUJlZ2FuUGF0aCxcclxuICBoYW5kbGVTdHJva2VkUGF0aCxcclxuICBoYW5kbGVGaWxsZWQsXHJcbiAgaGFuZGxlTGluZVdlaWdodFxyXG59IGZyb20gXCIuL3BhaW50XCI7XHJcbmltcG9ydCB7IGhhbmRsZVBsYXllclVwZGF0ZSB9IGZyb20gXCIuL3BsYXllcnNcIjtcclxuXHJcbmxldCBzb2NrZXQgPSBudWxsO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNvY2tldCA9ICgpID0+IHNvY2tldDtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVTb2NrZXQgPSBhU29ja2V0ID0+IChzb2NrZXQgPSBhU29ja2V0KTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0U29ja2V0cyA9IGFTb2NrZXQgPT4ge1xyXG4gIGNvbnN0IHsgZXZlbnRzIH0gPSB3aW5kb3c7XHJcbiAgdXBkYXRlU29ja2V0KGFTb2NrZXQpO1xyXG4gIHNvY2tldC5vbihldmVudHMubmV3VXNlciwgaGFuZGxlTmV3VXNlcik7XHJcbiAgc29ja2V0Lm9uKGV2ZW50cy5kaXNjb25uZWN0ZWQsIGhhbmRsZURpc2Nvbm5lY3RlZCk7XHJcbiAgc29ja2V0Lm9uKGV2ZW50cy5uZXdNc2csIGhhbmRsZU5ld01lc3NhZ2UpO1xyXG4gIHNvY2tldC5vbihldmVudHMuYmVnYW5QYXRoLCBoYW5kbGVCZWdhblBhdGgpO1xyXG4gIHNvY2tldC5vbihldmVudHMuc3Ryb2tlZFBhdGgsIGhhbmRsZVN0cm9rZWRQYXRoKTtcclxuICBzb2NrZXQub24oZXZlbnRzLmZpbGxlZCwgaGFuZGxlRmlsbGVkKTtcclxuICBzb2NrZXQub24oZXZlbnRzLmNoYW5nZUxpbmVXaWR0aCwgaGFuZGxlTGluZVdlaWdodCk7XHJcbiAgc29ja2V0Lm9uKGV2ZW50cy5wbGF5ZXJVcGRhdGUsIGhhbmRsZVBsYXllclVwZGF0ZSk7XHJcbn07XHJcbiJdfQ==
},{"./chat":1,"./notifications":4,"./paint":5,"./players":6}]},{},[2])