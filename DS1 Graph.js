var shape = "circle"
// create an array with nodes
var nodes = [
  { id: "Player character", label: "Player character", shape: shape, color: "orange", system: "Player" },
  { id: "Attributes", label: "Attributes", shape: shape, color: "orange", system: "Player" },
  { id: "Weapon/shield", label: "Weapon/shield", shape: shape, color: "cyan"},
  { id: "Equipment", label: "Equipment", shape: shape, color: "teal", system: "Items/equipment" },
  { id: "Stamina", label: "Stamina", shape: shape, color: "yellow"},
  { id: "Healing item", label: "Healing item", shape: shape, color: "teal", system: "Items/equipment"},
  { id: "Projectile", label: "Projectile", shape: shape, color: "teal", system: "Items/equipment"},
  { id: "Level geometry", label: "Level geometry", shape: shape, color: "green", system: "World"},
  { id: "Hitbox", label: "Hitbox", shape: shape, color: "coral", system: "Hitbox/hurtbox"},
  { id: "Hurtbox", label: "Hurtbox", shape: shape, color: "coral", system: "Hitbox/hurtbox"},
  { id: "Souls", label: "Souls", shape: shape, color: "orange", system: "Player"},
  { id: "Humanity", label: "Humanity", shape: shape, color: "orange", system: "Player"},
  { id: "Status effect", label: "Status effect", shape: shape, color: "orange", system: "Player"},
  { id: "Equip load", label: "Equip load", shape: shape, color: "teal", system: "Items/equipment"},
  { id: "Visibility", label: "Visibility", shape: shape, color: "grey"},
  { id: "Bloodstain", label: "Bloodstain", shape: shape, color: "green", system: "World"},
  { id: "Utility magic/item", label: "Utility magic/item", shape: shape, color: "teal", system: "Items/equipment"},
  { id: "Combat magic/item", label: "Combat magic/item", shape: shape, color: "teal", system: "Items/equipment"},
  { id: "Noise", label: "Noise", shape: shape, color: "navy"},
  { id: "NPC", label: "NPC", shape: shape, color: "blue", system: "NPC"},
  { id: "AI", label: "AI", shape: shape, color: "blue", system: "NPC"},
  { id: "Health", label: "Health", shape: shape, color: "red"},
  { id: "Defence", label: "Defence", shape: shape, color: "teal", system: "Items/equipment"},
  { id: "Resistances", label: "Resistances", shape: shape, color: "teal", system: "Items/equipment"},
  { id: "Poise", label: "Poise", shape: shape, color: "teal", system: "Items/equipment"},
  { id: "Inventory/attunement", label: "Inventory/attunement", shape: shape, color: "teal", system: "Items/equipment"},
  { id: "Day/night cycle", label: "Day/night cycle", shape: shape, color: "pink", system: "Not in game"},
  { id: "Weather", label: "Weather", shape: shape, color: "pink", system: "Not in game"},
  { id: "Bonfire", label: "Bonfire", shape: shape, color: "green", system: "World"},
  { id: "Message", label: "Message", shape: shape, color: "green", system: "World"},
  { id: "Swing", label: "Swing", shape: shape, color: "lime", system: "Player actions"},
  { id: "Roll", label: "Roll", shape: shape, color: "lime", system: "Player actions"},
  { id: "Block", label: "Block", shape: shape, color: "lime", system: "Player actions"},
  { id: "Backstab", label: "Backstab", shape: shape, color: "lime", system: "Player actions"},
  { id: "Parry", label: "Parry", shape: shape, color: "lime", system: "Player actions"},
  { id: "Riposte", label: "Riposte", shape: shape, color: "lime", system: "Player actions"},
  { id: "Jump", label: "Jump", shape: shape, color: "lime", system: "Player actions"},
  { id: "Backstep", label: "Backstep", shape: shape, color: "lime", system: "Player actions"},
  { id: "Sprint", label: "Sprint", shape: shape, color: "lime", system: "Player actions"},
  { id: "Kick", label: "Kick", shape: shape, color: "lime", system: "Player actions"},
  { id: "Durability", label: "Durability", shape: shape, color: "teal", system: "Items/equipment"},
  { id: "Item discovery", label: "Item discovery", shape: shape, color: "orange", system: "Player"},
  
  
  //Legend
  { id: 1, label: "Player", cid: 1, color: "orange", x: -1300, y: 1, fixed: true, physics: false, margin: { top: 0, right: 20, bottom: 0, left: 20 },},
  { id: 2, label: "World", cid: 1, color: "green", x: -1300, y: 31, fixed: true, physics: false, margin: { top: 0, right: 20, bottom: 0, left: 20 },},
  { id: 3, label: "NPC", cid: 1, color: "blue", x: -1300, y: 61, fixed: true, physics: false, margin: { top: 0, right: 20, bottom: 0, left: 20 },},
  { id: 4, label: "Items/equipment", cid: 1, color: "teal", x: -1300, y: 91, fixed: true, physics: false, margin: { top: 0, right: 20, bottom: 0, left: 20 },},
  { id: 5, label: "Health", cid: 1, color: "red", x: -1300, y: 121, fixed: true, physics: false, margin: { top: 0, right: 20, bottom: 0, left: 20 },},
  { id: 6, label: "Stamina", cid: 1, color: "yellow", x: -1300, y: 151, fixed: true, physics: false, margin: { top: 0, right: 20, bottom: 0, left: 20 },},
  { id: 7, label: "Weapon/shield", cid: 1, color: "cyan", x: -1300, y: 181, fixed: true, physics: false, margin: { top: 0, right: 20, bottom: 0, left: 20 },},
  { id: 8, label: "Player actions", cid: 1, color: "lime", x: -1300, y: 211, fixed: true, physics: false, margin: { top: 0, right: 20, bottom: 0, left: 20 },},
  { id: 9, label: "Stamina", cid: 1, color: "yellow", x: -1300, y: 241, fixed: true, physics: false, margin: { top: 0, right: 20, bottom: 0, left: 20 },},
  { id: 10, label: "Hitbox/hurtbox", cid: 1, color: "coral", x: -1300, y: 271, fixed: true, physics: false, margin: { top: 0, right: 20, bottom: 0, left: 20 },},
  { id: 11, label: "Visibility", cid: 1, color: "grey", x: -1300, y: 301, fixed: true, physics: false, margin: { top: 0, right: 20, bottom: 0, left: 20 },},
  { id: 12, label: "Not in game", cid: 1, color: "pink", x: -1300, y: 331, fixed: true, physics: false, margin: { top: 0, right: 20, bottom: 0, left: 20 },},
];

