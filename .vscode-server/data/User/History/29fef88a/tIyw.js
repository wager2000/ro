"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toDate = _interopRequireDefault(require("validator/lib/toDate"));

var _toFloat = _interopRequireDefault(require("validator/lib/toFloat"));

var _toInt = _interopRequireDefault(require("validator/lib/toInt"));

var _toBoolean = _interopRequireDefault(require("validator/lib/toBoolean"));

var _equals = _interopRequireDefault(require("validator/lib/equals"));

var _contains = _interopRequireDefault(require("validator/lib/contains"));

var _matches = _interopRequireDefault(require("validator/lib/matches"));

var _isEmail = _interopRequireDefault(require("validator/lib/isEmail"));

var _isURL = _interopRequireDefault(require("validator/lib/isURL"));

var _isMACAddress = _interopRequireDefault(require("validator/lib/isMACAddress"));

var _isIP = _interopRequireDefault(require("validator/lib/isIP"));

var _isIPRange = _interopRequireDefault(require("validator/lib/isIPRange"));

var _isFQDN = _interopRequireDefault(require("validator/lib/isFQDN"));

var _isDate = _interopRequireDefault(require("validator/lib/isDate"));

var _isBoolean = _interopRequireDefault(require("validator/lib/isBoolean"));

var _isLocale = _interopRequireDefault(require("validator/lib/isLocale"));

var _isAlpha = _interopRequireWildcard(require("validator/lib/isAlpha"));

var _isAlphanumeric = _interopRequireWildcard(require("validator/lib/isAlphanumeric"));

var _isNumeric = _interopRequireDefault(require("validator/lib/isNumeric"));

var _isPassportNumber = _interopRequireDefault(require("validator/lib/isPassportNumber"));

var _isPort = _interopRequireDefault(require("validator/lib/isPort"));

var _isLowercase = _interopRequireDefault(require("validator/lib/isLowercase"));

var _isUppercase = _interopRequireDefault(require("validator/lib/isUppercase"));

var _isIMEI = _interopRequireDefault(require("validator/lib/isIMEI"));

var _isAscii = _interopRequireDefault(require("validator/lib/isAscii"));

var _isFullWidth = _interopRequireDefault(require("validator/lib/isFullWidth"));

var _isHalfWidth = _interopRequireDefault(require("validator/lib/isHalfWidth"));

var _isVariableWidth = _interopRequireDefault(require("validator/lib/isVariableWidth"));

var _isMultibyte = _interopRequireDefault(require("validator/lib/isMultibyte"));

var _isSemVer = _interopRequireDefault(require("validator/lib/isSemVer"));

var _isSurrogatePair = _interopRequireDefault(require("validator/lib/isSurrogatePair"));

var _isInt = _interopRequireDefault(require("validator/lib/isInt"));

var _isFloat = _interopRequireWildcard(require("validator/lib/isFloat"));

var _isDecimal = _interopRequireDefault(require("validator/lib/isDecimal"));

var _isHexadecimal = _interopRequireDefault(require("validator/lib/isHexadecimal"));

var _isOctal = _interopRequireDefault(require("validator/lib/isOctal"));

var _isDivisibleBy = _interopRequireDefault(require("validator/lib/isDivisibleBy"));

var _isHexColor = _interopRequireDefault(require("validator/lib/isHexColor"));

var _isRgbColor = _interopRequireDefault(require("validator/lib/isRgbColor"));

var _isHSL = _interopRequireDefault(require("validator/lib/isHSL"));

var _isISRC = _interopRequireDefault(require("validator/lib/isISRC"));

var _isIBAN = _interopRequireWildcard(require("validator/lib/isIBAN"));

var _isBIC = _interopRequireDefault(require("validator/lib/isBIC"));

var _isMD = _interopRequireDefault(require("validator/lib/isMD5"));

var _isHash = _interopRequireDefault(require("validator/lib/isHash"));

var _isJWT = _interopRequireDefault(require("validator/lib/isJWT"));

var _isJSON = _interopRequireDefault(require("validator/lib/isJSON"));

var _isEmpty = _interopRequireDefault(require("validator/lib/isEmpty"));

