Room.prototype.HUD = function (spawnName) {
    let visualStyle = {color:'teal', font: 0.9};
    let creepsInRoom = this.find(FIND_MY_CREEPS);
    this.visual.text("Creeps: ", 1.5, 0.3, visualStyle);
    this.visual.text("  🔨 " + _.sum(creepsInRoom, (c) => c.memory.role == "Harvester") + "/" + Game.spawns[spawnName].assessRoleCaps("Harvester", 1), 1.5, 1.3, visualStyle);
    this.visual.text("  🚛 " + _.sum(creepsInRoom, (c) => c.memory.role == "Hauler") + "/" + Game.spawns[spawnName].assessRoleCaps("Hauler", 1), 1.5, 2.3, visualStyle);
    this.visual.text("  🔧 " + _.sum(creepsInRoom, (c) => c.memory.role == "Upgrader") + "/" + Game.spawns[spawnName].assessRoleCaps("Upgrader", 1), 1.5, 3.3, visualStyle);
    this.visual.text("  🧠 " + _.sum(creepsInRoom, (c) => c.memory.role == "Logistics") + "/" + Game.spawns[spawnName].assessRoleCaps("Logistics", 1), 1.5, 4.3, visualStyle);
    this.visual.text("  🗻 " + _.sum(creepsInRoom, (c) => c.memory.role == "Extractor") + "/" + Game.spawns[spawnName].assessRoleCaps("Extractor", 1), 1.5, 5.3, visualStyle);
    this.visual.text("  💗 " + Game.spawns[spawnName].assessHealth() + "  ", 1.5, 6.3, visualStyle);
};