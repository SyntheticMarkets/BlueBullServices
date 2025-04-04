google.maps.__gjsload__('search_impl', function(_) {
    var Rzb = function(a, b) {
            _.fj(a.Gg, 1, b)
        },
        Szb = function(a, b) {
            _.fj(a.Gg, 3, b)
        },
        Uzb = function(a) {
            if (_.rn[15]) {
                var b = a.Nl;
                const c = a.Nl = a.getMap();
                b && a.Eg && (a.Hg ? (b = b.__gm.ik, b.set(b.get().Vn(a.Eg))) : a.Eg && _.D_a(a.Eg, b) && ((a.Fg || []).forEach(_.Mk), a.Fg = null));
                if (c) {
                    b = new _.$w;
                    const d = a.get("layerId").split("|");
                    b.layerId = d[0];
                    for (let e = 1; e < d.length; ++e) {
                        const [f, ...g] = d[e].split(":");
                        b.parameters[f] = g.join(":")
                    }
                    a.get("spotlightDescription") && (b.spotlightDescription = new _.fw(a.get("spotlightDescription")));
                    a.get("paintExperimentIds") &&
                        (b.paintExperimentIds = a.get("paintExperimentIds").slice(0));
                    a.get("styler") && (b.styler = new _.bw(a.get("styler")));
                    a.get("roadmapStyler") && (b.roadmapStyler = new _.bw(a.get("roadmapStyler")));
                    a.get("travelMapRequest") && (b.travelMapRequest = new _.Gqa(a.get("travelMapRequest")));
                    a.get("mapsApiLayer") && (b.mapsApiLayer = new _.gw(a.get("mapsApiLayer")));
                    a.get("mapFeatures") && (b.mapFeatures = a.get("mapFeatures"));
                    a.get("clickableCities") && (b.clickableCities = a.get("clickableCities"));
                    a.get("searchPipeMetadata") &&
                        (b.searchPipeMetadata = new _.Ux(a.get("searchPipeMetadata")));
                    a.get("gmmContextPipeMetadata") && (b.gmmContextPipeMetadata = new _.Boa(a.get("gmmContextPipeMetadata")));
                    a.get("overlayLayer") && (b.overlayLayer = new _.hw(a.get("overlayLayer")));
                    a.get("caseExperimentIds") && (b.caseExperimentIds = a.get("caseExperimentIds").slice(0));
                    a.get("boostMapExperimentIds") && (b.boostMapExperimentIds = a.get("boostMapExperimentIds").slice(0));
                    a.get("airQualityPipeMetadata") && (b.airQualityPipeMetadata = new _.nqa(a.get("airQualityPipeMetadata")));
                    a.get("directionsPipeParameters") && (b.directionsPipeParameters = new _.lqa(a.get("directionsPipeParameters")));
                    a.get("clientSignalPipeMetadata") && (b.clientSignalPipeMetadata = new _.ioa(a.get("clientSignalPipeMetadata")));
                    b.darkLaunch = !!a.get("darkLaunch");
                    a.Eg = b;
                    a.Hg = a.get("renderOnBaseMap");
                    a.Hg ? (a = c.__gm.ik, a.set(_.wr(a.get(), b))) : Tzb(a, c, b);
                    _.Gl(c, "Lg");
                    _.M(c, 148282)
                }
            }
        },
        Tzb = function(a, b, c) {
            var d = new Vzb;
            d = _.DG(d);
            c.Dr = d.load.bind(d);
            c.clickable = a.get("clickable") !== !1;
            _.b_a(c, _.lQ(b));
            b = [];
            b.push(_.Kk(c,
                "click", Wzb.bind(null, a)));
            for (const e of ["mouseover", "mouseout", "mousemove"]) b.push(_.Kk(c, e, Xzb.bind(null, a, e)));
            b.push(_.Kk(a, "clickable_changed", () => {
                a.Eg.clickable = a.get("clickable") !== !1
            }));
            a.Fg = b
        },
        Wzb = function(a, b, c, d, e) {
            let f = null;
            if (e && (f = {
                    status: e.getStatus()
                }, e.getStatus() === 0)) {
                f.location = _.Y(e.Gg, 2) ? new _.wk(_.bt(_.J(e.Gg, 2, _.ht).Gg, 1), _.bt(_.J(e.Gg, 2, _.ht).Gg, 2)) : null;
                const g = {};
                f.fields = g;
                const h = _.Ji(e.Gg, 3);
                for (let k = 0; k < h; ++k) {
                    const m = _.gr(e.Gg, 3, _.vQ, k);
                    g[m.getKey()] = m.getValue()
                }
            }
            _.Wk(a,
                "click", b, c, d, f)
        },
        Xzb = function(a, b, c, d, e, f, g) {
            let h = null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.Wk(a, b, c, d, e, h, g)
        },
        Yzb = class {},
        Zzb = class extends _.W {
            constructor() {
                super()
            }
            gj() {
                return _.L(this.Gg, 2)
            }
        },
        $zb = [_.N, , , _.bp, _.s0a];
    var aAb = class extends _.W {
        constructor(a) {
            super(a)
        }
        getStatus() {
            return _.H(this.Gg, 1, -1)
        }
        getLocation() {
            return _.Zi(this.Gg, 2, _.ht)
        }
    };
    var Vzb = class {
        constructor() {
            var a = _.yo,
                b = _.xo;
            this.Eg = _.gj;
            this.fetch = _.sx.bind(Yzb, a, _.oy + "/maps/api/js/LayersService.GetFeature", b)
        }
        load(a, b) {
            function c(e) {
                b(new aAb(e))
            }
            const d = new Zzb;
            Rzb(d, a.layerId.split("|")[0]);
            _.fj(d.Gg, 2, a.featureId);
            Szb(d, this.Eg.Eg().Eg());
            for (const e in a.parameters) {
                const f = _.bj(d.Gg, 4, _.vQ);
                _.fj(f.Gg, 1, e);
                _.fj(f.Gg, 2, a.parameters[e])
            }
            a = _.Dn(d, $zb);
            this.fetch(a, c, c);
            return a
        }
        cancel() {
            throw Error("Not implemented");
        }
    };
    var bAb = class {
        constructor() {
            this.yG = Uzb
        }
    };
    _.Cj("search_impl", new bAb);
});