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
/***/ (function() {

eval("{var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const boton = document.getElementById(\"btn-accesar\");\n    boton.addEventListener(\"click\", accesar);\n});\nfunction accesar() {\n    return __awaiter(this, void 0, void 0, function* () {\n        const correo = document.getElementById(\"correo\");\n        const password = document.getElementById(\"password\");\n        const mensaje = document.getElementById(\"mensaje\");\n        let ok = true;\n        limpiarError(correo.id);\n        limpiarError(password.id);\n        mensaje.innerText = \"\";\n        if (!correo.value) {\n            ok = false;\n            mostrarError(correo.id, \"Dato requerido\");\n        }\n        if (!password.value) {\n            ok = false;\n            mostrarError(password.id, \"Dato requerido\");\n        }\n        if (!ok) {\n            return;\n        }\n        const form = new FormData();\n        form.append(\"correo\", correo.value);\n        form.append(\"password\", password.value);\n        //Llamar a la api\n        const response = yield fetch(\"/api/usuarios/validar\", {\n            method: \"post\",\n            body: form\n        });\n        if (response.ok) {\n            location.href = \"/pet/registro\";\n        }\n        else {\n            mensaje.innerText = yield response.text();\n        }\n    });\n}\nfunction mostrarError(id, texto) {\n    const divId = \"error-\" + id;\n    const div = document.createElement(\"div\");\n    div.classList.add(\"invalid-feedback\");\n    div.id = divId;\n    div.innerText = texto;\n    const controlPorValidar = document.getElementById(id);\n    controlPorValidar.classList.add(\"is-invalid\");\n    const padre = controlPorValidar.parentElement;\n    padre.appendChild(div);\n}\nfunction limpiarError(id) {\n    const divId = \"error-\" + id;\n    const controlPorValidar = document.getElementById(id);\n    const div = document.getElementById(divId);\n    controlPorValidar.classList.remove(\"is-invalid\");\n    if (div)\n        div.remove();\n}\n\n\n//# sourceURL=webpack://proyecto.web/./scripts/acceso.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./scripts/acceso.ts"].call(__webpack_exports__);
/******/ 	
/******/ })()
;