var _isLength = _interopRequireDefault(require("validator/lib/isLength"));

var _isByteLength = _interopRequireDefault(require("validator/lib/isByteLength"));

var _isUUID = _interopRequireDefault(require("validator/lib/isUUID"));

var _isMongoId = _interopRequireDefault(require("validator/lib/isMongoId"));

var _isAfter = _interopRequireDefault(require("validator/lib/isAfter"));

var _isBefore = _interopRequireDefault(require("validator/lib/isBefore"));

var _isIn = _interopRequireDefault(require("validator/lib/isIn"));

var _isCreditCard = _interopRequireDefault(require("validator/lib/isCreditCard"));

var _isIdentityCard = _interopRequireDefault(require("validator/lib/isIdentityCard"));

var _isEAN = _interopRequireDefault(require("validator/lib/isEAN"));

var _isISIN = _interopRequireDefault(require("validator/lib/isISIN"));

var _isISBN = _interopRequireDefault(require("validator/lib/isISBN"));

var _isISSN = _interopRequireDefault(require("validator/lib/isISSN"));

var _isTaxID = _interopRequireDefault(require("validator/lib/isTaxID"));

var _isMobilePhone = _interopRequireWildcard(require("validator/lib/isMobilePhone"));

var _isEthereumAddress = _interopRequireDefault(require("validator/lib/isEthereumAddress"));

var _isCurrency = _interopRequireDefault(require("validator/lib/isCurrency"));

var _isBtcAddress = _interopRequireDefault(require("validator/lib/isBtcAddress"));

var _isISO = _interopRequireDefault(require("validator/lib/isISO8601"));

var _isRFC = _interopRequireDefault(require("validator/lib/isRFC3339"));

var _isISO31661Alpha = _interopRequireDefault(require("validator/lib/isISO31661Alpha2"));

var _isISO31661Alpha2 = _interopRequireDefault(require("validator/lib/isISO31661Alpha3"));

var _isISO2 = _interopRequireDefault(require("validator/lib/isISO4217"));

var _isBase = _interopRequireDefault(require("validator/lib/isBase32"));

var _isBase2 = _interopRequireDefault(require("validator/lib/isBase58"));

var _isBase3 = _interopRequireDefault(require("validator/lib/isBase64"));

var _isDataURI = _interopRequireDefault(require("validator/lib/isDataURI"));

var _isMagnetURI = _interopRequireDefault(require("validator/lib/isMagnetURI"));

var _isMimeType = _interopRequireDefault(require("validator/lib/isMimeType"));

var _isLatLong = _interopRequireDefault(require("validator/lib/isLatLong"));

var _isPostalCode = _interopRequireWildcard(require("validator/lib/isPostalCode"));

var _ltrim = _interopRequireDefault(require("validator/lib/ltrim"));

var _rtrim = _interopRequireDefault(require("validator/lib/rtrim"));

var _trim = _interopRequireDefault(require("validator/lib/trim"));

var _escape = _interopRequireDefault(require("validator/lib/escape"));

var _unescape = _interopRequireDefault(require("validator/lib/unescape"));

var _stripLow = _interopRequireDefault(require("validator/lib/stripLow"));

var _whitelist = _interopRequireDefault(require("validator/lib/whitelist"));

var _blacklist = _interopRequireDefault(require("validator/lib/blacklist"));

var _isWhitelisted = _interopRequireDefault(require("validator/lib/isWhitelisted"));

var _normalizeEmail = _interopRequireDefault(require("validator/lib/normalizeEmail"));

var _isSlug = _interopRequireDefault(require("validator/lib/isSlug"));

var _isLicensePlate = _interopRequireDefault(require("validator/lib/isLicensePlate"));

var _isStrongPassword = _interopRequireDefault(require("validator/lib/isStrongPassword"));

