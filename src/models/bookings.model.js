import mongoose from "mongoose";

const allowedCatBreeds = [
  "Persian",
  "Siamese",
  "Maine Coon",
  "Ragdoll",
  "British Shorthair",
  "Bengal",
];

const allowedDogBreeds = [
  "Labrador Retriever",
  "German Shepherd",
  "Pomeranian",
  "Beagle",
  "Golden Retriever",
];

const bookingSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
      trim: true,
      index: true
    },
    customerEmail: { 
        type: String, 
        required: true,
        unique: true,
        lowercase: true,
        trim: true 
    },
    customerPhone: { 
        type: String, 
        required: true,
        unique: true,
        index: true
    },
    address: String,

    petName: { 
        type: String, 
        required: true 
    },
    petType: {
      type: String,
      enum: ["Dog", "Cat"],
      required: true,
    },

    petBreed: {
      type: String,
      required: true,
      validate: {
        validator: function (breed) {
          const isDog = this.petType === "Dog";
          const isCat = this.petType === "Cat";

          return (
            (isDog && allowedDogBreeds.includes(breed)) ||
            (isCat && allowedCatBreeds.includes(breed))
          );
        },
        message: (props) =>
          `${props.value} is not an accepted breed for selected pet type.`,
      },
    },

    petAge: { 
        type: Number, 
        min: 0 
    },

    serviceType: {
      type: String,
      enum: ["Boarding", "Grooming"],
      required: true,
    },

    startDate: { 
        type: Date, 
        required: true 
    },
    endDate: { 
        type: Date, 
        required: true 
    },
    specialInstructions: String,

    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Completed", "Cancelled"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

export const Booking = mongoose.model("Booking", bookingSchema);
