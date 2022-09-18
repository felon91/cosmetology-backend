import { Schema, model } from 'mongoose';

const BidsSchema = new Schema({
  name: {
    type: Schema.Types.String,
  },
  comment: {
    type: Schema.Types.String,
  },
  phone: {
    type: Schema.Types.String,
    required: true,
  },
});

export const Bid = model('bids', BidsSchema);
