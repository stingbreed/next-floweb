const newsSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  });
  
  const News = mongoose.model('News', newsSchema);