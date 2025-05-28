import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  /** Maximum length of 30 */
  MAX_30 = 30;
  /** Maximum length of 2000 */
  MAX_2000 = 2000;

  /** Maximum length of 200 */
  MAX_200 = 200;

  /** Maximum length of 100 */
  MAX_100 = 100;

  /** Maximum length of 60 */
  MAX_60 = 60;

  /** Maximum length of 20 */
  MAX_20 = 20;

  /** Maximum length of 10 */
  MAX_10 = 10;

  /** Maximum length of 15 */
  MAX_15 = 15;

  /** Maximum length of 4 */
  MAX_4 = 4;

  /** Maximum length of 5 */
  MAX_5 = 5;

  /** Maximum length of 3 */
  MAX_3 = 3;

  /** Maximum length of 32 */
  MAX_32 = 32;

  /** Maximum length of 50 */
  MAX_50 = 50;

  /** Maximum length of 300 */
  MAX_300 = 300;

  /** Maximum length of 13 */
  MAX_13 = 13;

  /** Maximum length of 6 */
  MAX_6 = 6;

  /** Maximum length of 7 */
  MAX_7 = 7;

  /** Maximum length of 8 */
  MAX_8 = 8;

  /** Maximum length of 11 */
  MAX_11 = 11;

  /** Maximum length of 12 */
  MAX_12 = 12;

  /** Maximum length of 25 */
  MAX_25 = 25;

  /** Maximum length of 32 */
  PASSWORD = 32;

  /* Pattern use for Validation */

  /** ONLY_NUMBERS: Pattern to match only numbers */
  ONLY_NUMBERS = '^[0-9]*$';

  /** ONLY_NUMBERS_AND_DOT: Pattern to match numbers with optional decimal */
  ONLY_NUMBERS_AND_DOT = /^[0-9]+(?:\.[0-9]+)?$/;

  /** PATTERN_FOR_ALPHABATES_AND_SPACE_AND_DASH_DIGIT: Pattern to match alphabets, spaces, dashes, and digits */
  PATTERN_FOR_ALPHABATES_AND_SPACE_AND_DASH_DIGIT = '^[a-zA-Z0-9- ]*$';

  /** PATTERN_FOR_DASH_DIGIT: Pattern to match digits, dashes, and dots */
  PATTERN_FOR_DASH_DIGIT = '^[0-9.-]*$';

  /** PATTERN_FOR_ALPHABATES_AND_SPACE_AND_DASH: Pattern to match alphabets, spaces, and dashes */
  PATTERN_FOR_ALPHABATES_AND_SPACE_AND_DASH = '^[a-zA-Z- ]*$';

  /** PATTERN_FOR_ALPHABATES_AND_SPACE_AND_ROUND_BRACKETS: Pattern to match alphabets, spaces, and round brackets */
  PATTERN_FOR_ALPHABATES_AND_SPACE_AND_ROUND_BRACKETS = '^([a-zA-Z()][a-zA-Z() ]*)';

  /** LAB_MASTER_NAME: Pattern to check if the string contains at least one non-space character */
  LAB_MASTER_NAME = /.*\S.*/;

  /** ONLY_SPACE_NOT_ALLOW: Pattern to check if the string contains at least one non-space character */
  ONLY_SPACE_NOT_ALLOW = /.*\S.*/;

  /** PATTERN_FOR_PASSWORD: Pattern for Password for 6 characters, one upper case letter, one lower case letter, one digit, and one special character like *, @, $ */
  PATTERN_FOR_PASSWORD = /^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,32}$/;

  /* End pattern use for validation */
  

  /* Validation Messages */

  /** Indicates that an email address is necessary. */
  EMAIL_REQUIRED = 'Email is required!';

  /** Indicates that the entered email is not in a valid format. */
  EMAIL_INVALID = 'Please enter valid Email.';

  /** Indicates that a phone number is necessary. */
  PHONE_NUMBER_REQUIRED = 'Phone Number is required!';

  /** Indicates that the entered phone number is not in a valid format. */
  PHONE_NUMBER_INVALID = 'Please enter valid Phone Number.';

  /** Indicates that a mobile number is necessary. */
  MOBILE_NUMBER_REQUIRED = 'Mobile No. is required!';

  /** Indicates that the entered mobile number is not in a valid format. */
  MOBILE_NUMBER_INVALID = 'Please enter valid Mobile No.';

  /** Indicates that a password is necessary. */
  PASSWORD_REQUIRED = 'Password is required!';

  /** Indicates that the current password is necessary. */
  CURRENT_PASSWORD_REQUIRED = 'Current Password is required!';

  /** Indicates that the old password is necessary. */
  OLD_PASSWORD_REQUIRED = 'Old Password is required!';

  /** Indicates that a new password is necessary. */
  NEW_PASSWORD_REQUIRED = 'New Password is required!';

  /** Indicates that confirming the password is necessary. */
  CONFIRM_PASSWORD_REQUIRED = 'Confirm Password is required!';

  /** Indicates that confirming the new password is necessary. */
  CONFIRM_NEW_PASSWORD_REQUIRED = 'Confirm New Password is required!';

  /** Indicates that the password and confirmation don't match. */
  PASSWORD_NOT_MATCHED = 'Password and Confirm new password not equal.';

  /** Indicates that the password and confirmation don't match. */
  CONFIRM_PASSWORD_NOT_MATCHED = 'Password and Confirm password not equal.';

  /** Indicates the requirements for a valid password. */
  PASSWORD_INVALID = 'Should contains atleast 6 characters,one upper case letter, lower case letter, digit and special character like *,@,$.';

  /** Indicates that a country code is necessary. */
  COUNTRY_CODE_REQUIRED = 'Country Code is required!';

  /** Indicates that a first name is necessary. */
  FIRST_NAME_REQUIRED = 'First Name is required!';

  /** Indicates that a last name is necessary. */
  LAST_NAME_REQUIRED = 'Last Name is required!';

  /** Indicates that a document is required. */
  DOCUMENT_REQUIRED = 'Document is required!';

  /** Indicates that the document size must be less than a certain value. */
  DOCUMENT_MAX_FILE_SIZE = 'The Document size must be less than';

  /** Indicates that the attachment size must be less than a certain value. */
  ATTACHMENT_MAX_FILE_SIZE = 'The Attachment size must be less than';

  /** Indicates that the selected document has an invalid extension. */
  DOCUMENT_INVALID_EXTENSION = 'Please select valid Document.';

  /** Indicates that the image size must be less than a certain value. */
  IMAGE_MAX_FILE_SIZE = 'The Image size must be less than';

  /** Indicates that the selected image has an invalid extension. */
  IMAGE_INVALID_EXTENSION = 'Please select valid Image.';

  /** Indicates that the selected file has an invalid extension. */
  FILE_INVALID_EXTENSION = 'Please select valid File.';

  /* Validation Messages End */


}
