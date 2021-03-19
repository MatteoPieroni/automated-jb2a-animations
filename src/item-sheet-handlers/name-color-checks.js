function getNameColor(data) {

    let itemNameSys = data.item?.name?.toLowerCase() ?? ``;
    let itemNameflags = data.item?.flags?.autoanimations?.animName?.toLowerCase() ?? ``;
    let itemAnimType = data.item?.flags?.autoanimations?.animType?.toLowerCase() ?? ``;

    //let itemColorSys = data.item.data.source;
    //let itemColorflags = data.item.flags.autoanimations.color.toLowerCase();

    let itemNameFinal;
    switch (true) {
        case (itemNameflags === ``):
            itemNameFinal = itemNameSys;
            break;
        default:
            itemNameFinal = itemNameflags;
            break;
    }

    let animNameVar;
    switch (true) {
        case (itemAnimType === "t2"):
            animNameVar = "melee";
            break;
        case (itemAnimType === "t3"):
            animNameVar = "gendmg";
            break;
        case (itemAnimType === "t4"):
            animNameVar = "ranged";
            break;
        case (itemAnimType === "t5"):
            animNameVar = "attackspell";
            break;
        case (itemAnimType === "t6"):
            animNameVar = "healpotion";
            break;
        case (itemAnimType === "t7"):
            animNameVar = "template-explosion";
            break;
        case (itemAnimType === "t8"):
            animNameVar = "target-explosion";
            break;
        default:
            animNameVar = ``;
            break;
    }

    return [itemNameFinal, animNameVar];
}

export default getNameColor;