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

/***/ "./scripts/periodos.ts":
/*!*****************************!*\
  !*** ./scripts/periodos.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cargarPeriodos: () => (/* binding */ cargarPeriodos)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nfunction cargarPeriodos(periodo) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const url = \"/api/periodos-semestrales\";\n        var respuesta = yield fetch(url);\n        if (respuesta.ok) {\n            //obtuvo los eleementos desde la peticion a la api\n            const datos = yield respuesta.json();\n            console.log(\"La respuesta es \", datos);\n            periodo.innerHTML = \"\";\n            const opcionDefault = document.createElement(\"option\");\n            opcionDefault.value = \"0\";\n            opcionDefault.text = \"(Seleccione un periodo)\";\n            periodo.appendChild(opcionDefault);\n            datos.map(p => {\n                const opcion = document.createElement(\"option\");\n                opcion.value = ((p.Anio * 100) + p.Periodo).toString();\n                opcion.text = p.Anio.toString() + \"-\" + p.Periodo.toString() + \" \" + p.Nombre;\n                periodo.appendChild(opcion);\n            });\n        }\n        else {\n            alert(\"Ocurrio un error al obtener los periodos semestrales\");\n        }\n    });\n}\n\n\n//# sourceURL=webpack://proyecto.web/./scripts/periodos.ts?\n}");

/***/ }),

