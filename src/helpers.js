export function formatPrice(cents) {
    return (cents / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "BGN"
    });
  }
  
  export function rando(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  export function slugify(text) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  }
  
  export function getFunName() {
    const adjectives = [
      "HealthStoreFoods",
      "HealthStoreSupplements"   
    ];
  
    const nouns = [
      "Sofia Bussness Park",
      "Sofia Cerdika",
      "Plovdiv",
      "Varna",
    ];
  
    return `${rando(adjectives)}-${rando(nouns)}`;
  }
  