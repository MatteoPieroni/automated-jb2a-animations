const flags = sheet.object.data.flags ?? {};
const itemType = sheet.object.data.type.toLowerCase();
const itemName = sheet.object.data.name.toLowerCase();
const itemId = sheet.object.data.id;
const itemSource = sheet.object.actor.items.get(itemId).data.data.source.toLowerCase();
const animFlagName = sheet.object.data.flags.autoanimations.animName.toLowerCase();
const animFlagColor = sheet.object.data.flags.autoanimations.color.toLowerCase();

let animName;
switch (true) {
    case (animFlagName === ``):
        animName = itemName;
        break;
    default:
        animName = animFlagName;
        break;
}
let animColor;
switch (true) {
    case (animFlagColor === ``):
        animColor = itemSource;
        break;
    default:
        animColor = animFlagColor;
        break;
}

const KillAnim = "Disable Animation";
const AnimTab = "Animate";
const SetColor = "Set Animation Color";
const SetAnim = "Set Animation Name";

const FormBlue = "Blue";
const FormGreen = "Green";
const FormYellow = "Yellow";
const FormRed = "Red";
const FormPink = "Pink";
const FormOrange = "Orange";
const FormPurple = "Purple";
const FormRandom = "Random";
const FormDarkgreen = "Darkgreen";
const FormDarkred = "Darkred";
const FormDarkpurple = "Darkpurple";
const FormOrangepink = "Orangepink";
const FormPurpleblue = "Purpleblue";
const FormPurpleteal = "Purpleteal";
const FormYellowblue = "Yellowblue";

const FormCureWounds = "Cure Wounds";
const FormDisintegrate = "Disintegrate";
const FormFirebolt = "Firebolt";
const FormHealingWord = "Healing Word";
const FormMagicMissile = "Magic Missile";
const FormRayofFrost = "Ray of Frost";
const FormScorchingRay = "Scorching Ray";
const FormShatter = "Shatter";
const FormThunderwave = "Thunderwave";
const FormWitchbolt = "Witchbolt";

const FormDagger = "Dagger";
const FormGreataxe = "Greataxe";
const FormGreatclub = "Greatclub";
const FormGreatsword = "Greatsword";
const FormHandaxe = "Handaxe";
const FormLasersword = "Lasersword";
const FormMace = "Mace";
const FormMaul = "Maul";
const FormSpear = "Spear";
const FormSword = "Sword";

const tab = `<a class="item" data-tab="Animate"><i class="fas fa-fan"></i> ${AnimTab}</a>`;
let color = flags[MODULE_NAME]?.color ? flags[MODULE_NAME]?.color : "";
let animName = flags[MODULE_NAME]?.animName ? flags[MODULE_NAME]?.animName : "";

