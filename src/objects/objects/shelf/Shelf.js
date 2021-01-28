"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var idAssigner_1 = __importDefault(require("../../utility/idAssigner"));
/**
 * Represents a book shelf.
 * @constructor
 * @param {object} info - The info object for the shelf.
 * @param {string} info.name - The name of the shelf.
 * @param {string} info.color - The color of the shelf.
 * @param {Book[]} books - The books in the shelf.
 */
function Shelf(id, info, books) {
    this.id = id ? id : idAssigner_1.default();
    this.info = info;
    this.books = books ? books : [];
}
exports.default = Shelf;
