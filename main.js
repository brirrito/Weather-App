/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/logic.js":
/*!********************************!*\
  !*** ./src/functions/logic.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst logic = (() => {\n  function convertData(data) {\n    const {\n      name: cityName,\n      main: { temp: temperature, feels_like: feelsLike, humidity },\n      wind: { speed: windSpeed },\n    } = data;\n    return { cityName, temperature, feelsLike, humidity, windSpeed };\n  }\n\n  async function getData(city) {\n    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2c68050dc48447897a26a00ed5d7e8ef`;\n    try {\n      const response = await fetch(endpoint, { mode: 'cors' });\n      if (!response.ok) throw new Error(`City ${city} not found`);\n      const data = convertData(await response.json());\n      return data;\n    } catch (error) {\n      alert(error);\n      return null;\n    }\n  }\n  return { getData };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logic);\n\n//# sourceURL=webpack://weather-app/./src/functions/logic.js?");

/***/ }),

/***/ "./src/functions/view.js":
/*!*******************************!*\
  !*** ./src/functions/view.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/functions/logic.js\");\n\n\nconst view = (() => {\n  function setSearchResult(weatherData) {\n    if (!weatherData) return;\n\n    const searchResult = document.getElementById('searchResult');\n    searchResult.classList.add('active');\n\n    const cityName = document.getElementById('cityName');\n    const temperature = document.getElementById('temperature');\n    const feelsLike = document.getElementById('feelsLike');\n    const humidity = document.getElementById('humidity');\n    const wind = document.getElementById('wind');\n\n    cityName.textContent = `${weatherData.cityName}`;\n    temperature.textContent = `${Math.round(1.8 * weatherData.temperature + 32)}°F`;\n    feelsLike.textContent = `Feels like: ${Math.round(1.8 * weatherData.feelsLike + 32)}°F`;\n    humidity.textContent = `Humidity: ${weatherData.humidity}%`;\n    wind.textContent = `Wind: ${Math.round(10 * weatherData.windSpeed * 0.62137) / 10 } m/h`;\n  }\n\n  return { setSearchResult };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (view);\n\n\n//# sourceURL=webpack://weather-app/./src/functions/view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/logic */ \"./src/functions/logic.js\");\n/* harmony import */ var _functions_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/view */ \"./src/functions/view.js\");\n\n\n\nconst searchForm = document.getElementById('searchForm');\nconst searchInput = document.getElementById('searchInput');\nconst searchBtn = document.getElementById('searchBtn');\n\nsearchForm.addEventListener('submit', (e) => {\n  e.preventDefault();\n});\n\nsearchBtn.addEventListener('click', async() => {\n  if (searchInput.value === '') return;\n  const weatherData = await _functions_logic__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getData(searchInput.value);\n  _functions_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setSearchResult(weatherData);\n});\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;