// create an array with edges
var edges = [
  { from: "Player character", to: "Weapon/shield", label: "Equips", arrows: "to", font: { align: "horizontal" } },
  { from: "Player character", to: "Projectile", label: "Throws/fires", arrows: "to", font: { align: "horizontal" } },
  { from: "Player character", to: "Souls", label: "Has", arrows: "to", font: { align: "horizontal" } },
  { from: "Player character", to: "Humanity", label: "Has", arrows: "to", font: { align: "horizontal" } },
  { from: "Player character", to: "Utility magic/item", label: "Uses/equips", arrows: "to", font: { align: "horizontal" } },
  { from: "Player character", to: "Healing item", label: "Uses", arrows: "to", font: { align: "horizontal" } },
  { from: "Player character", to: "Health", label: "Has", arrows: "to", font: { align: "horizontal" } },
  { from: "Player character", to: "Equipment", label: "Has", arrows: "to", font: { align: "horizontal" } },
  { from: "Player character", to: "Stamina" , label: "Has", arrows: "to", font: { align: "horizontal" } },
  { from: "Player character", to: "Defence" , label: "Has", arrows: "to", font: { align: "horizontal" } },
  { from: "Player character", to: "Resistances" , label: "Has", arrows: "to", font: { align: "horizontal" } },
  { from: "Player character", to: "Poise" , label: "Has", arrows: "to", font: { align: "horizontal" } },
  { from: "Player character", to: "Equip load", label: "Has", arrows: "to", font: { align: "horizontal" } },
  { from: "Player character", to: "Inventory/attunement", label: "Has", arrows: "to", font: { align: "horizontal" } },
  { from: "Player character", to: "Hurtbox", label: "Contains", arrows: "to", font: { align: "horizontal" } },
  { from: "Player character", to: "Bloodstain", label: "Drops", arrows: "to", font: { align: "horizontal" } },
  { from: "Player character", to: "Bloodstain", label: "Picks up", arrows: "to", font: { align: "horizontal" } },
  { from: "Player character", to: "Sprint", label: "Performs", arrows: "to", font: { align: "horizontal" } },
  { from: "Player character", to: "Kick", label: "Performs", arrows: "to", font: { align: "horizontal" } },
  { from: "Player character", to: "Visibility", label: "Has", arrows: "to", font: { align: "horizontal" } },
  { from: "Player character", to: "NPC", label: "Talks with", arrows: "to", font: { align: "horizontal" } },
  { from: "Player character", to: "Attributes", label: "Has", arrows: "to", font: { align: "horizontal" } },
  
  { from: "Attributes", to: "Weapon/shield", label: "Allows use", arrows: "to", font: { align: "horizontal" } },
  { from: "Attributes", to: "Weapon/shield", label: "Increase dmg", arrows: "to", font: { align: "horizontal" } },
  { from: "Attributes", to: "Combat magic/item", label: "Allows use", arrows: "to", font: { align: "horizontal" } },
  { from: "Attributes", to: "Combat magic/item", label: "Increase effect", arrows: "to", font: { align: "horizontal" } },
  { from: "Attributes", to: "Utility magic/item", label: "Allows use", arrows: "to", font: { align: "horizontal" } },
  { from: "Attributes", to: "Defence", label: "Increase", arrows: "to", font: { align: "horizontal" } },
  { from: "Attributes", to: "Resistances", label: "Increase", arrows: "to", font: { align: "horizontal" } },
  { from: "Attributes", to: "Inventory/attunement", label: "Add slots", arrows: "to", font: { align: "horizontal" } },
  { from: "Attributes", to: "Health", label: "Increase", arrows: "to", font: { align: "horizontal" } },
  { from: "Attributes", to: "Stamina", label: "Increase", arrows: "to", font: { align: "horizontal" } },
  
  { from: "NPC", to: "Hurtbox", label: "Contains", arrows: "to", font: { align: "horizontal" } },
  { from: "NPC", to: "Weapon/shield", label: "Has", arrows: "to", font: { align: "horizontal" } },
  { from: "NPC", to: "Projectile", label: "Throws/fires", arrows: "to", font: { align: "horizontal" } },
  { from: "NPC", to: "AI", label: "Has", arrows: "to", font: { align: "horizontal" } },
  { from: "NPC", to: "Health", label: "Has", arrows: "to", font: { align: "horizontal" } },
  { from: "NPC", to: "Poise", label: "Has", arrows: "to", font: { align: "horizontal" } },
  { from: "NPC", to: "Combat magic/item", label: "Drops/gives", arrows: "to", font: { align: "horizontal" } },
  { from: "NPC", to: "Utility magic/item", label: "Drops/gives", arrows: "to", font: { align: "horizontal" } },
  { from: "NPC", to: "Equipment", label: "Drops/gives", arrows: "to", font: { align: "horizontal" } },
  { from: "NPC", to: "Weapon/shield", label: "Drops", arrows: "to", font: { align: "horizontal" } },
  { from: "NPC", to: "Souls", label: "Drops", arrows: "to", font: { align: "horizontal" } },
  { from: "NPC", to: "Visibility", label: "Has", arrows: "to", font: { align: "horizontal" } },
  
  { from: "AI", to: "NPC", label: "Decides action", arrows: "to", font: { align: "horizontal" } },
  
  { from: "Health", to: "Player character", label: "Kills", arrows: "to", font: { align: "horizontal" } },
  
  { from: "Poise", to: "Player character", label: "Staggers", arrows: "to", font: { align: "horizontal" } },
  { from: "Poise", to: "NPC", label: "Staggers", arrows: "to", font: { align: "horizontal" } },
  
  { from: "Defence", to: "Health", label: "Reduces dmg", arrows: "to", font: { align: "horizontal" } },
  
  { from: "Resistances", to: "Status effect", label: "Reduces", arrows: "to", font: { align: "horizontal" } },
  
  { from: "Projectile", to: "Hitbox", label: "Has", arrows: "to", font: { align: "horizontal" } },
  { from: "Projectile", to: "Status effect", label: "Causes", arrows: "to", font: { align: "horizontal" } },
  
  { from: "Equipment", to: "Equip load", label: "Adds weight", arrows: "to", font: { align: "horizontal" } },
  { from: "Equipment", to: "Equip load", label: "Increases", arrows: "to", font: { align: "horizontal" } },
  { from: "Equipment", to: "Durability", label: "Has", arrows: "from", font: { align: "horizontal" } },
  { from: "Equipment", to: "Stamina", label: "Changes recovery", arrows: "from", font: { align: "horizontal" } },
  { from: "Equipment", to: "Item discovery", label: "Increases", arrows: "to", font: { align: "horizontal" } },
  { from: "Equipment", to: "Defence", label: "Increases", arrows: "to", font: { align: "horizontal" } },
  { from: "Equipment", to: "Resistances", label: "Increases", arrows: "to", font: { align: "horizontal" } },
  { from: "Equipment", to: "Weapon/shield", label: "Boosts dmg", arrows: "to", font: { align: "horizontal" } },
  { from: "Equipment", to: "Souls", label: "Prevents drop", arrows: "to", font: { align: "horizontal" } },
  { from: "Equipment", to: "Combat magic/item", label: "Increases dmg/heal", arrows: "to", font: { align: "horizontal" } },
  { from: "Equipment", to: "Souls", label: "Prevents drop", arrows: "to", font: { align: "horizontal" } },
  { from: "Equipment", to: "Noise", label: "Silences", arrows: "to", font: { align: "horizontal" } },
  { from: "Equipment", to: "Health", label: "Increases/halves", arrows: "to", font: { align: "horizontal" } },
  { from: "Equipment", to: "Combat magic/item", label: "Increases uses", arrows: "to", font: { align: "horizontal" } },
  { from: "Equipment", to: "Inventory/attunement", label: "Adds a slot", arrows: "to", font: { align: "horizontal" } },
  { from: "Equipment", to: "Poise", label: "Increases", arrows: "to", font: { align: "horizontal" } },
  { from: "Equipment", to: "Projectile", label: "Increases range", arrows: "to", font: { align: "horizontal" } },
  { from: "Equipment", to: "Durablity", label: "Reduces loss", arrows: "to", font: { align: "horizontal" } },
  { from: "Equipment", to: "Roll", label: "Changes to flip", arrows: "to", font: { align: "horizontal" } },
  { from: "Equipment", to: "Roll", label: "Adds dmg", arrows: "to", font: { align: "horizontal" } },
  { from: "Equipment", to: "NPC", label: "Increases soul drops", arrows: "to", font: { align: "horizontal" } },
  { from: "Equipment", to: "Level geometry", label: "Allows traversal", arrows: "to", font: { align: "horizontal" } },
  { from: "Equipment", to: "Kick", label: "Adds fire dmg", arrows: "to", font: { align: "horizontal" } },
  { from: "Equipment", to: "Health", label: "Doubles dmg", arrows: "to", font: { align: "horizontal" } },
  { from: "Equipment", to: "Health", label: "Heals from kills", arrows: "to", font: { align: "horizontal" } },
  { from: "Equipment", to: "Visibility", label: "Changes", arrows: "to", font: { align: "horizontal" } },
  { from: "Equipment", to: "Souls", label: "Consumes half", arrows: "to", font: { align: "horizontal" } },
  { from: "Equipment", to: "Kick", label: "Changes to maggot", arrows: "to", font: { align: "horizontal" } },
  
  
  { from: "Equip load", to: "Roll", label: "Sets speed", arrows: "to", font: { align: "horizontal" } },
  { from: "Equip load", to: "Stamina", label: "Slows recovery", arrows: "to", font: { align: "horizontal" } },
  
  { from: "Weapon/shield", to: "Swing", label: "Does various", arrows: "to", font: { align: "horizontal" } },
  { from: "Weapon/shield", to: "Backstab", label: "Does", arrows: "to", font: { align: "horizontal" } },
  { from: "Weapon/shield", to: "Hitbox", label: "Blocks", arrows: "to", font: { align: "horizontal" } },
  { from: "Weapon/shield", to: "Durability", label: "Has", arrows: "to", font: { align: "horizontal" } },
  { from: "Weapon/shield", to: "Block", label: "Enables", arrows: "to", font: { align: "horizontal" } },
  
  { from: "Combat magic/item", to: "Hitbox", label: "Has", arrows: "to", font: { align: "horizontal" } },
  { from: "Combat magic/item", to: "Status effect", label: "Cures", arrows: "to", font: { align: "horizontal" } },
  { from: "Combat magic/item", to: "Stamina", label: "Increases recovery", arrows: "to", font: { align: "horizontal" } },
  { from: "Combat magic/item", to: "Poise", label: "Increases", arrows: "to", font: { align: "horizontal" } },
  { from: "Combat magic/item", to: "Defence", label: "Increases", arrows: "to", font: { align: "horizontal" } },
  { from: "Combat magic/item", to: "Player character", label: "Restricts movement", arrows: "to", font: { align: "horizontal" } },
  { from: "Combat magic/item", to: "Weapon/shield", label: "Upgrades", arrows: "to", font: { align: "horizontal" } },
  { from: "Combat magic/item", to: "Equipment", label: "Upgrades", arrows: "to", font: { align: "horizontal" } },
  { from: "Combat magic/item", to: "NPC", label: "Charms", arrows: "to", font: { align: "horizontal" } },
  { from: "Combat magic/item", to: "Projectile", label: "Deflect", arrows: "to", font: { align: "horizontal" } },
  { from: "Combat magic/item", to: "NPC", label: "Knocks back", arrows: "to", font: { align: "horizontal" } },
  { from: "Combat magic/item", to: "Player", label: "Knocks back", arrows: "to", font: { align: "horizontal" } },
  { from: "Combat magic/item", to: "Level geometry", label: "Creates resonance marker", arrows: "to", font: { align: "horizontal" } },
  { from: "Combat magic/item", to: "Weapon/shield", label: "Allows ghost dmg", arrows: "to", font: { align: "horizontal" } },
  
  { from: "Utility magic/item", to: "Noise", label: "Silences", arrows: "to", font: { align: "horizontal" } },
  { from: "Utility magic/item", to: "Health", label: "Reduces fall dmg ", arrows: "to", font: { align: "horizontal" } },
  { from: "Utility magic/item", to: "Durability", label: "Changes", arrows: "to", font: { align: "horizontal" } },
  { from: "Utility magic/item", to: "Visibility", label: "Changes", arrows: "to", font: { align: "horizontal" } },
  { from: "Utility magic/item", to: "Noise", label: "Causes", arrows: "to", font: { align: "horizontal" } },
  { from: "Utility magic/item", to: "Player character", label: "Summons/invades", arrows: "to", font: { align: "horizontal" } },
  { from: "Utility magic/item", to: "NPC", label: "Summons", arrows: "to", font: { align: "horizontal" } },
  { from: "Utility magic/item", to: "Item discovery", label: "Increases", arrows: "to", font: { align: "horizontal" } },
  { from: "Utility magic/item", to: "Level geometry", label: "Opens gate", arrows: "to", font: { align: "horizontal" } },
  { from: "Utility magic/item", to: "Level geometry", label: "Blends player in", arrows: "to", font: { align: "horizontal" } },
  { from: "Utility magic/item", to: "Player character", label: "Warps", arrows: "to", font: { align: "horizontal" } },
  { from: "Utility magic/item", to: "Message", label: "Writes", arrows: "to", font: { align: "horizontal" } },
  { from: "Utility magic/item", to: "Message", label: "Reveals more", arrows: "to", font: { align: "horizontal" } },
  { from: "Utility magic/item", to: "Roll", label: "Prevents", arrows: "to", font: { align: "horizontal" } },
  { from: "Utility magic/item", to: "Sprint", label: "Prevents", arrows: "to", font: { align: "horizontal" } },
  { from: "Utility magic/item", to: "Bonfire", label: "Allows further kindling", arrows: "to", font: { align: "horizontal" } },
  
  
  { from: "Healing item", to: "Health", label: "Increases", arrows: "to", font: { align: "horizontal" } },
  
  { from: "Inventory/attunement", to: "Utility magic/item", label: "Contains", arrows: "to", font: { align: "horizontal" } },
  { from: "Inventory/attunement", to: "Combat magic/item", label: "Contains", arrows: "to", font: { align: "horizontal" } },
  { from: "Inventory/attunement", to: "Healing item", label: "Contains", arrows: "to", font: { align: "horizontal" } },
  { from: "Inventory/attunement", to: "Equipment", label: "Contains", arrows: "to", font: { align: "horizontal" } },
  
  { from: "Status effect", to: "Health", label: "Reduces", arrows: "to", font: { align: "horizontal" } },
  { from: "Status effect", to: "Health", label: "Halves (curse)", arrows: "to", font: { align: "horizontal" } },
  { from: "Status effect", to: "Stamina", label: "Reduce recovery", arrows: "to", font: { align: "horizontal" } },
  { from: "Status effect", to: "Healing item", label: "Prevents usage", arrows: "to", font: { align: "horizontal" } },
  { from: "Status effect", to: "Weapon/shield", label: "Allows ghost dmg", arrows: "to", font: { align: "horizontal" } },
  
  { from: "Swing", to: "Hitbox", label: "Has", arrows: "to", font: { align: "horizontal" } },
  { from: "Swing", to: "Durability", label: "Reduces", arrows: "to", font: { align: "horizontal" } },
  { from: "Swing", to: "Stamina", label: "Consumes", arrows: "to", font: { align: "horizontal" } },
  { from: "Swing", to: "Weapon/shield", label: "Enables counter", arrows: "to", font: { align: "horizontal" } },
  
  { from: "Hitbox", to: "Hurtbox", label: "Collides", arrows: "to", font: { align: "horizontal" } },
  { from: "Hitbox", to: "Level geometry", label: "Collides", arrows: "to", font: { align: "horizontal" } },
  
  { from: "Hurtbox", to: "Health", label: "Changes", arrows: "to", font: { align: "horizontal" } },
  { from: "Hurtbox", to: "Poise", label: "Reduces", arrows: "to", font: { align: "horizontal" } },
  { from: "Hurtbox", to: "Status effect", label: "Causes", arrows: "to", font: { align: "horizontal" } },
  
  { from: "Roll", to: "Stamina", label: "Consumes", arrows: "to", font: { align: "horizontal" } },
  { from: "Roll", to: "Swing", label: "Dodges", arrows: "to", font: { align: "horizontal" } },
  { from: "Roll", to: "Player character", label: "Moves", arrows: "to", font: { align: "horizontal" } },
  
  { from: "Jump", to: "Player character", label: "Moves", arrows: "to", font: { align: "horizontal" } },
  { from: "Jump", to: "Level geometry", label: "Crosses gap", arrows: "to", font: { align: "horizontal" } },
  { from: "Jump", to: "Stamina", label: "Consumes", arrows: "to", font: { align: "horizontal" } },
  
  { from: "Backstab", to: "Stamina", label: "Consumes", arrows: "to", font: { align: "horizontal" } },
  { from: "Backstab", to: "Health", label: "Reduces", arrows: "to", font: { align: "horizontal" } },
  { from: "Backstab", to: "Hurtbox", label: "Grants temp invuln.", arrows: "to", font: { align: "horizontal" } },
  
  { from: "Block", to: "Stamina", label: "Consumes on hit", arrows: "to", font: { align: "horizontal" } },
  { from: "Block", to: "Stamina", label: "Slows recovery", arrows: "to", font: { align: "horizontal" } },
  { from: "Block", to: "Hitbox", label: "Prevents dmg", arrows: "to", font: { align: "horizontal" } },
  
  { from: "Parry", to: "Stamina", label: "Consumes", arrows: "to", font: { align: "horizontal" } },
  { from: "Parry", to: "NPC", label: "Staggers", arrows: "to", font: { align: "horizontal" } },
  
  { from: "Riposte", to: "Stamina", label: "Consumes", arrows: "to", font: { align: "horizontal" } },
  { from: "Riposte", to: "Health", label: "Reduces", arrows: "to", font: { align: "horizontal" } },
  { from: "Riposte", to: "Hurtbox", label: "Grants temp invuln.", arrows: "to", font: { align: "horizontal" } },
  
  { from: "Backstep", to: "Stamina", label: "Consumes", arrows: "to", font: { align: "horizontal" } },
  { from: "Backstep", to: "Poise", label: "Maxes", arrows: "to", font: { align: "horizontal" } },
  { from: "Backstep", to: "Swing", label: "Enables new", arrows: "to", font: { align: "horizontal" } },
  
  { from: "Sprint", to: "Stamina", label: "Consumes", arrows: "to", font: { align: "horizontal" } },
  { from: "Sprint", to: "Player character", label: "Increases speed", arrows: "to", font: { align: "horizontal" } },
  { from: "Sprint", to: "Swing", label: "Enables new", arrows: "to", font: { align: "horizontal" } },
  
  { from: "Kick", to: "NPC", label: "Staggers", arrows: "to", font: { align: "horizontal" } },
  
  { from: "Stamina", to: "Player character", label: "Restricts actions", arrows: "to", font: { align: "horizontal" } },
  
  { from: "Durability", to: "Weapon/shield", label: "Reduces dmg/def", arrows: "to", font: { align: "horizontal" } },
  { from: "Durability", to: "Equipment", label: "Reduces def", arrows: "to", font: { align: "horizontal" } },
  
  { from: "Combat magic/item", to: "Status effect", label: "Causes", arrows: "to", font: { align: "horizontal" } },
  { from: "Combat magic/item", to: "Weapon/shield", label: "Boosts dmg/def", arrows: "to", font: { align: "horizontal" } },
  
  { from: "Noise", to: "AI", label: "Attracts", arrows: "to", font: { align: "horizontal" } },
  { from: "Visibility", to: "AI", label: "Attracts", arrows: "to", font: { align: "horizontal" } },
 
  { from: "Level geometry", to: "Bloodstain", label: "Contains", arrows: "to", font: { align: "horizontal" } },
  { from: "Level geometry", to: "Bonfire", label: "Contains", arrows: "to", font: { align: "horizontal" } },
  { from: "Level geometry", to: "Message", label: "Contains", arrows: "to", font: { align: "horizontal" } },
  { from: "Level geometry", to: "Utility magic/item", label: "Contains", arrows: "to", font: { align: "horizontal" } },
  { from: "Level geometry", to: "Combat magic/item", label: "Contains", arrows: "to", font: { align: "horizontal" } },
  { from: "Level geometry", to: "Player character", label: "Contains", arrows: "to", font: { align: "horizontal" } },
  { from: "Level geometry", to: "NPC", label: "Contains", arrows: "to", font: { align: "horizontal" } },
  { from: "Level geometry", to: "Equipment", label: "Contains", arrows: "to", font: { align: "horizontal" } },
  { from: "Level geometry", to: "Health", label: "Reduces", arrows: "to", font: { align: "horizontal" } },
  { from: "Level geometry", to: "Hurtbox", label: "Has", arrows: "to", font: { align: "horizontal" } },
  { from: "Level geometry", to: "Weapon/shield", label: "Enables plunge", arrows: "to", font: { align: "horizontal" } },
  
  { from: "Visibility", to: "Level geometry", label: "Reveals", arrows: "to", font: { align: "horizontal" } },
  { from: "Visibility", to: "NPC", label: "Reveals", arrows: "to", font: { align: "horizontal" } },
  
  { from: "Bloodstain", to: "Souls", label: "Contains", arrows: "to", font: { align: "horizontal" } },
  { from: "Bloodstain", to: "Humanity", label: "Contains", arrows: "to", font: { align: "horizontal" } },
  
  { from: "Bonfire", to: "Healing item", label: "Restores", arrows: "to", font: { align: "horizontal" } },
  { from: "Bonfire", to: "Player character", label: "Respawns", arrows: "to", font: { align: "horizontal" } },
  { from: "Bonfire", to: "Inventory/attunement", label: "Has", arrows: "to", font: { align: "horizontal" } },
  { from: "Bonfire", to: "Day/night cycle", label: "Advances", arrows: "to", font: { align: "horizontal" } },
  
  { from: "Item discovery", to: "NPC", label: "Increases drop rate", arrows: "to", font: { align: "horizontal" } },
  
  { from: "Humanity", to: "Item discovery", label: "Increases", arrows: "to", font: { align: "horizontal" } },
  { from: "Humanity", to: "Bonfire", label: "Kindles", arrows: "to", font: { align: "horizontal" } },
  { from: "Humanity", to: "Player character", label: "Restores human form", arrows: "to", font: { align: "horizontal" } },
  
  { from: "Souls", to: "NPC", label: "Spent to buy from", arrows: "to", font: { align: "horizontal" } },
  
  { from: "Weather", to: "Status effect", label: "Causes", arrows: "to", font: { align: "horizontal" } },
  { from: "Weather", to: "Durability", label: "Reduces", arrows: "to", font: { align: "horizontal" } },
  { from: "Weather", to: "Bonfire", label: "Puts out", arrows: "to", font: { align: "horizontal" } },
  
  { from: "Day/night cycle", to: "Visibility", label: "Affects", arrows: "to", font: { align: "horizontal" } },
  
];

