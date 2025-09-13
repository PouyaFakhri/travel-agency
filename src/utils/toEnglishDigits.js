export const toEnglishDigits = (str = "") => {
  if (!str) return "";
  return str
    .replace(/[\u06F0-\u06F9]/g, (c) =>
      String.fromCharCode(c.charCodeAt(0) - 0x06f0 + 48)
    )
    .replace(/[\u0660-\u0669]/g, (c) =>
      String.fromCharCode(c.charCodeAt(0) - 0x0660 + 48)
    );
};
