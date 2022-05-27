const { Schema, model} = require('mongoose')
const { monitorEventLoopDelay } = require('perf_hooks')

//Shape the Schema and create the properties of the document
const userSchema = new Schema (
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            match: [/.+@.+\..+/, 'Needs to match an actual email address'],
        },
        freinds: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thoughts',
            },
        ],
    },
    {
        toJSON: 
        {
            virtuals: true,
        },
        id: false,
    },
);

userSchema.virtual('friendCount').get(function () {
    return this.freinds.length;
});

//create a model
const User = model('User', userSchema);

module.exports = User;