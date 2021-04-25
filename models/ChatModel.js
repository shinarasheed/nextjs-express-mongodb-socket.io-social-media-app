const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },

  chats: [
    {
      //the person this message is with
      messagesWith: { type: Schema.Types.ObjectId, ref: 'User' },
      messages: [
        {
          msg: { type: String, required: true },
          //the sender which depends on who just sends a message
          sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
          //depends on who just recieves a message
          receiver: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
          },
          date: { type: Date },
        },
      ],
    },
  ],
});

module.exports = mongoose.model('Chat', ChatSchema);
