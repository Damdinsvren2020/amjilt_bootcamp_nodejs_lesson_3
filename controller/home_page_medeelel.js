const Home_page_medeelel = require("../model/home_page_medeelel");

exports.getHome_page_medeelels = async (req, res, next) => {
  try {
    const home_pages = await Home_page_medeelel.find();
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

exports.getHome_page_medeelel = async (req, res, next) => {
  try {
    const home_page_medeelel = await Home_page_medeelel.findById(req.params.id);
    if (!home_page_medeelel) {
      return res.status(200).json({
        success: false,
        error: req.params.id + "Ямар нэг мэдээлэл байхгүй байна",
      });
    }
    res.status(200).json({
      success: false,
      data: home_page_medeelel,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
};

exports.createHome_page_medeelel = async (req, res) => {
  try {
    const { name, description } = req.body;
    const { image } = req.image;
    const home_page_medeelel_image = new Home_page_medeelel({
      photo: image[0].path,
      name: name,
      description: description,
    });
    const home_page_medeelel = home_page_medeelel_image.save();
    res.status(200).json({
      success: true,
      data: home_page_medeelel,
    });
  } catch (err) {
    // next(err);
    console.log(err);
  }
};
