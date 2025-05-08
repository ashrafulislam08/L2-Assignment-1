function formatString(input: string, toUpper?: boolean): string {
    return toUpper || typeof toUpper === "undefined" ? input.toUpperCase() : input.toLowerCase();
}


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const filtered = items.filter(item => item.rating >= 4)
    return filtered
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat()
}


class Vehicle {
    private make: string;
    year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }


    getInfo() {
        console.log(`Make: ${this.make}, Year: ${this.year}`)
    }
}


class Car extends Vehicle{
    model: string;
    constructor(make: string, year: number, model: string) {
        super(make, year)
        this.model = model
    }

    getModel() {
        console.log(`Model: ${this.model}`)
    }
}

