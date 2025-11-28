/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/acceso.ts":
/*!***************************!*\
  !*** ./scripts/acceso.ts ***!
  \***************************/
/***/ (() => {

eval("{document.addEventListener(\"DOMContentLoaded\", () => {\n    const boton = document.getElementById(\"btn-accesar\");\n    boton.addEventListener(\"click\", accesar);\n});\nfunction accesar() {\n    const correo = document.getElementById(\"correo\");\n    const password = document.getElementById(\"password\");\n    let ok = true;\n    limpiarError(correo.id);\n    limpiarError(password.id);\n    if (!correo.value) {\n        ok = false;\n        mostrarError(correo.id, \"Dato requerido\");\n    }\n    if (!password.value) {\n        ok = false;\n        mostrarError(password.id, \"Dato requerido\");\n    }\n    if (!ok) {\n        return;\n    }\n    //Llamar a la api\n    alert(\"Llamar a la api\");\n}\nfunction mostrarError(id, texto) {\n    const divId = \"error-\" + id;\n    const div = document.createElement(\"div\");\n    div.classList.add(\"invalid-feedback\");\n    div.id = divId;\n    div.innerText = texto;\n    const controlPorValidar = document.getElementById(id);\n    controlPorValidar.classList.add(\"is-invalid\");\n    const padre = controlPorValidar.parentElement;\n    padre.appendChild(div);\n}\nfunction limpiarError(id) {\n    const divId = \"error-\" + id;\n    const controlPorValidar = document.getElementById(id);\n    const div = document.getElementById(divId);\n    controlPorValidar.classList.remove(\"is-invalid\");\n    if (div)\n        div.remove();\n}\n\n\n//# sourceURL=webpack://proyecto.web/./scripts/acceso.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./scripts/acceso.ts"]();
/******/ 	
/******/ })()
;