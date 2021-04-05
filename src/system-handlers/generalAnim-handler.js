export default class GeneralAnimHandler {
    constructor(sourceToken, targets, item) {
        
        this._actorToken = sourceToken;
        this._item = item;

        this._allTargets = targets;

        this._flags = this._item.data?.flags?.autoanimations ?? "";

        this._animColor = this._flags?.color?.toLowerCase() ?? "";
        this._animName = this._flags.animName?.toLowerCase() ?? "";
        this._animExColor = this._flags.explodeColor?.toLowerCase() ?? "";
        this._animExRadius = this._flags.explodeRadius?.toLowerCase() ?? "";
        this._animExVariant = this._flags.explodeVariant?.toLowerCase() ?? "";
        this._animType = this._flags.animType?.toLowerCase() ?? "";
        this._animKill = this._flags.killAnim;
        this._animOverride = this._flags.override;
        this._animExplode = this._flags.explosion;
        this._animDgThrVar = this._flags.dtvar?.toLowerCase() ?? "";
        
        this._itemName = this._item.name?.toLowerCase() ?? '';;
        this._itemSource = this._item.data?.data?.source?.toLowerCase() ?? '';
        this._itemType = this._item.type.toLowerCase();
        
        this._animNameFinal;
        switch (true) {
            case ((!this._animOverride) || ((this._animOverride) && (this._animName === ``))):
                this._animNameFinal = this._itemName;
                break;
            default:
                this._animNameFinal = this._animName;
                break;
        }

        this._animColorEffect;
        switch (true) {
            case (this._animColor === ``):
                this._animColorEffect = this._itemSource;
                break;
            default:
                this._animColorEffect = this._animColor;
                break;

        }
    }

    get actor() {
        return this._actorToken.actor;
    }
    
    get reachCheck() {
        let reach = 0;
        if (this._actorToken.actor?.data?.data?.details?.race?.toLowerCase() === 'bugbear') {
            reach += 5;
        }
        if (this._item.data?.data?.properties?.rch) {
            reach +=5;
        }
        return reach;
    }

    get actorToken() {
        return this._actorToken;
    }

    get allTargets() {
        return this._allTargets;
    }

    get targetAssistant() {
        return this._allTargets;
    }

    get isValid() {
        return true;
    }

    get itemType() {
        return this._item.type?.toLowerCase();
    }

    get checkSaves() {
        return;
    }

    get animColor() {
        return this._animColorEffect;
    }

    get animName() {
        return this._animNameFinal;
    }

    get animExColor() {
        return this._animExColor;
    }

    get animExRadius() {
        return this._animExRadius;
    }

    get animExVariant() {
        return this._animExVariant;
    }

    get animExLoop() {
        return this._animExLoop;
    }

    get animType() {
        return this._animType;
    }

    get animKill() {
        return this._animKill;
    }

    get animOverride() {
        return this._animOverride;
    }

    get animExplode() {
        return this._animExplode;
    }

    get animDagThrVar() {
        return this._animDgThrVar;
    }

    getDistanceTo(target) {
        var x, x1, y, y1, d, r, segments = [], rdistance, distance;
        for (x = 0; x < this._actorToken.data.width; x++) {
            for (y = 0; y < this._actorToken.data.height; y++) {
                const origin = new PIXI.Point(...canvas.grid.getCenter(this._actorToken.data.x + (canvas.dimensions.size * x), this._actorToken.data.y + (canvas.dimensions.size * y)));
                for (x1 = 0; x1 < target.data.width; x1++) {
                    for (y1 = 0; y1 < target.data.height; y1++) {
                        const dest = new PIXI.Point(...canvas.grid.getCenter(target.data.x + (canvas.dimensions.size * x1), target.data.y + (canvas.dimensions.size * y1)));
                        const r = new Ray(origin, dest);
                        segments.push({ ray: r });
                    }
                }
            }
        }
        if (segments.length === 0) {
            return -1;
        }
        rdistance = canvas.grid.measureDistances(segments, { gridSpaces: true });
        distance = rdistance[0];
        rdistance.forEach(d => {
            if (d < distance)
                distance = d;
        });
        return distance;
    }

    itemIncludes() {
        return [...arguments].every(a => this._animNameFinal?.includes(a) || this._itemSource?.includes(a));
    }
    itemSourceIncludes() {
        return [...arguments].every(a => this._itemSource?.includes(a));
    }
    itemColorIncludes() {
        return [...arguments].every(a => this._animColorEffect?.includes(a));
    }
    itemNameIncludes() {
        return [...arguments].every(a => this._animNameFinal?.includes(a));
    }
    itemTypeIncludes() {
        return [...arguments].every(a => this._itemType?.includes(a));
    }
    animNameIncludes() {
        return [...arguments].every(a => this._animName?.includes(a));
    }


}