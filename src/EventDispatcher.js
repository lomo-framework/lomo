/**
 * @author mrdoob / http://mrdoob.com/
 */
import assign from "object-assign";

function EventDispatcher() {}

assign( EventDispatcher.prototype, {

  addEventListener: function ( type, listener ) {

    if ( this._listeners === undefined ) this._listeners = {};

    var listeners = this._listeners;

    if ( listeners[ type ] === undefined ) {

      listeners[ type ] = [];

    }

    if ( listeners[ type ].indexOf( listener ) === - 1 ) {

      listeners[ type ].push( listener );

    }

  },

  hasEventListener: function ( type, listener ) {

    if ( this._listeners === undefined ) return false;

    var listeners = this._listeners;

    return listeners[ type ] !== undefined && listeners[ type ].indexOf( listener ) !== - 1;

  },

  removeEventListener: function ( type, listener ) {

    if ( this._listeners === undefined ) return;

    var listeners = this._listeners;
    var listenerArray = listeners[ type ];

    if ( listenerArray !== undefined ) {

      var index = listenerArray.indexOf( listener );

      if ( index !== - 1 ) {

        listenerArray.splice( index, 1 );

      }

    }

  },
  /**
   ** @param event
   * 	bubbles : Boolean
   * 	Indicates whether an event is a bubbling event.
   * 	cancelable : Boolean
   * 	Indicates whether the behavior associated with the event can be prevented.
   * 	target : Object
   * 	The event target.
   * 	type : String
   * 	The type of event.
   * */
  dispatchEvent: function ( event ) {
    if(typeof event == 'string'){
      // dispatchEvent('click');
      event = {type: event};
    }

    var previousTarget = event.target;
    event.target = this;

    if (event.bubbles){
      this.$bubbleEvent(event);
    }
    else{
      this.$invokeEvent(event);
    }

    if (previousTarget) {
      event.target = previousTarget;
    }

  },
  $bubbleEvent(event){
    let element = this;
    let chain = [element];

    let stage = element.stage;
    while (element != stage && (element = element.parent) != null) {
      chain.push(element);
    }

    for (var i=0; i<chain.length; ++i){
      if (chain[i].$invokeEvent(event)) {
        break;
      }
    }
  },
  $invokeEvent(event){
    if ( this._listeners === undefined ) return;

    var listeners = this._listeners;
    var listenerArray = listeners[ event.type ];

    if ( listenerArray !== undefined ) {
      // 当前收到事件的目标
      event.currentTarget = this;
      var array = listenerArray.slice( 0 );
      for ( var i = 0, l = array.length; i < l; i ++ ) {
        array[ i ].call( this, event );

        if (event.stopsImmediatePropagation) {
          return true;
        }
      }
      return !!event.stopsPropagation;
    }
    return false;
  }
} );
module.exports = EventDispatcher;
