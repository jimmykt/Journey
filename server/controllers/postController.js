import PostMessage from "../models/postModel.js";

export const getPosts = async (req, res) => {
  try {
    const postsMessages = PostMessage.find();
    console.log(postsMessages);
    res.status(200).json(postsMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
