# Mongoose Schema Clone

Deep clone and Returns a copy of the schema, Adds key path / schema type pairs to this schema and You can also add another schema and copy over all paths, virtuals, getters, setters, indexes, methods, and statics.

## FEATURES
* Deep Clone Schema
* Copy paths, virtuals, getters, setters, indexes, methods, and statics

## INSTALLATION
```
$ npm i --save mongoose-schema-clone
```

## USAGE
```
const mongooseSchemaClone = require("mongoose-schema-clone");
```

## EXAMPLE
```
const mongoose = require("mongoose");
const mongooseSchemaClone = require("mongoose-schema-clone");

const ParentSchema = new mongoose.Schema({
    name: { type: String },
    logo: { type: String }
});

const ChildSchema = mongooseSchemaClone(ParentSchema, {
    address: { 
        type: [
            {
                location: { type: String },
                city: { type: String },
                state: { type: String },
                country: { type: String },
                postalCode: { type: String }
            }
        ] 
    }
});
```

## SOURCE
The source is [mongoose-npm](https://www.npmjs.com/package/mongoose) method [add()](https://mongoosejs.com/docs/api/schema.html#schema_Schema-add).
```
const mongoose = require("mongoose");

module.exports = (Schema, Definition) => {
    return new mongoose.Schema(Definition).add(Schema);
}
```

## CONTACT US
Email: turivishal@gmail.com

## LICENSE
Mongoose Schema Clone is released under the [MIT License](http://www.opensource.org/licenses/MIT).