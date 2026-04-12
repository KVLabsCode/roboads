export type Fleet = {
  name: string;
  coverage: string;
  fleetSize: string;
  imageUrl: string;
  initials: string;
  designPartner?: boolean;
};

export type FleetCategory = {
  id: string;
  label: string;
  dotColor: string;
  fleets: Fleet[];
};

export const fleetCategories: FleetCategory[] = [
  {
    id: "delivery",
    label: "Delivery Robots",
    dotColor: "#C9920A",
    fleets: [
      {
        name: "Starship Technologies",
        coverage: "US · UK · EU",
        fleetSize: "6,000+ units",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Starship_Technologies_delivery_robot_in_Milton_Keynes.jpg/960px-Starship_Technologies_delivery_robot_in_Milton_Keynes.jpg",
        initials: "ST",
      },
      {
        name: "Serve Robotics",
        coverage: "Los Angeles",
        fleetSize: "2,000+ units",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Serve_Robotics_delivery_robot.jpg/960px-Serve_Robotics_delivery_robot.jpg",
        initials: "SR",
      },
      {
        name: "Kiwibot",
        coverage: "US campuses",
        fleetSize: "1,000+ units",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Kiwibot_food_delivery_robot.jpg/960px-Kiwibot_food_delivery_robot.jpg",
        initials: "KB",
      },
      {
        name: "Coco",
        coverage: "US cities",
        fleetSize: "800+ units",
        imageUrl:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
        initials: "CO",
      },
    ],
  },
  {
    id: "av",
    label: "Autonomous Vehicles",
    dotColor: "#8B5E3C",
    fleets: [
      {
        name: "Waymo",
        coverage: "SF · Phoenix",
        fleetSize: "700+ vehicles",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Waymo_Chrysler_Pacifica_in_Los_Altos%2C_2017.jpg/960px-Waymo_Chrysler_Pacifica_in_Los_Altos%2C_2017.jpg",
        initials: "WM",
      },
      {
        name: "Nuro",
        coverage: "TX · CA",
        fleetSize: "500+ units",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Nuro_R2_autonomous_delivery_vehicle.jpg/960px-Nuro_R2_autonomous_delivery_vehicle.jpg",
        initials: "NU",
      },
    ],
  },
  {
    id: "humanoid",
    label: "Humanoid Robots",
    dotColor: "#4A5D3A",
    fleets: [
      {
        name: "Unitree Robotics",
        coverage: "Global",
        fleetSize: "10,000+ units",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Unitree_H1_humanoid_robot.jpg/960px-Unitree_H1_humanoid_robot.jpg",
        initials: "UR",
      },
      {
        name: "Toborlife",
        coverage: "US · Asia",
        fleetSize: "500+ units",
        imageUrl:
          "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800",
        initials: "TL",
        designPartner: true,
      },
      {
        name: "Agility Robotics",
        coverage: "US",
        fleetSize: "300+ units",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Agility_Robotics_Digit.jpg/960px-Agility_Robotics_Digit.jpg",
        initials: "AR",
      },
      {
        name: "Simba Robotics",
        coverage: "Global",
        fleetSize: "Emerging",
        imageUrl:
          "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800",
        initials: "SB",
      },
    ],
  },
  {
    id: "retail",
    label: "Retail & Cleaning Robots",
    dotColor: "#A14D3A",
    fleets: [
      {
        name: "Badger Technologies",
        coverage: "US grocery",
        fleetSize: "800+ units",
        imageUrl:
          "https://images.unsplash.com/photo-1581091870622-7cdc21e0a0d3?w=800",
        initials: "BT",
      },
      {
        name: "Brain Corp",
        coverage: "US retail (Walmart +)",
        fleetSize: "15,000+ units",
        imageUrl:
          "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=800",
        initials: "BC",
      },
      {
        name: "Bossa Nova Robotics",
        coverage: "US retail",
        fleetSize: "Shelf-scanning",
        imageUrl:
          "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800",
        initials: "BN",
      },
      {
        name: "Aethon",
        coverage: "US hospitals · logistics",
        fleetSize: "Enterprise",
        imageUrl:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
        initials: "AE",
      },
    ],
  },
  {
    id: "aerial",
    label: "Aerial",
    dotColor: "#9C8F7B",
    fleets: [
      {
        name: "Zipline",
        coverage: "US · Africa",
        fleetSize: "1,000+ drones",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Zipline_drone_launch.jpg/960px-Zipline_drone_launch.jpg",
        initials: "ZP",
      },
      {
        name: "Wing (Google)",
        coverage: "US · AU · Finland",
        fleetSize: "600+ drones",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Wing_drone_delivery.jpg/960px-Wing_drone_delivery.jpg",
        initials: "WG",
      },
    ],
  },
];
