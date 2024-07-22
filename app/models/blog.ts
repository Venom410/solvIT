import mongoose from "mongoose";

const {Schema} = mongoose;

const blogSchema = new Schema({

  title: {
    type : String, 
    required : true
  },
  content:{
    type: String, 
    required: true
  },
  date: {
    type: Date, 
    default: Date.now 
  },
  author : {
    type : String,
    required : true
  },
}, {collection: 'blogs'} );

export default mongoose.models.blog || mongoose.model('blog', blogSchema);