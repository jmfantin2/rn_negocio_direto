// returns possible secondary categories
// will also return the prymary category variants
// <{[...sec],[...var]}>
export function category1Check(primary) {
  if (primary === "novilho") {
    return [
      { label: "TERNEIRO", value: "terneiro" },
      { label: "NOVILHA", value: "novilha" },
      { label: "VACA", value: "vaca" },
    ];
  } else if (primary === "terneiro") {
    return [
      { label: "NOVILHO", value: "novilho" },
      { label: "TERNEIRA", value: "terneira" },
    ];
  } else if (primary === "terneira") {
    return [
      { label: "NOVILHA", value: "novilha" },
      { label: "TERNEIRO", value: "terneiro" },
    ];
  } else if (primary === "novilha") {
    return [
      { label: "TERNEIRA", value: "terneira" },
      { label: "NOVILHO", value: "novilho" },
      { label: "VACA", value: "vaca" },
    ];
  } else if (primary === "vaca") {
    return [{ label: "NOVILHA", value: "novilha" }];
  } else if (
    primary === "touro" ||
    primary === "vaca invernar" ||
    primary === null
  ) {
    //"touro" ou "vaca invernar" ou placeholder
    return [];
  }
}