var _isVAT = _interopRequireDefault(require("validator/lib/isVAT"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = '13.7.0';
var validator = {
  version: version,
  toDate: _toDate.default,
  toFloat: _toFloat.default,
  toInt: _toInt.default,
  toBoolean: _toBoolean.default,
  equals: _equals.default,
  contains: _contains.default,
  matches: _matches.default,
  isEmail: _isEmail.default,
  isURL: _isURL.default,
  isMACAddress: _isMACAddress.default,
  isIP: _isIP.default,
  isIPRange: _isIPRange.default,
  isFQDN: _isFQDN.default,
  isBoolean: _isBoolean.default,
  isIBAN: _isIBAN.default,
  isBIC: _isBIC.default,
  isAlpha: _isAlpha.default,
  isAlphaLocales: _isAlpha.locales,
  isAlphanumeric: _isAlphanumeric.default,
  isAlphanumericLocales: _isAlphanumeric.locales,
  isNumeric: _isNumeric.default,
  isPassportNumber: _isPassportNumber.default,
  isPort: _isPort.default,
  isLowercase: _isLowercase.default,
  isUppercase: _isUppercase.default,
  isAscii: _isAscii.default,
  isFullWidth: _isFullWidth.default,
  isHalfWidth: _isHalfWidth.default,
  isVariableWidth: _isVariableWidth.default,
  isMultibyte: _isMultibyte.default,
  isSemVer: _isSemVer.default,
  isSurrogatePair: _isSurrogatePair.default,
  isInt: _isInt.default,
  isIMEI: _isIMEI.default,
  isFloat: _isFloat.default,
  isFloatLocales: _isFloat.locales,
  isDecimal: _isDecimal.default,
  isHexadecimal: _isHexadecimal.default,
  isOctal: _isOctal.default,
  isDivisibleBy: _isDivisibleBy.default,
  isHexColor: _isHexColor.default,
  isRgbColor: _isRgbColor.default,
  isHSL: _isHSL.default,
  isISRC: _isISRC.default,
  isMD5: _isMD.default,
  isHash: _isHash.default,
  isJWT: _isJWT.default,
  isJSON: _isJSON.default,
  isEmpty: _isEmpty.default,
  isLength: _isLength.default,
  isLocale: _isLocale.default,
  isByteLength: _isByteLength.default,
  isUUID: _isUUID.default,
  isMongoId: _isMongoId.default,
  isAfter: _isAfter.default,
  isBefore: _isBefore.default,
  isIn: _isIn.default,
  isCreditCard: _isCreditCard.default,
  isIdentityCard: _isIdentityCard.default,
  isEAN: _isEAN.default,
  isISIN: _isISIN.default,
  isISBN: _isISBN.default,
  isISSN: _isISSN.default,
  isMobilePhone: _isMobilePhone.default,
  isMobilePhoneLocales: _isMobilePhone.locales,
  isPostalCode: _isPostalCode.default,
  isPostalCodeLocales: _isPostalCode.locales,
  isEthereumAddress: _isEthereumAddress.default,
  isCurrency: _isCurrency.default,
  isBtcAddress: _isBtcAddress.default,
  isISO8601: _isISO.default,
  isRFC3339: _isRFC.default,
  isISO31661Alpha2: _isISO31661Alpha.default,
  isISO31661Alpha3: _isISO31661Alpha2.default,
  isISO4217: _isISO2.default,
  isBase32: _isBase.default,
  isBase58: _isBase2.default,
  isBase64: _isBase3.default,
  isDataURI: _isDataURI.default,
  isMagnetURI: _isMagnetURI.default,
  isMimeType: _isMimeType.default,
  isLatLong: _isLatLong.default,
  ltrim: _ltrim.default,
  rtrim: _rtrim.default,
  trim: _trim.default,
  escape: _escape.default,
  unescape: _unescape.default,
  stripLow: _stripLow.default,
  whitelist: _whitelist.default,
  blacklist: _blacklist.default,
  isWhitelisted: _isWhitelisted.default,
  normalizeEmail: _normalizeEmail.default,
  toString: toString,
  isSlug: _isSlug.default,
  isStrongPassword: _isStrongPassword.default,
  isTaxID: _isTaxID.default,
  isDate: _isDate.default,
  isLicensePlate: _isLicensePlate.default,
  isVAT: _isVAT.default,
  ibanLocales: _isIBAN.locales
};
var _default = validator;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;