/**
 * Created by vincent on 17/3/11.
 */
import DisplayObject from './DisplayObject';
import DisplayContainer from './DisplayContainer';
import startup from './startup';
import Image from './Image';
import TextField from './TextField';
import Button from './Button';
import Sprite from './Sprite';
import createElement from './createElement';

import assign from 'object-assign';

assign(startup, {
    DisplayObject,
    DisplayContainer,
    Image,
    TextField,
    Button,
    Sprite,
    createElement
});
module.exports = startup;