let contents;
switch (true) {
    case (itemType.includes("spell")):
        switch (true) {
            case (itemName === "cure wounds"):
                contents = `
                <div class="tab active" data-tab="Animate" autocomplete = "on">
                    <div class="form-group">
                        <label>${KillAnim}?</label>
                        <input name="flags.${MODULE_NAME}.killAnim" type="checkbox" ${flags[MODULE_NAME]?.killAnim ? 'checked' : ''}></input>
                    </div>             
                    <div class="form-group input-select">
                    <label>${SetAnim}:</label>
                    <select name="flags.${MODULE_NAME}.animName" data-dtype="String" value=${animName}>
                        <option value="" ${flags[MODULE_NAME]?.animName === '' ? 'selected' : ''}></option>
                        <option value="Cure Wounds"${flags[MODULE_NAME]?.animName === 'Cure Wounds' ? 'selected' : ''}>${FormCureWounds}</option>
                        <option value="Disintegrate"${flags[MODULE_NAME]?.animName === 'Disintegrate' ? 'selected' : ''}>${FormDisintegrate}</option>
                        <option value="Firebolt"${flags[MODULE_NAME]?.animName === 'Firebolt' ? 'selected' : ''}>${FormFirebolt}</option>
                        <option value="Healing Word"${flags[MODULE_NAME]?.animName === 'Healing Word' ? 'selected' : ''}>${FormHealingWord}</option>
                        <option value="Magic Missile"${flags[MODULE_NAME]?.animName === 'Magic Missile' ? 'selected' : ''}>${FormMagicMissile}</option>
                        <option value="Ray of Frost"${flags[MODULE_NAME]?.animName === 'Ray of Frost' ? 'selected' : ''}>${FormRayofFrost}</option>
                        <option value="Scorching Ray"${flags[MODULE_NAME]?.animName === 'Scorching Ray' ? 'selected' : ''}>${FormScorchingRay}</option>
                        <option value="Shatter"${flags[MODULE_NAME]?.animName === 'Shatter' ? 'selected' : ''}>${FormShatter}</option>
                        <option value="Thunderwave"${flags[MODULE_NAME]?.animName === 'Thunderwave' ? 'selected' : ''}>${FormThunderwave}</option>
                        <option value="Witchbolt"${flags[MODULE_NAME]?.animName === 'Witchbolt' ? 'selected' : ''}>${FormWitchbolt}</option>
                        </select>
                    </div>
                    <div class="form-group input-select">
                    <label>${SetColor}:</label>
                    <select name="flags.${MODULE_NAME}.color" data-dtype="String" value=${color}>
                        <option value="" ${flags[MODULE_NAME]?.color === '' ? 'selected' : ''}></option>
                        <option value="Blue"${flags[MODULE_NAME]?.color === 'Blue' ? 'selected' : ''}>${FormBlue}</option>
                        <option value="Green"${flags[MODULE_NAME]?.color === 'Green' ? 'selected' : ''}>${FormGreen}</option>
                        <option value="Red"${flags[MODULE_NAME]?.color === 'Red' ? 'selected' : ''}>${FormRed}</option>
                        <option value="Purple"${flags[MODULE_NAME]?.color === 'Purple' ? 'selected' : ''}>${FormPurple}</option>
                        </select>
                    </div>
                
                </div>`;
                html.find(".tabs .item").last().after(tab);
                switch (game.system.id) {
                    case "pf1":
                        if (!flags[MODULE_NAME]?.applied) html.find('.flexrow.description-container .description-body').append(contents);
                        break;
                    case "dnd5e":
                        if (!flags[MODULE_NAME]?.applied) html.find(".tab").last().after(contents);
                        break;
                }
                break;
            case (itemName === "disintegrate"):
                contents = `
                <div class="tab active" data-tab="Animate" autocomplete = "on">
                    <div class="form-group">
                        <label>${KillAnim}?</label>
                        <input name="flags.${MODULE_NAME}.killAnim" type="checkbox" ${flags[MODULE_NAME]?.killAnim ? 'checked' : ''}></input>
                    </div>
            
                    <div class="form-group input-select">
                    <label>${SetAnim}:</label>
                        <select name="flags.${MODULE_NAME}.animName" data-dtype="String" value=${animName}>
                        <option value="" ${flags[MODULE_NAME]?.animName === '' ? 'selected' : ''}></option>
                        <option value="Cure Wounds"${flags[MODULE_NAME]?.animName === 'Cure Wounds' ? 'selected' : ''}>${FormCureWounds}</option>
                        <option value="Disintegrate"${flags[MODULE_NAME]?.animName === 'Disintegrate' ? 'selected' : ''}>${FormDisintegrate}</option>
                        <option value="Firebolt"${flags[MODULE_NAME]?.animName === 'Firebolt' ? 'selected' : ''}>${FormFirebolt}</option>
                        <option value="Healing Word"${flags[MODULE_NAME]?.animName === 'Healing Word' ? 'selected' : ''}>${FormHealingWord}</option>
                        <option value="Magic Missile"${flags[MODULE_NAME]?.animName === 'Magic Missile' ? 'selected' : ''}>${FormMagicMissile}</option>
                        <option value="Ray of Frost"${flags[MODULE_NAME]?.animName === 'Ray of Frost' ? 'selected' : ''}>${FormRayofFrost}</option>
                        <option value="Scorching Ray"${flags[MODULE_NAME]?.animName === 'Scorching Ray' ? 'selected' : ''}>${FormScorchingRay}</option>
                        <option value="Shatter"${flags[MODULE_NAME]?.animName === 'Shatter' ? 'selected' : ''}>${FormShatter}</option>
                        <option value="Thunderwave"${flags[MODULE_NAME]?.animName === 'Thunderwave' ? 'selected' : ''}>${FormThunderwave}</option>
                        <option value="Witchbolt"${flags[MODULE_NAME]?.animName === 'Witchbolt' ? 'selected' : ''}>${FormWitchbolt}</option>
                        </select>
                    </div>
                    <div class="form-group input-select">
                    <label>${SetColor}:</label>
                    <select name="flags.${MODULE_NAME}.color" data-dtype="String" value=${color}>
                        <option value="" ${flags[MODULE_NAME]?.color === '' ? 'selected' : ''}></option>
                        <option value="Green"${flags[MODULE_NAME]?.color === 'Green' ? 'selected' : ''}>${FormGreen}</option>
                        <option value="Darkred"${flags[MODULE_NAME]?.color === 'Darkred' ? 'selected' : ''}>${FormDarkred}</option>
                        <option value="Orangepink"${flags[MODULE_NAME]?.color === 'Orangepink' ? 'selected' : ''}>${FormOrangepink}</option>
                        <option value="Purpleblue"${flags[MODULE_NAME]?.color === 'Purpleblue' ? 'selected' : ''}>${FormPurpleblue}</option>
                        </select>
                        </div>
                
                </div>`;
                html.find(".tabs .item").last().after(tab);
                switch (game.system.id) {
                    case "pf1":
                        if (!flags[MODULE_NAME]?.applied) html.find('.flexrow.description-container .description-body').append(contents);
                        break;
                    case "dnd5e":
                        if (!flags[MODULE_NAME]?.applied) html.find(".tab").last().after(contents);
                        break;
                }
                break;
        }
        break;
    default:
        break;
}


