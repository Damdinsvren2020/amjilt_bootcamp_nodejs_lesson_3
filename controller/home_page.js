const Home_Page = require("../model/home_page");

exports.getHome_Pages = async (req, res, next) => {
  try {
    const home_pages = await Home_Page.find();
    res.status(200).json({
      success: true,
      data: home_pages,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err,
    });
  }
};

exports.getHome_Page = async (req, res, next) => {
  try {
    const home_page = await Home_Page.findById(req.params.id);
    if (!home_page) {
      return res.status(400).json({
        success: false,
        error: req.params.id + "Ямар нэг юм байхгүй байна.",
      });
    }
    res.status(200).json({
      success: true,
      data: home_page,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
};

exports.createHome_Page = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    const Pages = new Home_Page({
      name: name,
      description: description,
    });
    const pages = await Pages.save();
    res.status(200).json({
      success: true,
      data: pages,
    });
  } catch (err) {
    next(err);
    console.log(err);
  }
};

exports.updateHome_Page = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const newHome_Pages_Update = await Home_Page.findByIdAndUpdate(id);
    if (name) {
      newHome_Pages_Update.name = name;
    }
    if (description) {
      newHome_Pages_Update.description = description;
    }
    const { newHome_Pages_update } = await newHome_Pages_update.save();
    if (newHome_Pages_update) {
      res.json({
        success: true,
      });
    }
  } catch (err) {
    next(err);
    console.log(err);
    res.json({ success: false });
  }
};

exports.deleteHome_Page = async (req, res, next) => {
  const delete_homepage = await Home_Page.findByIdAndRemove(req.params.id);
  if (!delete_homepage) {
    return res.status(400).json({
      success: false,
      error: req.params.id + "Id тай мэдээлэл устсан байна !!!",
    });
  }
};
