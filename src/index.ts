function getLocalStorageItem(name: string): string | object {
  const item: any = localStorage.getItem(name);
  const data = JSON.parse(item) ? JSON.parse(item) : item;
  return item ? data : "No data";
}

function setLocalStorageItem(name: string, value: string | object): void {
  const data: string =
    typeof value === "object" ? JSON.stringify(value) : value;
  localStorage.setItem(name, data);
}

function removeLocalStorage(name: string): void {
  localStorage.removeItem(name);
}

export { getLocalStorageItem, setLocalStorageItem, removeLocalStorage };