// create a network
var container = document.getElementById("mynetwork");
var data = {
  nodes: nodes,
  edges: edges,
};
var options = {
physics:{ enabled: true,
barnesHut: {
      theta: 0.5,
      gravitationalConstant: -5000,
      centralGravity: 0.3,
      springLength: 200,
      springConstant: 0.02,
      damping: 0.09,
      avoidOverlap: 0.05
    },
},
nodes: {
      shape: "box" }
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

function clusterByCid() {
  network.setData(data);
  var clusterOptionsByData = {
    joinCondition: function (childOptions) {
      return childOptions.system == "Player";
    },
    clusterNodeProperties: {
      id: "cidCluster",
      borderWidth: 3,
      shape: "database",
    },
  };
  network.cluster(clusterOptionsByData);
}
function clusterByColor() {
  network.setData(data);
  var colors = ["orange", "lime", "green", "teal", "blue", "coral"];
  var clusterOptionsByData;
  for (var i = 0; i < colors.length; i++) {
    var color = colors[i];
    clusterOptionsByData = {
      joinCondition: function (childOptions) {
        return childOptions.color.background == color; // the color is fully defined in the node.
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
        shape: "database",
        color: color,
        label: "color:" + color,
      },
    };
    network.cluster(clusterOptionsByData);
  }
}

function clusterBySystem() {
  network.setData(data);
  var colors = ["Player", "World", "NPC", "Items/equipment", "Player actions", "Hitbox/hurtbox", "Not in game"];
  var colors2 = ["orange", "green", "blue", "teal", "lime", "coral", "pink"];
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
        shape: "circle",
        color: colors2[i],
        label: "System: " + color,
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
      font: { size: 30 },
    },
  };
  network.clusterByHubsize(undefined, clusterOptionsByData);
}
