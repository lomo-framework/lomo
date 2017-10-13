import DisplayObject from "./DisplayObject";

class Component extends DisplayObject {
  get width() {
    let pixels;
    let strpixels = this.positioner.style.width;
    if (strpixels !== null && strpixels.indexOf('%') != -1)
      pixels = NaN;
    else if (strpixels === "")
      pixels = NaN;
    else
      pixels = parseFloat(strpixels);
    if (isNaN(pixels)) {
      pixels = this.positioner.offsetWidth;
      if (pixels === 0 && this.positioner.scrollWidth !== 0) {
        // invisible child elements cause offsetWidth to be 0.
        pixels = this.positioner.scrollWidth;
      }
    }
    return pixels;
  }

  set width(value) {
    if (this.props.get('width') != value) {
      this.props.set('width', value);
      this.positioner.style.width = value.toString() + 'px';
      this.dispatchEvent("widthChanged");
    }
  }

  get height() {
    let pixels;
    let strpixels = this.positioner.style.height;
    if (strpixels !== null && strpixels.indexOf('%') != -1)
      pixels = NaN;
    else if (strpixels === "")
      pixels = NaN;
    else
      pixels = parseFloat(strpixels);
    if (isNaN(pixels)) {
      pixels = this.positioner.offsetHeight;
      if (pixels === 0 && this.positioner.scrollHeight !== 0) {
        // invisible child elements cause offsetHeight to be 0.
        pixels = this.positioner.scrollHeight;
      }
    }
    return pixels;
  }

  set height(value) {
    if (this.props.get('height') != value) {
      this.props.set('height', value);
      this.positioner.style.height = value.toString() + 'px';
      this.dispatchEvent("heightChanged");
    }
  }
}
module.exports = Component;
