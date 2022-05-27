const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dataFormat');

const reactionSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        }
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

module.exports = reactionSchema;
