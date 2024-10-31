function useLocalStorage(key) {

  const setData = (value) => {
    const existingData = JSON.parse(window.localStorage.getItem(key)) || [];
    existingData.push(value);
    window.localStorage.setItem(key, JSON.stringify(existingData));
  };

  const getData = () => {
    return JSON.parse(window.localStorage.getItem(key)); 
  };

  const removeData = (value) => {
    let existingData = JSON.parse(window.localStorage.getItem(key)) || [];
    existingData=existingData.filter((item)=>item.title!==value.title)
    window.localStorage.setItem(key, JSON.stringify(existingData));
  };

  return { setData, getData, removeData };
}

export default useLocalStorage;