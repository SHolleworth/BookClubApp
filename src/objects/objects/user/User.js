"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var idAssigner_1 = __importDefault(require("../../utility/idAssigner"));
/**
*Represents any User
*@constructor
*@param {string} id - User id.
*@param {Object} info - The users personal information.
*@param {string} info.username - The username of user.
*@param {string} info.title - Displayed name of user.
*@param {number} info.dob - Users date of birth.
*@param {string} info.bio - Users bio.
*@param {string} info.imgUrl - Path to users profile picture.
*@param {string} info.email - Users email address.
*@param {boolean} online - Whether the user is online.
*@param {Shelf[]} shelves - The users bookshelves.
  */
function User(id, info, online, shelves) {
    this.id = id ? id : idAssigner_1.default();
    this.info = info;
    this.online = online;
    this.shelves = shelves ? shelves : [];
}
exports.default = User;
