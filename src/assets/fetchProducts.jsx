const fetchProducts = async () => {
    const response = await fetch('http://127.0.0.1:5000/api/products');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  };
  
  export default fetchProducts;