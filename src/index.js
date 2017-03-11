/**
 * Created by vincent on 17/3/11.
 */
import DisplayObject from './DisplayObject';
import startup from './startup';
import Image from './Image';
import TextField from './TextField';
import Button from './Button';

import assign from 'object-assign';

assign(startup, {
    DisplayObject,
    Image,
    TextField,
    Button
});
module.exports = startup;