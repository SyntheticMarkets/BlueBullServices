google.maps.__gjsload__('search', function(_) {
    var Iua = function() {},
        fB = function(a) {
            this.setValues(a);
            _.Bj("search_impl")
        },
        Kua = function(a) {
            let b = _.$l,
                c = -1;
            a.tiles.forEach(e => {
                e.zoom > c && (b = e.li, c = e.zoom)
            });
            if (c === -1) return [];
            const d = [];
            a.Hu().forEach(e => {
                e.a && e.a.length >= 2 && d.push(new Jua(e, b, c))
            });
            return d
        },
        Lua = function(a) {
            const b = [];
            a.data.forEach(c => {
                b.push(...Kua(c))
            });
            return b
        };
    _.Ja(Iua, _.Zk);
    var Mua = {
            ["1"]: {}
        },
        Jua = class {
            constructor(a, b, c) {
                this.qn = b;
                this.zoom = c;
                this.bounds = this.anchor = null;
                this.Eg = Mua;
                this.source = a;
                this.featureId = this.source.id || "0";
                this.infoWindowOffset = (this.source.io || []).length === 2 ? new google.maps.Point(this.source.io[0], this.source.io[1]) : null
            }
            getAnchor() {
                if (!this.anchor) {
                    const a = 1 << this.zoom;
                    this.anchor = _.Am(new _.Mm((this.qn.x * 256 + this.source.a[0]) / a, (this.qn.y * 256 + this.source.a[1]) / a)).toJSON()
                }
                return this.anchor
            }
            getCompleteBounds() {
                return this.getBounds().reduce((a,
                    b) => {
                    a.extendByBounds(b);
                    return a
                }, _.Em(0, 0, 0, 0))
            }
            getBounds() {
                if (this.bounds === null) {
                    this.bounds = [];
                    const a = this.source.bb || [];
                    if (a.length % 4 === 0)
                        for (let b = 0; b < a.length; b += 4) {
                            const c = this.bounds[this.bounds.length - 1],
                                d = _.Em(a[b], a[b + 1], a[b + 2], a[b + 3]);
                            c && c.equals(d) || this.bounds.push(d)
                        }
                }
                return [...this.bounds]
            }
            getExtendedContent(a) {
                if (this.Eg === Mua) try {
                    this.Eg = this.source.c ? JSON.parse(this.source.c) : {}
                } catch (b) {
                    this.Eg = {}
                }
                return this.Eg[a] ? ? {}
            }
            getFeatureName() {
                return this.getExtendedContent("1") ? .title ? ?
                    null
            }
            isTransitStation() {
                return this.getExtendedContent("1") ? .is_transit_station ? ? !1
            }
        };
    var Nua = new WeakSet;
    _.Ja(fB, Iua);
    fB.prototype.changed = function() {
        const a = this;
        var b = this.get("map");
        let c = null;
        b && (c = b.__gm, b = c.get("blockingLayerCount") || 0, c.set("blockingLayerCount", b + 1), c.set("disableLabelingHysteresis", this.get("disableLabelingHysteresis")), c.set("tilePrefetchEnabled", this.get("tilePrefetchEnabled")));
        _.Bj("search_impl").then(d => {
            d.yG(a);
            c && (d = c.get("blockingLayerCount") || 0, c.set("blockingLayerCount", d - 1))
        })
    };
    fB.enableFeatureMapEventsRasterOnly = function(a) {
        if (_.rn[15]) {
            var b = a.__gm.Wg;
            if (!Nua.has(a)) {
                Nua.add(a);
                var c = [],
                    d = (f, g) => {
                        f = Kua(f);
                        f.length && _.Wk(a, g, f)
                    },
                    e = () => {
                        for (; c.length > 0;) c.pop().remove();
                        b.forEach(f => {
                            if (f = f.data) c.push(_.Kk(f, "insert", g => d(g, "addfeatures"))), c.push(_.Kk(f, "remove", g => d(g, "removefeatures")))
                        })
                    };
                b.addListener("insert_at", e);
                b.addListener("remove_at", e);
                b.addListener("set_at", e);
                e()
            }(() => {
                const f = [];
                b.forEach(g => {
                    f.push(...Lua(g))
                });
                f.length && _.Wk(a, "addfeatures", f)
            })()
        }
    };
    _.Ha("module$contents$mapsapi$onionLayers$search$googleLayer_GoogleLayer.enableFeatureMapEventsRasterOnly", fB.enableFeatureMapEventsRasterOnly);
    _.Cl(fB.prototype, {
        map: _.tp
    });
    _.qa.google.maps.search = {
        GoogleLayer: fB
    };
    _.Cj("search", {});
});