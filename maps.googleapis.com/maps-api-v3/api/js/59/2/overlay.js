google.maps.__gjsload__('overlay', function(_) {
    var mya = function() {},
        MB = function(a) {
            a.HA = a.HA || new mya;
            return a.HA
        },
        nya = function(a) {
            this.Eg = new _.cn(() => {
                const b = a.HA;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.Hg && a.onAdd) a.onAdd();
                        b.Hg = !0;
                        a.draw()
                    }
                } else {
                    if (b.Hg)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.Hg = !1
                }
            }, 0)
        },
        pya = function(a, b) {
            const c = MB(a);
            let d = c.Fg;
            d || (d = c.Fg = new nya(a));
            _.Wb(c.Eg || [], _.Mk);
            var e = c.Ig = c.Ig || new _.jra;
            const f = b.__gm;
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("center", f, "projectionCenterQ");
            e.bindTo("projection",
                b);
            e.bindTo("projectionTopLeft", f);
            e = c.Kg = c.Kg || new oya(e);
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            a.bindTo("projection", e, "outProjection");
            a.bindTo("panes", f);
            e = () => _.dn(d.Eg);
            c.Eg = [_.Kk(a, "panes_changed", e), _.Kk(f, "zoom_changed", e), _.Kk(f, "offset_changed", e), _.Kk(b, "projection_changed", e), _.Kk(f, "projectioncenterq_changed", e)];
            _.dn(d.Eg);
            b instanceof _.rl ? (_.Gl(b, "Ox"), _.M(b, 148440)) : b instanceof _.Xl && (_.Gl(b, "Oxs"), _.M(b, 181451))
        },
        qya = function(a) {
            const b =
                MB(a);
            var c = b.Ig;
            c && c.unbindAll();
            (c = b.Kg) && c.unbindAll();
            a.unbindAll();
            a.set("panes", null);
            a.set("projection", null);
            b.Eg && b.Eg.forEach(d => {
                _.Mk(d)
            });
            b.Eg = null;
            b.Fg && (_.en(b.Fg.Eg), b.Fg = null)
        },
        vya = function(a) {
            if (a) {
                var b = a.getMap();
                if (rya(a) !== b && b && b instanceof _.rl) {
                    const c = b.__gm;
                    c.overlayLayer ? a.__gmop = new sya(b, a, c.overlayLayer) : c.Fg.then(({
                        ah: d
                    }) => {
                        const e = new tya(b, d);
                        d.Ii(e);
                        c.overlayLayer = e;
                        uya(a);
                        vya(a)
                    })
                }
            }
        },
        uya = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.Eg.unbindAll(), b.Eg.set("panes",
                    null), b.Eg.set("projection", null), b.Hg.Rl(b), b.Fg && (b.Fg = !1, b.Eg.onRemove ? b.Eg.onRemove() : b.Eg.remove()))
            }
        },
        rya = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        wya = function(a, b) {
            a.Eg.get("projection") != b && (a.Eg.bindTo("panes", a.map.__gm), a.Eg.set("projection", b))
        },
        oya = class extends _.Zk {
            constructor(a) {
                super();
                this.projection = a
            }
            changed(a) {
                a !== "outProjection" && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.Pj(this.get("zoom"))), a === !this.get("outProjection") && this.set("outProjection",
                    a ? this.projection : null))
            }
        };
    var NB = {};
    _.Ja(nya, _.Zk);
    NB.Wl = function(a) {
        if (a) {
            var b = a.getMap();
            (MB(a).Jg || null) !== b && (b && pya(a, b), MB(a).Jg = b)
        }
    };
    NB.Rl = function(a) {
        qya(a);
        delete MB(a).Jg
    };
    NB.ZM = mya;
    var OB = {},
        sya = class {
            constructor(a, b, c) {
                this.map = a;
                this.Eg = b;
                this.Hg = c;
                this.Fg = !1;
                _.Gl(this.map, "Ox");
                _.M(this.map, 148440);
                c.Wl(this)
            }
            draw() {
                this.Fg || (this.Fg = !0, this.Eg.onAdd && this.Eg.onAdd());
                this.Eg.draw && this.Eg.draw()
            }
        },
        tya = class {
            constructor(a, b) {
                this.Ig = a;
                this.Hg = b;
                this.Eg = null;
                this.Fg = []
            }
            dispose() {}
            Wh(a, b, c, d, e, f, g, h) {
                const k = this.Eg = this.Eg || new _.ty(this.Ig, this.Hg, () => {});
                k.Wh(a, b, c, d, e, f, g, h);
                for (const m of this.Fg) wya(m, k), m.draw()
            }
            Wl(a) {
                this.Fg.push(a);
                this.Eg && wya(a, this.Eg);
                this.Hg.refresh()
            }
            Rl(a) {
                _.gc(this.Fg,
                    a)
            }
        };
    OB.Wl = vya;
    OB.Rl = uya;
    _.Cj("overlay", {
        nC: function(a) {
            if (a) {
                (0, NB.Rl)(a);
                (0, OB.Rl)(a);
                var b = a.getMap();
                b && (b instanceof _.rl ? (0, OB.Wl)(a) : (0, NB.Wl)(a))
            }
        },
        preventMapHitsFrom: a => {
            _.ru(a, {
                Ol: ({
                    event: b
                }) => {
                    _.zs(b.Eg)
                },
                lk: b => _.cu(b),
                Fq: b => _.du(b),
                ql: b => _.du(b),
                Ek: b => _.eu(b)
            }).rs(!0)
        },
        preventMapHitsAndGesturesFrom: a => {
            a.addEventListener("click", _.Ik);
            a.addEventListener("contextmenu", _.Ik);
            a.addEventListener("dblclick", _.Ik);
            a.addEventListener("mousedown", _.Ik);
            a.addEventListener("mousemove", _.Ik);
            a.addEventListener("MSPointerDown",
                _.Ik);
            a.addEventListener("pointerdown", _.Ik);
            a.addEventListener("touchstart", _.Ik);
            a.addEventListener("wheel", _.Ik)
        }
    });
});