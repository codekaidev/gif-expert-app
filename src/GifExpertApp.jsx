import { useState } from 'react';
import { AddCategory, GifGrid } from './components/';

export const GifExpertApp = () => {
  const [categories, setcategories] = useState(['DBZ', 'One Punch']);

  const onAddCategory = (input) => {
    if (categories.includes(input)) return;
    setcategories([...categories, input]);
  };

  return (
    <>
      <h1>Gif expert la merca</h1>
      <AddCategory onNewCategory={(newCategoy) => onAddCategory(newCategoy)} />
        {categories.map((category) => (
          <GifGrid key={category} category={category}/>
        ))}
    </>
  );
};
