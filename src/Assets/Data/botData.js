import { Crops } from "./crops";
import { FAQS } from "./faqs";
import { practice } from "./practices";

export const botData = [
  { id: 1, name: "Crops", data: Crops },
  { id: 2, name: "Agriculture practices", data: practice },
  { id: 3, name: "FAQS", data: FAQS },
];

export const cropData = [
  {
    crop: "Rice",
    minTemp: 20.0,
    maxTemp: 35.0,
    precipitation: 100.0,
  },
  {
    crop: "Sugarcane",
    minTemp: 25.0,
    maxTemp: 40.0,
    precipitation: 150.0,
  },
  {
    crop: "Cotton",
    minTemp: 18.0,
    maxTemp: 30.0,
    precipitation: 50.0,
  },
  {
    crop: "Mangoes",
    minTemp: 22.0,
    maxTemp: 38.0,
    precipitation: 200.0,
  },
  {
    crop: "Millets",
    minTemp: 20.0,
    maxTemp: 35.0,
    precipitation: 80.0,
  },
  {
    crop: "Maize (corn)",
    minTemp: 18.0,
    maxTemp: 32.0,
    precipitation: 70.0,
  },
  {
    crop: "Groundnuts (peanuts)",
    minTemp: 25.0,
    maxTemp: 35.0,
    precipitation: 60.0,
  },
  {
    crop: "Soybeans",
    minTemp: 20.0,
    maxTemp: 30.0,
    precipitation: 90.0,
  },
  {
    crop: "Wheat",
    minTemp: 15.0,
    maxTemp: 25.0,
    precipitation: 70.0,
  },
  {
    crop: "Barley",
    minTemp: 12.0,
    maxTemp: 22.0,
    precipitation: 60.0,
  },
  {
    crop: "Mustard",
    minTemp: 10.0,
    maxTemp: 25.0,
    precipitation: 50.0,
  },
  {
    crop: "Cabbage",
    minTemp: 2.0,
    maxTemp: 20.0,
    precipitation: 40.0,
  },
  {
    crop: "Green Leafy Vegetables",
    minTemp: 1.0,
    maxTemp: 25.0,
    precipitation: 45.0,
  },
  {
    crop: "Potatoes",
    minTemp: 0.0,
    maxTemp: 20.0,
    precipitation: 30.0,
  },
];
