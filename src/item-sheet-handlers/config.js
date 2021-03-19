
export const AUTOANIM = {};

AUTOANIM.animNameSpell = {
    "a1": ``,
    "a2": "Cure Wounds",
    "a3": "Disintegrate",
    "a4": "Firebolt",
    "a5": "Generic Heal",
    "a6": "Magic Missile",
    "a7": "Ray of Frost",
    "a8": "Scorching Ray",
    "a9": "Witchbolt"
};

AUTOANIM.animNameTemplateSpell = {
    "tp1": ``,
    "tp2": "Thunderwave",
    "tp3": "Shatter"
}

AUTOANIM.animNameMeleeWeapon = {
    "a1": ``,
    "a2": "Dagger",
    "a3": "Greataxe",
    "a4": "Greatclub",
    "a5": "Greatsword",
    "a6": "Handaxe",
    "a7": "Lasersword",
    "a8": "Mace",
    "a9": "Maul",
    "a10": "Spear",
    "a11": "Sword",
    "a12": "Rapier"
};

AUTOANIM.animNameRangeWeapon = {
    "a1": ``,
    "a2": "Arrow",
    "a3": "Boulder",
    "a4": "Javelin",
    "a5": "Laser Blast",
    "a6": "Siege Boulder",
    "a7": "Throwing Hammer",
};

AUTOANIM.animNameGenericDmg = {
    "a1": ``,
    "a2": "1 Handed Slashing",
    "a3": "1 Handed Piercing",
    "a4": "1 Handed Bludgeoning",
    "a5": "2 Handed Slashing",
    "a6": "2 Handed Piercing",
    "a7": "2 Handed Bludgeoning",
}

AUTOANIM.animColorMelee = {
    "d1": `Regular`,
    "d2": "Blue",
    "d3": "Green",
    "d4": "Orange",
    "d5": "Red",
    "d6": "Purple",
    "d7": "Pink",
    "d8": "Yellow"
};

AUTOANIM.animColorLaserSword = {
    "d1": ``,
    "d2": "Blue",
    "d3": "Green",
    "d4": "Orange",
    "d5": "Red",
    "d6": "Purple",
    "d7": "Pink",
    "d8": "Yellow",
    "d9": "Darkred"
};

AUTOANIM.animColorCureWounds = {
    "f1": "Blue",
    "f2": "Green",
    "f3": "Purple",
    "f4": "Red"
};

AUTOANIM.animColorDisintegrate = {
    "g1": "Green",
    "g2": "Darkred",
    "g3": "Orange Pink",
    "g4": "Purple Blue"
};

AUTOANIM.animColorFirebolt = {
    "h1": "Blue",
    "h2": "Green",
    "h3": "Orange",
    "h4": "Purple",
    "h5": "Red",
};

AUTOANIM.animColorHealingWord = {
    "i1": "Blue",
    "i2": "Green",
    "i3": "Purple",
    "i4": "Yellow"
};

AUTOANIM.animColorMagicMissile = {
    "j1": "Blue",
    "j2": "Green",
    "j3": "Purple",
    "j4": "Yellow",
    "j5": "Random"
};

AUTOANIM.animColorRayFrost = {
    "k1": "Blue",
    "k2": "Green",
    "k3": "Purple Teal",
    "k4": "Yellow Blue",
};

AUTOANIM.animColorScorchingRay = {
    "m1": "Blue",
    "m2": "Green",
    "m3": "Orange",
    "m4": "Purple",
    "m5": "Red",
    "m6": "Yellow"
};

AUTOANIM.animColorShatterThunder = {
    "n1": "Blue",
    "n2": "Green",
    "n3": "Orange",
    "n4": "Purple",
    "n5": "Red"
};

AUTOANIM.animColorWitchbolt = {
    "p1": "Blue",
    "p2": "Green",
    "p3": "Red",
    "p4": "Yellow",
    "p5": "Darkgreen",
    "p6": "Darkpurple",
    "p7": "Darkred"
};

AUTOANIM.animColorArrow = {
    "q1": "Regular",
    "q2": "Green"
};

AUTOANIM.explosionColors = {
    "ec1": ``,
    "ec2": "Blue",
    "ec3": "Green",
    "ec4": "Orange",
    "ec5": "Purple",
    "ec6": "Yellow",
}

AUTOANIM.laserblastColors = {
    "lb1": ``,
    "lb2": "Blue",
    "lb3": "Green",
    "lb4": "Orange",
    "lb5": "Red",
}

AUTOANIM.explosionRadius = {
    "er1": ``,
    "er2": "5",
    "ec3": "10",
    "ec4": "15",
    "ec5": "20",
    "ec6": "25",
    "ec7": "30",
    "ec8": "35",
    "ec9": "40",
    "ec10": "45",
    "ec11": "50",
    "ec12": "Nuclear",
}

AUTOANIM.explosionVariant = {
    "ev1": ``,
    "ev2": "01",
    "ev3": "02",
}

AUTOANIM.animTypePick = {
    "t1": ``,
    "t2": "Melee Weapon",
    "t3": "Generic Melee Dmg",
    "t4": "Ranged Weapon",
    "t5": "Attack Spell",
    "t6": "Healing Potion",
    "t7": "Explosives (Template)",
    "t8": "Explosives (Target)",
}

AUTOANIM.animHealPotion = {
    "c1": ``,
    "c2": `Cure Wounds`,
    "c3": "Generic Heal",
}

AUTOANIM.animNull = {
    "n1": ``,
}

AUTOANIM.numeric = function(value, fallback) {
    if($.isNumeric(value)) {
        return parseInt(value);
    } else {
        return fallback;
    }
};

AUTOANIM.fromCollection = function(collection, entryId) {
    const pack = game.packs.find(p => p.collection === collection);
    return pack.getEntity(entryId).then(ent => {
        return ent;
    });
};

