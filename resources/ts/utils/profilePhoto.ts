export const profilePhoto = (name: string) => {
  return `https://ui-avatars.com/api/?name='.urlencode(${name}).'&color=7F9CF5&background=EBF4FF`;
};
