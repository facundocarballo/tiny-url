export class Counter {
    private value: string;

    constructor(value: string) {
        this.value = value;
    }

    static Load(): Counter {
        return new Counter("0000000")
    }

    Get(): string {
        return this.value;
    }

    Increment() {

    }
}