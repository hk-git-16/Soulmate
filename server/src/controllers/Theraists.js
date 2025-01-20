const TherapistProfile = require('../models/TherapistProfile'); // Adjust path as necessary
const uploadImageToCloudinary = require('../utils/cloudinary'); // Adjust path if using Cloudinary

exports.createTherapist = async (req, res) => {
  try {
    
    let {
      name,
      yearsOfExperience,
      specializations: _specializations,
      chargePerHour,
      languages: _languages,
      bio,
      email,
      availability: _availability,
    } = req.body;

    const photo = req.files ? req.files.photo : null;

    const specializations = _specializations ? JSON.parse(_specializations) : [];
    const languages = _languages ? JSON.parse(_languages) : [];
    const availability = _availability ? JSON.parse(_availability) : [];

    if (
      !name ||
      !yearsOfExperience ||
      !specializations.length ||
      !chargePerHour ||
      !email
    ) {
      return res.status(400).json({
        success: false,
        message: 'All required fields must be filled.',
      });
    }

    let photoUrl = '';
    if (photo) {
      const uploadedPhoto = await uploadImageToCloudinary(photo, process.env.FOLDER_NAME);
      photoUrl = uploadedPhoto.secure_url;
    }

    const newTherapist = await TherapistProfile.create({
      name,
      photo: photoUrl,
      yearsOfExperience,
      specializations,
      chargePerHour,
      languages,
      bio,
      email,
      availability,
    });

    res.status(201).json({
      success: true,
      data: newTherapist,
      message: 'Therapist profile created successfully.',
    });
  } catch (error) {
    console.error('Error creating therapist:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to create therapist profile.',
      error: error.message,
    });
  }
};

exports.editTherapistProfile = async (req, res) => {
  try {
    const { therapistId } = req.body;
    const updates = req.body;

    const therapist = await TherapistProfile.findById(therapistId);

    if (!therapist) {
      return res.status(404).json({
        success: false,
        message: 'Therapist not found.',
      });
    }

    if (req.files && req.files.photo) {
      const uploadedPhoto = await uploadImageToCloudinary(req.files.photo, process.env.FOLDER_NAME);
      therapist.photo = uploadedPhoto.secure_url;
    }

    for (const key in updates) {
      if (updates.hasOwnProperty(key)) {
        if (key === 'specializations' || key === 'languages' || key === 'availability') {
          therapist[key] = JSON.parse(updates[key]); // Parse stringified arrays
        } else {
          therapist[key] = updates[key];
        }
      }
    }

    await therapist.save();

    res.status(200).json({
      success: true,
      message: 'Therapist profile updated successfully.',
      data: therapist,
    });
  } catch (error) {
    console.error('Error updating therapist profile:', error.message);
    res.status(500).json({
      success: false,
      message: 'Internal server error.',
      error: error.message,
    });
  }
};

exports.getAllTherapists = async (req, res) => {
    try {
      const allTherapists = await TherapistProfile.find()
        .populate({
          path: 'reviews.userId',
          select: 'name email', // Populate user details in reviews
        })
        .exec();
  
      res.status(200).json({
        success: true,
        data: allTherapists,
      });
    } catch (error) {
      console.error('Error fetching therapists:', error.message);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch therapists.',
        error: error.message,
      });
    }
};
  