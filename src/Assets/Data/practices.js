const SoilPreparation = [
  {
    name: "Plowing",
    answer:
      "Breaking and turning over the soil to prepare it for planting. It helps in weed control and creates a suitable seedbed.",
  },
  {
    name: "Harrowing",
    answer:
      "Breaking up clods and smoothening the soil surface after plowing. It helps in incorporating organic matter and improving soil structure.",
  },
];

const IrrigationTechniques = [
  {
    name: "Drip Irrigation",
    answer:
      "Delivering water directly to the base of plants using a network of tubes and emitters. It conserves water and reduces weed growth.",
  },
  {
    name: "Sprinkler Irrigation",
    answer:
      "Applying water to crops as if it is raining, using pipes and pumps. It is suitable for a variety of crops and soil types.",
  },
];

const CropRotation = [
  {
    name: "Benefits of Crop Rotation",
    answer:
      "Improves soil fertility, reduces pest and disease pressure, and enhances overall crop yield. Different crops are planted in a specific sequence.",
  },
  {
    name: "Common Crop Rotation Plans",
    answer:
      "Alternating between cereal crops, legumes, and root crops in different growing seasons to break pest and disease cycles.",
  },
];
const CoverCroppingPractices = [
  {
    name: "Benefits of Cover Cropping",
    answer:
      "Improves soil structure, reduces erosion, suppresses weeds, and enhances nutrient cycling. Cover crops are grown between main crops or during fallow periods.",
  },
  {
    name: "Common Cover Crops",
    answer:
      "Examples include clover, vetch, and rye. Each cover crop has specific benefits and is chosen based on the desired outcomes.",
  },
];

const CompanionPlantingPractices = [
  {
    name: "Synergistic Planting",
    answer:
      "Pairing compatible plants to enhance growth, repel pests, and maximize space utilization. It is a form of polyculture where different plant species benefit each other.",
  },
  {
    name: "Companion Planting Chart",
    answer:
      "Provides guidance on which plants work well together and which should be kept apart. Examples include planting basil near tomatoes to deter certain pests.",
  },
];

export const practice = [
  {
    id: 1,
    name: "Soil Preparation",
    data: SoilPreparation,
  },
  {
    id: 2,
    name: "Irrigation Techniques",
    data: IrrigationTechniques,
  },
  {
    id: 3,
    name: "Crop Rotation",
    data: CropRotation,
  },

  {
    id: 4,
    name: "Cover Cropping",
    data: CoverCroppingPractices,
  },
  {
    id: 5,
    name: "Companion Planting",
    data: CompanionPlantingPractices,
  },
];
