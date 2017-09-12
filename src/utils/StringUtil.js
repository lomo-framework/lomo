////////////////////////////////////////////////////////////////////////////////
//
//  Licensed to the Apache Software Foundation (ASF) under one or more
//  contributor license agreements.  See the NOTICE file distributed with
//  this work for additional information regarding copyright ownership.
//  The ASF licenses this file to You under the Apache License, Version 2.0
//  (the "License"); you may not use this file except in compliance with
//  the License.  You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
//
////////////////////////////////////////////////////////////////////////////////
class StringUtil {

  static trim(str) {
    if (str == null) return '';
    return str.trim();
  }

  /**
   *  Removes all whitespace characters from the beginning and end
   *  of each element in an Array, where the Array is stored as a String.
   *
   *  @param value The String whose whitespace should be trimmed.
   *
   *  @param separator The String that delimits each Array element in the string.
   *
   *  @return Array where whitespace was removed from the
   *  beginning and end of each element.
   *
   *  @langversion 3.0
   *  @playerversion Flash 10.2
   *  @playerversion AIR 2.6
   *  @productversion FlexJS 0.0
   */
  static splitAndTrim(value, delimiter) {
    if (value != "" && value != null) {
      var items = value.split(delimiter);

      var len = items.length;
      for (var i = 0; i < len; i++)
      {
        items[i] = StringUtil.trim(items[i]);
      }
      return items;
    }

    return [];
  }

  /**
   *  Removes all whitespace characters from the beginning and end
   *  of each element in an Array, where the Array is stored as a String.
   *
   *  @param value The String whose whitespace should be trimmed.
   *
   *  @param separator The String that delimits each Array element in the string.
   *
   *  @return Updated String where whitespace was removed from the
   *  beginning and end of each element.
   *
   *  @langversion 3.0
   *  @playerversion Flash 10.2
   *  @playerversion AIR 2.6
   *  @productversion FlexJS 0.0
   */
  static trimArrayElements(value, delimiter) {
    if (value != "" && value != null) {
      var items = StringUtil.splitAndTrim(value, delimiter);
      if (items.length > 0)
      {
        value = items.join(delimiter);
      }
    }

    return value;
  }

  /**
   *  Returns <code>true</code> if the specified string is
   *  a single space, tab, carriage return, newline, or formfeed character.
   *
   *  @param str The String that is is being queried.
   *
   *  @return <code>true</code> if the specified string is
   *  a single space, tab, carriage return, newline, or formfeed character.
   *
   *  @langversion 3.0
   *  @playerversion Flash 10.2
   *  @playerversion AIR 2.6
   *  @productversion FlexJS 0.0
   */
  static isWhitespace(character) {
    switch (character) {
      case " ":
      case "\t":
      case "\r":
      case "\n":
      case "\f":
      // non breaking space
      case "\u00A0":
      // line seperator
      case "\u2028":
      // paragraph seperator
      case "\u2029":
      // ideographic space
      case "\u3000":
        return true;

      default:
        return false;
    }
  }
}
module.exports = StringUtil;
