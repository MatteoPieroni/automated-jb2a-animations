import { AUTOANIM } from "./config.js";

export class AnimateItem {

    constructor(flags, itemData) {
        this.data = mergeObject(this.defaultData(), flags || {}, { inplace: false });

        this.killAnim = this.data.killAnim;
        this.override = this.data.override;
        this.animName = this.data.animName;
        this.color = this.data.color;
        this.animType = this.data.animType;
        this.explosion = this.data.explosion;
        this.explodeColor = this.data.explodeColor;
        this.explodeRadius = this.data.explodeRadius;
        this.explodeVariant = this.data.explodeVariant;

        this._itemName = itemData[0];
        this._animTypeVar = itemData[1];
    }

    defaultData() {
        return {
            killAnim: true,
            override: false,
            animName: ``,
            color: ``,
            animType: ``,
            explosion: false,
            explodeColor: ``,
            explodeRadius: ``,
            explodeVariant: ``,
        }
    }
    /*
    serializeData() {
        return {
            killAnim: this.killAnim,
            override: this.override,
            animName: this.animName,
            color: this.color,
            animType: this.animType,
            explosion: this.explosion,
            explodeColor: this.explodeColor,
            explodeRadius: this.explodeRadius,
            explodeVariant: this.explodeVariant,
        }
    }
    */
    /*
    serializeEntries(entries, trash) {
        let data = {};
        entries.forEach((spell, idx) => data["" + idx] = spell.serializeData());
        trash.forEach(index => data["-=" + index] = null);
        return data;
    }
    */
    get meleeColor() {
        console.log(this.animType);
        console.log(this._itemName);
        switch (true) {
            case ((this._itemName.includes("laser", "sword")) && (this.animType === "t2")):
                return AUTOANIM.animColorLaserSword;
                break;
            case (this._itemName.includes("dagger")):
            case (this._itemName.includes("great", "axe")):
            case (this._itemName.includes("great", "sword")):
            case (this._itemName.includes("great", "club")):
            case (this._itemName.includes("hand", "axe")):
            case (this._itemName.includes("mace")):
            case (this._itemName.includes("maul")):
            case (this._itemName.includes("rapier")):
            case (this._itemName.includes("scimitar")):
            case (this._itemName.includes("spear")):
            case (this._itemName.includes("sword")):
                return AUTOANIM.animColorMelee;
                break;
            case (this._itemName.includes("cure", "wound")):
                return AUTOANIM.animColorCureWounds;
                break;
            case (this._itemName.includes("disintegrate")):
                return AUTOANIM.animColorDisintegrate;
                break;
            case (this._itemName.includes("fire", "bolt")):
                return AUTOANIM.animColorFirebolt;
                break;
            case (this._itemName.includes("generic", "heal")):
            case (this._itemName.includes("heal", "word")):
                return AUTOANIM.animColorHealingWord;
                break;
            case (this._itemName.includes("magic", "missile")):
                return AUTOANIM.animColorMagicMissile;
                break;
            case (this._itemName.includes("ray", "frost")):
                return AUTOANIM.animColorRayFrost;
                break;
            case (this._itemName.includes("scorch", "ray")):
                return AUTOANIM.animColorScorchingRay;
                break;
            case (this._itemName.includes("witch", "bolt")):
                return AUTOANIM.animColorWitchbolt;
                break;
            case (this._itemName.includes("arrow")):
            case (this._itemName.includes("bow")):
                return AUTOANIM.animColorArrow;
                break;
            case (this._itemName.includes("laser")):
                return AUTOANIM.laserblastColors;
                break;
            default:
                return AUTOANIM.animNoColor;
                break;
        }
    }

    get exColors() {
        return AUTOANIM.explosionColors;
    }

    get exRadii() {
        return AUTOANIM.explosionRadius;
    }

    get exVariants() {
        return AUTOANIM.explosionVariant;
    }

    get animNameHolder() {
        //console.log(this._animTypeVar);
        switch (true) {
            case (this._animTypeVar === "melee"):
                return AUTOANIM.animNameMeleeWeapon;
                break;
            case (this._animTypeVar === "gendmg"):
                return AUTOANIM.animNameGenericDmg;
                break;
            case (this._animTypeVar === "ranged"):
                return AUTOANIM.animNameRangeWeapon;
                break;
            case (this._animTypeVar === "attackspell"):
                return AUTOANIM.animNameSpell;
                break;
            case (this._animTypeVar === "healpotion"):
                return AUTOANIM.animHealPotion;
                break;                
        }
    }

    get animTypePick() {
        return AUTOANIM.animTypePick;
    }

    toggleEnabled(enabled) {
        this.enabled = enabled;
        if (!this.enabled) {
            this.clear();
        }
    }

    clear() {
        mergeObject(this, this.defaultData());
    }


}
