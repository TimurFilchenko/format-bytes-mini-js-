function formatBytes(bytes) {
    if (bytes === 0) return "0 B";

    const units = [
        "B",
        "KB",
        "MB",
        "GB",
        "TB"
    ];

    let size = bytes;
    let index = 0;

    while (size >= 1024 && index < units.length - 1) {
        size /= 1024;
        index++;
    }

    return size.toFixed(2) + " " + units[index];
}

console.log(formatBytes(1024));
console.log(formatBytes(1048576));
console.log(formatBytes(1073741824));