/***/ "./scripts/registro.ts":
/*!*****************************!*\
  !*** ./scripts/registro.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _periodos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./periodos */ \"./scripts/periodos.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const boton = document.getElementById(\"boton-registrar\");\n    const periodo = document.getElementById(\"periodo-semestral\");\n    boton.addEventListener(\"click\", registrar);\n    periodo.addEventListener(\"change\", cargarGrupos);\n    (0,_periodos__WEBPACK_IMPORTED_MODULE_0__.cargarPeriodos)(periodo);\n    cargarPersonal();\n});\nfunction registrar() {\n    const periodo = document.getElementById(\"periodo-semestral\");\n    const grupo = document.getElementById(\"grupo\");\n    const registrado = document.getElementById(\"registrado-por\");\n    const numControl = document.getElementById(\"num-control\");\n    const alumno = document.getElementById(\"alumno\");\n    const peso = document.getElementById(\"peso\");\n    limpiarError(periodo.id);\n    limpiarError(grupo.id);\n    limpiarError(registrado.id);\n    limpiarError(numControl.id);\n    limpiarError(alumno.id);\n    limpiarError(peso.id);\n    let ok = true;\n    if (!alumno.value || alumno.value.trim() === \"\") {\n        mostrarError(alumno.id, \"Dato requerido\");\n        ok = false;\n    }\n    if (!numControl.value || numControl.value.trim() === \"\") {\n        mostrarError(numControl.id, \"Dato requerido\");\n        ok = false;\n    }\n    else if (numControl.value.trim().length !== 14) {\n        mostrarError(numControl.id, \"Debe capturar 14 dígitos\");\n        ok = false;\n    }\n    if (!peso.value || peso.value.trim() === \"\") {\n        mostrarError(peso.id, \"Dato requerido\");\n        ok = false;\n    }\n    else {\n        const pesoConNumero = parseFloat(peso.value);\n        if (pesoConNumero <= 0) {\n            mostrarError(peso.id, \"El peso no puede ser cero o negativo\");\n            ok = false;\n        }\n    }\n    if (periodo.value === \"0\") {\n        mostrarError(periodo.id, \"Dato requerido\");\n        ok = false;\n    }\n    if (grupo.value === \"0\") {\n        mostrarError(grupo.id, \"Dato requerido\");\n        ok = false;\n    }\n    if (registrado.value === \"0\") {\n        mostrarError(registrado.id, \"Dato requerido\");\n        ok = false;\n    }\n    if (!ok)\n        return;\n    guardarRegistro();\n}\nfunction mostrarError(id, texto) {\n    const divId = \"error-\" + id;\n    const div = document.createElement(\"div\");\n    div.classList.add(\"invalid-feedback\");\n    div.id = divId;\n    div.innerText = texto;\n    const controlPorValidar = document.getElementById(id);\n    controlPorValidar.classList.add(\"is-invalid\");\n    const padre = controlPorValidar.parentElement;\n    padre.appendChild(div);\n}\nfunction limpiarError(id) {\n    const divId = \"error-\" + id;\n    const controlPorValidar = document.getElementById(id);\n    const div = document.getElementById(divId);\n    controlPorValidar.classList.remove(\"is-invalid\");\n    if (div)\n        div.remove();\n}\nfunction cargarGrupos() {\n    return __awaiter(this, void 0, void 0, function* () {\n        const periodo = document.getElementById(\"periodo-semestral\");\n        const url = \"/api/grupos?periodo=\" + periodo.value;\n        const respuesta = yield fetch(url);\n        const grupo = document.getElementById(\"grupo\");\n        grupo.innerHTML = \"\";\n        const opcionDefault = document.createElement(\"option\");\n        opcionDefault.value = \"0\";\n        opcionDefault.text = \"(Seleccione un grupo)\";\n        grupo.appendChild(opcionDefault);\n        if (respuesta.ok) {\n            const datos = yield respuesta.json();\n            datos.map(g => {\n                const opcion = document.createElement(\"option\");\n                opcion.value = g.Id;\n                opcion.text = g.Semestre + g.Nombre + \" - \" + g.Carrera + \" \" + g.Turno;\n                grupo.appendChild(opcion);\n            });\n        }\n        else {\n            alert(\"Error al obtener los datos de los grupos\");\n        }\n    });\n}\nfunction cargarPersonal() {\n    return __awaiter(this, void 0, void 0, function* () {\n        const url = \"/api/personal\";\n        const respuesta = yield fetch(url);\n        if (respuesta.ok) {\n            const datos = yield respuesta.json();\n            const personal = document.getElementById(\"registrado-por\");\n            personal.innerHTML = \"\";\n            const opcionDefault = document.createElement(\"option\");\n            opcionDefault.value = \"0\";\n            opcionDefault.text = \"(Seleccione un personal)\";\n            personal.appendChild(opcionDefault);\n            datos.map(P => {\n                const opcion = document.createElement(\"option\");\n                opcion.value = P.Id;\n                opcion.text = P.Nombre + \" - \" + P.Cargo;\n                personal.appendChild(opcion);\n            });\n        }\n        else {\n            alert(\"Ocurrió un error al obtener el personal\");\n        }\n    });\n}\nfunction guardarRegistro() {\n    return __awaiter(this, void 0, void 0, function* () {\n        const periodo = document.getElementById(\"periodo-semestral\");\n        const grupo = document.getElementById(\"grupo\");\n        const registrado = document.getElementById(\"registrado-por\");\n        const numControl = document.getElementById(\"num-control\");\n        const alumno = document.getElementById(\"alumno\");\n        const peso = document.getElementById(\"peso\");\n        const registro = {\n            Alumno: alumno.value,\n            AnioPeriodo: parseInt(periodo.value),\n            IdGrupo: grupo.value,\n            IdPersonal: registrado.value,\n            NumControl: numControl.value,\n            Peso: parseFloat(peso.value)\n        };\n        console.log(\"Objeto a guardar:\", registro);\n        const url = \"/api/pet/registro\";\n        const respuest = yield fetch(url, {\n            body: JSON.stringify(registro),\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        if (respuest.ok) {\n            alert(\"Registro guardado correctamente\");\n            location.href = \"/pet\";\n        }\n        else {\n            alert(\"Ocurrió un error al guardar el registro\");\n        }\n    });\n}\n\n\n//# sourceURL=webpack://proyecto.web/./scripts/registro.ts?\n}");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/registro.ts");
/******/ 	
/******/ })()
;