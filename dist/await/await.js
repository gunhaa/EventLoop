"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ioBound = exports.cpuBound = void 0;
const database_1 = __importDefault(require("./database"));
const cpuBound = (ms) => __awaiter(void 0, void 0, void 0, function* () {
    const start = Date.now();
    const result = yield (0, exports.ioBound)();
    while (Date.now() - start < ms) {
        // busy-waiting
    }
    return result;
});
exports.cpuBound = cpuBound;
const ioBound = () => __awaiter(void 0, void 0, void 0, function* () {
    const db = new database_1.default();
    // const result = await db.findSomething();
    const result = db.findSomething();
    return result;
});
exports.ioBound = ioBound;
