export interface Service {
  id: string;
  title: string;
  tag: string;
  description: string;
  image: string;
}

export const SERVICES: Service[] = [
  {
    "id": "bodystyling",
    "title": "Bodystyling",
    "tag": "Service",
    "description": "From aero styling to carbon details and exterior refinement, bodywork is designed to change the vehicle’s presence without compromising its original character.",
    "image": "/images/19b7e49a2f12696686bcf17288ce472acff82b3e-1254x1254.png"
  },
  {
    "id": "interior",
    "title": "Interior",
    "tag": "Service",
    "description": "Material, stitching, trim and finish are selected to create an interior that feels personal, tactile and composed. We turn the cabin into a space of identity, comfort and control.",
    "image": "/images/10ebf92161cd329a63294240810302d888878636-1440x1800.jpg"
  },
  {
    "id": "wheels",
    "title": "Wheels",
    "tag": "Service",
    "description": "Bespoke wheel upgrades designed to enhance stance, proportion and road presence, with fitments selected to complement the vehicle’s character and performance.",
    "image": "/images/5f5b1b063f2ce9527c148819ad59e40f1803f7a7-1440x1800.jpg"
  },
  {
    "id": "lighting",
    "title": "Lighting",
    "tag": "Service",
    "description": "Lighting gives a vehicle its expression. From subtle tinting to signature illumination and refined visual details, we use light to sharpen character, presence and atmosphere.",
    "image": "/images/b702180a6720e017269ea18a09158b80d35b568d-1440x1800.jpg"
  },
  {
    "id": "exhaust",
    "title": "Exhaust",
    "tag": "Service",
    "description": "Exhaust upgrades are chosen for tone, response and presence. Not noise for the sake of noise, but a sound profile that gives the vehicle more character and depth.",
    "image": "/images/b035e63f8c811ca259b8baa42aef3213928828a3-1440x1800.jpg"
  },
  {
    "id": "protection",
    "title": "Protection",
    "tag": "Service",
    "description": "Paint protective film solutions that preserve the finish of the vehicle while allowing for satin finishes, coloured films and full visual transformation.",
    "image": "/images/2c1a6f9f85de2f6ff7ea0a7de3c3898345710a58-1440x1800.jpg"
  }
];
