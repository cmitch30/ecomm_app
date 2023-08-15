import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";



export default function ProductForm({_id, title: existingTitle, description: existingDescription, price: existingPrice}) {
    const [title, setTitle] = useState(existingTitle || '');
    const [description, setDescription] = useState(existingDescription || '');
    const [price, setPrice] = useState(existingPrice || '');
    const [goBack, setGoBack] = useState(false);
    const router = useRouter();

    async function handleSubmit(e) {
      e.preventDefault();
      const data = {
        title,
        description,
        price,
      };
      if (_id) {
      await axios.put('/api/products/', {...data, _id})
        } else {
          await axios.post("/api/products", data);
          setGoBack(true);

      }
    }
    if (goBack) {
      router.push("/products");
    }
    return (
        <form onSubmit={handleSubmit}>
          <h1>New Product</h1>
          <label>Product Name</label>
          <input
            type="text"
            placeholder="Product Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Product Description</label>
          <textarea
            placeholder="Product Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label>Product Price</label>
          <input
            type="number"
            placeholder="Product Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {/* <label>Product Image</label>
            <input type="file" placeholder="Product Image" value={image} onChange={e => setImage(e.target.value)}/> */}
          <button type="submit" className="btn-primary">
            Save
          </button>
        </form>
    );
}