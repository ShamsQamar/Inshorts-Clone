import News from '../modal/news.js';

export const getNews = async (req, res) => {
   try {
     const size = Number(req.query.size);
     const skip = Number(req.query.page);
     const category = req.query.category;
     console.log('database', category)
     
    if(category == 'General'){
      let data = await News.find({}).limit(size).skip(size * skip);
     res.status(200).json(data);
    } else {
     let data = await News.find({category: category}).limit(size).skip(size * skip);
     res.status(200).json(data);
    }
   } catch (error) {
     res.status(500).json(error);
   }
}