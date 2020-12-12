var shape = "dot"
var fontBG = "white"

//filtering
const nodeFilterSelector = document.getElementById("nodeFilterSelect");
const nodeFilters = document.getElementsByName("nodesFilter");
const edgeFilters = document.getElementsByName("edgesFilter");

function startNetwork(data) {
  const container = document.getElementById("mynetwork");
  const options = {};
  new vis.Network(container, data, options);
}
//
//
// create an array with nodes
var nodes = new vis.DataSet([
  { id: "Player character", label: "Player character", shape: shape, value: 39, font: { background: fontBG }, color: "#FFA807", system: "Player" },
  { id: "Attributes", label: "Attributes", shape: shape, value: 11, font: { background: fontBG }, color: "#FFA807", system: "Player" },
  { id: "Weapon/shield", label: "Weapon/shield", shape: shape, value: 18, font: { background: fontBG }, color: "black", system: "Weapon/shield"},
  { id: "Equipment", label: "Equipment", shape: shape, value: 33, font: { background: fontBG }, color: "#ce41e1", system: "Items/equipment" },
  { id: "Stamina", label: "Stamina", shape: shape, value: 17, font: { background: fontBG }, color: "#e14141", system: "Resources"},
  { id: "Healing item", label: "Healing item", shape: shape, value: 6, font: { background: fontBG }, color: "#ce41e1", system: "Items/equipment"},
  { id: "Projectile", label: "Projectile", shape: shape, value: 6, font: { background: fontBG }, color: "#ce41e1", system: "Items/equipment"},
  { id: "Level geometry", label: "Level geometry", shape: shape, value: 19, font: { background: fontBG }, color: "#97C2FC", system: "World"},
  { id: "Hitbox", label: "Hitbox", shape: shape, value: 7, font: { background: fontBG }, color: "#e0e024", system: "Hitbox/hurtbox"},
  { id: "Hurtbox", label: "Hurtbox", shape: shape, value: 9, font: { background: fontBG }, color: "#e0e024", system: "Hitbox/hurtbox"},
  { id: "Souls", label: "Souls", shape: shape, value: 7, font: { background: fontBG }, color: "#e14141", system: "Resources"},
  { id: "Humanity", label: "Humanity", shape: shape, value: 5, font: { background: fontBG }, color: "#e14141", system: "Resources"},
  { id: "Status effect", label: "Status effect", shape: shape, value: 11, font: { background: fontBG }, color: "#e14141", system: "Resources"},
  { id: "Equip load", label: "Equip load", shape: shape, value: 5, font: { background: fontBG }, color: "#ce41e1", system: "Items/equipment"},
  { id: "Visibility", label: "Visibility", shape: shape, value: 8, font: { background: fontBG }, color: "#b1b2bd", system: "Visibility"},
  { id: "Bloodstain", label: "Bloodstain", shape: shape, value: 5, font: { background: fontBG }, color: "#97C2FC", system: "World"},
  { id: "Utility magic/item", label: "Utility magic/item", shape: shape, value: 22, font: { background: fontBG }, color: "#ce41e1", system: "Items/equipment"},
  { id: "Combat magic/item", label: "Combat magic/item", shape: shape, value: 25, font: { background: fontBG }, color: "#ce41e1", system: "Items/equipment"},
  { id: "Noise", label: "Noise", shape: shape, value: 8, font: { background: fontBG }, color: "#1a9fab", system: "Noise"},
  { id: "NPC", label: "NPC", shape: shape, value: 27, font: { background: fontBG }, color: "#3344f5", system: "NPC"},
  { id: "AI", label: "AI", shape: shape, value: 4, font: { background: fontBG }, color: "#3344f5", system: "NPC"},
  { id: "Health", label: "Health", shape: shape, value: 16, font: { background: fontBG }, color: "#e14141", system: "Resources"},
  { id: "Defence", label: "Defence", shape: shape, value: 5, font: { background: fontBG }, color: "#ce41e1", system: "Items/equipment"},
  { id: "Resistances", label: "Resistances", shape: shape, value: 4, font: { background: fontBG }, color: "#ce41e1", system: "Items/equipment"},
  { id: "Poise", label: "Poise", shape: shape, value: 8, font: { background: fontBG }, color: "#e14141", system: "Resources"},
  { id: "Inventory/attunement", label: "Inventory/attunement", shape: shape, value: 8, font: { background: fontBG }, color: "#ce41e1", system: "Items/equipment"},
  { id: "Day/night cycle", label: "Day/night cycle", shape: shape, value: 4, font: { background: fontBG }, color: "#f291e7", system: "Extra world systems"},
  { id: "Weather", label: "Weather", shape: shape, value: 6, font: { background: fontBG }, color: "#f291e7", system: "Extra world systems"},
  { id: "Bonfire", label: "Bonfire", shape: shape, value: 10, font: { background: fontBG }, color: "#97C2FC", system: "World"},
  { id: "Message/sign", label: "Message/sign", shape: shape, value: 5, font: { background: fontBG }, color: "#97C2FC", system: "World"},
  
  { id: "Swing", label: "Swing", shape: shape, value: 10, font: { background: fontBG }, color: "#7BE141", system: "Player actions"},
  { id: "Roll", label: "Roll", shape: shape, value: 9, font: { background: fontBG }, color: "#7BE141", system: "Player actions"},
  { id: "Block", label: "Block", shape: shape, value: 6, font: { background: fontBG }, color: "#7BE141", system: "Player actions"},
  { id: "Backstab", label: "Backstab", shape: shape, value: 7, font: { background: fontBG }, color: "#7BE141", system: "Player actions"},
  { id: "Parry", label: "Parry", shape: shape, value: 3, color: "#7BE141", system: "Player actions"},
  { id: "Riposte", label: "Riposte", shape: shape, value: 4, font: { background: fontBG }, color: "#7BE141", system: "Player actions"},
  { id: "Jump", label: "Jump", shape: shape, value: 5, font: { background: fontBG }, color: "#7BE141", system: "Player actions"},
  { id: "Backstep", label: "Backstep", shape: shape, value: 6, font: { background: fontBG }, color: "#7BE141", system: "Player actions"},
  { id: "Sprint", label: "Sprint", shape: shape, value: 6, font: { background: fontBG }, color: "#7BE141", system: "Player actions"},
  { id: "Kick", label: "Kick", shape: shape, value: 4, font: { background: fontBG }, color: "#7BE141", system: "Player actions"},
  
  { id: "Durability", label: "Durability", shape: shape, value: 7, font: { background: fontBG }, color: "#ce41e1", system: "Items/equipment"},
  { id: "Item discovery", label: "Item discovery", shape: shape, value: 5, font: { background: fontBG }, color: "#FFA807", system: "Player"},
 
  
]);

