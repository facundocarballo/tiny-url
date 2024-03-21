export const IncrementBase52Number = (value: string): string => {
  switch (value) {
    case "0":
      return "1";
    case "1":
      return "2";
    case "2":
      return "3";
    case "3":
      return "4";
    case "4":
      return "5";
    case "5":
      return "6";
    case "6":
      return "7";
    case "7":
      return "8";
    case "8":
      return "9";
    case "9":
      return "a";
    case "a":
      return "0";
    default:
      return "-1";
  }
};
