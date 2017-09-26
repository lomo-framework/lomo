import StringUtil from './StringUtil';
class CSSUtil {
  static attributeFromColor(value) {
    var hexVal = value.toString(16);
    if(value > 16777215)
    {
      //rgba -- return rgba notation
      var rgba = hexVal.match(/.{2}/g);
      for(var i = 0; i < 4; i++)
      {
        rgba[i] = parseInt(rgba[i], 16);
      }
      rgba[3] = parseInt(""+(rgba[3]/255)*1000, 10) / 1000;
      return "rgba(" + rgba.join(",") + ")";
    }
    return "#" + hexVal.padStart(6, '0');
  }
  static parseStyles(styles) {
    var obj = {};
    var parts = styles.split(";");
    for (var part of parts) {
      var pieces = StringUtil.splitAndTrim(part, ":");
      var value = pieces[1];
      if (value == "null")
        obj[pieces[0]] = null;
      else if (value == "true")
        obj[pieces[0]] = true;
      else if (value == "false")
        obj[pieces[0]] = false;
      else {
        var n = Number(value);
        if (isNaN(n)) {
          if (value.charAt(0) == "#" || value.indexOf("rgb") == 0) {
            obj[pieces[0]] = CSSUtil.toColor(value);
          }
          else {
            if (value.charAt(0) == "'")
              value = value.substr(1, value.length - 2);
            else if (value.charAt(0) == '"')
              value = value.substr(1, value.length - 2);
            obj[pieces[0]] = value;
          }
        } else
          obj[pieces[0]] = n;
      }
    }
    return obj;
  }
  /**
   *  Converts a String to number.
   *
   *  @param str The String.
   *  @param reference A Number that will be used to convert percentages.
   *
   *  @return Number.
   *
   *  @langversion 3.0
   *  @playerversion Flash 10.2
   *  @playerversion AIR 2.6
   *  @productversion FlexJS 0.0
   */
  static toNumber(str, reference = 0)
  {
    var c = str.indexOf("px");
    if (c != -1)
      return Number(str.substr(0, c));

    c = str.indexOf("%");
    if (c != -1)
      return Number(str.substr(0, c)) * reference / 100;

    return Number(str);
  }

  /**
   *  Converts a value describing a color to a uint
   *
   *  @param value The value.
   *
   *  @return uint of the color.
   *
   *  @langversion 3.0
   *  @playerversion Flash 10.2
   *  @playerversion AIR 2.6
   *  @productversion FlexJS 0.0
   */
  static toColor(value) {
    return CSSUtil.toColorWithAlpha(value) & 0xFFFFFF;
  }

  /**
   *  Converts a value describing a color and alpha in a uint
   *
   *  @param value The value.
   *
   *  @return uint of the color. If value is "transparent" then uint.MAX_VALUE is returned.
   *
   *  @langversion 3.0
   *  @playerversion Flash 10.2
   *  @playerversion AIR 2.6
   *  @productversion FlexJS 0.0
   *  @flexjsignorecoercion String
   */
  static toColorWithAlpha(value) {
    if (typeof value != 'string')
      return value | 0xFF000000; // css parser converted #rrggbb without alpha channel

    var c;
    var c2;

    var stringValue = value;
    if (stringValue == "transparent") {
      return 0xffffffff;
    }
    if (stringValue.charAt(0) == '#') {
      if (stringValue.length == 4)
        return parseInt("0x" + stringValue.charAt(1) + stringValue.charAt(1) +
          stringValue.charAt(2) + stringValue.charAt(2) +
          stringValue.charAt(3) + stringValue.charAt(3));
      if (stringValue.length == 7)
        return parseInt("0xFF" + stringValue.substr(1));
      return parseInt("0x" + stringValue.substr(1));
    } else if ((c = stringValue.indexOf("rgb(")) != -1) {
      c2 = stringValue.indexOf(")");
      stringValue = stringValue.substring(c + 4, c2);
      var parts3 = stringValue.split(",");
      return (0xFF000000 +
      (parseInt(parts3[0]) << 16) +
      (parseInt(parts3[1]) << 8) +
      parseInt(parts3[2]));
    } else if ((c = stringValue.indexOf("rgba(")) != -1) {
      c2 = stringValue.indexOf(")");
      stringValue = stringValue.substring(c + 5, c2);
      var parts4 = stringValue.split(",");
      parts4[3] *= 255; // range is 0 to 1

      return ((parseInt(parts4[3]) << 24) +
      (parseInt(parts4[0]) << 16) +
      (parseInt(parts4[1]) << 8) +
      parseInt(parts4[2]));
    }

    if (CSSUtil.colorMap.hasOwnProperty(stringValue))
      return CSSUtil.colorMap[stringValue];
    return parseInt(stringValue);
  }

  /**
   *  The map of color names to uints.
   *
   *  @langversion 3.0
   *  @playerversion Flash 10.2
   *  @playerversion AIR 2.6
   *  @productversion FlexJS 0.0
   */
  static colorMap = {
    transparent:   0,
    white:   0xFFFFFFFF,
    silver:	 0xFFC0C0C0,
    gray:    0xFF808080,
    black:	 0xFF000000,
    red:     0xFFFF0000,
    maroon:  0xFF800000,
    yellow:	 0xFFFFFF00,
    olive:	 0xFF808000,
    lime:	 0xFF00FF00,
    green:	 0xFF008000,
    aqua:	 0xFF00FFFF,
    teal:	 0xFF008080,
    blue:	 0xFF0000FF,
    navy:	 0xFF000080,
    fuchsia: 0xFFFF00FF,
    purple:	 0xFF800080
  }
}
module.exports = CSSUtil;
