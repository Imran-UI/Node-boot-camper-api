// @desc  Get all Bootcamps
// @route GET /api/v1/Bootcamps
// @access Public
exports.getBootCamps = (req, res, next) => {
    res.status(200).json({success: true, msg:'Show All Bootcamps'});
}

// @desc  Get single Bootcamp
// @route GET /api/v1/Bootcamps/:id
// @access Public
exports.getBootCamp = (req, res, next) => {
    res.status(200).json({success: true, msg:`get bootcamp ${req.params.id}`});
}

// @desc  Create New Bootcamp
// @route POST /api/v1/Bootcamps
// @access Private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg:'Create new Bootcamp'});
}


// @desc  Update Bootcamp
// @route PUT /api/v1/Bootcamps/:id
// @access Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg:`update bootcamp ${req.params.id}`});
}

// @desc  Delete Bootcamp
// @route Delete /api/v1/Bootcamps/:id
// @access Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg:`Delete bootcamp ${req.params.id}`});
}