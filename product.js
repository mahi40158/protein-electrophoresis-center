const products = {

  "running-buffer": {
    name: "Running Buffer",
    price: "۲۰۰٬۰۰۰ تومان",
    image: "images/running-buffer.png",
    description: "Running Buffer for SDS-PAGE Electrophoresis.",
    specs: [
      "Concentration : 10X",
      "Volume : 100 mL",
      "pH : 8.3",
      "Ready To Use",
      "Store at 4°C"
    ]
  },

  "resolving-buffer": {
    name: "Resolving Gel Buffer",
    price: "۲۰۰٬۰۰۰ تومان",
    image: "images/Resolving.png",
    description: "Resolving Gel Buffer for SDS-PAGE gel preparation.",
    specs: [
      "Volume : 25 mL",
      "1.5 M Tris-HCl",
      "pH : 8.8",
      "Ready To Use",
       "Store at 4°C"
    ]
  },

  "stacking-buffer": {
    name: "Stacking Gel Buffer",
    price: "۲۰۰٬۰۰۰ تومان",
    image: "images/Stacking.png",
    description: "Stacking Gel Buffer for SDS-PAGE.",
    specs: [
      "Volume : 25 mL",
      "0.5 M Tris-HCl",
      "pH : 6.8",
      "Ready To Use",
       "Store at 4°C"
    ]
  },

  "sample-loading-buffer": {
    name: "Sample Loading Buffer (4X)",
    price: "۲۰۰٬۰۰۰ تومان",
    image: "images/SampleBuffer.png",
    description: "4X Sample Loading Buffer for protein electrophoresis.",
    specs: [
      "Concentration : 4X",
      "Ready To Use",
      "Blue Tracking Dye",
      "Store at -20°C"
    ]
  },

  "protein-ladder": {
    name: "Protein Ladder",
    price: "۵۰۰٬۰۰۰ تومان",
    image: "images/ladder.png",
    description: "Prestained Protein Molecular Weight Marker.",
    specs: [
      "10–180 kDa",
      "Prestained",
      "Ready To Use",
      "Store at -20°C"
    ]
  },

  "sds-solution": {
    name: "SDS 10% Solution",
    price: "۲۰۰٬۰۰۰ تومان",
    image: "images/SDS.png",
    description: "10% SDS Solution.",
    specs: [
      "10%",
      "Molecular Biology Grade",
      "Ready To Use",
      "Store at Room Temperature"
    ]
  },

  "temed": {
    name: "TEMED",
    description: "Tetramethylethylenediamine",
    price: "۱۰۰٬۰۰۰ تومان",
    image: "images/TEMED.png",
    description: "TEMED for gel polymerization.",
    specs: [
      "High Purity",
      "Ready To Use",
      "Store at 4°C"
    ]
  },

  "aps": {
    name: "APS",
    price: "۱۰۰٬۰۰۰ تومان",
    image: "images/APS.png",
    description: "Ammonium Persulfate.",
    specs: [
      "100 mg",
      "High Purity",
      "Freshly Prepared Solution Recommended",
      "Store at Room Temperature"
    ]
  },

  "anode-buffer/cathode-buffer": {
    name: "Anode Buffer/cathode-Buffer",
    price: "۲٬۰۰۰٬۰۰۰ تومان",
    image: "images/Catode and Anode buffer.png",
    description: "Anode-Buffer/Cathode-Buffer for Tricine electrophoresis.",
    specs: [
      "Ready To Use",
      "Stable pH",
     "Store at Room Temperature"
    ]
  },

  
  "tris-tricine-buffer": {
    name: "Tris-Tricine Buffer",
    price: "۳۰۰٬۰۰۰ تومان",
    image: "images/Tricine.png",
    description: "Buffer for low molecular weight proteins.",
    specs: [
      "Tris-Tricine System",
      "Ready To Use",
      "Store at 4°C"
    ]
  },

  "coomassie": {
    name: "Coomassie Brilliant Blue",
    price: "۵۰۰٬۰۰۰ تومان",
    image: "images/coomassie.png",
    description: "Protein staining solution.",
    specs: [
      "250 ml",
      "Ready To Use",
      "Fast Staining",
      "Store at Room Temperature"
    ]
  },

  "Destain": {
    name: "Destain Solution",
    price: "۴۰۰٬۰۰۰ تومان",
    image: "images/Destaining.png",
    description: "SDS-PAGE Destain Solution.",
    specs: [
     "500 ml",
      "Ready To Use",
      "Fast Destain",
      "Store at Room Temperature"
    ]
  },

  "silver-staining": {
    name: "Silver Staining Solution",
    price: "۶۰۰٬۰۰۰ تومان",
    image: "images/silver.png",
    description: "High sensitivity protein staining.",
    specs: [
      "High Sensitivity",
      "Ready To Use",
      "Store at 4°C"
    ]
  },

  "bradford": {
    name: "Bradford Reagent",
    price: "۷۰۰٬۰۰۰ تومان",
    image: "images/bradford.png",
    description: "Protein Quantification Reagent.",
    specs: [
      "Ready To Use",
      "595 nm",
      "Store at 4°C"
    ]
  },

  "bsa-standard": {
    name: "BSA Protein Standard",
    price: "۲۰۰٬۰۰۰ تومان",
    image: "images/BSA.png",
    description: "Bovine Serum Albumin Standard.",
    specs: [
      "Protein Standard",
      "High Purity",
      "Store at 4°C"
    ]
  }

};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const product = products[id];

if (product) {

    document.getElementById("productName").innerHTML = product.name;
    document.getElementById("productPrice").innerHTML = product.price;
    document.getElementById("productDescription").innerHTML = product.description;
    document.getElementById("productImage").src = product.image;

    let html = "";

    product.specs.forEach(item => {
        html += `<li>${item}</li>`;
    });

    document.getElementById("productSpecs").innerHTML = html;

}