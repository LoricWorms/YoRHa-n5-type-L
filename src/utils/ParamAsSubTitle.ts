export function SubTitle(ParamType: string | undefined, ParamTail: string): string {
  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  if (ParamType === undefined) {
    return "";
  }

  const subTitle = `${ParamType} ${ParamTail}`;
  return "- " + capitalizeFirstLetter(subTitle);
}