// create an array with edges
var edges = new vis.DataSet([
  { from: "Player character", to: "Weapon/shield", label: "Equips", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "Player character", to: "Projectile", label: "Throws/fires", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions"},
  { from: "Player character", to: "Souls", label: "Has", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "Player character", to: "Humanity", label: "Has", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "Player character", to: "Item discovery", label: "Has", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "Player character", to: "Utility magic/item", label: "Uses", arrows: "to", font: { align: "horizontal" }, relation: "Utility actions" },
  { from: "Player character", to: "Combat magic/item", label: "Uses", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "Player character", to: "Healing item", label: "Uses", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "Player character", to: "Health", label: "Has", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "Player character", to: "Equipment", label: "Has", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "Player character", to: "Stamina" , label: "Has", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "Player character", to: "Defence" , label: "Has", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "Player character", to: "Resistances" , label: "Has", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "Player character", to: "Poise" , label: "Has", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "Player character", to: "Equip load", label: "Has", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "Player character", to: "Inventory/attunement", label: "Has", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "Player character", to: "Hurtbox", label: "Contains", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "Player character", to: "Bloodstain", label: "Drops", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "Player character", to: "Bloodstain", label: "Picks up", arrows: "to", font: { align: "horizontal" }, relation: "Other" },
  { from: "Player character", to: "Level geometry", label: "Traverses", arrows: "to", font: { align: "horizontal" }, relation: "Movement" },
  
  { from: "Player character", to: "Swing", label: "Performs", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "Player character", to: "Sprint", label: "Performs", arrows: "to", font: { align: "horizontal" }, relation: "Movement" },
  { from: "Player character", to: "Kick", label: "Performs", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "Player character", to: "Backstep", label: "Performs", arrows: "to", font: { align: "horizontal" }, relation: "Movement" },
  { from: "Player character", to: "Backstab", label: "Performs", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "Player character", to: "Roll", label: "Performs", arrows: "to", font: { align: "horizontal" }, relation: "Movement" },
  { from: "Player character", to: "Block", label: "Performs", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "Player character", to: "Jump", label: "Performs", arrows: "to", font: { align: "horizontal" }, relation: "Movement" },
  { from: "Player character", to: "Parry", label: "Performs", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "Player character", to: "Riposte", label: "Performs", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  
  { from: "Player character", to: "Visibility", label: "Has", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "Player character", to: "NPC", label: "Talks with", arrows: "to", font: { align: "horizontal" }, relation: "Other" },
  { from: "Player character", to: "Attributes", label: "Has", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  
  { from: "Attributes", to: "Weapon/shield", label: "Allows use", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "Attributes", to: "Weapon/shield", label: "Increase dmg", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Attributes", to: "Combat magic/item", label: "Allows use", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "Attributes", to: "Combat magic/item", label: "Increase effect", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Attributes", to: "Utility magic/item", label: "Allows use", arrows: "to", font: { align: "horizontal" }, relation: "Utility actions" },
  { from: "Attributes", to: "Defence", label: "Increase", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Attributes", to: "Resistances", label: "Increase", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Attributes", to: "Inventory/attunement", label: "Add slots", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Attributes", to: "Health", label: "Increase", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Attributes", to: "Stamina", label: "Increase", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  
  { from: "NPC", to: "Hurtbox", label: "Contains", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "NPC", to: "Weapon/shield", label: "Has", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "NPC", to: "Projectile", label: "Throws/fires", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "NPC", to: "AI", label: "Has", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "NPC", to: "Health", label: "Has", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "NPC", to: "Poise", label: "Has", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "NPC", to: "Combat magic/item", label: "Drops/gives", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "NPC", to: "Utility magic/item", label: "Drops/gives", arrows: "to", font: { align: "horizontal" }, relation: "Utility actions" },
  { from: "NPC", to: "Equipment", label: "Drops/gives", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "NPC", to: "Weapon/shield", label: "Drops", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "NPC", to: "Souls", label: "Drops", arrows: "to", font: { align: "horizontal" }, relation: "Changes resources" },
  { from: "NPC", to: "Visibility", label: "Has", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  
  { from: "AI", to: "NPC", label: "Decides action", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  
  { from: "Health", to: "Player character", label: "Kills", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  
  { from: "Poise", to: "Player character", label: "Staggers", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "Poise", to: "NPC", label: "Staggers", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  
  { from: "Defence", to: "Health", label: "Reduces dmg", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  
  { from: "Resistances", to: "Status effect", label: "Reduces", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats"},
  
  { from: "Projectile", to: "Hitbox", label: "Has", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "Projectile", to: "Status effect", label: "Causes", arrows: "to", font: { align: "horizontal" }, relation: "Changes resources" },
  
  { from: "Equipment", to: "Equip load", label: "Adds weight", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Equipment", to: "Equip load", label: "Increases", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Equipment", to: "Durability", label: "Has", arrows: "from", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "Equipment", to: "Stamina", label: "Changes recovery", arrows: "from", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Equipment", to: "Item discovery", label: "Increases", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Equipment", to: "Defence", label: "Increases", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Equipment", to: "Resistances", label: "Increases", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Equipment", to: "Weapon/shield", label: "Boosts dmg", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Equipment", to: "Souls", label: "Prevents drop", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "Equipment", to: "Combat magic/item", label: "Increases dmg/heal", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Equipment", to: "Noise", label: "Silences", arrows: "to", font: { align: "horizontal" }, relation: "Utility actions" },
  { from: "Equipment", to: "Health", label: "Increases/halves", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Equipment", to: "Combat magic/item", label: "Increases uses", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Equipment", to: "Inventory/attunement", label: "Adds a slot", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Equipment", to: "Poise", label: "Increases", arrows: "to", font: { align: "horizontal" }, relation: "Changes resources" },
  { from: "Equipment", to: "Projectile", label: "Increases range", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Equipment", to: "Durablity", label: "Reduces loss", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Equipment", to: "Roll", label: "Changes to flip", arrows: "to", font: { align: "horizontal" }, relation: "Movement" },
  { from: "Equipment", to: "Roll", label: "Adds dmg", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Equipment", to: "NPC", label: "Increases soul drops", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Equipment", to: "Level geometry", label: "Allows traversal", arrows: "to", font: { align: "horizontal" }, relation: "Movement" },
  { from: "Equipment", to: "Kick", label: "Adds fire dmg", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Equipment", to: "Health", label: "Doubles dmg", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Equipment", to: "Health", label: "Heals from kills", arrows: "to", font: { align: "horizontal" }, relation: "Changes resources" },
  { from: "Equipment", to: "Visibility", label: "Changes", arrows: "to", font: { align: "horizontal" }, relation: "Utility actions" },
  { from: "Equipment", to: "Souls", label: "Consumes half", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Equipment", to: "Kick", label: "Changes to maggot", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  
  
  { from: "Equip load", to: "Roll", label: "Sets speed and frames", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Equip load", to: "Stamina", label: "Slows recovery", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  
  { from: "Weapon/shield", to: "Swing", label: "Enables various", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "Weapon/shield", to: "Backstab", label: "Is used to", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "Weapon/shield", to: "Hitbox", label: "Blocks", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "Weapon/shield", to: "Durability", label: "Has", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "Weapon/shield", to: "Block", label: "Enables", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  
  { from: "Combat magic/item", to: "Hitbox", label: "Has", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "Combat magic/item", to: "Status effect", label: "Cures", arrows: "to", font: { align: "horizontal" }, relation: "Changes resources" },
  { from: "Combat magic/item", to: "Stamina", label: "Increases recovery", arrows: "to", font: { align: "horizontal" }, relation: "Changes resources" },
  { from: "Combat magic/item", to: "Poise", label: "Increases", arrows: "to", font: { align: "horizontal" }, relation: "Changes resources" },
  { from: "Combat magic/item", to: "Defence", label: "Increases", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Combat magic/item", to: "Player character", label: "Restricts movement", arrows: "to", font: { align: "horizontal" }, relation: "Movement" },
  { from: "Combat magic/item", to: "Weapon/shield", label: "Upgrades", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Combat magic/item", to: "Equipment", label: "Upgrades", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Combat magic/item", to: "NPC", label: "Charms", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "Combat magic/item", to: "Projectile", label: "Deflects", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "Combat magic/item", to: "NPC", label: "Knocks back", arrows: "to", font: { align: "horizontal" }, relation: "Movement" },
  { from: "Combat magic/item", to: "Player", label: "Knocks back", arrows: "to", font: { align: "horizontal" }, relation: "Movement" },
  { from: "Combat magic/item", to: "Level geometry", label: "Creates resonance marker", arrows: "to", font: { align: "horizontal" }, relation: "Utility actions" },
  { from: "Combat magic/item", to: "Weapon/shield", label: "Allows ghost dmg", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "Combat magic/item", to: "Player character", label: "Transforms", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  
  { from: "Utility magic/item", to: "Noise", label: "Silences", arrows: "to", font: { align: "horizontal" }, relation: "Utility actions" },
  { from: "Utility magic/item", to: "Health", label: "Reduces fall dmg ", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Utility magic/item", to: "Durability", label: "Changes", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Utility magic/item", to: "Visibility", label: "Changes", arrows: "to", font: { align: "horizontal" }, relation: "Utility actions" },
  { from: "Utility magic/item", to: "Noise", label: "Causes", arrows: "to", font: { align: "horizontal" }, relation: "Utility actions" },
  { from: "Utility magic/item", to: "Player character", label: "Unsummons/invades", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "Utility magic/item", to: "Item discovery", label: "Increases", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Utility magic/item", to: "Level geometry", label: "Opens gate", arrows: "to", font: { align: "horizontal" }, relation: "Movement" },
  { from: "Utility magic/item", to: "Level geometry", label: "Blends player in", arrows: "to", font: { align: "horizontal" }, relation: "Utility actions" },
  { from: "Utility magic/item", to: "Player character", label: "Warps", arrows: "to", font: { align: "horizontal" }, relation: "Movement" },
  { from: "Utility magic/item", to: "Message/sign", label: "Writes", arrows: "to", font: { align: "horizontal" }, relation: "Utility actions" },
  { from: "Utility magic/item", to: "Message/sign", label: "Reveals more", arrows: "to", font: { align: "horizontal" }, relation: "Utility actions" },
  { from: "Utility magic/item", to: "Roll", label: "Prevents", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "Utility magic/item", to: "Sprint", label: "Prevents", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "Utility magic/item", to: "Bonfire", label: "Allows further kindling", arrows: "to", font: { align: "horizontal" }, relation: "Other" },
  { from: "Utility magic/item", to: "Souls", label: "Gives", arrows: "to", font: { align: "horizontal" }, relation: "Changes resources" },
  
  
  { from: "Healing item", to: "Health", label: "Increases", arrows: "to", font: { align: "horizontal" }, relation: "Changes resources" },
  
  { from: "Inventory/attunement", to: "Utility magic/item", label: "Contains", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "Inventory/attunement", to: "Combat magic/item", label: "Contains", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "Inventory/attunement", to: "Healing item", label: "Contains", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "Inventory/attunement", to: "Equipment", label: "Contains", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  
  { from: "Status effect", to: "Health", label: "Reduces", arrows: "to", font: { align: "horizontal" }, relation: "Changes resources" },
  { from: "Status effect", to: "Health", label: "Halves (curse)", arrows: "to", font: { align: "horizontal" }, relation: "Changes resources" },
  { from: "Status effect", to: "Stamina", label: "Reduce recovery", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Status effect", to: "Healing item", label: "Prevents usage", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "Status effect", to: "Weapon/shield", label: "Allows ghost dmg", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  
  { from: "Swing", to: "Hitbox", label: "Has", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "Swing", to: "Durability", label: "Reduces", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Swing", to: "Stamina", label: "Consumes", arrows: "to", font: { align: "horizontal" }, relation: "Changes resources" },
  { from: "Swing", to: "Weapon/shield", label: "Enables counter atk.", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "Swing", to: "Noise", label: "Causes", arrows: "to", font: { align: "horizontal" }, relation: "Other" },
  
  { from: "Hitbox", to: "Hurtbox", label: "Collides", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "Hitbox", to: "Level geometry", label: "Collides", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  
  { from: "Hurtbox", to: "Health", label: "Changes", arrows: "to", font: { align: "horizontal" }, relation: "Changes resources" },
  { from: "Hurtbox", to: "Poise", label: "Reduces", arrows: "to", font: { align: "horizontal" }, relation: "Changes resources" },
  { from: "Hurtbox", to: "Status effect", label: "Causes", arrows: "to", font: { align: "horizontal" }, relation: "Changes resources" },
  
  { from: "Roll", to: "Stamina", label: "Consumes", arrows: "to", font: { align: "horizontal" }, relation: "Changes resources" },
  { from: "Roll", to: "Swing", label: "Dodges", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "Roll", to: "Player character", label: "Moves", arrows: "to", font: { align: "horizontal" }, relation: "Movement" },
  { from: "Roll", to: "Noise", label: "Causes", arrows: "to", font: { align: "horizontal" }, relation: "Other" },
  
  { from: "Jump", to: "Player character", label: "Moves", arrows: "to", font: { align: "horizontal" }, relation: "Movement"},
  { from: "Jump", to: "Level geometry", label: "Crosses gap", arrows: "to", font: { align: "horizontal" }, relation: "Movement" },
  { from: "Jump", to: "Stamina", label: "Consumes", arrows: "to", font: { align: "horizontal" }, relation: "Changes resources" },
  { from: "Jump", to: "Noise", label: "Causes", arrows: "to", font: { align: "horizontal" }, relation: "Other" },
  
  { from: "Backstab", to: "Stamina", label: "Consumes", arrows: "to", font: { align: "horizontal" }, relation: "Changes resources" },
  { from: "Backstab", to: "Health", label: "Reduces", arrows: "to", font: { align: "horizontal" }, relation: "Changes resources" },
  { from: "Backstab", to: "Hurtbox", label: "Grants temp invuln.", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "Backstab", to: "Player", label: "Moves", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "Backstab", to: "NPC", label: "Moves", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  
  { from: "Block", to: "Stamina", label: "Consumes on hit", arrows: "to", font: { align: "horizontal" }, relation: "Changes resources" },
  { from: "Block", to: "Stamina", label: "Slows recovery", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Block", to: "Hitbox", label: "Reduces dmg", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  
  { from: "Parry", to: "Stamina", label: "Consumes", arrows: "to", font: { align: "horizontal" }, relation: "Changes resources" },
  { from: "Parry", to: "NPC", label: "Staggers", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  
  { from: "Riposte", to: "Stamina", label: "Consumes", arrows: "to", font: { align: "horizontal" }, relation: "Changes resources" },
  { from: "Riposte", to: "Health", label: "Reduces", arrows: "to", font: { align: "horizontal" }, relation: "Changes resources" },
  { from: "Riposte", to: "Hurtbox", label: "Grants temp invuln.", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  
  { from: "Backstep", to: "Stamina", label: "Consumes", arrows: "to", font: { align: "horizontal" }, relation: "Changes resources" },
  { from: "Backstep", to: "Poise", label: "Maxes", arrows: "to", font: { align: "horizontal" }, relation: "Changes resources" },
  { from: "Backstep", to: "Swing", label: "Enables new", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "Backstep", to: "Player character", label: "Moves", arrows: "to", font: { align: "horizontal" }, relation: "Movement" },
  { from: "Backstep", to: "Noise", label: "Causes", arrows: "to", font: { align: "horizontal" }, relation: "Changes resources" },
  
  { from: "Sprint", to: "Stamina", label: "Consumes", arrows: "to", font: { align: "horizontal" }, relation: "Changes resources" },
  { from: "Sprint", to: "Player character", label: "Increases speed", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Sprint", to: "Swing", label: "Enables new", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "Sprint", to: "Noise", label: "Causes", arrows: "to", font: { align: "horizontal" }, relation: "Other" },
  
  { from: "Kick", to: "NPC", label: "Staggers", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "Kick", to: "NPC", label: "Moves", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  
  { from: "Stamina", to: "Player character", label: "Restricts actions", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  
  { from: "Durability", to: "Weapon/shield", label: "Reduces dmg/def", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Durability", to: "Equipment", label: "Reduces def", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  
  { from: "Combat magic/item", to: "Status effect", label: "Causes", arrows: "to", font: { align: "horizontal" }, relation: "Changes resources" },
  { from: "Combat magic/item", to: "Weapon/shield", label: "Boosts dmg/def", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  
  { from: "Noise", to: "AI", label: "Attracts", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "Visibility", to: "AI", label: "Attracts", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
 
  { from: "Level geometry", to: "Bloodstain", label: "Contains", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "Level geometry", to: "Bonfire", label: "Contains", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "Level geometry", to: "Message/sign", label: "Contains", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "Level geometry", to: "Utility magic/item", label: "Contains", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "Level geometry", to: "Combat magic/item", label: "Contains", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "Level geometry", to: "Player character", label: "Contains", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "Level geometry", to: "NPC", label: "Contains", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "Level geometry", to: "Equipment", label: "Contains", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "Level geometry", to: "Health", label: "Reduces", arrows: "to", font: { align: "horizontal" }, relation: "Changes resources" },
  { from: "Level geometry", to: "Hurtbox", label: "Has", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "Level geometry", to: "Weapon/shield", label: "Enables plunge atk.", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  
  { from: "Visibility", to: "Level geometry", label: "Reveals", arrows: "to", font: { align: "horizontal" }, relation: "Utility actions" },
  { from: "Visibility", to: "NPC", label: "Reveals", arrows: "to", font: { align: "horizontal" }, relation: "Utility actions" },
  
  { from: "Bloodstain", to: "Souls", label: "Contains", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "Bloodstain", to: "Humanity", label: "Contains", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  
  { from: "Bonfire", to: "Healing item", label: "Restores", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "Bonfire", to: "Health", label: "Increases", arrows: "to", font: { align: "horizontal" }, relation: "Changes resources" },
  { from: "Bonfire", to: "Player character", label: "Respawns", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "Bonfire", to: "Inventory/attunement", label: "Has", arrows: "to", font: { align: "horizontal" }, relation: "Has/contains/equips" },
  { from: "Bonfire", to: "Day/night cycle", label: "Advances", arrows: "to", font: { align: "horizontal" }, relation: "Utility actions" },
  { from: "Bonfire", to: "NPC", label: "Respawns", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  
  { from: "Item discovery", to: "NPC", label: "Increases drop rate", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  
  { from: "Humanity", to: "Item discovery", label: "Increases", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Humanity", to: "Bonfire", label: "Kindles", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Humanity", to: "Player character", label: "Restores human form", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  
  { from: "Souls", to: "NPC", label: "Spent to buy from", arrows: "to", font: { align: "horizontal" }, relation: "Other" },
  
  { from: "Message/sign", to: "Player character", label: "Summons", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "Message/sign", to: "NPC", label: "Summons", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  
  { from: "Weather", to: "Status effect", label: "Causes", arrows: "to", font: { align: "horizontal" }, relation: "Changes resources" },
  { from: "Weather", to: "Durability", label: "Reduces", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Weather", to: "Health", label: "Changes", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Weather", to: "Stamina", label: "Changes recovery", arrows: "to", font: { align: "horizontal" }, relation: "Changes stats" },
  { from: "Weather", to: "Bonfire", label: "Puts out", arrows: "to", font: { align: "horizontal" }, relation: "Other" },
  { from: "Weather", to: "Noise", label: "Covers", arrows: "to", font: { align: "horizontal" }, relation: "Other" },
  
  { from: "Day/night cycle", to: "Visibility", label: "Affects", arrows: "to", font: { align: "horizontal" }, relation: "Utility actions" },
  { from: "Day/night cycle", to: "AI", label: "Affects", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  { from: "Day/night cycle", to: "NPC", label: "Summons", arrows: "to", font: { align: "horizontal" }, relation: "Combat actions" },
  
]);

//filtering
/**
 * filter values are updated in the outer scope.
 * in order to apply filters to new values, DataView.refresh() should be called
 */
let nodeFilterValue = "";
const edgesFilterValues = {
  "Has/contains/equips": true,
  "Changes resources": true,
  "Changes stats": true,
  "Movement": true,
  "Combat actions": true,
  "Utility actions": true,
  "Other": true,
  //parent: true,
};
const nodesFilterValues = {
  "Player": true,
  "World": true,
  "NPC": true,
  "Weapon/shield": true,
  "Items/equipment": true,
  "Resources": true,
  "Player actions": true,
  "Hitbox/hurtbox": true,
  "Visibility": true,
  "Noise": true,
  "Extra world systems": true,

};

const edgesFilter = (edge) => {
  return edgesFilterValues[edge.relation];
};

const nodesFilter = (node) => {
  return nodesFilterValues[node.system];
};

const nodesView = new vis.DataView(nodes, { filter: nodesFilter });
const edgesView = new vis.DataView(edges, { filter: edgesFilter });

edgeFilters.forEach((filter) =>
  filter.addEventListener("change", (e) => {
    const { value, checked } = e.target;
    edgesFilterValues[value] = checked;
    edgesView.refresh();
  })
);

nodeFilters.forEach((filter) =>
  filter.addEventListener("change", (e) => {
    const { value, checked } = e.target;
    nodesFilterValues[value] = checked;
    nodesView.refresh();
  })
);
//

// create a network
var container = document.getElementById("mynetwork");
var data = {
  nodes: nodesView,
  edges: edgesView, //replace with edgesView if edge filtering wanted
};

var options = {
physics:{ enabled: true,
barnesHut: {
      theta: 0.5,
      gravitationalConstant: -7000,
      centralGravity: 0.3,
      springLength: 500,
      springConstant: 0.01,
      damping: 0.09,
      avoidOverlap: 0.1
    },
},
nodes: {
  shape: "box",scaling: {
    label: {enabled: true,
            min: 20,
            max: 20,
           },
    }, 
	}
};
   
var network = new vis.Network(container, data, options);
network.on("selectNode", function (params) {
  if (params.nodes.length == 1) {
    if (network.isCluster(params.nodes[0]) == true) {
      network.openCluster(params.nodes[0]);
      //network.stabilize();
    }
  }
});

function uncluster() {
  if (network.findNode("cluster:Player").length != 0){
  	
		if (network.isCluster("cluster:Player") == true) {
      network.openCluster("cluster:Player");
    }
  }
  if (network.findNode("cluster:World").length != 0){
    if (network.isCluster("cluster:World") == true) {
        network.openCluster("cluster:World");
      }
  }
  if (network.findNode("cluster:NPC").length != 0){
    if (network.isCluster("cluster:NPC") == true) {
        network.openCluster("cluster:NPC");
      }
  }
  if (network.findNode("cluster:Weapon/shield").length != 0){
    if (network.isCluster("cluster:Weapon/shield") == true) {
        network.openCluster("cluster:Weapon/shield");
      }
  }
  if (network.findNode("cluster:Items/equipment").length != 0){
    if (network.isCluster("cluster:Items/equipment") == true) {
        network.openCluster("cluster:Items/equipment");
      }
  }
  if (network.findNode("cluster:Player actions").length != 0){
    if (network.isCluster("cluster:Player actions") == true) {
        network.openCluster("cluster:Player actions");
      }
  }
  if (network.findNode("cluster:Hitbox/hurtbox").length != 0){
    if (network.isCluster("cluster:Hitbox/hurtbox") == true) {
        network.openCluster("cluster:Hitbox/hurtbox");
      }
  }
  if (network.findNode("cluster:Extra world systems").length != 0){
    if (network.isCluster("cluster:Extra world systems") == true) {
        network.openCluster("cluster:Extra world systems");
      }
  }
  if (network.findNode("cluster:Resources").length != 0){
    if (network.isCluster("cluster:Resources") == true) {
        network.openCluster("cluster:Resources");
      }
  }
  
  
}

function clusterBySystem() {
  network.setData(data);
  var colors = ["Player", "World", "NPC", "Weapon/shield", "Items/equipment", "Player actions", "Hitbox/hurtbox", "Extra world systems", "Resources"];
  var colors2 = ["#FFA807", "#97C2FC", "#3344f5", "black", "#ce41e1", "#7BE141", "#e0e024", "#f291e7", "#e14141"];
  var clusterOptionsByData;
  for (var i = 0; i < colors.length; i++) {
    var color = colors[i];
    clusterOptionsByData = {
      joinCondition: function (childOptions) {
        return childOptions.system == color; // the color is fully defined in the node.
      },
      processProperties: function (clusterOptions, childNodes, childEdges) {
        var totalMass = 0;
        for (var i = 0; i < childNodes.length; i++) {
          totalMass += childNodes[i].mass;
        }
        clusterOptions.mass = totalMass;
        return clusterOptions;
      },
      clusterNodeProperties: {
        id: "cluster:" + color,
        borderWidth: 3,
        shape: "square",
        color: colors2[i],
        label: "System: " + color,
        font: { size: 30, background: fontBG },
      },
    };
    network.cluster(clusterOptionsByData);
  }
}

function clusterByConnection() {
  network.setData(data);
  network.clusterByConnection(1);
}
function clusterOutliers() {
  network.setData(data);
  network.clusterOutliers();
}
function clusterByHubsize() {
  network.setData(data);
  var clusterOptionsByData = {
    processProperties: function (clusterOptions, childNodes) {
      clusterOptions.label = "[" + childNodes.length + "]";
      return clusterOptions;
    },
    clusterNodeProperties: {
      borderWidth: 3,
      shape: "box",
      font: { size: 30, background: fontBG },
    },
  };
  network.clusterByHubsize(undefined, clusterOptionsByData);
}
