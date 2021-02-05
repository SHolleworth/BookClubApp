import idAssigner from '../../utility/idAssigner';
import {ShelfObject} from '../shelf/Shelf';

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
export default function User(id, info, online){
    this.id = id;
    this.info = info;
    this.online = online;
}