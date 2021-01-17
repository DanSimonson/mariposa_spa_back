const Post = require("../models/post");
//const slugify = require("slugify");

exports.create = (req, res) => {
  const {
    title,
    content,
    user,
    //slug,
    lastName,
    firstName,
    startDate,
    endDate,
  } = req.body;

  // create post
  Post.create(
    { title, content, user, lastName, firstName, startDate, endDate },
    (err, post) => {
      if (err) {
        console.log(err);
        res.status(400).json({ error: "Error creating post" });
      }
      res.json(post);
    }
  );
};

//get a posts
exports.list = (req, res) => {
  Post.find({}, (err, posts) => {
    if (err) console.log("error: ", err);
    res.json(posts);
  })
    .limit(50)
    .sort({ createdAt: -1 });
};
