"use strict";
class HanoiTower {
    fromRod;
    toRod;
    auxRod;
    rods = {};
    constructor(fromRod = "First", toRod = "Second", auxRod = "Third") {
        this.fromRod = fromRod;
        this.toRod = toRod;
        this.auxRod = auxRod;
        this.rods[fromRod] = [];
        this.rods[toRod] = [];
        this.rods[auxRod] = [];
    }
    addDisks(disks) {
        this.rods[this.fromRod] = disks;
    }
    solve() {
        const numberOfDisks = this.rods[this.fromRod].length;
        this.move(numberOfDisks, this.fromRod, this.toRod, this.auxRod);
    }
    move(n, from, to, aux) {
        if (n === 0) {
            return;
        }
        this.move(n - 1, from, aux, to);
        const disk = this.rods[from].pop();
        if (disk !== undefined) {
            this.rods[to].push(disk);
            console.log(`Переместить диск ${disk} с ${from} на ${to}`);
        }
        this.move(n - 1, aux, to, from);
    }
}
//Взяла проверку из тренажера на сайте
const hanoiNumber = new HanoiTower();
hanoiNumber.addDisks([3, 2, 1]);
hanoiNumber.solve();
const hanoiString = new HanoiTower('A', 'C', 'B');
hanoiString.addDisks(["C", "B", "A"]);
hanoiString.solve();
