# Mongoose Schema Clone

[![Version](https://img.shields.io/github/v/release/turivishal/mongoose-schema-clone)](https://github.com/turivishal/mongoose-schema-clone/tree/0.1.0)
[![Version](https://img.shields.io/github/v/release/turivishal/mongoose-schema-clone?color=red&label=npm)](https://www.npmjs.com/package/mongoose-schema-clone)

Deep clone and Returns a copy of the schema, Adds key path / schema type pairs to this schema and You can also add another schema and copy over all paths, virtuals, getters, setters, indexes, methods, and statics.

### FEATURES:
* Deep Clone Schema
* Copy paths, virtuals, getters, setters, indexes, methods, and statics

### INSTALLATION:
```
npm install --save mongoose-schema-clone
```

### USAGE:
```
const mongooseSchemaClone = require("mongoose-schema-clone");
```

### EXAMPLE:
```
const mongoose = require("mongoose");
const mongooseSchemaClone = require("mongoose-schema-clone");

const ParentSchema = new mongoose.Schema({
    name: { type: String },
    logo: { type: String }
});

const ChildSchema = mongooseSchemaClone(ParentSchema, {
    address: { 
        type: [{
            location: { type: String },
            city: { type: String },
            state: { type: String },
            country: { type: String },
            postalCode: { type: String }
        }] 
    }
});
```

### SOURCE:
The source is [mongoose-npm](https://www.npmjs.com/package/mongoose) method [add()](https://mongoosejs.com/docs/api/schema.html#schema_Schema-add).
```
const mongoose = require("mongoose");

module.exports = (Schema, Definition) => {
    return new mongoose.Schema(Definition).add(Schema);
}
```

### CONTACT US:
Email: turivishal@gmail.com

### LICENSE:
Mongoose Schema Clone is released under the [MIT License](http://www.opensource.org/licenses/MIT).