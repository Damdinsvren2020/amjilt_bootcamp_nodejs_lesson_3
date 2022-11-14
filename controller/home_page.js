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

exports.getHome_Page = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `${req.params.id}`,
  });
};

exports.createHome_Page = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "Home page vvsgeh",
  });
};

exports.updateHome_Page = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `${req.params.id}`,
  });
};

exports.deleteHome_Page = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `${req.params.id}`,
  });
};
