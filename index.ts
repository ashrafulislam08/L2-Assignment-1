function formatString(input: string, toUpper?: boolean): string {
    return toUpper || typeof toUpper === "undefined" ? input.toUpperCase() : input.toLowerCase();
}


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const filtered = items.filter(item => item.rating >= 4)
    return filtered
}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];

