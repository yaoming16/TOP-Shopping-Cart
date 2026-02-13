export async function fetchData(url) {
  try {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export function findItemById(items, id) {
  return items.find(item => item.id === id) || null;
}
