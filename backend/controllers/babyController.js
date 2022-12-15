const asyncHandler = require("express-async-handler");

const Baby = require("../models/babyModel");

// @desc      Get babies
// @route     GET /api/babies
// @access    Private
const getBabies = asyncHandler(async (req, res) => {
  const babies = await Baby.find();

  res.status(200).json(babies);
});

// @desc      Set baby
// @route     POST /api/babies
// @access    Private
const setBaby = asyncHandler(async (req, res) => {
  // check to see if theres not a body text, if not, respond with 400 status and message
  if (!req.body.text) {
    res.status(400);
    // express has error handler
    throw new Error("Please add a text field");
  }

  const baby = await Baby.create({
    text: req.body.text,
  });

  //   // console logs body data from put route sent in postman
  //   console.log(req.body);

  res.status(200).json(baby);
});

// @desc      Update babies
// @route     PUT /api/babies/:id
// @access    Private
const updateBaby = asyncHandler(async (req, res) => {
  const baby = await Baby.findById(req.params.id);
  // if theres no baby, respond with 400 status
  if (!baby) {
    res.status(400);
    throw new Error("Baby not found");
  }

  const updatedBaby = await Baby.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedBaby);
});

// @desc      Delete baby
// @route     DELETE /api/babies/:id
// @access    Private
const deleteBaby = asyncHandler(async (req, res) => {
  const baby = await Baby.findById(req.params.id);
  // if theres no baby, respond with 400 status
  if (!baby) {
    res.status(400);
    throw new Error("Baby not found");
  }

  await baby.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getBabies,
  setBaby,
  updateBaby,
  deleteBaby,
};
