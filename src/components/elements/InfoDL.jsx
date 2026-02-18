function InfoDL({ name, info }) {
  let nameIsArray = Array.isArray(name);
  let infoIsArray = Array.isArray(info);

  // If both name and info have the same length and both are arrays
  if (nameIsArray && infoIsArray && name.length === info.length) {
    return info.map((inf, index) => (
      <div>
        <dt>{name[index]}:</dt>
        <dd>{inf}</dd>
      </div>
    ));
  }

  // If both name and info arent arrays and not null
  if (
    !nameIsArray &&
    !infoIsArray &&
    info !== undefined &&
    name !== undefined
  ) {
    return (
      <div>
        <dt>{name}:</dt>
        <dd>{info}</dd>
      </div>
    );
  }

  // If any return null (forx example info or name null)
  return null;
}

export default InfoDL;
