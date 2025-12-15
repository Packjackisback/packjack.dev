function Age() {
  const birth = new Date(2009, 4, 2);
  const today = new Date();

  let age = today.getFullYear() - birth.getFullYear();

  const hasHadBirthday =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() &&
      today.getDate() >= birth.getDate());

  if (!hasHadBirthday) age--;

  return <>{age}</>;
}

export default Age;
