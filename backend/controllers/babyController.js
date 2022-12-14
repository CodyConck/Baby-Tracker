const asyncHandler = require("express-async-handler");

// @desc      Get babies
// @route     GET /api/babies
// @access    Private
const getBabies = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get babies" });
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

  //   // console logs body data from put route sent in postman
  //   console.log(req.body);

  res.status(200).json({ message: "set/create baby" });
});

// @desc      Update babies
// @route     PUT /api/babies/:id
// @access    Private
const updateBaby = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update baby ${req.params.id}` });
});

// @desc      Delete baby
// @route     DELETE /api/babies/:id
// @access    Private
const deleteBaby = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete baby ${req.params.id}` });
});

module.exports = {
  getBabies,
  setBaby,
  updateBaby,
  deleteBaby,
};
