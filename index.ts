function formatString(input: string, toUpper?: boolean): string {
    return toUpper || typeof toUpper === "undefined" ? input.toUpperCase() : input.toLowerCase();
}

