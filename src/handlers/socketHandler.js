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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveBooks = exports.postNewBook = exports.retrieveShelves = exports.postNewShelf = exports.loginAsUser = exports.registerNewUser = exports.sendVolumeQuery = exports.connectToServer = void 0;
var booksSlice_1 = require("../state/booksSlice");
var shelvesSlice_1 = require("../state/shelvesSlice");
var userSlice_1 = require("../state/userSlice");
var io = require('socket.io-client');
var store_1 = __importDefault(require("../state/store"));
var socket = null;
exports.connectToServer = function () {
    socket = io('ws://192.168.1.65:3000');
    setListeners();
};
var setListeners = function () {
    if (socket) {
        socket.on('connect_error', function (error) {
            console.log("Could not connect to server: " + error);
        });
        socket.on('connect', function () {
            console.log("Socket connected to server.");
        });
        socket.on('disconnect', function () {
            console.log("Socket disconnected.");
        });
    }
};
exports.sendVolumeQuery = function (query) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                if (socket) {
                    console.log("Sending query");
                    socket.on('google_books_by_title_response', function (response) {
                        resolve(response);
                    });
                    socket.on('google_books_by_title_error', function (error) {
                        reject(error);
                    });
                    socket.emit('search_google_books_by_title', query);
                }
                else {
                    reject("Socket not connected");
                }
            })];
    });
}); };
exports.registerNewUser = function (user) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                if (socket) {
                    console.log("Registering user.");
                    socket.on('register_new_user_response', function (response) {
                        resolve(response);
                    });
                    socket.on('register_new_user_error', function (error) {
                        reject(error);
                    });
                    socket.emit('register_new_user', user);
                }
                else {
                    reject("Socket not connected");
                }
            })];
    });
}); };
exports.loginAsUser = function (user) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                if (socket) {
                    console.log("Logging in as " + user.username);
                    socket.on('login_as_user_response', function (userData) {
                        var user = userData.user, shelves = userData.shelves, books = userData.books;
                        store_1.default.dispatch(booksSlice_1.setBooks(books));
                        store_1.default.dispatch(userSlice_1.setCurrentUser(user));
                        store_1.default.dispatch(shelvesSlice_1.setShelves(shelves));
                        return resolve("Logged in as " + user.username);
                    });
                    socket.on('login_as_user_error', function (error) {
                        return reject("Login as user Error " + error);
                    });
                    socket.emit('login_as_user', user);
                }
                else {
                    return reject("Socket not connected");
                }
            })];
    });
}); };
exports.postNewShelf = function (shelf) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                if (socket) {
                    console.log("Posting Shelf: " + shelf.name);
                    socket.on('post_new_shelf_response', function (response) {
                        return resolve(response);
                    });
                    socket.on('post_new_shelf_error', function (error) {
                        return reject(error);
                    });
                    socket.emit('post_new_shelf', shelf);
                }
                else {
                    return reject("Socket not connected");
                }
            })];
    });
}); };
exports.retrieveShelves = function (user) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                if (socket) {
                    socket.on('retrieve_shelves_response', function (shelves) {
                        store_1.default.dispatch(shelvesSlice_1.setShelves(shelves));
                        console.log("Retrieved shelves.");
                        return resolve("Retrieved shelves.");
                    });
                    socket.on('retrieve_shelves_error', function (error) {
                        return reject("Error retrieving shelves: " + error);
                    });
                    socket.emit('retrieve_shelves', user);
                }
                else {
                    return reject("Socket not connected");
                }
            })];
    });
}); };
exports.postNewBook = function (book) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                if (socket) {
                    console.log("Posting Book: " + book.info.title);
                    socket.on('post_new_book_response', function (response) {
                        return resolve(response);
                    });
                    socket.on('post_new_book_error', function (error) {
                        return reject(error);
                    });
                    socket.emit('post_new_book', book);
                }
                else {
                    return reject("Socket not connected");
                }
            })];
    });
}); };
exports.retrieveBooks = function (user) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                if (socket) {
                    socket.on('retrieve_books_response', function (data) {
                        store_1.default.dispatch(shelvesSlice_1.setShelves(data.shelves));
                        store_1.default.dispatch(booksSlice_1.setBooks(data.books));
                        console.log("Retrieved books.");
                        return resolve("Retrieved books.");
                    });
                    socket.on('retrieve_books_error', function (error) {
                        return reject("Error retrieving books: " + error);
                    });
                    socket.emit('retrieve_books', user);
                }
                else {
                    return reject("Socket not connected");
                }
            })];
    });
}); };
